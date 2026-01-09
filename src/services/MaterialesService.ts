/**
 * Servicio para gestionar y servir materiales de las asignaturas
 */

export class MaterialesService {
  /**
   * Convierte una ruta de material local en una URL accesible
   * @param rutaRelativa Ruta relativa del archivo (ej: "Tema 1. Panorámica. Diapos. A.pdf")
   * @param codigoAsignatura Código de la asignatura (ej: "240304")
   * @param tipoMaterial Tipo de material (teoria/practica/ejercicios)
   * @returns URL completa del material o null si no está disponible
   */
  static getMaterialUrl(
    rutaRelativa: string,
    codigoAsignatura: string,
    tipoMaterial: 'teoria' | 'practica' | 'ejercicios' | 'examenes' = 'teoria'
  ): string | null {
    // Mapear códigos de asignatura a nombres de carpeta
    const asignaturaMap: Record<string, string> = {
      '240304': '240304_Ingenieria_Software',
      '240301': '240304_Ingenieria_Software', // Por ahora usar la misma
      '240302': '240302_Informatica',
      '240303': '240303_Estructura_Datos',
      '240504': '240504_Analisis_Aplicaciones_Empresariales'
    };

    const carpetaAsignatura = asignaturaMap[codigoAsignatura];
    if (!carpetaAsignatura) {
      console.warn(`No se encontró carpeta para la asignatura ${codigoAsignatura}`);
      return null;
    }

    // Determinar la subcarpeta según el tipo
    let subcarpeta = '';
    switch (tipoMaterial) {
      case 'teoria':
        subcarpeta = 'Teoria/Apuntes';
        break;
      case 'practica':
        subcarpeta = 'Practicas';
        break;
      case 'ejercicios':
        subcarpeta = 'Teoria/Ejercicios';
        break;
      case 'examenes':
        subcarpeta = 'Teoria/Examenes';
        break;
    }

    // Construir la ruta completa
    const rutaCompleta = `/materiales_asignaturas/${carpetaAsignatura}/${subcarpeta}/${rutaRelativa}`;
    
    // En producción, esto podría apuntar a un CDN o servicio de archivos
    // Por ahora, retornamos la ruta local
    return rutaCompleta;
  }

