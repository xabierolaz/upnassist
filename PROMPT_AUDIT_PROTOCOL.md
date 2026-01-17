# Protocolo de Auditoría y Migración de Contenido MOOC (Clínico)

**Objetivo:** Garantizar que cada sección del curso sea una réplica **EXACTA 1:1** de la fuente original (mooc.fi), sin omitir ni una sola línea de texto, código, salida de terminal o ejercicio.

## Instrucciones para el Agente (Prompt Maestro)

Al migrar o revisar una sección del curso, DEBES seguir estrictamente este algoritmo:

### 1. Extracción Exhaustiva (Web Scraping)
No resumas. No interpretes. Extrae TODO el contenido crudo en orden secuencial.
- **Narrativa:** Captura cada párrafo de introducción, transición y explicación.
- **Bloques de Código (Inputs):** Captura todos los ejemplos de código (`python`).
- **Salidas de Consola (Outputs):** Captura todos los bloques de "Sample output" o resultados de ejecución.
- **Errores:** Captura los ejemplos de trazas de error (`SyntaxError`, etc.) tal cual aparecen.
- **Ejercicios:** Captura el enunciado completo, código inicial y pistas.

### 2. Estructura de Datos (JSON)
El archivo JSON resultante debe reflejar la secuencia lineal de la página web.
- Usa bloques `markdown` para texto, código de ejemplo y salidas.
- Usa bloques `exercise` **solo** para los ejercicios interactivos donde el alumno escribe código.
- **Formato de Salidas:** Las salidas de consola deben ir en bloques de código con lenguaje `text` para que se rendericen como terminales grises.

### 3. Verificación Cruzada (Checklist)
Antes de dar por finalizada una sección, responde a estas preguntas:
- [ ] ¿Empieza con los "Learning Objectives" (si los hay)?
- [ ] ¿Están todos los párrafos de texto entre los ejemplos de código?
- [ ] ¿Coincide el número de bloques de código de ejemplo con la web?
- [ ] ¿Coincide el número de bloques de "Sample output" con la web?
- [ ] ¿Están todos los ejercicios (incluyendo los pequeños de "Fix the code")?
- [ ] ¿Se han preservado los comentarios `#` dentro de los ejemplos de código?

### 4. Traducción y Enriquecimiento
- Genera traducciones fieles para `CAS` (Castellano) y `EUS` (Euskera) de todo el contenido narrativo y descripciones de ejercicios.
- **No traduzcas** el código Python ni las salidas de consola (a menos que sean cadenas de texto literales traducibles y pedagógicamente relevantes).

### 5. Protocolo de Seguridad Técnica (Anti-Errores)
**Lección aprendida:** La complejidad de escapar caracteres (Python dentro de JSON dentro de JS) causa errores de sintaxis recurrentes.

1.  **Escritura Directa:** Al crear o reescribir archivos `.json`, usa `write_file` con el contenido JSON puro. **NUNCA** generes scripts intermedios (`.js`/`.cjs`) que contengan el JSON como string.
2.  **Modificación Segura:** Si necesitas corregir un archivo existente:
    *   Lee el archivo.
    *   Usa un script con `JSON.parse()`.
    *   Modifica el objeto en memoria.
    *   Escribe con `JSON.stringify(data, null, 2)`.
    *   **NUNCA** uses `replace()` sobre el texto crudo para bloques de código largos, ya que el espaciado o los caracteres invisibles harán que falle.
3.  **Validación:** Tras cualquier escritura, ejecuta inmediatamente: `node -e "JSON.parse(require('fs').readFileSync('ruta/archivo.json'))"` para confirmar que el JSON es válido.

---
**Ejemplo de Comando:**
"Audita la Sección 1-2. Extrae todo el contenido de la URL oficial. Compara línea por línea con el JSON local. Si falta una sola frase o un ejemplo de 'Sample output', añádelo siguiendo el protocolo de seguridad técnica."