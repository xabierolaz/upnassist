import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { CodeEditor } from '../pyxom/core/CodeEditor';

interface CoverageData {
  line: number;
  covered: boolean;
  executionCount: number;
}

interface TestResult {
  name: string;
  passed: boolean;
  coverage: number;
}

const sampleCode = `public class Calculator {
    private double lastResult;
    
    public double add(double a, double b) {
        double result = a + b;
        lastResult = result;
        return result;
    }
    
    public double subtract(double a, double b) {
        double result = a - b;
        lastResult = result;
        return result;
    }
    
    public double multiply(double a, double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot multiply by zero");
        }
        double result = a * b;
        lastResult = result;
        return result;
    }
    
    public double divide(double a, double b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return a / b;
    }
    
    public double getLastResult() {
        return lastResult;
    }
    
    public void clear() {
        lastResult = 0;
    }
}`;

const sampleTests = `@Test
public void testAdd() {
    Calculator calc = new Calculator();
    assertEquals(5.0, calc.add(2, 3), 0.001);
}

@Test
public void testSubtract() {
    Calculator calc = new Calculator();
    assertEquals(-1.0, calc.subtract(2, 3), 0.001);
}

@Test
public void testMultiply() {
    Calculator calc = new Calculator();
    assertEquals(6.0, calc.multiply(2, 3), 0.001);
}

// Falta test para divide()
// Falta test para getLastResult()
// Falta test para clear()
// Falta test para excepciones`;

