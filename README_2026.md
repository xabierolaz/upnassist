# UpnAssist (Pyxom-vNext)

<div align="center">
  <img src="public/logo.png" alt="UpnAssist Logo" width="200" />
</div>

## Descripción

UpnAssist es una plataforma educativa para el aprendizaje de Python en la UPNA (Universidad Pública de Navarra). Esta versión ("Pyxom-vNext") es una aplicación estática (SPA) construida con React y Vite que permite ejecutar código Python en el navegador usando Pyodide.

## 🏗 Arquitectura de Datos (Doble Fuente)

El contenido del curso **NO** se escribe manualmente. Se genera fusionando dos repositorios oficiales de MOOC.fi que están clonados localmente en `external_resources/`.

### 1. La "Fuente de Verdad" (Texto y Estructura)
*   **Ruta:** `external_resources/programming-25-repo/data/part-X/`
*   **Contenido:** Archivos Markdown (`.md`) que definen el orden de las lecciones, el texto explicativo y dónde van los ejercicios.
*   **Uso:** Determina la secuencia narrativa.
*   **Referencia para Auditoría:** Si el texto o el orden en la app no coincide con estos archivos, la app está mal.

### 2. La "Fuente de Código" (Ejercicios y Tests)
*   **Ruta:** `external_resources/Python_Programming_MOOC_2026_I/partX/`
*   **Contenido:** Proyectos Python reales con carpetas `src/` (código plantilla) y `test/` (pruebas unitarias).
*   **Uso:** Provee el `initialCode` y `testCode` para los ejercicios interactivos.
*   **Referencia para Auditoría:** Si el código inicial o la validación fallan, verificar estos archivos originales.

### Proceso de Fusión
Los archivos JSON finales en `src/data/partX/sectionY.json` son el resultado de "tejer" estas dos fuentes:
1. Se lee el Markdown del Repo 1.
2. Se extraen bloques de texto.
3. Al encontrar un tag `<in-browser-programming-exercise>`, se busca el código correspondiente en el Repo 2 y se inyecta.

## Estructura del Proyecto

```
D:\Upnassist2026\Pyxom-vNext\
├── external_resources/      # Fuentes originales (NO EDITAR)
│   ├── programming-25-repo  # Fuente de Texto
│   └── Python_MOOC_...      # Fuente de Código
├── src/
│   ├── data/                # JSONs generados y lógica de carga
│   ├── components/          # Componentes React
│   └── pages/               # Páginas de la aplicación
├── scripts/                 # Herramientas de mantenimiento
└── _archive/                # Scripts de migración antiguos
```

## Comandos Disponibles

### Desarrollo
```bash
npm run dev          # Inicia servidor local (Vite)
npm run build        # Compila para producción
npm run preview      # Vista previa de la build
npm run lint         # Analiza código (ESLint)
```

### Mantenimiento
*   **Limpieza:** Los scripts obsoletos se han movido a `_archive/`.
*   **Regeneración:** Usar scripts en `scripts/` que sigan la lógica de doble fuente (ej: `rebuild_part1_section1_properly.cjs`).

## Requisitos
- Node.js 18+
- Navegador moderno con soporte para WebAssembly (para Pyodide).