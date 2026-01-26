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

interface AnalysisResult {
  type: 'error' | 'warning' | 'info' | 'suggestion';
  line: number;
  message: string;
  category: 'syntax' | 'logic' | 'style' | 'performance' | 'best-practice';
  severity: 'high' | 'medium' | 'low';
  suggestion?: string;
}

interface CodeAnalyzerProps {
  code: string;
  language: 'python' | 'java';
  onAnalysisComplete: (results: AnalysisResult[]) => void;
}

export const CodeAnalyzer: React.FC<CodeAnalyzerProps> = ({
  code,
  language,
  onAnalysisComplete
}) => {
  const [analysis, setAnalysis] = useState<AnalysisResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { t, currentLang } = useLanguageStore();

  const analyzeCode = useCallback(async () => {
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
          const assignmentMatch = trimmedLine.match(/([a-zA-Z_]\w*)\s*=\s*(.+)/);
          if (assignmentMatch) {
            const [, varName] = assignmentMatch;
            
            // Variable naming convention
            if (varName.includes('-') || varName.startsWith('_') && !varName.startsWith('__')) {
              results.push({
                type: 'warning',
                line: lineNum,
                message: `Variable '${varName}' should use snake_case naming`,
                category: 'style',
                severity: 'low',
                suggestion: 'Use lowercase letters and underscores for variable names'
              });
            }
            
            // Unused assignment detection
            const varUsedLater = lines.slice(index + 1).some(laterLine => 
              laterLine.includes(varName) && !laterLine.trim().startsWith('#')
            );
            if (!varUsedLater && !trimmedLine.includes('print')) {
              results.push({
                type: 'warning',
                line: lineNum,
                message: `Variable '${varName}' is assigned but never used`,
                category: 'logic',
                severity: 'medium',
                suggestion: 'Remove unused variables or use them in your program'
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
                message: `Function '${funcName}' should use snake_case naming`,
                category: 'style',
                severity: 'low',
                suggestion: 'Use lowercase letters and underscores for function names'
              });
            }
            
            // Docstring check
            const nextNonEmptyLine = lines.slice(index + 1).find(l => l.trim());
            if (nextNonEmptyLine && !nextNonEmptyLine.trim().startsWith('"""') && !nextNonEmptyLine.trim().startsWith("'''")) {
              results.push({
                type: 'info',
                line: lineNum,
                message: `Function '${funcName}' should have a docstring`,
                category: 'best-practice',
                severity: 'low',
                suggestion: 'Add a docstring to describe what the function does'
              });
            }
          }
        }

        // Import organization
        if (trimmedLine.startsWith('import ') || trimmedLine.startsWith('from ')) {
          /* const laterImports = lines.slice(index + 1).some(laterLine => 
            (laterLine.trim().startsWith('import ') || laterLine.trim().startsWith('from ')) &&
            !laterLine.trim().startsWith('#')
          ); */
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
              message: 'Imports should be at the top of the file',
              category: 'style',
              severity: 'medium',
              suggestion: 'Move all imports to the beginning of your file'
            });
          }
        }

        // Complexity checks
        const indentLevel = (line.match(/^ */)?.[0].length || 0) / 4;
        if (indentLevel > 3) {
          results.push({
            type: 'warning',
            line: lineNum,
            message: 'Deep nesting detected (consider refactoring)',
            category: 'logic',
            severity: 'medium',
            suggestion: 'Break down complex nested code into smaller functions'
          });
        }

        // Performance suggestions
        if (trimmedLine.includes('for ') && trimmedLine.includes('range(len(')) {
          results.push({
            type: 'suggestion',
            line: lineNum,
            message: 'Consider using direct iteration instead of range(len())',
            category: 'performance',
            severity: 'low',
            suggestion: 'Use "for item in list:" instead of "for i in range(len(list)):"'
          });
        }

        // Common mistakes
        if (trimmedLine.includes('=') && !trimmedLine.includes('==') && 
            (trimmedLine.includes('if ') || trimmedLine.includes('while '))) {
          results.push({
            type: 'error',
            line: lineNum,
            message: 'Assignment in conditional statement (did you mean ==?)',
            category: 'logic',
            severity: 'high',
            suggestion: 'Use == for comparison, = for assignment'
          });
        }

        // Print statement optimization
        if (trimmedLine.includes('print(') && lines.filter(l => l.includes('print(')).length > 5) {
          results.push({
            type: 'info',
            line: lineNum,
            message: 'Many print statements detected',
            category: 'best-practice',
            severity: 'low',
            suggestion: 'Consider using logging module for better output control'
          });
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
        message: 'Consider adding more comments to explain your code',
        category: 'best-practice',
        severity: 'low',
        suggestion: 'Add comments to explain complex logic and function purposes'
      });
    }

    if (totalLines > 50) {
      results.push({
        type: 'info',
        line: 1,
        message: 'Large file detected - consider breaking into smaller modules',
        category: 'logic',
        severity: 'low',
        suggestion: 'Split large files into smaller, more focused modules'
      });
    }

    setAnalysis(results);
    onAnalysisComplete(results);
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
            <p>{currentLang === 'EUS' ? 'Kode bikaina! Ez da arazorik aurkitu.' : currentLang === 'CAS' ? '¡Gran código! No se han encontrado problemas.' : 'Great code! No issues found.'}</p>
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
                    // Logic to select the localized message
                    const displayMessage = currentLang === 'EUS' ? (result as any).msg_eu || result.message :
                                         currentLang === 'CAS' ? (result as any).msg_es || result.message :
                                         result.message;

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