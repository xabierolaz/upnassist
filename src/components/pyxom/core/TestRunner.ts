import PythonRunner from './PythonRunner';
import { ANALYSIS_ENGINE_PY } from './AnalysisEngine';

export interface TestCaseResult {
  name: string;
  description?: string;
  status: 'pass' | 'fail' | 'error';
  message: string;
  advice?: string;
  expected?: string;
  actual?: string;
  feedback?: string;
}

export interface TestSuiteResult {
  passed: number;
  total: number;
  results: TestCaseResult[];
  score: number;
  astStats?: any;
}

export class TestRunner {
  
  static async runTests(studentCode: string, testCode: string, language: 'ENG' | 'CAS' | 'EUS' = 'CAS'): Promise<TestSuiteResult> {
    
    // Escapar código
    const safeStudentCode = studentCode
        .replace(/\\/g, '\\\\')
        .replace(/"""/g, '\"""');

    const safeTestCode = testCode
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\"');

    const driverCode = `
import unittest
import io
import json
import sys
import traceback
from unittest.mock import patch

# 0. CARGAR MOTOR DE ANÁLISIS
${ANALYSIS_ENGINE_PY}

# CONFIG
CURRENT_LANG = "${language}"

def tr(eng, cas, eus):
    if CURRENT_LANG == 'ENG': return eng
    if CURRENT_LANG == 'EUS': return eus
    return cas

# 1. ANÁLISIS ESTÁTICO PRELIMINAR
STUDENT_CODE = """${safeStudentCode}"""
ast_stats = analyze_student_code(STUDENT_CODE)
syntax_error = None

if "error" in ast_stats:
    syntax_error = ast_stats

# 2. DEFINIR HELPER RUNNER
def run_student_code(inputs=None):
    if inputs is None: inputs = []
    captured_output = io.StringIO()
    student_env = globals().copy() # Usar globals para que las clases definidas sean visibles
    
    with patch('builtins.input', side_effect=inputs):
        with patch('sys.stdout', new=captured_output):
            try:
                exec(STUDENT_CODE, student_env)
                # Exportar variables creadas al entorno global para los tests
                globals().update(student_env)
            except StopIteration:
                pass
            except Exception as e:
                raise e
    return captured_output.getvalue().strip()

# 3. EJECUTAR TESTS
test_results = []
score = 0
passed = 0
total = 0

if syntax_error:
    # Si hay error de sintaxis, no corremos tests, fallamos directo
    info = humanize_error(SyntaxError, syntax_error["details"], None)
    test_results.append({
        "name": "Syntax Check",
        "status": "error",
        "message": info["message"],
        "advice": info["advice"]
    })
else:
    # Cargar tests dinámicos
    try:
        exec("""${safeTestCode}""", globals())
        
        # Ejecutar suite
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
                msg = str(err[1]).replace("AssertionError: ", "")
                self.results_data.append({
                    "name": test.shortDescription() or test._testMethodName,
                    "status": "fail",
                    "message": msg
                })

            def addError(self, test, err):
                super().addError(test, err)
                # Usar el humanizador
                exc_type, exc_value, exc_tb = err
                info = humanize_error(exc_type, exc_value, exc_tb)
                self.results_data.append({
                    "name": test.shortDescription() or test._testMethodName,
                    "status": "error",
                    "message": info["message"],
                    "advice": info["advice"]
                })

        runner_result = JSONTestResult()
        suite.run(runner_result)
        
        test_results = runner_result.results_data
        total = runner_result.testsRun
        passed = len(test_results) - len(runner_result.failures) - len(runner_result.errors)
        score = (passed / total * 100) if total > 0 else 0
        
    except Exception as e:
        # Error al cargar los tests (no culpa del alumno, o sí si definió mal clases)
        test_results.append({
            "name": "Test Loader",
            "status": "error",
            "message": str(e)
        })

# 4. SALIDA
output_json = {
    "passed": passed,
    "total": total,
    "results": test_results,
    "score": score,
    "astStats": ast_stats
}
print(json.dumps(output_json))
`;

    try {
      const result = await PythonRunner.execute(driverCode);
      
      if (!result.success && result.error) {
         return {
             passed: 0, 
             total: 0, 
             results: [{name: "System Error", status: 'error', message: "Error interno: " + result.error}], 
             score: 0
         };
      }

      try {
          const lines = result.output.trim().split('\n');
          const lastLine = lines[lines.length - 1];
          return JSON.parse(lastLine);
      } catch (parseError) {
          console.error("JSON Parse Error. Output:", result.output);
          return {
             passed: 0, 
             total: 0, 
             results: [{name: "Output Error", status: 'error', message: "Salida corrupta. Posible print infinito."}],
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
