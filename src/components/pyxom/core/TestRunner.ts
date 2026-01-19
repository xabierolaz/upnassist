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
  analysis?: {
      stats: any;
      warnings: Array<{code: string, msg_es: string, msg_eu: string}>;
      error?: string;
  };
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

# 0. CARGAR MOTOR EXPERTO
${ANALYSIS_ENGINE_PY}

# CONFIG
CURRENT_LANG = "${language}"

def tr(eng, cas, eus):
    if CURRENT_LANG == 'ENG': return eng
    if CURRENT_LANG == 'EUS': return eus
    return cas

# 1. ANÁLISIS ESTÁTICO (LINTER)
STUDENT_CODE = """${safeStudentCode}"""
analysis_result = analyze_code_expert(STUDENT_CODE)

syntax_error = None
if "error" in analysis_result and analysis_result["error"] == "syntax":
    syntax_error = analysis_result

# 2. DEFINIR HELPER RUNNER
def run_student_code(inputs=None):
    if inputs is None: inputs = []
    captured_output = io.StringIO()
    student_env = globals().copy() 
    
    with patch('builtins.input', side_effect=inputs):
        with patch('sys.stdout', new=captured_output):
            try:
                exec(STUDENT_CODE, student_env)
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
    # Humanizar Error de Sintaxis
    err_msg = syntax_error["details"]
    advice_es = ADVICE_DB["missing_colon"]["es"] if "expected ':'" in err_msg else "Revisa la sintaxis."
    advice_eu = ADVICE_DB["missing_colon"]["eu"] if "expected ':'" in err_msg else "Berrikusi sintaxia."
    
    # Check dictionary patterns
    for k, v in ADVICE_DB.items():
        if "pattern" in v and re.search(v["pattern"], err_msg):
            advice_es = v["es"]
            advice_eu = v["eu"]
            break

    test_results.append({
        "name": "Syntax Check",
        "status": "error",
        "message": f"Error en línea {syntax_error.get('line', '?')}: {err_msg}",
        "advice": advice_eu if CURRENT_LANG == 'EUS' else advice_es
    })
else:
    # Cargar tests dinámicos
    try:
        exec("""${safeTestCode}""", globals())
        
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
                raw_msg = str(err[1]).replace("AssertionError: ", "")
                
                # Logic to select language part if formatted as "ENG | CAS | EUS"
                parts = raw_msg.split(" | ")
                final_msg = raw_msg
                if len(parts) == 3:
                    if CURRENT_LANG == 'ENG': final_msg = parts[0]
                    elif CURRENT_LANG == 'CAS': final_msg = parts[1]
                    elif CURRENT_LANG == 'EUS': final_msg = parts[2]
                
                self.results_data.append({
                    "name": test.shortDescription() or test._testMethodName,
                    "status": "fail",
                    "message": final_msg
                })

            def addError(self, test, err):
                super().addError(test, err)
                exc_type, exc_value, exc_tb = err
                
                # USAR EL HUMANIZADOR EXPERTO
                info = humanize_runtime_error(exc_type, exc_value, exc_tb)
                
                advice = info["advice_eu"] if CURRENT_LANG == 'EUS' else info["advice_es"]
                
                self.results_data.append({
                    "name": test.shortDescription() or test._testMethodName,
                    "status": "error",
                    "message": f"{info['type']}: {info['message']}",
                    "advice": advice
                })

        runner_result = JSONTestResult()
        suite.run(runner_result)
        
        test_results = runner_result.results_data
        total = runner_result.testsRun
        passed = len(test_results) - len(runner_result.failures) - len(runner_result.errors)
        score = (passed / total * 100) if total > 0 else 0
        
    except Exception as e:
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
    "analysis": analysis_result
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