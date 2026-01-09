import PythonRunner from './PythonRunner';

export interface TestCaseResult {
  name: string;
  description?: string; // Nuevo campo opcional
  status: 'pass' | 'fail' | 'error';
  message: string;
  expected?: string;
  actual?: string;
  feedback?: string;
}

export interface TestSuiteResult {
  passed: number;
  total: number;
  results: TestCaseResult[];
  score: number; // 0 to 100
}

export class TestRunner {
  
  /**
   * Ejecuta el código del estudiante contra un set de pruebas unitarias con Mocking avanzado.
   */
  static async runTests(studentCode: string, testCode: string): Promise<TestSuiteResult> {
    
    // Escapar el código del estudiante para meterlo en un string de Python seguro
    // Usamos un delimitador raro para evitar conflictos con comillas en el código del alumno
    const safeStudentCode = studentCode
        .replace(/\\/g, '\\\\')
        .replace(/"""/g, '\\"""');

    const driverCode = `
import unittest
import io
import json
import sys
from unittest.mock import patch

# 1. PREPARACIÓN DEL ENTORNO
# Guardamos el código del alumno como texto para ejecutarlo múltiples veces
STUDENT_CODE = """${safeStudentCode}"""

# Helper function que los tests usarán
def run_student_code(inputs=None):
    """
    Ejecuta el código del estudiante inyectando inputs simulados.
    Retorna todo lo que el estudiante imprimió (stdout).
    """
    if inputs is None:
        inputs = []
    
    # Preparamos la captura de output
    captured_output = io.StringIO()
    
    # Preparamos el entorno aislado (para que variables de una ejecución no afecten a otra)
    student_env = {}
    
    # MOCKING DE INPUT Y STDOUT
    # patch('builtins.input', side_effect=inputs) hace que cada llamada a input()
    # tome el siguiente valor de la lista.
    with patch('builtins.input', side_effect=inputs) as mock_input:
        with patch('sys.stdout', new=captured_output):
            try:
                exec(STUDENT_CODE, student_env)
            except StopIteration:
                # Esto ocurre si el alumno pide más inputs de los que dimos.
                # Es normal en bucles while True: input(). Lo ignoramos.
                pass
            except Exception as e:
                # Si el código explota, relanzamos para que el test lo capture
                raise e

    return captured_output.getvalue().strip()

# 2. CARGA DE TESTS
# Inyectamos el código de los tests definidos en el JSON
exec("""${testCode.replace(/\\/g, '\\\\').replace(/"/g, '\"')}""")

# 3. EJECUCIÓN PERSONALIZADA
# Usamos un TestRunner que guarda resultados en JSON
suite = unittest.TestLoader().loadTestsFromModule(sys.modules[__name__])

class JSONTestResult(unittest.TestResult):
    def __init__(self):
        super().__init__()
        self.results_data = []

    def addSuccess(self, test):
        super().addSuccess(test)
        self.results_data.append({
            "name": test.shortDescription() or test._testMethodName,
            "status": "pass",
            "message": "Correcto"
        })

    def addFailure(self, test, err):
        super().addFailure(test, err)
        # Limpiamos el mensaje de error de Python para que sea legible
        msg = str(err[1]).replace("AssertionError: ", "")
        self.results_data.append({
            "name": test.shortDescription() or test._testMethodName,
            "status": "fail",
            "message": msg
        })

    def addError(self, test, err):
        super().addError(test, err)
        self.results_data.append({
            "name": test.shortDescription() or test._testMethodName,
            "status": "error",
            "message": str(err[1])
        })

runner_result = JSONTestResult()
suite.run(runner_result)

# 4. RESULTADO FINAL
total_tests = runner_result.testsRun
passed_tests = len(runner_result.results_data) - len(runner_result.failures) - len(runner_result.errors)

output_json = {
    "passed": passed_tests,
    "total": total_tests,
    "results": runner_result.results_data,
    "score": (passed_tests / total_tests * 100) if total_tests > 0 else 0
}

print(json.dumps(output_json))
`;

    try {
      const result = await PythonRunner.execute(driverCode);
      
      if (!result.success && result.error) {
         console.error("Critical Test Driver Error:", result.error);
         return {
             passed: 0, 
             total: 0, 
             results: [{name: "System Error", status: 'error', message: "Error interno del evaluador: " + result.error}], 
             score: 0
         };
      }

      try {
          // Extraer JSON limpio de la última línea
          const lines = result.output.trim().split('\n');
          const lastLine = lines[lines.length - 1];
          return JSON.parse(lastLine);
      } catch (parseError) {
          console.error("JSON Parse Error. Output was:", result.output);
          return {
             passed: 0, 
             total: 0, 
             results: [{name: "Parse Error", status: 'error', message: "No se pudo leer el resultado. Revisa tu código por prints infinitos."}], 
             score: 0
         };
      }

    } catch (e) {
      return {
        passed: 0,
        total: 0,
        results: [{ name: 'System Error', status: 'error', message: (e as Error).message }],
        score: 0
      };
    }
  }
}