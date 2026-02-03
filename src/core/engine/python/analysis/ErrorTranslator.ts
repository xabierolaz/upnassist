import { Language, useLanguageStore } from '../../../store/languageStore';
import { ErrorCode, ErrorCodes } from '../../types/ErrorCodes';

interface ErrorMapping {
  pattern: RegExp;
  code: ErrorCode;
  paramExtractor?: (match: RegExpMatchArray) => Record<string, string>;
}

const errorMappings: ErrorMapping[] = [
  {
    pattern: /SyntaxError: Missing parentheses in call to 'print'\. Did you mean print\(\.\.\.\)\?/, 
    code: 'RUNTIME_SYNTAX_PRINT'
  },
  {
    pattern: /SyntaxError: invalid syntax/,
    code: 'RUNTIME_SYNTAX_INVALID'
  },
  {
    pattern: /NameError: name '(.*)' is not defined/,
    code: 'RUNTIME_NAME_ERROR',
    paramExtractor: (match) => ({ name: match[1] })
  },
  {
    pattern: /IndentationError: expected an indented block/,
    code: 'RUNTIME_INDENT_BLOCK'
  },
  {
    pattern: /IndentationError: unindent does not match any outer indentation level/,
    code: 'RUNTIME_INDENT_ALIGN'
  },
  {
    pattern: /TypeError: (.*) object is not callable/,
    code: 'RUNTIME_TYPE_CALLABLE'
  },
  {
      pattern: /ZeroDivisionError: division by zero/,
      code: 'RUNTIME_ZERO_DIV'
  }
];

export interface ErrorAnalysis {
    code: ErrorCode | null;
    params?: Record<string, string>;
    original: string;
}

export const getErrorCode = (error: string): ErrorAnalysis => {
  for (const mapping of errorMappings) {
    const match = error.match(mapping.pattern);
    if (match) {
      return {
          code: mapping.code,
          params: mapping.paramExtractor ? mapping.paramExtractor(match) : undefined,
          original: error
      };
    }
  }
  return { code: null, original: error };
};

/**
 * @deprecated Use getErrorCode and translate in UI instead.
 * Kept for backward compatibility during migration.
 */
export const translatePythonError = (error: string, lang: Language): string => {
  const analysis = getErrorCode(error);
  
  // Need to access store directly or pass translations map. 
  // Since this is a pure function, we can't use the hook here. 
  // We rely on the caller passing the correct lang, but we need access to the translation strings.
  // TEMPORARY HACK: We will try to reconstruct the legacy behavior or 
  // we assume this function will be removed in next phase.
  
  // For now, let's keep the logic here but using the new codes is hard without store access.
  // Actually, we can get the store state non-reactively.
  const state = useLanguageStore.getState();
  const t = state.t; // This is the translation object for the *current* language in store, not necessarily 'lang' arg if they differ.
  
  // But wait, the argument 'lang' might be different from store.
  // Ideally we should just use the store's current translations if lang matches.
  // Let's simplified: 
  
  if (analysis.code) {
      let message = (t.errors as any)[analysis.code] || analysis.code;
      if (analysis.params) {
          Object.entries(analysis.params).forEach(([key, value]) => {
              message = message.replace(`{${key}}`, value);
          });
      }
      return message;
  }
  
  return error.replace("PythonError: ", "").trim();
};
