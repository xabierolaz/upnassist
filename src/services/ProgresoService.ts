import type { ProgresoTema } from '../components/asignaturas/types';

class ProgresoService {
  private readonly STORAGE_KEY = 'upn-progreso-asignaturas';

  getProgreso(asignaturaId: string): ProgresoTema[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return [];
    
    const allProgreso = JSON.parse(data);
    return allProgreso[asignaturaId] || [];
  }

  actualizarProgresoTema(asignaturaId: string, temaId: string, update: Partial<ProgresoTema>) {
    const data = localStorage.getItem(this.STORAGE_KEY);
    const allProgreso = data ? JSON.parse(data) : {};
    
    if (!allProgreso[asignaturaId]) {
      allProgreso[asignaturaId] = [];
    }
    
    const progresoAsignatura = allProgreso[asignaturaId];
    const index = progresoAsignatura.findIndex((p: ProgresoTema) => p.temaId === temaId);
    
    if (index >= 0) {
      progresoAsignatura[index] = {
        ...progresoAsignatura[index],
        ...update,
        fechaUltimoAcceso: new Date()
      };
    } else {
      progresoAsignatura.push({
        temaId,
        teoriaCompletada: false,
        ejerciciosCompletados: [],
        ...update,
        fechaUltimoAcceso: new Date()
      });
    }
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allProgreso));
  }

  marcarTeoriaCompletada(asignaturaId: string, temaId: string) {
    this.actualizarProgresoTema(asignaturaId, temaId, { teoriaCompletada: true });
  }

  marcarEjercicioCompletado(asignaturaId: string, temaId: string, ejercicioId: string) {
    const progreso = this.getProgreso(asignaturaId);
    const progresoTema = progreso.find(p => p.temaId === temaId);
    
    const ejerciciosCompletados = progresoTema?.ejerciciosCompletados || [];
    if (!ejerciciosCompletados.includes(ejercicioId)) {
      ejerciciosCompletados.push(ejercicioId);
    }
    
    this.actualizarProgresoTema(asignaturaId, temaId, { ejerciciosCompletados });
  }

  getProgresoGeneral(_asignaturaId: string): {
    temasCompletados: number;
    totalTemas: number;
    ejerciciosCompletados: number;
    porcentaje: number;
  } {
    // Este método calculará el progreso general
    // Por ahora retornamos valores por defecto
    return {
      temasCompletados: 0,
      totalTemas: 0,
      ejerciciosCompletados: 0,
      porcentaje: 0
    };
  }
}

export default new ProgresoService();
