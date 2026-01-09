/**
 * Servicio de gestión de usuarios conectados en tiempo real
 * Simula un sistema real de WebSocket/servidor sin mockups falsos
 * Incluye bots del sistema claramente identificados
 */

export interface ConnectedUser {
  id: string;
  email: string;
  displayName: string;
  status: 'online' | 'away' | 'offline';
  lastSeen: Date;
  deviceInfo?: string;
  isBot?: boolean; // Indica si es un bot del sistema
}

export interface UserPresenceUpdate {
  userId: string;
  status: ConnectedUser['status'];
  timestamp: Date;
}

class UserPresenceService {
  private connectedUsers: Map<string, ConnectedUser> = new Map();
  private currentUser: ConnectedUser | null = null;
  private listeners: ((users: ConnectedUser[]) => void)[] = [];
  private presenceInterval: NodeJS.Timeout | null = null;
  /**
   * Inicializar el servicio con el usuario actual
   */  
  initialize() {
    // Primero inicializar los bots del sistema
    this.initializeBots();
    
    const email = localStorage.getItem('upn-chat-active-email');
    const displayName = localStorage.getItem('upn-chat-active-displayname');

    if (email && displayName) {
      this.currentUser = {
        id: email,
        email,
        displayName,
        status: 'online',
        lastSeen: new Date(),
        deviceInfo: this.getDeviceInfo(),
        isBot: false
      };

      // Agregar el usuario actual a la lista
      this.connectedUsers.set(email, this.currentUser);
      
      // Iniciar heartbeat para mantener presencia
      this.startPresenceHeartbeat();
      
      // Notificar a listeners
      this.notifyListeners();
    }
  }
  /**
   * Inicializar bots del sistema que siempre están online
   */
  private initializeBots() {
    // No hay bots del sistema - solo usuarios reales de P2P
    // Esto permite que los usuarios vean únicamente otros usuarios conectados
  }

  /**
   * Obtener información básica del dispositivo
   */
  private getDeviceInfo(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Mobile')) return 'Móvil';
    if (userAgent.includes('Tablet')) return 'Tablet';
    return 'PC';
  }

  /**
   * Iniciar heartbeat para mantener presencia activa
   */
  private startPresenceHeartbeat() {
    // Enviar señal de vida cada 30 segundos
    this.presenceInterval = setInterval(() => {
      if (this.currentUser) {
        this.updateUserPresence(this.currentUser.id, 'online');
      }
    }, 30000);

    // Detectar cuando el usuario se va (cierra pestaña, etc.)
    window.addEventListener('beforeunload', () => {
      if (this.currentUser) {
        this.updateUserPresence(this.currentUser.id, 'offline');
      }
    });

    // Detectar cuando el usuario está inactivo
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (this.currentUser) {
          this.updateUserPresence(this.currentUser.id, 'away');
        }
      }, 5 * 60 * 1000); // 5 minutos de inactividad = ausente
    };

    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      window.addEventListener(event, resetInactivityTimer, true);
    });

    resetInactivityTimer();
  }
  /**
   * Limpiar datos de usuario por privacidad  /**
   * Actualizar presencia de un usuario
   */
  private updateUserPresence(userId: string, status: ConnectedUser['status']) {
    const user = this.connectedUsers.get(userId);
    if (user) {
      // Los bots siempre permanecen online
      if (user.isBot) {
        return; // No cambiar estado de bots
      }
      
      user.status = status;
      user.lastSeen = new Date();
      
      // Si el usuario se desconecta, mantener en lista pero como offline
      if (status === 'offline') {
        // Mantener el usuario en la lista para que siga visible
        setTimeout(() => {
          this.notifyListeners();
        }, 1000); // Solo notificar el cambio de estado
      }
      
      this.notifyListeners();
    }
  }  /**
   * Obtener lista de todos los usuarios registrados (incluye offline)
   */
  getConnectedUsers(): ConnectedUser[] {
    return Array.from(this.connectedUsers.values())
      .sort((a, b) => {
        // Los bots siempre van primero
        if (a.isBot && !b.isBot) return -1;
        if (!a.isBot && b.isBot) return 1;
        
        // Entre usuarios normales: ordenar por estado (online > away > offline) y luego alfabético
        if (!a.isBot && !b.isBot) {
          if (a.status === 'online' && b.status !== 'online') return -1;
          if (b.status === 'online' && a.status !== 'online') return 1;
          if (a.status === 'away' && b.status === 'offline') return -1;
          if (b.status === 'away' && a.status === 'offline') return 1;
        }
        
        // Finalmente, ordenar alfabéticamente
        return a.displayName.localeCompare(b.displayName);
      });
  }

  /**
   * Obtener usuario actual
   */
  getCurrentUser(): ConnectedUser | null {
    return this.currentUser;
  }

  /**
   * Suscribirse a cambios en la lista de usuarios
   */
  subscribe(listener: (users: ConnectedUser[]) => void) {
    this.listeners.push(listener);
    // Enviar estado actual inmediatamente
    listener(this.getConnectedUsers());
    
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Notificar a todos los listeners
   */
  private notifyListeners() {
    const users = this.getConnectedUsers();
    this.listeners.forEach(listener => listener(users));
  }
  /**
   * NOTA: En un entorno real, estos métodos no serían necesarios ya que
   * la conexión/desconexión de usuarios vendría del servidor WebSocket.
   * Por ahora no agregamos usuarios ficticios para mantener un sistema ético.
   */

  /**
   * Limpiar recursos
   */
  cleanup() {
    if (this.presenceInterval) {
      clearInterval(this.presenceInterval);
    }
    
    if (this.currentUser) {
      this.updateUserPresence(this.currentUser.id, 'offline');
    }
  }
  /**
   * Verificar si un usuario puede recibir mensajes
   */
  canSendMessageTo(userId: string): boolean {
    const user = this.connectedUsers.get(userId);
    if (!user) return false;
    
    // Los bots siempre pueden recibir mensajes
    if (user.isBot) return true;
    
    // Solo permitir envío a usuarios online o away (no offline)
    return user.status !== 'offline';
  }
  /**
   * Obtener estadísticas de usuarios
   */
  getStats() {
    const users = Array.from(this.connectedUsers.values());
    const bots = users.filter(u => u.isBot);
    const humans = users.filter(u => !u.isBot);
    
    return {
      total: users.length,
      humans: humans.length,
      bots: bots.length,
      online: users.filter(u => u.status === 'online').length,
      away: users.filter(u => u.status === 'away').length,
      offline: users.filter(u => u.status === 'offline').length
    };
  }
}

// Instancia singleton
export const userPresenceService = new UserPresenceService();

// Inicializar automáticamente cuando se carga el módulo
userPresenceService.initialize();
