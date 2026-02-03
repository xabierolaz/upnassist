# Protocolo de Refactorización: Desacoplamiento de Idiomas (I18N)

Este documento detalla el plan para eliminar las cadenas de texto hardcodeadas (mensajes en ES/EU/EN) de la lógica del motor de Python y análisis estático.

**Objetivo:** El motor debe retornar **Códigos de Error Agósticos** (ej: `ERR_SNAKE_CASE`) y el Frontend debe encargarse de la traducción.

## Principios
1.  **Agnosticismo:** `src/core/engine` NUNCA debe importar `languageStore` ni contener strings en español/euskera.
2.  **Protocolo:** La comunicación entre Motor y UI se realiza mediante códigos constantes (Enums/Consts).
3.  **Presentación:** `src/core/ui` es el único responsable de transformar un Código en Texto legible.

---

## Plan de Ejecución

### Fase 1: Análisis y Definición de Contratos
- [x] **1.1. Inventario de Cadenas:**
    - **`CodeAnalyzer.tsx`**: Contiene 20+ reglas de análisis estático (frontend) con mensajes y sugerencias hardcodeadas en Inglés.
    - **`TestRunner.ts`**: Inyecta código Python (`driverCode`) que contiene lógica de traducción `translate_assertion` con strings en CAS/EUS y fallbacks de `syntax_error`.
    - **`ErrorTranslator.ts`**: Mapea RegExp de errores de Python a objetos de traducción `{ CAS, EUS, ENG }` hardcodeados en el archivo.
    - **`AnalysisEngine.ts`**: Contiene el string gigante `ANALYSIS_ENGINE_PY` (Python) con un diccionario `ADVICE_DB` y lógica `ExpertLinter` que retornan objetos con claves `msg_es` y `msg_eu`.
- [x] **1.2. Definición de Códigos (ErrorCodes):** Crear un archivo `src/core/engine/types/ErrorCodes.ts` que centralice todos los posibles errores del sistema (Estáticos y de Runtime).
- [x] **1.3. Actualización del Store de Idiomas:** Crear la estructura en `languageStore.ts` (o archivos de idioma) para mapear estos nuevos códigos a sus traducciones en los 3 idiomas.

### Fase 2: Refactorización de Análisis Estático (`CodeAnalyzer`)
- [x] **2.1. Desacoplar Lógica:** Modificar `CodeAnalyzer.tsx` (o extraer su lógica a `AnalysisEngine.ts`) para que no devuelva mensajes de texto, sino objetos `{ code: 'STYLE_SNAKE_CASE', params: { varName } }`.
- [x] **2.2. Capa de Traducción:** Crear un helper o componente en UI que reciba ese objeto y genere el texto final usando el store.
- [x] **2.3. Verificar Tests:** Actualizar `CodeAnalyzer.spec.tsx` para validar códigos, no textos.

### Fase 3: Refactorización de Runtime (`TestRunner` & Python)
- [x] **3.1. Wrappers de Python:** Revisar el código Python que se inyecta para correr los tests. Si devuelve JSON con mensajes, cambiarlo para devolver códigos.
- [x] **3.2. `TestRunner.ts`:** Asegurar que procesa la salida de Pyodide y normaliza los errores a nuestro sistema de códigos sin inyectar texto humano.
- [x] **3.3. `ErrorTranslator.ts`:** Este archivo actualmente hace regex sobre trazas de Python. Refactorizar para que devuelva una clave de traducción (ej: `RUNTIME_ZERO_DIVISION`) en lugar del string final.

### Fase 4: Integración en UI
- [x] **4.1. `FeedbackPanel.tsx`:** Actualizar para que consuma la nueva estructura de datos (Códigos) y use las funciones de localización para renderizar.
- [x] **4.2. `ResultsDisplay.tsx`:** Asegurar que los resultados de los tests unitarios (Pasa/Falla) usan el nuevo sistema. (Eliminado por ser código muerto).

### Fase 5: Limpieza y Verificación
- [x] **5.1. Barrido Final:** Buscar strings residuales en `/src/core/engine`. (Verificado limpio).
- [x] **5.2. E2E de Idiomas:** Verificar manualmente (o con tests) que cambiar el idioma cambia instantáneamente el feedback de un error ya mostrado (esto confirma que el estado guarda el código, no el texto). (Test `LanguageSwitching.spec.tsx` pasa exitosamente).

---

## Registro de Cambios
*Iniciado: 03/02/2026*
*Completado: 03/02/2026 - Refactorización I18N exitosa.*
