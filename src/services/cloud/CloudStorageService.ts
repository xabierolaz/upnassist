// CloudStorageService - Servicio de almacenamiento en la nube para UpnAssist

export interface CloudFile {
  id: string;
  name: string;
  path: string;
  size: number;
  type: string;
  mimeType: string;
  content?: ArrayBuffer | string;
  thumbnail?: string;
  createdAt: Date;
  modifiedAt: Date;
  owner: string;
  shared: boolean;
  sharedWith: string[];
  tags: string[];
  starred: boolean;
  parentId?: string;
}

export interface CloudFolder {
  id: string;
  name: string;
  path: string;
  createdAt: Date;
  modifiedAt: Date;
  owner: string;
  parentId?: string;
  shared: boolean;
  sharedWith: string[];
}

export interface StorageQuota {
  used: number;
  total: number;
  percentage: number;
}

export interface ShareLink {
  id: string;
  fileId: string;
  url: string;
  expiresAt?: Date;
  password?: string;
  accessCount: number;
  maxAccessCount?: number;
}

class CloudStorageService {
  private dbName = 'upnassist-cloud-storage';
  private db: IDBDatabase | null = null;
  private maxStorageSize = 100 * 1024 * 1024; // 100MB por usuario
  
  constructor() {
    this.initDatabase();
  }
  
  private async initDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Store de archivos
        if (!db.objectStoreNames.contains('files')) {
          const filesStore = db.createObjectStore('files', { keyPath: 'id' });
          filesStore.createIndex('path', 'path');
          filesStore.createIndex('owner', 'owner');
          filesStore.createIndex('parentId', 'parentId');
          filesStore.createIndex('starred', 'starred');
        }
        
        // Store de carpetas
        if (!db.objectStoreNames.contains('folders')) {
          const foldersStore = db.createObjectStore('folders', { keyPath: 'id' });
          foldersStore.createIndex('path', 'path');
          foldersStore.createIndex('owner', 'owner');
          foldersStore.createIndex('parentId', 'parentId');
        }
        
