import React, { useRef, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import type { editor } from 'monaco-editor';
import type { LintError } from './PythonRunner';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  theme?: 'light' | 'dark';
  readOnly?: boolean;
  minHeight?: string; // Mantenemos la prop en la interfaz por compatibilidad
  lintErrors?: LintError[];
  fontSize?: number;
}

// Configure Monaco Editor with Python language support and autocomplete
const configureMonaco = (monaco: typeof import('monaco-editor')) => {
  // Python language configuration
  monaco.languages.setLanguageConfiguration('python', {
    autoClosingPairs: [
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '(', close: ')' },
      { open: '[', close: ']' },
      { open: '{', close: '}' },
    ],
    brackets: [
      ['(', ')'],
      ['[', ']'],
      ['{', '}'],
    ],
    indentationRules: {
      increaseIndentPattern: /^.*:\s*$/, 
      decreaseIndentPattern: /^\s*(return|break|continue|raise|pass)\b.*$/, 
    },
  });

  // Python snippets and autocomplete
  monaco.languages.registerCompletionItemProvider('python', {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      
      const suggestions = [
        // Python built-in functions
        {
          label: 'print',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'print($1)',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Print objects to the text stream file',
          range: range
        },
        {
          label: 'input',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'input($1)',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Read a string from standard input'
        },
        {
          label: 'len',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'len($1)',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Return the length of an object'
        },
        {
          label: 'range',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'range($1)',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Return an object which is an iterator of arithmetic progressions'
        },
        // Python keywords
        {
          label: 'def',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'def ${1:function_name}(${2:params}):\n    ${3:pass}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Define a function'
        },
        {
          label: 'class',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'class ${1:ClassName}:\n    def __init__(self${2:, params}):\n        ${3:pass}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Define a class'
        },
        {
          label: 'if',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'if ${1:condition}:\n    ${2:pass}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Conditional statement'
        },
        {
          label: 'for',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'for ${1:item} in ${2:iterable}:\n    ${3:pass}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'For loop'
        },
        {
          label: 'while',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'while ${1:condition}:\n    ${2:pass}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'While loop'
        },
        {
          label: 'try',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'try:\n    ${1:pass}\nexcept ${2:Exception} as e:\n    ${3:pass}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Try-except block'
        }
      ];

      // Add range to all suggestions
      const completionItems = suggestions.map(suggestion => ({ ...suggestion, range }));
      return { suggestions: completionItems };
    }
  });

  // Python hover provider
  monaco.languages.registerHoverProvider('python', {
    provideHover: (model, position) => {
      const word = model.getWordAtPosition(position);
      if (!word) return null;

      const pythonDocs: { [key: string]: string } = {
        'print': 'print(*values, sep=" ", end="\n", file=sys.stdout, flush=False)\n\nPrint objects to the text stream file',
        'input': 'input([prompt])\n\nRead a string from standard input. The trailing newline is stripped.',
        'len': 'len(s)\n\nReturn the length (the number of items) of an object.',
        'range': 'range(stop) -> range object\nrange(start, stop[, step]) -> range object\n\nCreate an object which is an iterator of arithmetic progressions',
        'str': 'str(object="") -> str\nstr(bytes_or_buffer[, encoding[, errors]]) -> str\n\nCreate a new string object',
        'int': 'int([x]) -> integer\nint(x, base=10) -> integer\n\nConvert a number or string to an integer',
        'float': 'float([x]) -> floating point number\n\nConvert a string or number to a floating point number',
        'list': 'list() -> new empty list\nlist(iterable) -> new list initialized from iterable\'s items',
        'dict': 'dict() -> new empty dictionary\ndict(mapping) -> new dictionary initialized from a mapping object\'s (key, value) pairs'
      };

      if (pythonDocs[word.word]) {
        return {
          range: new monaco.Range(
            position.lineNumber,
            word.startColumn,
            position.lineNumber,
            word.endColumn
          ),
          contents: [
            { value: '**Python Built-in**' },
            { value: '```python\n' + pythonDocs[word.word] + '\n```' }
          ]
        };
      }

      return null;
    }
  });
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language = 'python',
  theme = 'light',
  readOnly = false,
  fontSize = 14,
  lintErrors,
  // minHeight is intentionally ignored/removed from destructuring to avoid unused var error
}) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import('monaco-editor') | null>(null);

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor, monaco: typeof import('monaco-editor')) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    configureMonaco(monaco);

    // Configure editor options for better Python experience
    editor.updateOptions({
      fontSize: fontSize,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      minimap: { enabled: false },
      lineNumbers: 'on',
      glyphMargin: false,
      folding: true,
      lineDecorationsWidth: 10,
      lineNumbersMinChars: 3,
      automaticLayout: true,
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      tabSize: 4,
      insertSpaces: true,
      autoIndent: 'full',
      formatOnPaste: true,
      formatOnType: true,
      suggestOnTriggerCharacters: true,
      acceptSuggestionOnEnter: 'on',
      quickSuggestions: {
        other: true,
        comments: false,
        strings: false
      },
      parameterHints: {
        enabled: true
      },
      hover: {
        enabled: true
      }
    });
  };

  const handleChange = (value: string | undefined) => {
    onChange(value || '');
  };

  // Apply lint errors
  useEffect(() => {
    if (editorRef.current && monacoRef.current && lintErrors !== undefined) {
      const model = editorRef.current.getModel();
      if (model) {
        const markers = lintErrors.map(err => ({
          startLineNumber: err.line,
          startColumn: err.column,
          endLineNumber: err.line,
          endColumn: model.getLineContent(err.line).length + 1,
          message: err.message,
          severity: err.type === 'error' 
            ? monacoRef.current!.MarkerSeverity.Error 
            : monacoRef.current!.MarkerSeverity.Warning
        }));
        monacoRef.current.editor.setModelMarkers(model, 'owner', markers);
      }
    }
  }, [lintErrors]);

  return (
    <div className="h-full w-full border-t border-gray-200">
      <MonacoEditor
        height="100%"
        language={language}
        value={value}
        theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        options={{
          readOnly,
          contextmenu: true,
          selectOnLineNumbers: true,
          automaticLayout: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          renderLineHighlight: 'all',
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
          }
        }}
      />
    </div>
  );
};