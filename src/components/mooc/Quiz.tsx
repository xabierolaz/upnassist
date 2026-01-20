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
          <div key={q.id} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 border border-gray-100">
            <div className="bg-gray-50 p-6 border-b border-gray-200">
                <h4 className="font-bold text-gray-800 text-lg">
                    {index + 1}. {getLocalizedText(q.prompt, currentLang)}
                </h4>
            </div>
            
            <div className="p-6 space-y-3">
                {q.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    let optionClass = "w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ";
                    
                    if (isChecked) {
                        if (opt.isCorrect) {
                            optionClass += "bg-green-50 border-green-500 text-green-900 ring-1 ring-green-500";
                        } else if (isSelected && !opt.isCorrect) {
                            optionClass += "bg-red-50 border-red-500 text-red-900 ring-1 ring-red-500";
                        } else {
                            optionClass += "bg-white border-gray-200 text-gray-400 opacity-60";
                        }
                    } else {
                        if (isSelected) {
                            optionClass += "bg-blue-50 border-blue-500 text-blue-900 shadow-md transform scale-[1.01]";
                        } else {
                            optionClass += "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
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
                            {isChecked && opt.isCorrect && <span className="text-green-600 font-bold text-xl">✓</span>}
                            {isChecked && isSelected && !opt.isCorrect && <span className="text-red-600 font-bold text-xl">✗</span>}
                        </button>
                    );
                })}
            </div>

            <div className="p-6 pt-0 flex justify-end">
                {!isChecked ? (
                    <button
                        onClick={() => handleCheck(q.id)}
                        disabled={!selectedOptionId}
                        className={`px-6 py-2.5 rounded-lg font-bold uppercase tracking-wide transition-colors ${
                            selectedOptionId 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        {currentLang === 'ENG' ? 'Check' : (currentLang === 'CAS' ? 'Comprobar' : 'Egiaztatu')}
                    </button>
                ) : (
                    <div className={`text-base p-4 rounded-lg w-full border ${isCorrect ? 'bg-green-50 border-green-200 text-green-900' : 'bg-red-50 border-red-200 text-red-900'}`}>
                        <strong>{isCorrect ? (currentLang === 'ENG' ? 'Correct!' : '¡Correcto!') : (currentLang === 'ENG' ? 'Incorrect' : 'Incorrecto')}</strong>
                        {selectedOption?.feedback && (
                            <p className="mt-2">{getLocalizedText(selectedOption.feedback, currentLang)}</p>
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
