const fs = require('fs');
const path = require('path');

const targetFile = 'D:\\Upnassist2026\\Pyxom-vNext\\curriculum-src\\data-structures\\02_Matrices_Dispersas\\Thursday_Practice\\lab_dispersas.tex';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Cambiar el bloque inyectado para que use lstlisting estándar que sí protege los guiones bajos
    // y evitar el uso de attachedlisting que está dando problemas de interpretación matemática
    const brokenBlock = /\\begin{attachedlisting}\[memory\]([\s\S]*?)\\\end{attachedlisting}/g;
    
    const fixedBlock = `\\begin{lstlisting}
def tamano_memoria_lista(lst: list[list]):
    """
    Calcula el tamano en memoria de una lista con listas anidadas.

    Parametros
    ----------
    lst : list[list]
        Una lista con listas anidadas, es decir, una matriz.

    Devuelve
    -------
    size : int
        El tamano en bytes.

    """
    size = sys.getsizeof(lst)

    for element in lst:
        if isinstance(element, list):
            size += tamano_memoria_lista(element)
        else:
            size += sys.getsizeof(element)

    return size
\\end{lstlisting}`;

    content = content.replace(brokenBlock, fixedBlock);
    
    // También arreglar el preámbulo si hay problemas con caracteres especiales en el nombre de la función
    // (quitamos acentos en los nombres de funciones para máxima compatibilidad latex)
    content = content.replace(/tamano_memoria_lista/g, 'tamano_memoria_lista');

    fs.writeFileSync(targetFile, content, 'utf8');
    console.log("✅ Bloque de código corregido a lstlisting.");

} catch (e) {
    console.error("Error corrigiendo:", e);
}
