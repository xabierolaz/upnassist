# Protocolo de Auditoría y Generación de Contenido (Pyxom-vNext)

**Objetivo:** Garantizar la fidelidad absoluta del curso fusionando las fuentes locales disponibles.

## 🚨 Regla de Oro: NO INVENTAR, NO SCRAPEAR
Todo el contenido ya existe en tu disco duro.
*   **Texto:** `external_resources/programming-25-repo/data/`
*   **Código:** `external_resources/Python_Programming_MOOC_2026_I/`

## Procedimiento Estándar de Generación

Para crear o reparar una sección (`src/data/partX/sectionY.json`), sigue este algoritmo estrictamente:

### 1. Lectura del Markdown (Fuente 1)
Lee el archivo `.md` correspondiente en `external_resources/programming-25-repo`.
*   Este archivo dicta el **ORDEN**.
*   Todo texto fuera de las etiquetas `<in-browser-programming-exercise>` es un bloque `markdown`.
*   Las etiquetas `<in-browser-programming-exercise>` indican dónde va un bloque `exercise`.

### 2. Inyección de Código (Fuente 2)
Cuando encuentres un ejercicio, extrae su atributo `tmcname` (ej: `part01-01_emoticon`).
*   Ve a `external_resources/Python_Programming_MOOC_2026_I/partX/{tmcname}`.
*   **Initial Code:** Lee `src/{archivo}.py`. Si hay varios, busca el principal.
*   **Test Code:** Lee `test/test_{archivo}.py`.

### 3. Generación del JSON
Crea un script `.cjs` temporal que use `fs` para leer ambos archivos y escribir el JSON.
*   **Estructura:**
    ```typescript
    {
      type: 'markdown' | 'exercise',
      content: { ENG, CAS, EUS }, // Para markdown
      initialCode: { ENG, CAS, EUS }, // Para exercise
      testCode: string // Solo string, no localizable
    }
    ```
*   **Traducción:** Si generas traducciones automáticas para CAS/EUS, asegúrate de mantener las palabras clave de Python en inglés.

### 4. Verificación de Intercalado (Interleaving)
El error más común es agrupar todo el texto al principio y los ejercicios al final.
*   **Correcto:** Texto -> Ejercicio -> Texto -> Ejercicio.
*   **Incorrecto:** Texto (Intro + Aritmética) -> Ejercicio (Intro) -> Ejercicio (Aritmética).

## Herramientas
Usa scripts en Node.js (`.cjs`) para realizar esta tarea de forma programática y reproducible. No edites los JSONs gigantes a mano.
