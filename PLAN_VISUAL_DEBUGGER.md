# Plan de Implementación: Visual Debugger (Nativo)

Este documento detalla la hoja de ruta para la implementación del Debugger Visual integrado en Pyxom-vNext, utilizando el backend `TraceEngine` ya construido.

## 1. Gestión de Estado (Store)
**Objetivo**: Centralizar el estado de la sesión de depuración.
- **Archivo**: `src/core/store/debuggerStore.ts`
- **Estado**:
  - `frames`: Array de pasos de ejecución (obtenidos de Python).
  - `currentStep`: Índice actual (0 a N).
  - `isPlaying`: Si está en reproducción automática.
  - `speed`: Velocidad de reproducción (ms).
  - `activeLine`: Línea resaltada en el editor.
  - `variables`: Snapshot de variables locales del paso actual.
- **Acciones**: `startDebug(code)`, `next()`, `prev()`, `stop()`, `togglePlay()`.

## 2. Componentes UI
**Objetivo**: Visualizar el estado y controlar el flujo.

### A. Variable Explorer
- **Archivo**: `src/components/debugger/VariableExplorer.tsx`
- **Función**: Renderizar la lista de variables (`locals`).
- **Lógica**: Manejar los tipos serializados por Python (`['int', 5]`, `['ref', '...']`) y mostrarlos de forma limpia (similar a las tarjetas de memoria de VS Code o Python Tutor).

### B. Debugger Controls
- **Archivo**: `src/components/debugger/DebuggerControls.tsx`
- **Función**: Botonera (Play, Pause, Step Over, Step Back, Stop).

### C. Debugger Panel (Contenedor)
- **Archivo**: `src/components/debugger/DebuggerPanel.tsx`
- **Función**: Orquestar los controles y el explorador de variables. Se integrará en la barra lateral o sobre el terminal.

## 3. Integración
**Objetivo**: Conectar el Debugger con la Página del Curso.
- **Modificación**: `MoocCoursePage.tsx`
- **Acción**: Añadir botón "Debug" junto a "Run". Al hacer clic, invoca `debuggerStore.startDebug()` y cambia la vista del Terminal al DebuggerPanel.

## 4. Highlighting (Editor)
- **Objetivo**: Resaltar la línea actual de ejecución en el editor de código.
- **Detalle**: El `debuggerStore` debe exponer la línea actual para que el componente `CodeEditor` (Monaco/CodeMirror) pueda pintar el decorador de línea.

---
**Estado Actual**: Backend (TraceEngine + Worker) COMPLETADO.
**Siguiente Paso**: Crear `debuggerStore.ts`.
