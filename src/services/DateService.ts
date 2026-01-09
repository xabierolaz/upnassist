/**
 * Servicio de Fecha - UpnAssist
 * 
 * Gestiona las fechas de la aplicación de forma centralizada.
 * Utiliza WorldTimeAPI para obtener la fecha real del servidor
 * y evitar problemas con fechas incorrectas del sistema local.
 */

interface WorldTimeAPIResponse {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string | null;
  dst_offset: number;
  dst_until: string | null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export class DateService {
  private static instance: DateService;
  private cachedDate: Date | null = null;
  private cacheTimestamp: number = 0;
  private readonly CACHE_DURATION = 60000; // 1 minuto
  private readonly TIMEZONE = 'Europe/Madrid';
  private readonly API_URL = 'https://worldtimeapi.org/api/timezone/';
  
  private constructor() {}
  
  static getInstance(): DateService {
    if (!DateService.instance) {
      DateService.instance = new DateService();
    }
    return DateService.instance;
  }
  
  /**
   * Obtiene la fecha actual del servidor o del sistema como fallback
   */
  async getCurrentDate(): Promise<Date> {
    // Verificar si tenemos fecha en caché y es reciente
    if (this.cachedDate && (Date.now() - this.cacheTimestamp < this.CACHE_DURATION)) {
      return this.cachedDate;
    }
    
    try {
      // Intentar obtener la fecha del servidor con timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 segundos timeout
      
      const response = await fetch(`${this.API_URL}${this.TIMEZONE}`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const data: WorldTimeAPIResponse = await response.json();
        this.cachedDate = new Date(data.datetime);
        this.cacheTimestamp = Date.now();
        return this.cachedDate;
      }
    } catch (error) {
      // Silenciar los errores de conectividad para evitar spam en consola
      if (!(error instanceof Error) || error.name !== 'AbortError') {
        console.warn('No se pudo obtener la fecha del servidor, usando fecha local:', error);
      }
    }
    
    // Fallback: usar fecha del sistema
    return new Date();
  }
  
  /**
   * Obtiene la fecha actual de forma síncrona (usa caché o sistema)
   */
  getCurrentDateSync(): Date {
    // Si tenemos fecha en caché reciente, usarla
    if (this.cachedDate && (Date.now() - this.cacheTimestamp < this.CACHE_DURATION)) {
      return this.cachedDate;
    }
    
    // De lo contrario, usar fecha del sistema
    // y actualizar caché en background
    this.updateCacheInBackground();
    return new Date();
  }
  
  /**
   * Actualiza la caché en segundo plano
   */
  private async updateCacheInBackground(): Promise<void> {
    try {
      const response = await fetch(`${this.API_URL}${this.TIMEZONE}`);
      if (response.ok) {
        const data: WorldTimeAPIResponse = await response.json();
        this.cachedDate = new Date(data.datetime);
        this.cacheTimestamp = Date.now();
      }
    } catch (error) {
      // Silenciosamente fallar, ya tenemos fecha del sistema
    }
  }
  
  /**
   * Obtiene el año académico actual
   * El año académico va de septiembre a agosto
   */
  getCurrentAcademicYear(): { start: number; end: number } {
    const now = this.getCurrentDateSync();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11
    
    // Si estamos entre enero y agosto, el año académico empezó el año anterior
    if (currentMonth < 8) { // Antes de septiembre
      return {
        start: currentYear - 1,
        end: currentYear
      };
    } else {
      return {
        start: currentYear,
        end: currentYear + 1
      };
    }
  }
  
  /**
   * Formatea una fecha en español
   */
  formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      ...options
    };
    
    return date.toLocaleDateString('es-ES', defaultOptions);
  }
  
  /**
   * Obtiene el día de la semana en español
   */
  getDayName(date: Date): string {
    return date.toLocaleDateString('es-ES', { weekday: 'long' });
  }
  
  /**
   * Obtiene el mes en español
   */
  getMonthName(date: Date): string {
    return date.toLocaleDateString('es-ES', { month: 'long' });
  }
  
  /**
   * Verifica si una fecha está en el período de clases
   */
  isInClassPeriod(date: Date): boolean {
    const academicYear = this.getCurrentAcademicYear();
    
    // Definir períodos de clase (estos podrían venir de configuración)
    const periods = [
      // Semestre de otoño
      {
        start: new Date(academicYear.start, 8, 3), // 3 de septiembre
        end: new Date(academicYear.end, 0, 14) // 14 de enero
      },
      // Semestre de primavera
      {
        start: new Date(academicYear.end, 1, 1), // 1 de febrero
        end: new Date(academicYear.end, 5, 7) // 7 de junio
      }
    ];
    
    return periods.some(period => 
      date >= period.start && date <= period.end
    );
  }
  
  /**
   * Obtiene información sobre el día actual
   */
  async getTodayInfo() {
    const today = await this.getCurrentDate();
    const academicYear = this.getCurrentAcademicYear();
    
    return {
      date: today,
      dayName: this.getDayName(today),
      monthName: this.getMonthName(today),
      year: today.getFullYear(),
      academicYear: `${academicYear.start}-${academicYear.end}`,
      isInClassPeriod: this.isInClassPeriod(today),
      formattedDate: this.formatDate(today)
    };
  }
  
  /**
   * Versión síncrona de getTodayInfo (usa caché o fecha local)
   */
  getTodayInfoSync() {
    const today = this.getCurrentDateSync();
    const academicYear = this.getCurrentAcademicYear();
    
    return {
      date: today,
      dayName: this.getDayName(today),
      monthName: this.getMonthName(today),
      year: today.getFullYear(),
      academicYear: `${academicYear.start}-${academicYear.end}`,
      isInClassPeriod: this.isInClassPeriod(today),
      formattedDate: this.formatDate(today)
    };
  }
}

// Exportar instancia única
export const dateService = DateService.getInstance();
