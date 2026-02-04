const fs = require('fs');
const path = require('path');

// Ruta al archivo .tex en castellano
const targetFile = path.join(__dirname, '../curriculum-src/data-structures/02_Matrices_Dispersas/Thursday_Practice/lab_dispersas.tex');

// El bloque a insertar
const missingSection = `
\subsection*{Calculando el tamaño}

Ahora que has llegado a este punto, puedes intentar calcular la memoria necesaria para almacenar la matriz tanto en formato normal como en formato COO. Puedes usar la siguiente función para calcular la cantidad de memoria necesaria para almacenar la matriz normal o esa matriz en formato COO. Compara los resultados.

\begin{attachedlisting}[memory]
def tamano_memoria_lista(lst: list[list]):
    """
    Calcula el tamaño en memoria de una lista con listas anidadas.

    Parámetros
    ----------
    lst : list[list]
        Una lista con listas anidadas, es decir, una matriz.

    Devuelve
    -------
    size : int
        El tamaño en bytes.

    """
    size = sys.getsizeof(lst)

    for element in lst:
        if isinstance(element, list):
            size += tamano_memoria_lista(element)
        else:
            size += sys.getsizeof(element)

    return size
\end{attachedlisting}
`;

try {
    // Leer archivo con encoding utf8 (asumido por el preámbulo latex)
    let content = fs.readFileSync(targetFile, 'utf8');

    // Buscar punto de inserción: Antes de "Función \lstinline|coo_a_normal"
    // Pero después del ejemplo de normal_a_coo.
    
    // Buscamos la cadena clave
    const anchor = "coo_a_normal";
    
    // Verificamos si existe la sección 'Calculando el tamaño' para no duplicar
    if (content.includes("Calculando el tamaño")) {
        console.log("⚠️ La sección ya existe. No se hará nada.");
        return;
    }
    
    // Buscamos la línea que contiene el anchor (la definición de la función)
    const lines = content.split('\n');
    const insertIndex = lines.findIndex(line => line.includes(anchor) && line.includes('subsection'));
    
    if (insertIndex !== -1) {
        // Insertar ANTES de esa línea
        lines.splice(insertIndex, 0, missingSection);
        
        fs.writeFileSync(targetFile, lines.join('\n'), 'utf8');
        console.log(`✅ Sección insertada correctamente en ${path.relative(process.cwd(), targetFile)}`);
    } else {
        console.error("❌ No se encontró el punto de anclaje (coo_a_normal).");
    }

} catch (e) {
    console.error("Error:", e);
}