  /**
   * Obtiene todos los materiales disponibles para una asignatura
   */
  static getMaterialesAsignatura(codigoAsignatura: string): MaterialInfo[] {
    // Este método se puede expandir para leer dinámicamente los archivos disponibles
    const materiales: MaterialInfo[] = [];
    
    // Por ahora retornamos una lista predefinida basada en lo que sabemos que existe
    if (codigoAsignatura === '240304' || codigoAsignatura === '240301') {
      // Ingeniería del Software
      materiales.push(
        // Tema 0
        { tema: 0, tipo: 'teoria', nombre: 'Tema 0. Presentación.pdf', archivo: 'Tema 0. Presentación.pdf' },
        
        // Tema 1
        { tema: 1, tipo: 'teoria', nombre: 'Tema 1. Panorámica.pdf', archivo: 'Tema 1. Panorámica.pdf' },
        { tema: 1, tipo: 'teoria', nombre: 'Tema 1. Panorámica - Diapositivas A', archivo: 'Tema 1. Panorámica. Diapos. A.pdf' },
        { tema: 1, tipo: 'teoria', nombre: 'Tema 1. Panorámica - Diapositivas B', archivo: 'Tema 1. Panorámica. Diapos. B.pdf' },
        
        // Tema 2
        { tema: 2, tipo: 'teoria', nombre: 'Tema 2. Requisitos.pdf', archivo: 'Tema 2. Requisitos.pdf' },
        { tema: 2, tipo: 'teoria', nombre: 'Tema 2. Requisitos - Diapositivas', archivo: 'Tema 2. Requisitos. Diapos.pdf' },
        
        // Tema 3
        { tema: 3, tipo: 'teoria', nombre: 'Tema 3. Análisis.pdf', archivo: 'Tema 3 Análisis.pdf' },
        { tema: 3, tipo: 'teoria', nombre: 'Tema 3. Análisis - Diapositivas', archivo: 'Tema 3. Análisis. Diapos.pdf' },
        
        // Tema 4
        { tema: 4, tipo: 'teoria', nombre: 'Tema 4. Diseño.pdf', archivo: 'Tema 4. Diseño.pdf' },
        { tema: 4, tipo: 'teoria', nombre: 'Tema 4. Diseño - Diapositivas', archivo: 'Tema 4. Diseño. Diapos.pdf' },
        
        // Tema 5
        { tema: 5, tipo: 'teoria', nombre: 'Tema 5. Codificación.pdf', archivo: 'Tema 5 Codificación.pdf' },
        { tema: 5, tipo: 'teoria', nombre: 'Tema 5. Codificación - Diapositivas', archivo: 'Tema 5. Codificación. Diapos.pdf' },
        
        // Tema 6
        { tema: 6, tipo: 'teoria', nombre: 'Tema 6. Pruebas.pdf', archivo: 'Tema 6. Pruebas.pdf' },
        { tema: 6, tipo: 'teoria', nombre: 'Tema 6. Pruebas - Diapositivas', archivo: 'Tema 6. Pruebas. Diapos.pdf' },
        
        // Tema 7
        { tema: 7, tipo: 'teoria', nombre: 'Tema 7. Despliegue.pdf', archivo: 'Tema 7 Despliegue.pdf' },
        { tema: 7, tipo: 'teoria', nombre: 'Tema 7. Despliegues - Diapositivas', archivo: 'Tema 7. Despliegues. Diapos.pdf' },
        
        // Tema 8
        { tema: 8, tipo: 'teoria', nombre: 'Tema 8. Economía.pdf', archivo: 'Tema 8 Economia.pdf' },
        { tema: 8, tipo: 'teoria', nombre: 'Tema 8. Economía - Diapositivas', archivo: 'Tema 8. Economia. Diapos..pdf' },
        
        // Tema 9
        { tema: 9, tipo: 'teoria', nombre: 'Tema 9. Metodologías.pdf', archivo: 'Tema 9 Metodologías.pdf' },
        { tema: 9, tipo: 'teoria', nombre: 'Tema 9. Metodologías - Diapositivas', archivo: 'Tema 9. Metodologias. Diapos..pdf' }
      );
      
      // Prácticas
      materiales.push(
        { tema: 1, tipo: 'practica', nombre: 'Práctica 01. Introducción a Java', archivo: 'Práctica 01. Introducción a Java.pdf' },
        { tema: 2, tipo: 'practica', nombre: 'Práctica 02. Sintaxis Básica', archivo: 'Práctica 02. Sintaxis Básica.pdf' },
        { tema: 3, tipo: 'practica', nombre: 'Práctica 03. Clases y Objetos', archivo: 'Práctica 03. Clases y Objetos.pdf' },
        { tema: 4, tipo: 'practica', nombre: 'Práctica 04. Interfaces y Herencia', archivo: 'Práctica 04. Interfaces y Herencia.pdf' },
        { tema: 5, tipo: 'practica', nombre: 'Práctica 05. Netbeans. El Casino', archivo: 'Práctica 05. Netbeans. El Casino.pdf' },
        { tema: 6, tipo: 'practica', nombre: 'Práctica 06. GreenGarden', archivo: 'Práctica 06. GreenGarden.pdf' },
        { tema: 8, tipo: 'practica', nombre: 'Práctica 08. El hospital', archivo: 'Práctica 08. El hospital.pdf' },
        { tema: 5, tipo: 'practica', nombre: 'Práctica Clean Code', archivo: 'Práctica Clean Code.pdf' }
      );
    }
    
    return materiales;
  }

  /**
   * Verifica si un archivo de material existe
   */
  static async verificarMaterial(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
}

interface MaterialInfo {
  tema: number;
  tipo: 'teoria' | 'practica' | 'ejercicios' | 'examenes';
  nombre: string;
  archivo: string;
}

export default MaterialesService;