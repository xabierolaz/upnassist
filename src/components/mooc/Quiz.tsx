import React, { useState } from 'react';
import { QuizQuestion, getLocalizedText } from '../../data/mooc-exercises';
import { useLanguageStore } from '../../stores/languageStore';

interface QuizProps {
  questions: QuizQuestion[];
}

export const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { currentLang } = useLanguageStore();
  // State to track selected option per question: { [questionId]: optionId }
  const [selections, setSelections] = useState<Record<string, string>>({});
  // State to track if answer was checked: { [questionId]: boolean }
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleSelect = (qId: string, oId: string) => {
    if (checked[qId]) return; // Prevent changing after check
    setSelections(prev => ({ ...prev, [qId]: oId }));
  };

  const handleCheck = (qId: string) => {
    if (!selections[qId]) return;
    setChecked(prev => ({ ...prev, [qId]: true }));
  };

  return (
    <div className="my-10 space-y-8">
      {questions.map((q, index) => {
        const selectedOptionId = selections[q.id];
        const isChecked = checked[q.id];
        const selectedOption = q.options.find(o => o.id === selectedOptionId);
        const isCorrect = selectedOption?.isCorrect;

        return (
          <div key={q.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-brand-dark/5 p-4 border-b border-gray-200">
                <h4 className="font-bold text-gray-800 text-lg">
                    {index + 1}. {getLocalizedText(q.prompt, currentLang)}
                </h4>
            </div>
            
            <div className="p-4 space-y-2">
                {q.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    let optionClass = "w-full text-left p-3 rounded border transition-colors flex items-center justify-between ";
                    
                    if (isChecked) {
                        if (opt.isCorrect) {
                            optionClass += "bg-green-100 border-green-500 text-green-900";
                        } else if (isSelected && !opt.isCorrect) {
                            optionClass += "bg-red-100 border-red-500 text-red-900";
                        } else {
                            optionClass += "bg-gray-50 border-gray-200 text-gray-400";
                        }
                    } else {
                        if (isSelected) {
                            optionClass += "bg-blue-50 border-blue-500 text-blue-900 shadow-sm";
                        } else {
                            optionClass += "bg-white border-gray-200 text-gray-700 hover:bg-gray-50";
                        }
                    }

                    return (
                        <button
                            key={opt.id}
                            onClick={() => handleSelect(q.id, opt.id)}
                            disabled={isChecked}
                            className={optionClass}
                        >
                            <span>{getLocalizedText(opt.text, currentLang)}</span>
                            {isChecked && opt.isCorrect && <span className="text-green-600 font-bold">✓</span>}
                            {isChecked && isSelected && !opt.isCorrect && <span className="text-red-600 font-bold">✗</span>}
                        </button>
                    );
                })}
            </div>

            <div className="p-4 pt-0 flex justify-end">
                {!isChecked ? (
                    <button
                        onClick={() => handleCheck(q.id)}
                        disabled={!selectedOptionId}
                        className={`px-4 py-2 rounded font-medium transition-colors ${
                            selectedOptionId 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {currentLang === 'ENG' ? 'Check' : (currentLang === 'CAS' ? 'Comprobar' : 'Egiaztatu')}
                    </button>
                ) : (
                    <div className={`text-sm p-3 rounded w-full ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        <strong>{isCorrect ? (currentLang === 'ENG' ? 'Correct!' : '¡Correcto!') : (currentLang === 'ENG' ? 'Incorrect' : 'Incorrecto')}</strong>
                        {selectedOption?.feedback && (
                            <p className="mt-1">{getLocalizedText(selectedOption.feedback, currentLang)}</p>
                        )}
                    </div>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
