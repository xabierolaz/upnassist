// CodeComparisonModal.tsx - Modal para mostrar comparación lado a lado como JPlag
import React, { useState, useEffect } from 'react';

interface CodeComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: {
    student1: string;
    student2: string;
    similarity: number;
    details: Array<{
      file1: string;
      file2: string;
      similarity: number;
      code1?: string;
      code2?: string;
    }>;
    matchedSegments?: Array<{
      startToken1: number;
      endToken1: number;
      startToken2: number;
      endToken2: number;
      similarity: number;
      tokenCount: number;
    }>;
  };
  files: File[];
}

const CodeComparisonModal: React.FC<CodeComparisonModalProps> = ({
  isOpen,
  onClose,
  match,
  files
}) => {
  const [file1Content, setFile1Content] = useState<string>('');
  const [file2Content, setFile2Content] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && match) {
      loadFileContents();
    }
  }, [isOpen, match]);

  const loadFileContents = async () => {
    setLoading(true);
    try {
      // Buscar archivos correspondientes a los estudiantes
      const student1Files = files.filter(f => 
        f.webkitRelativePath.includes(match.student1) || f.name.includes(match.student1)
      );
      const student2Files = files.filter(f => 
        f.webkitRelativePath.includes(match.student2) || f.name.includes(match.student2)
      );

      // Tomar el primer archivo de cada estudiante
      if (student1Files.length > 0 && student2Files.length > 0) {
        const content1 = await student1Files[0].text();
        const content2 = await student2Files[0].text();
        setFile1Content(content1);
        setFile2Content(content2);
      }
    } catch (error) {
      console.error('Error loading file contents:', error);
      setFile1Content('Error cargando archivo');
      setFile2Content('Error cargando archivo');
    }
    setLoading(false);
  };

  const highlightMatches = (code: string): React.ReactNode[] => {
    const lines = code.split('\n');
    const highlightedLines: React.ReactNode[] = [];

    // Detectar líneas sospechosas basado en patrones comunes
    const suspiciousPatterns = [
      /import\s+.*[^;]/,
      /class\s+\w+/,
      /public\s+.*\(/,
      /private\s+.*\(/,
      /for\s*\(/,
      /if\s*\(/,
      /while\s*\(/,
      /\w+\s*=\s*new\s+/,
      /System\.out\.print/,
      /Scanner\s+/,
      /LinkedList/,
      /\.add\w*/,
      /\.next\w*/
    ];

    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const trimmedLine = line.trim();
      
      // Determinar si la línea debe ser resaltada
      const isHighlighted = match.similarity > 50 && trimmedLine.length > 5 &&
        (suspiciousPatterns.some(pattern => pattern.test(trimmedLine)) ||
         (trimmedLine.includes('{') || trimmedLine.includes('}')) && trimmedLine.length < 20);

      // Color de resaltado diferente según similitud
      const highlightClass = match.similarity >= 80 ? 'bg-red-100 border-l-4 border-red-500' :
                            match.similarity >= 60 ? 'bg-orange-100 border-l-4 border-orange-400' :
                            match.similarity >= 40 ? 'bg-yellow-100 border-l-4 border-yellow-400' : 
                            '';

      highlightedLines.push(
        <div
          key={lineNumber}
          className={`flex hover:bg-gray-50 ${isHighlighted ? highlightClass : ''}`}
        >
          <span className={`w-12 text-xs text-gray-500 text-right pr-2 py-0.5 border-r select-none flex-shrink-0 ${
            isHighlighted ? 'bg-gray-100 font-medium' : 'bg-gray-50'
          }`}>
            {lineNumber}
          </span>
          <pre className={`flex-1 px-3 py-0.5 text-sm font-mono overflow-x-auto whitespace-pre-wrap ${
            isHighlighted ? 'font-medium' : ''
          }`}>
            {line}
          </pre>
        </div>
      );
    });

    return highlightedLines;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-7xl max-h-screen overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Comparison: {match.student1} - {match.student2}
                </h2>
                <div className="mt-1 flex items-center space-x-4 text-sm text-gray-600">
                  <span>Average Similarity: <strong className="text-red-600">{match.similarity.toFixed(2)}%</strong></span>
                  <span>Similarity {match.student1}: <strong className="text-red-600">{match.similarity.toFixed(2)}%</strong></span>
                  <span>Similarity {match.student2}: <strong className="text-red-600">{match.similarity.toFixed(2)}%</strong></span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Matches Summary */}
          <div className="px-6 py-3 bg-blue-50 border-b">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Matches:</h3>
            {match.details.map((detail, index) => (
              <div key={index} className="text-sm text-blue-700">
                {detail.file1} - {detail.file2}: <span className="font-bold">{detail.similarity.toFixed(0)}</span>
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-1 overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-gray-500">Cargando archivos...</div>
              </div>
            ) : (
              <div className="grid grid-cols-2 h-full">
                {/* Left Panel - Student 1 (Green Panther style) */}
                <div className="border-r overflow-y-auto">
                  <div className="bg-green-600 px-4 py-2 border-b text-white">
                    <h4 className="text-sm font-semibold">
                      Files of {match.student1}:
                    </h4>
                    <div className="text-xs opacity-90">
                      {file1Content.split('\n').length} total tokens
                    </div>
                    <div className="text-xs opacity-90">
                      Collapse All
                    </div>
                    <div className="mt-1">
                      <div className="text-sm font-medium">{match.student1}/{match.details[0]?.file1 || 'code.java'}</div>
                      <div className="text-xs">{Math.round(match.similarity)}%</div>
                    </div>
                  </div>
                  <div className="text-xs bg-white">
                    {highlightMatches(file1Content)}
                  </div>
                </div>

                {/* Right Panel - Student 2 (Yellow Lion style) */}
                <div className="overflow-y-auto">
                  <div className="bg-yellow-500 px-4 py-2 border-b text-white">
                    <h4 className="text-sm font-semibold">
                      Files of {match.student2}:
                    </h4>
                    <div className="text-xs opacity-90">
                      {file2Content.split('\n').length} total tokens
                    </div>
                    <div className="text-xs opacity-90">
                      Collapse All
                    </div>
                    <div className="mt-1">
                      <div className="text-sm font-medium">{match.student2}/{match.details[0]?.file2 || 'code.java'}</div>
                      <div className="text-xs">{Math.round(match.similarity)}%</div>
                    </div>
                  </div>
                  <div className="text-xs bg-white">
                    {highlightMatches(file2Content)}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-3 border-t">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span>File Sorting: Alphabetical</span>
              <div className="flex space-x-4">
                <span>Match Coverage</span>
                <span>Match Count</span>
                <span>Match Size</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeComparisonModal;