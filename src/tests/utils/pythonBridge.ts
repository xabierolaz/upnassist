import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { ANALYSIS_ENGINE_PY } from '../../core/engine/python/core/AnalysisEngine';
import { TRACE_ENGINE_PY } from '../../core/engine/python/debug/TraceEngine';

/**
 * Executes the AnalysisEngine python code against a snippet using the system's Python interpreter.
 * This ensures we are testing the REAL AST logic, not a simulation.
 */
export function runPythonAnalysis(codeSnippet: string): any {
    const tempDir = os.tmpdir();
    const tempFile = path.join(tempDir, `test_analysis_${Date.now()}.py`);

    // We verify the engine works by actually running it.
    // We construct a python script that imports the engine logic and runs it on the snippet.
    const fullScript = `
import json
import ast
import sys
import re
import traceback

${ANALYSIS_ENGINE_PY}

# Driver Code for Testing
if __name__ == "__main__":
    code_to_test = ${JSON.stringify(codeSnippet)}
    try:
        result = analyze_code_expert(code_to_test)
        print("JSON_START")
        print(json.dumps(result))
        print("JSON_END")
    except Exception as e:
        print("JSON_START")
        print(json.dumps({"error": "test_harness_error", "details": str(e)}))
        print("JSON_END")
`;

    fs.writeFileSync(tempFile, fullScript);

    try {
        const output = execSync(`python "${tempFile}"`, { encoding: 'utf-8' });
        const match = output.match(/JSON_START\s*([\s\S]*?)\s*JSON_END/);
        if (match && match[1]) {
            return JSON.parse(match[1]);
        }
        throw new Error("No JSON output found in python execution");
    } catch (e: any) {
        // console.error("Python Execution Error:", e.stdout || e.message);
        throw e;
    } finally {
        if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
        }
    }
}

/**
 * Executes the TraceEngine python code against a snippet using the system's Python interpreter.
 */
export function runPythonTrace(codeSnippet: string): any {
    const tempDir = os.tmpdir();
    const tempFile = path.join(tempDir, `test_trace_${Date.now()}.py`);

    const fullScript = `
import json
import sys
import inspect
import types

${TRACE_ENGINE_PY}

# Driver Code for Testing
if __name__ == "__main__":
    code_to_test = ${JSON.stringify(codeSnippet)}
    try:
        frames = trace_execution(code_to_test)
        print("JSON_START")
        print(json.dumps(frames))
        print("JSON_END")
    except Exception as e:
        print("JSON_START")
        print(json.dumps([{"event": "exception", "error": str(e)}]))
        print("JSON_END")
`;

    fs.writeFileSync(tempFile, fullScript);

    try {
        const output = execSync(`python "${tempFile}"`, { encoding: 'utf-8' });
        const match = output.match(/JSON_START\s*([\s\S]*?)\s*JSON_END/);
        if (match && match[1]) {
            return JSON.parse(match[1]);
        }
        throw new Error("No JSON output found in python execution: " + output);
    } catch (e: any) {
        // console.error("Python Execution Error:", e.stdout || e.message);
        throw e;
    } finally {
        if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
        }
    }
}
