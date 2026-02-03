import React, { useState, useEffect, useCallback } from 'react';
import { 
  ExclamationTriangleIcon, 
  CheckCircleIcon,
  InformationCircleIcon,
  LightBulbIcon,
  ClockIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { useLanguageStore } from '../../../store/languageStore';
import { ErrorCodes, ErrorCode } from '../../types/ErrorCodes';

interface AnalysisResult {
  type: 'error' | 'warning' | 'info' | 'suggestion';
  line: number;
  code: ErrorCode;
  params?: Record<string, string | number>;
  category: 'syntax' | 'logic' | 'style' | 'performance' | 'best-practice';
  severity: 'high' | 'medium' | 'low';
  suggestion?: string;
}

interface CodeAnalyzerProps {
  code: string;
  language: 'python' | 'java';
  onAnalysisComplete?: (results: AnalysisResult[]) => void;
  results?: AnalysisResult[]; // Allow external results injection
}

export const CodeAnalyzer: React.FC<CodeAnalyzerProps> = ({
  code,
  language,
  onAnalysisComplete,
  results: externalResults
}) => {
  const [internalAnalysis, setInternalAnalysis] = useState<AnalysisResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { t, currentLang } = useLanguageStore();

  // Use external results if provided, otherwise internal
  const analysis = externalResults || internalAnalysis;

  const analyzeCode = useCallback(async () => {
    // If we have external results, do nothing internal
    if (externalResults) return;

    setIsAnalyzing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const results: AnalysisResult[] = [];
    const lines = code.split('\n');

    // Python-specific analysis
    if (language === 'python') {
      lines.forEach((line, index) => {
        const lineNum = index + 1;
        const trimmedLine = line.trim();

        // Syntax checks
        if (trimmedLine.includes('=') && !trimmedLine.includes('==') && !trimmedLine.includes('!=')) {
          const assignmentMatch = trimmedLine.match(/^([a-zA-Z_][a-zA-Z0-9_-]*)\s*=\s*(.+)/);
          if (assignmentMatch) {
            const [, varName] = assignmentMatch;
            
            // Variable naming convention
            const isSnakeCase = /^[a-z0-9_]+$/.test(varName);
            const isDunder = varName.startsWith('__') && varName.endsWith('__');
            
            if (!isSnakeCase && !isDunder && !varName.startsWith('_')) {
              results.push({
                type: 'warning',
                line: lineNum,
                code: 'STYLE_SNAKE_CASE_VAR',
                params: { name: varName },
                category: 'style',
                severity: 'low'
              });
            }
            
            if (varName.startsWith('_') && !varName.startsWith('__')) {
                results.push({
                  type: 'info',
                  line: lineNum,
                  code: 'STYLE_PRIVATE_VAR',
                  params: { name: varName },
                  category: 'best-practice',
                  severity: 'low'
                });
            }
            
            // Unused assignment detection
            const usageRegex = new RegExp(`\\b${varName}\\b`);
            const varUsedLater = lines.slice(index + 1).some(laterLine => 
              usageRegex.test(laterLine) && !laterLine.trim().startsWith('#')
            );
            
            const isPrintedOnSameLine = trimmedLine.includes('print(') && trimmedLine.includes(varName);

            if (!varUsedLater && !isPrintedOnSameLine && !varName.startsWith('_')) {
              results.push({
                type: 'warning',
                line: lineNum,
                code: 'LOGIC_UNUSED_VAR',
                params: { name: varName },
                category: 'logic',
                severity: 'medium'
              });
            }
          }
        }

        // Function definition checks
        if (trimmedLine.startsWith('def ')) {
          const funcMatch = trimmedLine.match(/def\s+([a-zA-Z_]\w*)\s*\(/);
          if (funcMatch) {
            const funcName = funcMatch[1];
            
            // Function naming convention
            if (funcName.includes('-') || /[A-Z]/.test(funcName)) {
              results.push({
                type: 'suggestion',
                line: lineNum,
                code: 'STYLE_SNAKE_CASE_FUNC',
                params: { name: funcName },
                category: 'style',
                severity: 'low'
              });
            }
            
            // Docstring check
            const nextNonEmptyLine = lines.slice(index + 1).find(l => l.trim());
            if (nextNonEmptyLine && !nextNonEmptyLine.trim().startsWith('"""') && !nextNonEmptyLine.trim().startsWith("'''")) {
              results.push({
                type: 'info',
                line: lineNum,
                code: 'BEST_PRACTICE_DOCSTRING',
                params: { name: funcName },
                category: 'best-practice',
                severity: 'low'
              });
            }
          }
        }

        // Import organization
        if (trimmedLine.startsWith('import ') || trimmedLine.startsWith('from ')) {
          const codeBeforeImports = lines.slice(0, index).some(earlierLine => 
            !earlierLine.trim().startsWith('#') && 
            !earlierLine.trim().startsWith('import ') && 
            !earlierLine.trim().startsWith('from ') &&
            earlierLine.trim() !== ''
          );
          
          if (codeBeforeImports) {
            results.push({
              type: 'warning',
              line: lineNum,
              code: 'STYLE_IMPORTS_TOP',
              category: 'style',
              severity: 'medium'
            });
          }
        }

        // Complexity checks
        const indentLevel = (line.match(/^ */)?.[0].length || 0) / 4;
        if (indentLevel > 3) {
          results.push({
            type: 'warning',
            line: lineNum,
            code: 'LOGIC_DEEP_NESTING',
            category: 'logic',
            severity: 'medium'
          });
        }

        // Performance suggestions
        if (trimmedLine.includes('for ') && trimmedLine.includes('range(len(')) {
          results.push({
            type: 'suggestion',
            line: lineNum,
            code: 'PERF_RANGE_LEN',
            category: 'performance',
            severity: 'low'
          });
        }

        // Common mistakes
        if (trimmedLine.includes('=') && !trimmedLine.includes('==') && 
            (trimmedLine.includes('if ') || trimmedLine.includes('while '))) {
          results.push({
            type: 'error',
            line: lineNum,
            code: 'LOGIC_ASSIGN_IN_COND',
            category: 'logic',
            severity: 'high'
          });
        }

        // Print statement optimization - only flag once
        const printCount = lines.filter(l => l.includes('print(')).length;
        if (trimmedLine.includes('print(') && printCount > 5) {
          const alreadyFlagged = results.some(r => r.code === 'BEST_PRACTICE_MANY_PRINT');
          if (!alreadyFlagged) {
            results.push({
              type: 'info',
              line: lineNum,
              code: 'BEST_PRACTICE_MANY_PRINT',
              category: 'best-practice',
              severity: 'low'
            });
          }
        }
      });
    }

    // General code quality checks
    const totalLines = lines.filter(line => line.trim() && !line.trim().startsWith('#')).length;
    const commentLines = lines.filter(line => line.trim().startsWith('#')).length;
    const commentRatio = totalLines > 0 ? commentLines / totalLines : 0;

    if (totalLines > 5 && commentRatio < 0.1) {
      results.push({
        type: 'suggestion',
        line: 1,
        code: 'BEST_PRACTICE_COMMENTS',
        category: 'best-practice',
        severity: 'low'
      });
    }

    if (totalLines > 50) {
      results.push({
        type: 'info',
        line: 1,
        code: 'FILE_TOO_LARGE',
        category: 'logic',
        severity: 'low'
      });
    }

    setInternalAnalysis(results);
    if (onAnalysisComplete) onAnalysisComplete(results);
    setIsAnalyzing(false);
  }, [code, language, onAnalysisComplete]);

  useEffect(() => {
    if (code.trim()) {
      analyzeCode();
    }
  }, [code, analyzeCode]);

  const getIcon = (type: AnalysisResult['type']) => {
    switch (type) {
      case 'error':
        return <ExclamationTriangleIcon className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <InformationCircleIcon className="h-4 w-4 text-blue-500" />;
      case 'suggestion':
        return <LightBulbIcon className="h-4 w-4 text-green-500" />;
    }
  };

  const getCategoryIcon = (category: AnalysisResult['category']) => {
    switch (category) {
      case 'performance':
        return <ClockIcon className="h-3 w-3" />;
      case 'best-practice':
        return <CheckCircleIcon className="h-3 w-3" />;
      default:
        return <CogIcon className="h-3 w-3" />;
    }
  };

  const groupedAnalysis = analysis.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, AnalysisResult[]>);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const calculateScore = () => {
    const errorPenalty = analysis.filter(a => a.type === 'error').length * 20;
    const warningPenalty = analysis.filter(a => a.type === 'warning').length * 10;
    const suggestionPenalty = analysis.filter(a => a.type === 'suggestion').length * 5;
    
    return Math.max(0, 100 - errorPenalty - warningPenalty - suggestionPenalty);
  };

  const score = calculateScore();

  return (
    <div className="bg-white rounded-lg shadow border">
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CogIcon className="h-5 w-5 text-purple-600" />
          <span className="font-medium text-sm">{t.codeAnalysisTitle}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm">
            {t.qualityScore}: <span className={`font-bold ${getScoreColor(score)}`}>{score}/100</span>
          </div>
          {isAnalyzing && <div className="text-xs text-blue-600 animate-pulse">{t.analyzing}</div>}
        </div>
      </div>

      <div className="p-4">
        {analysis.length === 0 && !isAnalyzing ? (
          <div className="text-center py-8 text-gray-500">
            <CheckCircleIcon className="h-12 w-12 mx-auto mb-2 text-green-500" />
            <p>{t.feedbackSuccess}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(groupedAnalysis).map(([category, results]) => (
              <div key={category}>
                <h3 className="font-medium text-sm mb-2 flex items-center gap-2 capitalize">
                  {getCategoryIcon(category as AnalysisResult['category'])}
                  {category.replace('-', ' ')} ({results.length})
                </h3>
                <div className="space-y-2">
                  {results.map((result, index) => {
                    // Translate the error code to a user-friendly message
                    let displayMessage = (t.errors as any)[result.code] || result.code;
                    
                    // Interpolate parameters if any
                    if (result.params) {
                        Object.entries(result.params).forEach(([key, value]) => {
                            displayMessage = displayMessage.replace(`{${key}}`, String(value));
                        });
                    }

                    return (
                      <div key={index} className={`p-3 rounded border-l-4 ${
                        result.type === 'error' ? 'bg-red-50 border-red-400' :
                        result.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                        result.type === 'info' ? 'bg-blue-50 border-blue-400' :
                        'bg-green-50 border-green-400'
                      }`}>
                        <div className="flex items-start gap-2">
                          {getIcon(result.type)}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{t.lineLabel} {result.line}</span>
                              <span className={`text-xs px-2 py-1 rounded ${
                                result.severity === 'high' ? 'bg-red-100 text-red-700' :
                                result.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {result.severity}
                              </span>
                            </div>
                            <p className="text-sm mt-1">{displayMessage}</p>
                            {result.suggestion && (
                              <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                                <LightBulbIcon className="h-3 w-3 text-amber-500" />
                                {result.suggestion}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};