export default function TestCoverageVisualizer() {
  const [code, setCode] = useState(sampleCode);
  const [tests, setTests] = useState(sampleTests);
  const [coverage, setCoverage] = useState<CoverageData[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [overallCoverage, setOverallCoverage] = useState(0);
  const [showHeatmap, setShowHeatmap] = useState(true);
  


  const analyzeTestCoverage = () => {
    // Simular análisis de cobertura
    const lines = code.split('\n');
    const coverageData: CoverageData[] = [];
    
    // Simular qué líneas están cubiertas basado en los tests escritos
    const hasAddTest = tests.includes('testAdd');
    const hasSubtractTest = tests.includes('testSubtract');
    const hasMultiplyTest = tests.includes('testMultiply');
    const hasDivideTest = tests.includes('testDivide');
    const hasGetLastResultTest = tests.includes('testGetLastResult');
    const hasClearTest = tests.includes('testClear');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      let covered = false;
      let executionCount = 0;
      
      // Simular cobertura basada en el contenido de la línea
      if (line.includes('class Calculator') || line.includes('private double lastResult')) {
        covered = hasAddTest || hasSubtractTest || hasMultiplyTest;
        executionCount = covered ? 3 : 0;
      } else if (line.includes('add(') && hasAddTest) {
        covered = true;
        executionCount = 1;
      } else if (line.includes('subtract(') && hasSubtractTest) {
        covered = true;
        executionCount = 1;
      } else if (line.includes('multiply(') && hasMultiplyTest) {
        covered = true;
        executionCount = 2; // Ejecutado más veces por diferentes casos
      } else if (line.includes('divide(') && hasDivideTest) {
        covered = true;
        executionCount = 1;
      } else if (line.includes('getLastResult(') && hasGetLastResultTest) {
        covered = true;
        executionCount = 1;
      } else if (line.includes('clear(') && hasClearTest) {
        covered = true;
        executionCount = 1;
      } else if (line.includes('lastResult =') && (hasAddTest || hasSubtractTest || hasMultiplyTest)) {
        covered = true;
        executionCount = 3;
      } else if (line.includes('throw new IllegalArgumentException')) {
        covered = tests.includes('Exception'); // Solo si hay tests de excepciones
        executionCount = covered ? 1 : 0;
      }
      
      // No contar líneas vacías o solo con llaves
      if (line.trim() && !line.trim().match(/^[{}]$/)) {
        coverageData.push({ line: lineNum, covered, executionCount });
      }
    });
    
    setCoverage(coverageData);
    
    // Calcular cobertura general
    const coveredLines = coverageData.filter(c => c.covered).length;
    const totalLines = coverageData.length;
    const calculatedCoverage = totalLines > 0 ? (coveredLines / totalLines) * 100 : 0;
    setOverallCoverage(Math.round(calculatedCoverage));
    
    // Simular resultados de tests
    const results: TestResult[] = [
      { name: 'testAdd', passed: hasAddTest, coverage: hasAddTest ? 100 : 0 },
      { name: 'testSubtract', passed: hasSubtractTest, coverage: hasSubtractTest ? 100 : 0 },
      { name: 'testMultiply', passed: hasMultiplyTest, coverage: hasMultiplyTest ? 80 : 0 },
      { name: 'testDivide', passed: hasDivideTest, coverage: hasDivideTest ? 60 : 0 },
      { name: 'testGetLastResult', passed: hasGetLastResultTest, coverage: hasGetLastResultTest ? 100 : 0 },
      { name: 'testClear', passed: hasClearTest, coverage: hasClearTest ? 100 : 0 }
    ];
    setTestResults(results);
    
  };
  const getCoverageColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    if (percentage >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getLineBackground = (lineNum: number) => {
    const lineData = coverage.find(c => c.line === lineNum);
    if (!lineData || !showHeatmap) return '';
    
    if (!lineData.covered) {
      return 'bg-red-100';
    }
    
    // Mapa de calor basado en ejecuciones
    if (lineData.executionCount >= 3) return 'bg-green-200';
    if (lineData.executionCount >= 2) return 'bg-green-100';
    return 'bg-green-50';
  };

  const renderCodeWithCoverage = () => {
    const lines = code.split('\n');
    return (
      <div className="relative">
        {/* Marcadores de cobertura */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-100 border-r border-gray-300">
          {lines.map((_, index) => {
            const lineNum = index + 1;
            const lineData = coverage.find(c => c.line === lineNum);
            
            if (!lineData) return <div key={lineNum} className="h-6"></div>;
            
            return (
              <div key={lineNum} className="h-6 flex items-center justify-center text-xs">
                {lineData.covered ? (
                  <span className="text-green-600 font-semibold">{lineData.executionCount}x</span>
                ) : (
                  <span className="text-red-600">0</span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Código con highlights */}
        <div className="pl-14">
          <pre className="text-sm font-mono">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`h-6 px-2 ${getLineBackground(index + 1)}`}
              >
                <span className="text-gray-500 inline-block w-8 text-right mr-2">
                  {index + 1}
                </span>
                <span>{line}</span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Test Coverage Visualizer
        </h3>
        <p className="text-gray-600 text-sm">
          Visualiza la cobertura de pruebas de tu código. Las líneas verdes están cubiertas, 
          las rojas no tienen tests.
        </p>
      </div>

      {/* Estadísticas generales */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className={`text-3xl font-bold ${getCoverageColor(overallCoverage)}`}>
            {overallCoverage}%
          </div>
          <div className="text-sm text-gray-600 mt-1">Cobertura Total</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-green-600">
            {coverage.filter(c => c.covered).length}
          </div>
          <div className="text-sm text-gray-600 mt-1">Líneas Cubiertas</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-red-600">
            {coverage.filter(c => !c.covered).length}
          </div>
          <div className="text-sm text-gray-600 mt-1">Líneas Sin Cubrir</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">
            {testResults.filter(t => t.passed).length}/{testResults.length}
          </div>
          <div className="text-sm text-gray-600 mt-1">Tests Pasados</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor de código */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-700">Código Fuente</h4>
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={showHeatmap}
                onChange={(e) => setShowHeatmap(e.target.checked)}
                className="mr-2"
              />
              Mostrar mapa de calor
            </label>
          </div>
          
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            {coverage.length > 0 ? (
              <div className="max-h-[500px] overflow-auto">
                {renderCodeWithCoverage()}
              </div>
            ) : (
              <CodeEditor
                value={code}
                onChange={setCode}
                language="java"
                readOnly={false}
              />
            )}
          </div>
        </div>

        {/* Editor de tests */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-700">Tests Unitarios</h4>
            <button
              onClick={analyzeTestCoverage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Analizar Cobertura
            </button>
          </div>
          
          <div className="border border-gray-300 rounded-lg overflow-hidden h-[500px]">
            <CodeEditor
              value={tests}
              onChange={setTests}
              language="java"
              readOnly={false}
            />
          </div>
        </div>
      </div>

      {/* Resultados de tests */}
      {testResults.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold text-gray-700 mb-3">Resultados de Tests</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {testResults.map((test, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  test.passed 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{test.name}</span>
                  {test.passed ? (
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircleIcon className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Cobertura: {test.coverage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sugerencias */}
      {coverage.length > 0 && overallCoverage < 80 && (
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-900 mb-2">
            <ExclamationTriangleIcon className="w-5 h-5 inline mr-1" />
            Sugerencias para mejorar la cobertura
          </h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            {!tests.includes('testDivide') && (
              <li>• Añade tests para el método divide()</li>
            )}
            {!tests.includes('Exception') && (
              <li>• Añade tests para las excepciones (división por cero)</li>
            )}
            {!tests.includes('testGetLastResult') && (
              <li>• Añade tests para getLastResult()</li>
            )}
            {!tests.includes('testClear') && (
              <li>• Añade tests para el método clear()</li>
            )}
            <li>• Objetivo: alcanzar al menos 80% de cobertura</li>
          </ul>
        </div>
      )}

      {/* Información educativa */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h5 className="font-semibold text-green-900 mb-2">Buena Cobertura</h5>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• 80%+ es excelente</li>
            <li>• Cubre casos límite</li>
            <li>• Tests de excepciones</li>
            <li>• Casos positivos y negativos</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-2">Métricas</h5>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Line Coverage</li>
            <li>• Branch Coverage</li>
            <li>• Method Coverage</li>
            <li>• Cyclomatic Complexity</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <h5 className="font-semibold text-purple-900 mb-2">Herramientas</h5>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• JaCoCo (Java)</li>
            <li>• Istanbul (JavaScript)</li>
            <li>• Coverage.py (Python)</li>
            <li>• Cobertura (Multi-lenguaje)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
