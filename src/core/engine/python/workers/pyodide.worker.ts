/* eslint-disable no-restricted-globals */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Esperar a recibir el SharedArrayBuffer del hilo principal
let sharedBuffer = null;
let sharedArray = null;
let pyodide = null;

async function loadPyodideAndPackages() {
  // Use dynamic import to avoid Vite bundling issues with remote URLs
  const { loadPyodide } = await import("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.mjs" /* @vite-ignore */);
  pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  
  // Definir la función de input personalizada en Python
  // Esta función llama a JS para esperar input
  pyodide.globals.set("js_input_request", (promptText) => {
    // 1. Avisar al Main Thread que queremos input
    self.postMessage({ type: "INPUT_REQUEST", prompt: promptText });
    
    // 2. Esperar (Bloqueante) usando Atomics
    // Index 0: Estado (0 = esperando, 1 = listo)
    // Esperamos mientras sea 0
    Atomics.wait(sharedArray, 0, 0);
    
    // 3. Al despertar, leer el input del buffer
    // Asumimos que el Main Thread escribió el texto en bytes a partir del indice 4
    // (Los primeros 4 bytes son el header de control)
    
    // Leer longitud (guardada en index 1, 2, 3? No, simplifiquemos: string null terminated o longitud fija)
    // Mejor: El main thread escribe longitud en index 1.
    const length = sharedArray[1];
    
    // Decodificar bytes a string
    const textBytes = new Uint8Array(sharedBuffer).slice(8, 8 + length); // Offset 8 (4 bytes int32 * 2) por seguridad de alineación
    const decoder = new TextDecoder();
    const text = decoder.decode(textBytes);
    
    // Resetear el flag para la próxima
    Atomics.store(sharedArray, 0, 0);
    
    return text;
  });

  // Sobrescribir input() en Python para usar nuestro hook
  pyodide.runPython(`
import builtins
def input(prompt=""): 
    return js_input_request(prompt)
builtins.input = input
  `);
}

self.onmessage = async (event) => {
  const { type, code, buffer } = event.data;

  if (type === "INIT") {
    sharedBuffer = buffer;
    sharedArray = new Int32Array(sharedBuffer);
    await loadPyodideAndPackages();
    self.postMessage({ type: "READY" });
  } else if (type === "RUN") {
    if (!pyodide) {
      self.postMessage({ type: "ERROR", error: "Pyodide not loaded" });
      return;
    }

    try {
      // Redirigir stdout
      pyodide.setStdout({
        batched: (msg) => {
          self.postMessage({ type: "STDOUT", output: msg + "\n" });
        }
      });

      // Ejecutar
      await pyodide.runPythonAsync(code);
      self.postMessage({ type: "DONE" });
      
    } catch (error) {
      // Filtrar el traceback para eliminar ruido interno de Pyodide
      let formattedError = error.toString();
      
      try {
        const lines = formattedError.split('\n');
        // Buscar donde empieza el código del usuario
        const startIndex = lines.findIndex(line => line.includes('File "<exec>"') || line.includes('File "<console>"'));
        
        if (startIndex !== -1) {
            // Mantener solo desde la línea del usuario hacia abajo
            formattedError = lines.slice(startIndex).join('\n');
        } else {
            // Fallback: Si no hay referencia a <exec>, intentar limpiar rutas internas conocidas
            // Esto sucede en errores raros de sistema o importación
            formattedError = lines.filter(l => 
                !l.includes("/lib/python") && 
                !l.includes("_pyodide") &&
                !l.includes("CodeRunner") &&
                !l.trim().startsWith("await") && 
                !l.trim().startsWith("^")
            ).join('\n');
        }
        
        // Limpiar prefijo común
        formattedError = formattedError.replace("PythonError: ", "").trim();
        
      } catch (_e) {
        // Si falla el formateo, enviar original
      }

      self.postMessage({ type: "ERROR", error: formattedError });
    }
  }
};
