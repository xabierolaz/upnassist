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
- **TRADUCCIÓN DE CÓDIGO (NUEVO):
    - **SÍ traducir:** Los strings literales dentro del código que son mensajes para el usuario (`input("What is your name?")` -> `input("¿Cómo te llamas?")`, `print("Hi")` -> `print("Hola")`).
    - **NO traducir:** Palabras clave de Python (`print`, `input`, `def`, `if`), nombres de variables (`name`, `count`), ni nombres de funciones.
    - **Objetivo:** Que el código de ejemplo sea comprensible en el idioma de destino sin romper la sintaxis.

### 5. Protocolo de Seguridad Técnica (Anti-Errores)
**Lección aprendida:** Escribir JSON puro con saltos de línea (`\n`) es propenso a errores humanos. Escribir scripts de JS complejos con strings anidados causa errores de sintaxis (`SyntaxError`).

**Método Obligatorio: Generación Programática por Bloques**
Para crear o corregir archivos `.json` con contenido complejo (Markdown multilinea):

1.  **Crea un script generador (`gen_section.cjs`):**
    *   No escribas el objeto entero de una vez.
    *   Declara un array `const blocks = [];`.
    *   Añade bloque a bloque usando `blocks.push({...})`.
    *   Usa **Template Literals** (`` ` ``) para el contenido Markdown/Python. 
    *   **IMPORTANTE:** Si el contenido incluye backticks (ej: bloques de código markdown), ESCÁPALOS con barra invertida (`` \` ``) dentro del template literal de JS.
    *   Usa `JSON.stringify(data, null, 2)` al final para generar el archivo.

2.  **Ejemplo de Script Generador Seguro:**
    ```javascript
    const fs = require('fs');
    const blocks = [];

    // Bloque 1: Markdown complejo
    blocks.push({
      type: "markdown",
      content: {
        ENG: `Texto con código: 
print("Hi")
`,
        CAS: `Texto traducido: 
print("Hola")
`
      }
    });

    const section = { id: "...", title: {...}, blocks: blocks };
    fs.writeFileSync('ruta/archivo.json', JSON.stringify(section, null, 2));
    ```

3.  **Ejecución:** Corre `node gen_section.cjs` y luego borra el script.
4.  **Validación Final:** Verifica siempre con `node -e "JSON.parse(require('fs').readFileSync('...'))"` tras la generación.

---
**Ejemplo de Comando:**
"Audita la Sección 1-3 usando el método de Generación Programática por Bloques definido en el protocolo."