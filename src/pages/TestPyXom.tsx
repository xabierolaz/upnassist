import { useState, lazy, Suspense } from 'react';
import type { PyXomExercise } from '../components/pyxom/types';

const PyXomEnvironment = lazy(() => import('../components/pyxom/PyXomEnvironment').then(module => ({ default: module.PyXomEnvironment })));
import { verifyPyXomExecution } from '../utils/pyXomVerifier';
import { CheckCircleIcon, ExclamationCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const testExercise: PyXomExercise = {
  id: 'py-test-1',
  title: 'Test de PyXom',
  description: 'Prueba simple para verificar que PyXom funciona correctamente con Pyodide',
  difficulty: 'easy',
  topics: ['test', 'basics'],
  category: 'test',
  initialCode: `# Test de PyXom con Pyodide WebAssembly
print("¡Hola desde PyXom!")
print("Motor: Pyodide WebAssembly")

# Prueba simple
a = 5
b = 10
print(f"La suma de {a} + {b} = {a + b}")

# Test de lista
numeros = [1, 2, 3, 4, 5]
print(f"Lista: {numeros}")
print(f"Suma de la lista: {sum(numeros)}")`,
  solutionCode: `# Solución completa
print("¡Solución ejecutada con éxito!")`,
  tests: [
    {
      id: 'pt1',
      name: 'Test básico',
      input: '',
      expectedOutput: '¡Hola desde PyXom!\nMotor: Pyodide WebAssembly\nLa suma de 5 + 10 = 15\nLista: [1, 2, 3, 4, 5]\nSuma de la lista: 15',
      isHidden: false
    }
  ],
  hints: [
    'Asegúrate de que los print statements estén correctos',
    'Verifica que las variables estén bien definidas'
  ]
};

export default function TestPyXom() {
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [showVerificationLog, setShowVerificationLog] = useState(false);

  const handleVerifyPyodide = async () => {
    setVerifying(true);
    setShowVerificationLog(true);
    
    try {
      const result = await verifyPyXomExecution();
      setVerificationResult(result);
    } catch (error) {
      setVerificationResult({
        success: false,
        message: 'Error al verificar PyXom',
        error: error instanceof Error ? error.message : String(error)
      });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Test de PyXom con Pyodide</h1>
        
        {/* Panel de verificación de Pyodide */}
        <div className="mb-6 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Verificación de Pyodide WebAssembly</h2>
            <button
              onClick={handleVerifyPyodide}
              disabled={verifying}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {verifying ? (
                <>
                  <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  Verificando Pyodide...
                </>
              ) : (
                <>
                  <CheckCircleIcon className="w-5 h-5" />
                  Verificar PyXom
                </>
              )}
            </button>
          </div>
          
          {verificationResult && (
            <div className={`p-4 rounded-lg ${verificationResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center gap-2">
                {verificationResult.success ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                ) : (
                  <ExclamationCircleIcon className="w-6 h-6 text-red-600" />
                )}
                <span className={`font-medium ${verificationResult.success ? 'text-green-800' : 'text-red-800'}`}>
                  {verificationResult.message}
                </span>
              </div>
              {verificationResult.passedTests !== undefined && (
                <p className="mt-2 text-sm text-gray-600">
                  Tests pasados: {verificationResult.passedTests}/{verificationResult.totalTests}
                </p>
              )}
              {verificationResult.loadTime && (
                <p className="mt-1 text-sm text-gray-600">
                  Tiempo de carga: {verificationResult.loadTime}ms
                </p>
              )}
              {verificationResult.error && (
                <p className="mt-2 text-sm text-red-600">
                  Error: {verificationResult.error}
                </p>
              )}
            </div>
          )}
          
          {showVerificationLog && (
            <div className="mt-4 p-4 bg-gray-900 text-gray-100 rounded-lg font-mono text-xs overflow-x-auto">
              <p className="text-gray-400 mb-2">Ver consola del navegador (F12) para logs detallados</p>
              <p className="text-green-400">🐍 Python ejecutándose en el navegador con WebAssembly</p>
              <p className="text-blue-400">📦 No requiere servidor backend</p>
            </div>
          )}
        </div>

        {/* Editor PyXom */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
          <Suspense fallback={<div className="flex items-center justify-center h-full">Cargando PyXom...</div>}>
            <PyXomEnvironment 
              exercise={testExercise}
              onComplete={() => {}}
              onProgress={() => {}}
            />
          </Suspense>
        </div>
        
        {/* Información adicional */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">ℹ️ Sobre PyXom</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Ejecuta Python directamente en el navegador usando Pyodide</li>
            <li>• No requiere instalación ni servidor backend</li>
            <li>• Compatible con la mayoría de bibliotecas estándar de Python</li>
            <li>• Perfecto para aprendizaje y práctica de programación</li>
          </ul>
        </div>
      </div>
    </div>
  );
}