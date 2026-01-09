// API Service para el guardado real de preguntas en servidor
// Utiliza Firebase Realtime Database o tu backend preferido

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://upnassist-api.vercel.app/api';
const FIREBASE_URL = 'https://upnassist-default-rtdb.europe-west1.firebasedatabase.app';

export interface QuizData {
  topic: string;
  questions: any[];
  updatedAt: string;
  updatedBy?: string;
}

class QuizAPIService {
  // Guardar preguntas en Firebase Realtime Database
  async saveToFirebase(topic: string, questions: any[]): Promise<boolean> {
    try {
      const sanitizedTopic = topic.replace(/[.#$/[\]]/g, '_'); // Firebase no permite ciertos caracteres
      const response = await fetch(`${FIREBASE_URL}/quiz/${sanitizedTopic}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questions,
          updatedAt: new Date().toISOString(),
          updatedBy: localStorage.getItem('upn-user-email') || 'profesor@upna.es'
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar en Firebase');
      }

      console.log('✅ Preguntas guardadas en Firebase exitosamente');
      return true;
    } catch (error) {
      console.error('❌ Error guardando en Firebase:', error);
      // Fallback a API personalizada
      return this.saveToCustomAPI(topic, questions);
    }
  }

  // Guardar en API personalizada (Vercel Edge Functions)
  async saveToCustomAPI(topic: string, questions: any[]): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/quiz/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('upn-auth-token') || 'demo-token'}`
        },
        body: JSON.stringify({
          topic,
          questions,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar en API');
      }

      const data = await response.json();
      console.log('✅ Preguntas guardadas en API:', data);
      return true;
    } catch (error) {
      console.error('❌ Error con API personalizada:', error);
      // Último fallback: Netlify Functions
      return this.saveToNetlify(topic, questions);
    }
  }

  // Guardar usando Netlify Functions
  async saveToNetlify(topic: string, questions: any[]): Promise<boolean> {
    try {
      const response = await fetch('/.netlify/functions/save-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          questions,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar en Netlify');
      }

      console.log('✅ Preguntas guardadas en Netlify Functions');
      return true;
    } catch (error) {
      console.error('❌ Error con Netlify Functions:', error);
      // Si todo falla, usar IndexedDB como backup local
      return this.saveToIndexedDB(topic, questions);
    }
  }
  // Guardar en IndexedDB como backup local robusto
  async saveToIndexedDB(topic: string, questions: any[]): Promise<boolean> {
    return new Promise((resolve) => {
      const request = indexedDB.open('UpnAssistDB', 1);
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('quiz')) {
          db.createObjectStore('quiz', { keyPath: 'topic' });
        }
      };

      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction(['quiz'], 'readwrite');
        const store = transaction.objectStore('quiz');
        
        store.put({
          topic,
          questions,
          updatedAt: new Date().toISOString()
        });

        transaction.oncomplete = () => {
          console.log('✅ Preguntas guardadas en IndexedDB');
          db.close();
          resolve(true);
        };
      };

      request.onerror = () => {
        console.error('❌ Error con IndexedDB');
        resolve(false);
      };
    });
  }

  // Cargar preguntas desde Firebase
  async loadFromFirebase(topic: string): Promise<any[]> {
    try {
      const sanitizedTopic = topic.replace(/[.#$/[\]]/g, '_');
      const response = await fetch(`${FIREBASE_URL}/quiz/${sanitizedTopic}.json`);
      
      if (!response.ok) {
        throw new Error('No se encontraron preguntas');
      }

      const data = await response.json();
      if (data && data.questions) {
        console.log('✅ Preguntas cargadas desde Firebase');
        return data.questions;
      }
      
      return [];
    } catch (error) {
      console.error('❌ Error cargando desde Firebase:', error);
      // Intentar cargar desde otras fuentes
      return this.loadFromCustomAPI(topic);
    }
  }

  // Cargar desde API personalizada
  async loadFromCustomAPI(topic: string): Promise<any[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/quiz/load?topic=${encodeURIComponent(topic)}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('upn-auth-token') || 'demo-token'}`
        }
      });

      if (!response.ok) {
        throw new Error('Error al cargar desde API');
      }

      const data = await response.json();
      return data.questions || [];
    } catch (error) {
      console.error('❌ Error con API personalizada:', error);
      return this.loadFromIndexedDB(topic);
    }
  }

  // Cargar desde IndexedDB
  async loadFromIndexedDB(topic: string): Promise<any[]> {
    return new Promise((resolve) => {
      const request = indexedDB.open('UpnAssistDB', 1);
      
      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains('quiz')) {
          resolve([]);
          return;
        }

        const transaction = db.transaction(['quiz'], 'readonly');
        const store = transaction.objectStore('quiz');
        const getRequest = store.get(topic);

        getRequest.onsuccess = () => {
          const result = getRequest.result;
          db.close();
          resolve(result?.questions || []);
        };

        getRequest.onerror = () => {
          db.close();
          resolve([]);
        };
      };

      request.onerror = () => {
        resolve([]);
      };
    });
  }

  // Método principal de guardado (intenta todas las opciones)
  async save(topic: string, questions: any[]): Promise<boolean> {
    // Intentar guardar en múltiples lugares para redundancia
    const results = await Promise.allSettled([
      this.saveToFirebase(topic, questions),
      this.saveToIndexedDB(topic, questions)
    ]);

    // Si al menos uno tuvo éxito, considerarlo exitoso
    return results.some(result => result.status === 'fulfilled' && result.value === true);
  }

  // Método principal de carga
  async load(topic: string): Promise<any[]> {
    // Intentar cargar desde Firebase primero (más actualizado)
    const questions = await this.loadFromFirebase(topic);
    
    // Si no hay preguntas en Firebase, intentar IndexedDB
    if (questions.length === 0) {
      return this.loadFromIndexedDB(topic);
    }
    
    return questions;
  }

  // Cargar todas las preguntas de todos los temas
  async loadAll(): Promise<Map<string, any[]>> {
    const allQuestions = new Map<string, any[]>();
    
    try {
      const response = await fetch(`${FIREBASE_URL}/quiz.json`);
      
      if (response.ok) {
        const data = await response.json();
        
        if (data) {
          Object.keys(data).forEach(topic => {
            if (data[topic] && data[topic].questions) {
              // Restaurar el nombre original del tema
              const originalTopic = topic.replace(/_/g, '.');
              allQuestions.set(originalTopic, data[topic].questions);
            }
          });
        }
      }
    } catch (error) {
      console.error('Error cargando todas las preguntas:', error);
    }
    
    return allQuestions;
  }
}

export default new QuizAPIService();