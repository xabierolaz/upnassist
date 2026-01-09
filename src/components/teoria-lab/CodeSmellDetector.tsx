import { useState } from 'react';
import { ExclamationTriangleIcon, CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { CodeEditor } from '../pyxom/core/CodeEditor';

interface CodeSmell {
  type: 'long-method' | 'duplicate' | 'complex-conditional' | 'magic-number' | 'poor-naming' | 'god-class';
  line: number;
  severity: 'low' | 'medium' | 'high';
  description: string;
  suggestion: string;
  autofix?: string;
}

const ejemploCodigo = {
  bueno: `public class Calculator {
    private static final double PI = 3.14159;
    private static final double TAX_RATE = 0.21;
    
    public double calculateCircleArea(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        return PI * radius * radius;
    }
    
    public double calculatePriceWithTax(double price) {
        return price * (1 + TAX_RATE);
    }
}`,
  
  malo: `public class x {
    public double m(double a, double b, double c, double d, double e, double f) {
        double r = 0;
        if (a > 0) {
            if (b > 0) {
                if (c > 0) {
                    r = a + b + c;
                    r = r * 1.21; // tax
                    if (d > 100) {
                        r = r - 10;
                        if (e > 50) {
                            r = r - 5;
                            if (f > 25) {
                                r = r - 2.5;
                            }
                        }
                    }
                }
            }
        }
        
        // Duplicate code
        double area1 = 3.14159 * a * a;
        double area2 = 3.14159 * b * b;
        double area3 = 3.14159 * c * c;
        
        return r + area1 + area2 + area3;
    }
    
    // More methods making this a god class...
}`
};

export default function CodeSmellDetector() {
  const [code, setCode] = useState(ejemploCodigo.malo);
  const [smells, setSmells] = useState<CodeSmell[]>([]);
  const [showAutofix, setShowAutofix] = useState(false);
  const [selectedSmell, setSelectedSmell] = useState<CodeSmell | null>(null);

  const detectCodeSmells = (codigo: string): CodeSmell[] => {
    const detectedSmells: CodeSmell[] = [];
    const lines = codigo.split('\n');

    lines.forEach((line, index) => {
      // Detectar nombres pobres
      if (/class [a-z]\s|public\s+\w+\s+[a-z]\s*\(/.test(line)) {
        detectedSmells.push({
          type: 'poor-naming',
          line: index + 1,
          severity: 'high',
          description: 'Nombre de clase o método de una sola letra',
          suggestion: 'Usa nombres descriptivos que expliquen el propósito'
        });
      }

      // Detectar números mágicos
      const magicNumbers = line.match(/\b(?!0|1|2|10|100)\d+\.?\d*\b/g);
      if (magicNumbers && !line.includes('final') && !line.includes('const')) {
        detectedSmells.push({
          type: 'magic-number',
          line: index + 1,
          severity: 'medium',
          description: `Número mágico encontrado: ${magicNumbers.join(', ')}`,
          suggestion: 'Define constantes con nombres descriptivos',
          autofix: line.replace(/\b3\.14159\b/g, 'Math.PI').replace(/\b1\.21\b/g, 'TAX_RATE')
        });
      }

      // Detectar condiciones complejas (más de 3 niveles de anidación)
      const indentLevel = (line.match(/^\s*/)?.[0].length || 0) / 4;
      if (line.includes('if') && indentLevel >= 3) {
        detectedSmells.push({
          type: 'complex-conditional',
          line: index + 1,
          severity: 'high',
          description: 'Condición anidada muy profunda',
          suggestion: 'Extrae condiciones a métodos separados o usa early returns'
        });
      }

      // Detectar código duplicado (simplificado)
      const duplicatePattern = /3\.14159\s*\*\s*\w+\s*\*\s*\w+/;
      if (duplicatePattern.test(line)) {
        detectedSmells.push({
          type: 'duplicate',
          line: index + 1,
          severity: 'medium',
          description: 'Código duplicado: cálculo de área',
          suggestion: 'Extrae a un método calculateArea(radius)',
          autofix: 'calculateArea(radius)'
        });
      }
    });

    // Detectar método largo
    const methodMatches = codigo.matchAll(/public\s+\w+\s+\w+\s*\([^)]*\)\s*{/g);
    let methodStart = -1;
    for (const match of methodMatches) {
      if (methodStart === -1 && match.index !== undefined) {
        methodStart = codigo.substring(0, match.index).split('\n').length;
      }
    }
    
    const methodEnd = lines.findIndex((line, idx) => idx > methodStart && line.trim() === '}');
    if (methodEnd - methodStart > 20) {
      detectedSmells.push({
        type: 'long-method',
        line: methodStart,
        severity: 'high',
        description: `Método muy largo (${methodEnd - methodStart} líneas)`,
        suggestion: 'Divide en métodos más pequeños con responsabilidades únicas'
      });
    }

    // Detectar God Class (más de 200 líneas o más de 10 métodos)
    if (lines.length > 100) {
      detectedSmells.push({
        type: 'god-class',
        line: 1,
        severity: 'high',
        description: 'Clase demasiado grande con muchas responsabilidades',
        suggestion: 'Aplica el principio de responsabilidad única (SRP)'
      });
    }

    return detectedSmells;
  };

  const analyzeCode = () => {
    const detectedSmells = detectCodeSmells(code);
    setSmells(detectedSmells);
    setShowAutofix(false);
    setSelectedSmell(null);
  };

  const applyAutofix = () => {
    let fixedCode = code;
    
    // Aplicar correcciones automáticas
    fixedCode = fixedCode.replace(/\bclass [a-z]\b/g, 'class Calculator');
    fixedCode = fixedCode.replace(/\bpublic\s+\w+\s+[a-z]\s*\(/g, 'public double calculate(');
    fixedCode = fixedCode.replace(/\b3\.14159\b/g, 'Math.PI');
    fixedCode = fixedCode.replace(/\b1\.21\b/g, '(1 + TAX_RATE)');
    
    // Añadir constantes al inicio
    const constantsBlock = `    private static final double TAX_RATE = 0.21;\n    private static final double DISCOUNT_THRESHOLD = 100;\n    \n`;
    fixedCode = fixedCode.replace(/public class \w+ {/, (match) => match + '\n' + constantsBlock);
    
    setCode(fixedCode);
    setShowAutofix(true);
  };
  const getSeverityColor = (severity: CodeSmell['severity']) => {
    switch (severity) {
      case 'low': return 'text-yellow-600 bg-yellow-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'high': return 'text-red-600 bg-red-50';
    }
  };

  const getSmellIcon = (type: CodeSmell['type']) => {
    switch (type) {
      case 'long-method': return '📏';
      case 'duplicate': return '👥';
      case 'complex-conditional': return '🌀';
      case 'magic-number': return '🔢';
      case 'poor-naming': return '📝';
      case 'god-class': return '👑';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Code Smell Detector
        </h3>
        <p className="text-gray-600 text-sm">
          Identifica problemas comunes en el código y aprende cómo mejorar la calidad del software.
        </p>
      </div>

      {/* Ejemplos predefinidos */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => {
            setCode(ejemploCodigo.malo);
            setSmells([]);
          }}
          className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
        >
          Cargar código con problemas
        </button>
        <button
          onClick={() => {
            setCode(ejemploCodigo.bueno);
            setSmells([]);
          }}
          className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
        >
          Cargar código limpio
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor de código */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-semibold text-gray-700">Código a analizar</h4>
            <button
              onClick={analyzeCode}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <ExclamationTriangleIcon className="w-4 h-4" />
              Detectar Code Smells
            </button>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <CodeEditor
              value={code}
              onChange={setCode}
              language="java"
              readOnly={false}
            />
          </div>
          
          {smells.length > 0 && (
            <button
              onClick={applyAutofix}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <LightBulbIcon className="w-4 h-4" />
              Aplicar correcciones automáticas
            </button>
          )}
        </div>

        {/* Panel de resultados */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Análisis de código</h4>
          
          {smells.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <CheckCircleIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">
                {code.trim() ? 'Haz clic en "Detectar Code Smells" para analizar el código' : 'Escribe o pega código para analizar'}
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {/* Resumen */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Resumen</h5>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {smells.filter(s => s.severity === 'high').length}
                    </div>
                    <div className="text-gray-600">Críticos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {smells.filter(s => s.severity === 'medium').length}
                    </div>
                    <div className="text-gray-600">Medios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">
                      {smells.filter(s => s.severity === 'low').length}
                    </div>
                    <div className="text-gray-600">Bajos</div>
                  </div>
                </div>
              </div>

              {/* Lista de code smells */}
              {smells.map((smell, index) => (
                <div
                  key={index}
                  className={`rounded-lg border p-4 cursor-pointer transition-all ${
                    selectedSmell === smell ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedSmell(smell)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getSmellIcon(smell.type)}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(smell.severity)}`}>
                        {smell.severity.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-600">Línea {smell.line}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {smell.description}
                  </p>
                  
                  <p className="text-sm text-gray-600">
                    💡 {smell.suggestion}
                  </p>
                  
                  {smell.autofix && (
                    <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                      ✨ Corrección automática disponible
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {showAutofix && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h5 className="font-semibold text-green-900 mb-2">
                ✅ Correcciones aplicadas
              </h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Nombres de clases y métodos mejorados</li>
                <li>• Números mágicos reemplazados por constantes</li>
                <li>• Constantes agregadas al inicio de la clase</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Guía educativa */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-2">Clean Code</h5>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Nombres descriptivos</li>
            <li>• Funciones pequeñas</li>
            <li>• Una responsabilidad</li>
            <li>• Sin duplicación</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <h5 className="font-semibold text-purple-900 mb-2">Refactoring</h5>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Extract Method</li>
            <li>• Replace Magic Number</li>
            <li>• Rename Variable</li>
            <li>• Remove Duplication</li>
          </ul>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <h5 className="font-semibold text-green-900 mb-2">Beneficios</h5>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Más mantenible</li>
            <li>• Menos bugs</li>
            <li>• Más legible</li>
            <li>• Más testeable</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
