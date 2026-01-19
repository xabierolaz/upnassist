/* eslint-disable no-restricted-globals */
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
        const filteredLines = [];
        let capturing = false;
        
        for (const line of lines) {
          // Empezar a capturar desde la primera referencia al código del usuario (<exec> o <console>)
          // O si es la línea final del error (el tipo de excepción)
          if (line.includes('File "<exec>"') || line.includes('File "<console>"')) {
            capturing = true;
          }
          
          // Si ya estamos capturando, o si es la línea del error final (ej: SyntaxError: ...)
          // Las líneas de error final no suelen empezar con "  File"
          if (capturing || (!line.trim().startsWith("File \"") && !line.includes("Traceback") && !line.includes("PythonError:"))) {
             // Evitar líneas vacías al inicio de la captura
             if (capturing || line.trim().length > 0) {
                 filteredLines.push(line);
             }
          }
        }
        
        // Si logramos filtrar algo razonable, lo usamos. Si no, fallback al error original pero limpio de 'PythonError:'
        if (filteredLines.length > 0 && capturing) {
            formattedError = filteredLines.join('\n');
        } else {
            // Fallback simple: eliminar líneas con /lib/python
            formattedError = lines.filter(l => !l.includes("/lib/python") && !l.includes("_pyodide")).join('\n');
        }
        
        // Limpiar prefijo común
        formattedError = formattedError.replace("PythonError: ", "").trim();
        
      } catch (e) {
        // Si falla el formateo, enviar original
      }

      self.postMessage({ type: "ERROR", error: formattedError });
    }
  }
};
