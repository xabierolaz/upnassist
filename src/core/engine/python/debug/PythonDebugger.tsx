import React, { useState } from 'react';
import { 
  PlayIcon, 
  ArrowRightIcon,
  StopIcon,
  EyeIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';
import { useLanguageStore } from '../../../store/languageStore';

interface DebugState {
  isDebugging: boolean;
  isPaused: boolean;
  currentLine: number;
  variables: { [key: string]: any };
  callStack: string[];
  output: string[];
  error: string | null;
}

interface PythonDebuggerProps {
  code: string;
  onDebugStateChange: (state: DebugState) => void;
}

export const PythonDebugger: React.FC<PythonDebuggerProps> = ({
  code,
  onDebugStateChange
}) => {
  const [debugState, setDebugState] = useState<DebugState>({
    isDebugging: false,
    isPaused: false,
    currentLine: 0,
    variables: {},
    callStack: [],
    output: [],
    error: null
  });
  const { t } = useLanguageStore();

  const [breakpoints] = useState<Set<number>>(new Set());

  // Simulated step-by-step execution
  const startDebugging = async () => {
    try {
      const newState = { ...debugState, isDebugging: true, currentLine: 1, isPaused: true };
      setDebugState(newState);
      onDebugStateChange(newState);
      
      // Parse code to extract variables and simulate execution
      await simulateExecution();
    } catch (error) {
      const errorState = { 
        ...debugState, 
        error: error instanceof Error ? error.message : 'Debug error'
      };
      setDebugState(errorState);
      onDebugStateChange(errorState);
    }
  };

  const simulateExecution = async () => {
    const lines = code.split('\n').filter(line => line.trim());
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;
      
      // Check for breakpoint or step mode
      if (breakpoints.has(lineNum) || debugState.isPaused) {
        const currentState = {
          ...debugState,
          currentLine: lineNum,
          isPaused: true,
          variables: extractVariables(lines.slice(0, i + 1)),
          callStack: extractCallStack(lines.slice(0, i + 1))
        };
        setDebugState(currentState);
        onDebugStateChange(currentState);
        
        // Wait for user to step or continue
        await waitForUserAction();
      }
      
      // Simulate line execution
      await simulateLineExecution(line, lineNum);
    }
  };

  const simulateLineExecution = async (line: string, lineNum: number) => {
    // Simulate variable assignments
    const assignmentMatch = line.match(/^\s*([a-zA-Z_]\w*)\s*=\s*(.+)/);
    if (assignmentMatch) {
      const [, varName, value] = assignmentMatch;
      
      // Try to evaluate the value (simplified)
      let evaluatedValue: any;
      try {
        // Simple evaluation for basic types
        if (value.match(/^\d+$/)) {
          evaluatedValue = parseInt(value);
        } else if (value.match(/^\d+\.\d+$/)) {
          evaluatedValue = parseFloat(value);
        } else if (value.match(/^["'].*["']$/)) {
          evaluatedValue = value.slice(1, -1);
        } else {
          evaluatedValue = value; // Keep as string for complex expressions
        }
      } catch {
        evaluatedValue = value;
      }

      const newVariables = { ...debugState.variables, [varName]: evaluatedValue };
      const newState = { ...debugState, variables: newVariables, currentLine: lineNum };
      setDebugState(newState);
      onDebugStateChange(newState);
    }
    
    // Simulate print statements
    if (line.includes('print(')) {
      const printMatch = line.match(/print\(([^)]+)\)/);
      if (printMatch) {
        const printArg = printMatch[1];
        let printValue = printArg;
        
        // Replace variables with their values
        Object.entries(debugState.variables).forEach(([varName, value]) => {
          printValue = printValue.replace(new RegExp(`\\b${varName}\\b`, 'g'), String(value));
        });
        
        const newOutput = [...debugState.output, printValue.replace(/['"]/g, '')];
        const newState = { ...debugState, output: newOutput };
        setDebugState(newState);
        onDebugStateChange(newState);
      }
    }
  };

  const extractVariables = (lines: string[]): { [key: string]: any } => {
    const variables: { [key: string]: any } = {};
    
    lines.forEach(line => {
      const assignmentMatch = line.match(/^\s*([a-zA-Z_]\w*)\s*=\s*(.+)/);
      if (assignmentMatch) {
        const [, varName, value] = assignmentMatch;
        
        // Simple type inference
        if (value.match(/^\d+$/)) {
          variables[varName] = parseInt(value);
        } else if (value.match(/^\d+\.\d+$/)) {
          variables[varName] = parseFloat(value);
        } else if (value.match(/^["'].*["']$/)) {
          variables[varName] = value.slice(1, -1);
        } else {
          variables[varName] = value;
        }
      }
    });
    
    return variables;
  };

  const extractCallStack = (lines: string[]): string[] => {
    const stack: string[] = [];
    
    lines.forEach(line => {
      if (line.includes('def ')) {
        const funcMatch = line.match(/def\s+([a-zA-Z_]\w*)/);
        if (funcMatch) {
          stack.push(funcMatch[1]);
        }
      }
    });
    
    return stack.length > 0 ? stack : ['<main>'];
  };

  const waitForUserAction = (): Promise<void> => {
    return new Promise(resolve => {
      const checkForAction = () => {
        if (!debugState.isPaused) {
          resolve();
        } else {
          setTimeout(checkForAction, 100);
        }
      };
      checkForAction();
    });
  };

  const stepNext = () => {
    const newState = { ...debugState, isPaused: false };
    setDebugState(newState);
    onDebugStateChange(newState);
  };

  const continueExecution = () => {
    const newState = { ...debugState, isPaused: false };
    setDebugState(newState);
    onDebugStateChange(newState);
  };

  const stopDebugging = () => {
    const newState: DebugState = {
      isDebugging: false,
      isPaused: false,
      currentLine: 0,
      variables: {},
      callStack: [],
      output: [],
      error: null
    };
    setDebugState(newState);
    onDebugStateChange(newState);
  };

  return (
    <div className="bg-white rounded-lg shadow border">
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BugAntIcon className="h-5 w-5 text-blue-600" />
          <span className="font-medium text-sm">Python Debugger</span>
        </div>
        <div className="flex items-center gap-2">
          {!debugState.isDebugging ? (
            <button
              onClick={startDebugging}
              className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
            >
              <PlayIcon className="h-4 w-4" />
              {t.debug}
            </button>
          ) : (
            <>
              {debugState.isPaused ? (
                <>
                  <button
                    onClick={stepNext}
                    className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                    {t.step}
                  </button>
                  <button
                    onClick={continueExecution}
                    className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                  >
                    <PlayIcon className="h-4 w-4" />
                    {t.continue}
                  </button>
                </>
              ) : (
                <div className="text-sm text-blue-600 animate-pulse">{t.executing}</div>
              )}
              <button
                onClick={stopDebugging}
                className="flex items-center gap-1 px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
              >
                <StopIcon className="h-4 w-4" />
                {t.stop}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Variables */}
        <div>
          <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
            <EyeIcon className="h-4 w-4" />
            {t.variables}
          </h3>
          <div className="bg-gray-50 rounded p-3 text-sm">
            {Object.keys(debugState.variables).length === 0 ? (
              <span className="text-gray-500">{t.noVariables}</span>
            ) : (
              <div className="space-y-1">
                {Object.entries(debugState.variables).map(([name, value]) => (
                  <div key={name} className="flex justify-between">
                    <span className="font-mono text-blue-600">{name}:</span>
                    <span className="font-mono">{JSON.stringify(value)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Call Stack */}
        <div>
          <h3 className="font-medium text-sm mb-2">Call Stack</h3>
          <div className="bg-gray-50 rounded p-3 text-sm">
            {debugState.callStack.map((func, index) => (
              <div key={index} className="font-mono text-purple-600">
                {func}
              </div>
            ))}
          </div>
        </div>

        {/* Output */}
        {debugState.output.length > 0 && (
          <div>
            <h3 className="font-medium text-sm mb-2">Debug Output</h3>
            <div className="bg-black text-green-400 rounded p-3 text-sm font-mono">
              {debugState.output.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        )}

        {/* Current Line */}
        {debugState.isDebugging && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
            <div className="text-sm">
              <strong>Current Line:</strong> {debugState.currentLine}
            </div>
          </div>
        )}

        {/* Error */}
        {debugState.error && (
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <div className="text-sm text-red-700">
              <strong>Error:</strong> {debugState.error}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};