import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CodeAnalyzer } from './CodeAnalyzer';
import { ErrorCodes } from '../../types/ErrorCodes';

// Mock language store with explicit error mappings for testing
vi.mock('../../../store/languageStore', () => ({
  useLanguageStore: () => ({
    currentLang: 'ENG',
    t: {
        codeAnalysisTitle: 'Code Analysis',
        qualityScore: 'Quality Score',
        analyzing: 'Analyzing...', 
        lineLabel: 'Line',
        feedbackSuccess: 'Excellent! All tests passed', // Added
        feedbackReview: 'Review needed', // Added
        errors: {
            [ErrorCodes.STYLE_SNAKE_CASE_VAR]: "Variable '{name}' should use snake_case.",
            [ErrorCodes.LOGIC_UNUSED_VAR]: "Variable '{name}' is unused.",
            [ErrorCodes.LOGIC_ASSIGN_IN_COND]: "Assignment in conditional.",
            [ErrorCodes.LOGIC_DEEP_NESTING]: "Deep nesting detected.",
            [ErrorCodes.PERF_RANGE_LEN]: "Use direct iteration.",
            [ErrorCodes.BEST_PRACTICE_MANY_PRINT]: "Too many prints.",
            [ErrorCodes.BEST_PRACTICE_COMMENTS]: "Add comments.",
            [ErrorCodes.FILE_TOO_LARGE]: "File too large.",
            [ErrorCodes.STYLE_SNAKE_CASE_FUNC]: "Function '{name}' should use snake_case.",
            [ErrorCodes.BEST_PRACTICE_DOCSTRING]: "Missing docstring.",
            [ErrorCodes.STYLE_IMPORTS_TOP]: "Imports at top.",
            [ErrorCodes.STYLE_PRIVATE_VAR]: "Private variable.",
            [ErrorCodes.AST_TUPLE_ITEM_ASSIGN]: "Tuples are immutable.",
        }
    },
  }),
}));

describe('CodeAnalyzer Component', () => {
  it('should detect snake_case violations for variables', async () => {
    const code = 'MyVariable = 10';
    const onComplete = vi.fn();
    
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={onComplete} />);

    await waitFor(() => {
      expect(onComplete).toHaveBeenCalled();
    });

    const results = onComplete.mock.calls[0][0];
    // Verify Code
    expect(results.some((r: any) => r.code === ErrorCodes.STYLE_SNAKE_CASE_VAR)).toBe(true);
    // Verify UI Translation
    expect(screen.getByText("Variable 'MyVariable' should use snake_case.")).toBeInTheDocument();
  });

  it('should detect unused variables', async () => {
    const code = `x = 10
y = 20
print(y)`;
    const onComplete = vi.fn();
    
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={onComplete} />);

    await waitFor(() => {
        const results = onComplete.mock.calls[0][0];
        expect(results.some((r: any) => r.code === ErrorCodes.LOGIC_UNUSED_VAR)).toBe(true);
        expect(screen.getByText("Variable 'x' is unused.")).toBeInTheDocument();
    });
  });

  it('should detect assignment in conditionals', async () => {
    const code = `if x = 10:
    print(x)`;
    const onComplete = vi.fn();
    
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={onComplete} />);

    await waitFor(() => {
        expect(onComplete).toHaveBeenCalled();
        const results = onComplete.mock.calls[0][0];
        expect(results.some((r: any) => r.code === ErrorCodes.LOGIC_ASSIGN_IN_COND)).toBe(true);
        expect(screen.getByText("Assignment in conditional.")).toBeInTheDocument();
    });
  });

  it('should detect deep nesting', async () => {
    const code = `if a:
    if b:
        if c:
            if d:
                print(x)`;
    const onComplete = vi.fn();
    
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={onComplete} />);

    await waitFor(() => {
        expect(screen.getByText("Deep nesting detected.")).toBeInTheDocument();
    });
  });

  it('should calculate score correctly', async () => {
    const code = 'if x = 10: print(x)'; // 1 error (-20)
    const onComplete = vi.fn();
    
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={onComplete} />);

    await waitFor(() => {
      expect(screen.getByText('80/100')).toBeInTheDocument();
    });
  });

  it('should detect performance issues', async () => {
    const code = 'for i in range(len(mylist)): print(i)';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Use direct iteration.")).toBeInTheDocument();
    });
  });

  it('should detect many print statements', async () => {
    const code = 'print(1)\nprint(2)\nprint(3)\nprint(4)\nprint(5)\nprint(6)';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Too many prints.")).toBeInTheDocument();
    });
  });

  it('should suggest adding comments for longer code with low comment ratio', async () => {
    const code = 'x=1\ny=2\nz=3\na=4\nb=5\nc=6';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Add comments.")).toBeInTheDocument();
    });
  });

  it('should suggest breaking down large files', async () => {
    const code = 'pass\n'.repeat(55);
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("File too large.")).toBeInTheDocument();
    });
  });

  it('should skip python logic for other languages', async () => {
    const code = 'MyVariable = 10'; // Snake case violation in Python
    const onComplete = vi.fn();
    render(<CodeAnalyzer code={code} language="java" onAnalysisComplete={onComplete} />);
    await waitFor(() => {
      expect(onComplete).toHaveBeenCalled();
    });
    const lastCall = onComplete.mock.calls[onComplete.mock.calls.length - 1][0];
    expect(lastCall.length).toBe(0);
  });

  it('should detect function naming violations', async () => {
    const code = 'def MyFunction(): pass';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Function 'MyFunction' should use snake_case.")).toBeInTheDocument();
    });
  });

  it('should detect missing docstrings', async () => {
    const code = 'def my_function():\n    pass';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Missing docstring.")).toBeInTheDocument();
    });
  });

  it('should detect imports not at the top', async () => {
    const code = 'x = 10\nimport os';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Imports at top.")).toBeInTheDocument();
    });
  });

  it('should detect private variables', async () => {
    const code = '_private_var = 10';
    render(<CodeAnalyzer code={code} language="python" onAnalysisComplete={vi.fn()} />);
    await waitFor(() => {
      expect(screen.getByText("Private variable.")).toBeInTheDocument();
    });
  });

    it('should show "Great code" message when no issues found', () => {
        render(<CodeAnalyzer code="x = 1" results={[]} language="python" />);
        expect(screen.getByText('Excellent! All tests passed')).toBeInTheDocument();
    });

    it('should display Pareto expansion errors (e.g. Tuple Assignment)', () => {
        const warnings = [{ 
            code: 'AST_TUPLE_ITEM_ASSIGN', 
            params: {},
            type: 'error' as const,
            line: 1,
            category: 'logic' as const,
            severity: 'high' as const
        }];
        render(<CodeAnalyzer code="t[0] = 1" language="python" results={warnings as any} />);
        
        expect(screen.getByText("Tuples are immutable.")).toBeInTheDocument();
    });
});