        // Store de enlaces compartidos
        if (!db.objectStoreNames.contains('shareLinks')) {
          const shareLinksStore = db.createObjectStore('shareLinks', { keyPath: 'id' });
          shareLinksStore.createIndex('fileId', 'fileId');
          shareLinksStore.createIndex('url', 'url');
        }
      };
    });
  }
  async uploadFile(
    file: File, 
    path: string = '/', 
    parentId?: string
  ): Promise<CloudFile> {
    if (!this.db) await this.initDatabase();
    
    // Verificar cuota
    const quota = await this.getStorageQuota();
    if (quota.used + file.size > quota.total) {
      throw new Error('Cuota de almacenamiento excedida');
    }
    
    // Leer contenido del archivo
    const content = await this.readFileContent(file);
    const thumbnail = await this.generateThumbnail(file);
    
    const cloudFile: CloudFile = {
      id: `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      path: path + file.name,
      size: file.size,
      type: this.getFileType(file),
      mimeType: file.type,
      content,
      thumbnail,
      createdAt: new Date(),
      modifiedAt: new Date(),
      owner: this.getCurrentUser(),
      shared: false,
      sharedWith: [],
      tags: [],
      starred: false,
      parentId
    };
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files'], 'readwrite');
      const store = transaction.objectStore('files');
      const request = store.add(cloudFile);
      
      request.onsuccess = () => resolve(cloudFile);
      request.onerror = () => reject(request.error);
    });
  }
  
  private async readFileContent(file: File): Promise<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        if (file.type.startsWith('text/')) {
          resolve(e.target?.result as string);
        } else {
          resolve(e.target?.result as ArrayBuffer);
        }
      };
      
      reader.onerror = () => reject(reader.error);
      
      if (file.type.startsWith('text/')) {
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    });
  }
  
  private async generateThumbnail(file: File): Promise<string | undefined> {
    if (!file.type.startsWith('image/')) return undefined;
    
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Generar thumbnail de 200x200
          const size = 200;
          canvas.width = size;
          canvas.height = size;
          
          if (ctx) {
            // Mantener aspect ratio
            const scale = Math.min(size / img.width, size / img.height);
            const x = (size - img.width * scale) / 2;
            const y = (size - img.height * scale) / 2;
            
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            resolve(canvas.toDataURL('image/jpeg', 0.7));
          } else {
            resolve(undefined);
          }
        };
        
        img.src = e.target?.result as string;
      };
      
      reader.readAsDataURL(file);
    });
  }
  async createFolder(name: string, path: string = '/', parentId?: string): Promise<CloudFolder> {
    if (!this.db) await this.initDatabase();
    
    const folder: CloudFolder = {
      id: `folder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      path: path + name,
      createdAt: new Date(),
      modifiedAt: new Date(),
      owner: this.getCurrentUser(),
      parentId,
      shared: false,
      sharedWith: []
    };
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['folders'], 'readwrite');
      const store = transaction.objectStore('folders');
      const request = store.add(folder);
      
      request.onsuccess = () => resolve(folder);
      request.onerror = () => reject(request.error);
    });
  }
  
  async listFiles(path: string = '/', includeSubfolders = false): Promise<{
    files: CloudFile[];
    folders: CloudFolder[];
  }> {
    if (!this.db) await this.initDatabase();
    
    const files: CloudFile[] = [];
    const folders: CloudFolder[] = [];
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files', 'folders'], 'readonly');
      
      // Obtener archivos
      const filesStore = transaction.objectStore('files');
      const filesIndex = filesStore.index('path');
      const filesRequest = includeSubfolders 
        ? filesIndex.openCursor(IDBKeyRange.bound(path, path + '\uffff'))
        : filesIndex.openCursor(IDBKeyRange.only(path));
      
      filesRequest.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          const file = cursor.value;
          if (file.owner === this.getCurrentUser() || file.sharedWith.includes(this.getCurrentUser())) {
            files.push(file);
          }
          cursor.continue();
        }
      };
      
      // Obtener carpetas
      const foldersStore = transaction.objectStore('folders');
      const foldersIndex = foldersStore.index('path');
      const foldersRequest = includeSubfolders
        ? foldersIndex.openCursor(IDBKeyRange.bound(path, path + '\uffff'))
        : foldersIndex.openCursor(IDBKeyRange.only(path));
      
      foldersRequest.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          const folder = cursor.value;
          if (folder.owner === this.getCurrentUser() || folder.sharedWith.includes(this.getCurrentUser())) {
            folders.push(folder);
          }
          cursor.continue();
        }
      };
      
      transaction.oncomplete = () => resolve({ files, folders });
      transaction.onerror = () => reject(transaction.error);
    });
  }
  
  async deleteFile(fileId: string): Promise<void> {
    if (!this.db) await this.initDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files'], 'readwrite');
      const store = transaction.objectStore('files');
      const request = store.delete(fileId);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
  
  async shareFile(fileId: string, userEmails: string[]): Promise<void> {
    if (!this.db) await this.initDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files'], 'readwrite');
      const store = transaction.objectStore('files');
      const getRequest = store.get(fileId);
      
      getRequest.onsuccess = () => {
        const file = getRequest.result;
        if (file) {
          file.shared = true;
          file.sharedWith = [...new Set([...file.sharedWith, ...userEmails])];
          
          const updateRequest = store.put(file);
          updateRequest.onsuccess = () => resolve();
          updateRequest.onerror = () => reject(updateRequest.error);
        } else {
          reject(new Error('Archivo no encontrado'));
        }
      };
      
      getRequest.onerror = () => reject(getRequest.error);
    });
  }
  async createShareLink(fileId: string, options?: {
    expiresIn?: number; // horas
    password?: string;
    maxAccess?: number;
  }): Promise<ShareLink> {
    if (!this.db) await this.initDatabase();
    
    const shareLink: ShareLink = {
      id: `share_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fileId,
      url: `${window.location.origin}/share/${btoa(fileId)}`,
      expiresAt: options?.expiresIn 
        ? new Date(Date.now() + options.expiresIn * 60 * 60 * 1000)
        : undefined,
      password: options?.password,
      accessCount: 0,
      maxAccessCount: options?.maxAccess
    };
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['shareLinks'], 'readwrite');
      const store = transaction.objectStore('shareLinks');
      const request = store.add(shareLink);
      
      request.onsuccess = () => resolve(shareLink);
      request.onerror = () => reject(request.error);
    });
  }
  
  async downloadFile(fileId: string): Promise<Blob> {
    if (!this.db) await this.initDatabase();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const request = store.get(fileId);
      
      request.onsuccess = () => {
        const file = request.result;
        if (file && file.content) {
          const blob = new Blob([file.content], { type: file.mimeType });
          resolve(blob);
        } else {
          reject(new Error('Archivo no encontrado'));
        }
      };
      
      request.onerror = () => reject(request.error);
    });
  }
  
  async getStorageQuota(): Promise<StorageQuota> {
    if (!this.db) await this.initDatabase();
    
    let totalSize = 0;
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const index = store.index('owner');
      const request = index.openCursor(IDBKeyRange.only(this.getCurrentUser()));
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          totalSize += cursor.value.size;
          cursor.continue();
        }
      };
      
      transaction.oncomplete = () => {
        resolve({
          used: totalSize,
          total: this.maxStorageSize,
          percentage: (totalSize / this.maxStorageSize) * 100
        });
      };
      
      transaction.onerror = () => reject(transaction.error);
    });
  }
  
  async searchFiles(query: string, filters?: {
    type?: string;
    tags?: string[];
    dateRange?: { start: Date; end: Date };
    starred?: boolean;
  }): Promise<CloudFile[]> {
    if (!this.db) await this.initDatabase();
    
    const results: CloudFile[] = [];
    const lowerQuery = query.toLowerCase();
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const request = store.openCursor();
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          const file = cursor.value;
          
          // Verificar permisos
          if (file.owner !== this.getCurrentUser() && !file.sharedWith.includes(this.getCurrentUser())) {
            cursor.continue();
            return;
          }
          
          // Búsqueda por nombre
          if (!file.name.toLowerCase().includes(lowerQuery)) {
            cursor.continue();
            return;
          }
          
          // Aplicar filtros
          if (filters) {
            if (filters.type && file.type !== filters.type) {
              cursor.continue();
              return;
            }
            
            if (filters.starred !== undefined && file.starred !== filters.starred) {
              cursor.continue();
              return;
            }
            
            if (filters.tags && filters.tags.length > 0) {
              const hasAllTags = filters.tags.every(tag => file.tags.includes(tag));
              if (!hasAllTags) {
                cursor.continue();
                return;
              }
            }
            
            if (filters.dateRange) {
              const fileDate = file.modifiedAt.getTime();
              if (fileDate < filters.dateRange.start.getTime() || 
                  fileDate > filters.dateRange.end.getTime()) {
                cursor.continue();
                return;
              }
            }
          }
          
          results.push(file);
          cursor.continue();
        }
      };
      
      transaction.oncomplete = () => resolve(results);
      transaction.onerror = () => reject(transaction.error);
    });
  }
  
  private getCurrentUser(): string {
    return localStorage.getItem('upn-user-email') || 'anonymous';
  }
  
  private getFileType(file: File): string {
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    
    const typeMap: Record<string, string> = {
      // Documentos
      'pdf': 'document',
      'doc': 'document',
      'docx': 'document',
      'txt': 'document',
      'odt': 'document',
      
      // Hojas de cálculo
      'xls': 'spreadsheet',
      'xlsx': 'spreadsheet',
      'csv': 'spreadsheet',
      'ods': 'spreadsheet',
      
      // Presentaciones
      'ppt': 'presentation',
      'pptx': 'presentation',
      'odp': 'presentation',
      
      // Imágenes
      'jpg': 'image',
      'jpeg': 'image',
      'png': 'image',
      'gif': 'image',
      'webp': 'image',
      'svg': 'image',
      
      // Videos
      'mp4': 'video',
      'avi': 'video',
      'mov': 'video',
      'webm': 'video',
      
      // Audio
      'mp3': 'audio',
      'wav': 'audio',
      'ogg': 'audio',
      'm4a': 'audio',
      
      // Código
      'js': 'code',
      'ts': 'code',
      'jsx': 'code',
      'tsx': 'code',
      'java': 'code',
      'py': 'code',
      'cpp': 'code',
      'c': 'code',
      'h': 'code',
      'cs': 'code',
      'php': 'code',
      'rb': 'code',
      'go': 'code',
      'rs': 'code',
      
      // Archivos comprimidos
      'zip': 'archive',
      'rar': 'archive',
      '7z': 'archive',
      'tar': 'archive',
      'gz': 'archive'
    };
    
    return typeMap[extension] || 'other';
  }
}

// Singleton
export const cloudStorage = new CloudStorageService();
export default cloudStorage;