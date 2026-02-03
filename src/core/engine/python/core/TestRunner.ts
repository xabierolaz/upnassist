import PythonRunner from './PythonRunner';
import { ANALYSIS_ENGINE_PY } from './AnalysisEngine';
import { ErrorCode } from '../../types/ErrorCodes';

export interface TestCaseResult {
  name: string;
  status: 'pass' | 'fail' | 'error';
  message: string;
  code?: ErrorCode; // Nuevo campo para códigos de error/asserción
  params?: Record<string, string | number>;
  advice_code?: ErrorCode; // Nuevo campo para consejos
}

export interface TestSuiteResult {
  passed: number;
  total: number;
  results: TestCaseResult[];
  score: number;
  analysis?: {
      stats: any;
      warnings: Array<{code: ErrorCode, params?: Record<string, string|number>}>;
      error?: string;
  };
}

export class TestRunner {
  
  static async runTests(studentCode: string, testCode: string, language: 'ENG' | 'CAS' | 'EUS' = 'CAS'): Promise<TestSuiteResult> {
    
    // Escapar código
    const safeStudentCode = studentCode
        .replace(/\\/g, '\\\\')
        .replace(/"""/g, '"""');

    const safeTestCode = testCode
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '"');

    const driverCode = `
import unittest
import io
import json
import sys
import traceback
import re
from unittest.mock import patch
from types import ModuleType

# Prevent unittest.main() from exiting or running tests prematurely
unittest.main = lambda *args, **kwargs: None

    # --- MOCK TMC LIBRARY START ---
if "tmc" not in sys.modules:
    tmc = ModuleType("tmc")
    tmc_utils = ModuleType("tmc.utils")

    _mock_stdout = io.StringIO()

    def points(*args, **kwargs):
        def decorator(cls):
            return cls
        return decorator

    tmc.points = points

    def load_module(name, lang='en'):
        return sys.modules[__name__]

    def reload_module(module):
        _mock_stdout.truncate(0)
        _mock_stdout.seek(0)
        # Patch sys.stdout to capture output from the student code execution
        with patch('sys.stdout', new=_mock_stdout):
            try:
                # Re-execute student code to simulate module reload
                exec(STUDENT_CODE, globals())
            except Exception:
                pass # Ignore runtime errors during reload, tests will catch them

    def get_stdout():
        return _mock_stdout.getvalue().strip()

    def sanitize(text):
        return text.strip()

    def assert_ignore_ws(self, output, expected, msg="", lang='en'):
        self.assertEqual(output.strip().replace(" ", ""), expected.strip().replace(" ", ""), msg)

    def check_source(module):
        # Basic check for __main__ block
        if 'if __name__ == "__main__":' not in STUDENT_CODE and "if __name__ == '__main__':" not in STUDENT_CODE:
             return False, "Code should be inside if __name__ == '__main__': block"
        return True, ""

    tmc_utils.load_module = load_module
    tmc_utils.load = load_module
    tmc_utils.reload_module = reload_module
    tmc_utils.get_stdout = get_stdout
    tmc_utils.sanitize = sanitize
    tmc_utils.assert_ignore_ws = assert_ignore_ws
    tmc_utils.check_source = check_source

    sys.modules["tmc"] = tmc
    sys.modules["tmc.utils"] = tmc_utils
    tmc.utils = tmc_utils # Link utils to tmc module
# --- MOCK TMC LIBRARY END ---

# 0. CARGAR MOTOR EXPERTO
${ANALYSIS_ENGINE_PY}

# 1. CONFIGURACIÓN
CURRENT_LANG = "${language}"

def localize_message(msg):
    if not msg: return ""
    parts = msg.split('|')
    if len(parts) == 3:
        if CURRENT_LANG == 'ENG': return parts[0].strip()
        if CURRENT_LANG == 'CAS': return parts[1].strip()
        if CURRENT_LANG == 'EUS': return parts[2].strip()
    return msg # Fallback to original

# 2. ANÁLISIS ESTÁTICO (LINTER)
STUDENT_CODE = """${safeStudentCode}"""
analysis_result = analyze_code_expert(STUDENT_CODE)

syntax_error = None
if "error" in analysis_result and analysis_result["error"] == "syntax":
    syntax_error = analysis_result

# Helper para normalizar aserciones a códigos
def normalize_assertion_error(msg):
    # msg pattern: "technical_diff : custom_hint"
    parts = msg.split(' : ', 1)
    tech_diff = parts[0]
    raw_hint = parts[1] if len(parts) > 1 else ""
    
    # Localize hint if it follows our pipe-separated format
    localized_hint = localize_message(raw_hint)

    # String equality 'A' != 'B'
    match = re.search(r"^'(.+)' != '(.+)'$", tech_diff)
    if match:
        return {
            "code": "ASSERT_EQUAL_STR",
            "params": {"expected": match.group(2), "actual": match.group(1), "hint": localized_hint}
        }
    
    # Number equality 1 != 2
    match = re.search(r"^(\d+(\.\d+)?) != (\d+(\.\d+)?)$", tech_diff)
    if match:
        return {
            "code": "ASSERT_EQUAL_NUM",
            "params": {"expected": match.group(3), "actual": match.group(1), "hint": localized_hint}
        }
        
    return {
        "code": "ASSERT_GENERIC",
        "params": {"message": localize_message(msg)}
    }

# 3. DEFINIR HELPER RUNNER
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
    # Error de Sintaxis detectado por AnalysisEngine
    # Intentamos mapearlo a un código conocido usando humanize
    # Simulamos un SyntaxError para usar la lógica existente
    advice_code = "RUNTIME_SYNTAX_INVALID"
    
    # Check dictionary patterns in ADVICE_DB manually
    err_msg = syntax_error["details"]
    for key, info in ADVICE_DB.items():
        if "pattern" in info and re.search(info["pattern"], err_msg):
            advice_code = info["code"]
            break

    test_results.append({
        "name": "Syntax Check",
        "status": "error",
        "message": f"Line {syntax_error.get('line', '?')}: {err_msg}",
        "advice_code": advice_code
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
                    "message": "OK"
                })

            def addFailure(self, test, err):
                super().addFailure(test, err)
                raw_msg = str(err[1]).replace("AssertionError: ", "")
                
                # Normalizar a código
                error_info = normalize_assertion_error(raw_msg)
                
                self.results_data.append({
                    "name": test.shortDescription() or test._testMethodName,
                    "status": "fail",
                    "message": raw_msg, # Fallback text
                    "code": error_info["code"],
                    "params": error_info["params"]
                })

            def addError(self, test, err):
                super().addError(test, err)
                exc_type, exc_value, exc_tb = err
                
                # Usar el humanizador experto que ahora devuelve códigos
                info = humanize_runtime_error(exc_type, exc_value, exc_tb)
                
                self.results_data.append({
                    "name": test.shortDescription() or test._testMethodName,
                    "status": "error",
                    "message": info['message'],
                    "advice_code": info['advice_code']
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
            "message": "See params",
            "code": "ASSERT_GENERIC",
            "params": { "message": f"""System Error:
{str(e)}
{traceback.format_exc()}""" }
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
             results: [{
                 name: "System Error", 
                 status: 'error', 
                 message: "See params", 
                 code: "ASSERT_GENERIC",
                 params: { message: result.error || "Unknown Error" }
             }], 
             score: 0
         };
      }

      try {
          const lines = result.output.trim().split('\n');
          const lastLine = lines[lines.length - 1];
          return JSON.parse(lastLine);
      } catch (_parseError) {
          console.error("JSON Parse Error. Output:", result.output);
          return {
             passed: 0, 
             total: 0, 
             results: [{name: "Output Error", status: 'error', message: "Output corrupted", code: "SYS_OUTPUT_CORRUPT"}],
             score: 0
         };
      }

    } catch (e) {
      return {
        passed: 0,
        total: 0,
        results: [{ name: 'System Error', status: 'error', message: (e as Error).message, code: "SYS_INTERNAL" }],
        score: 0
      };
    }
  }
}
