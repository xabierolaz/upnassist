import React from 'react';
import { LightBulbIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useLanguageStore } from '../../../stores/languageStore';

interface HintsSystemProps {
  hints: string[];
  hintsUsed: number;
  showHints: boolean;
  onUseHint: () => void;
  onToggleHints: () => void;
}

export const HintsSystem: React.FC<HintsSystemProps> = ({
  hints,
  hintsUsed,
  showHints,
  onUseHint,
  onToggleHints
}) => {
  const { t } = useLanguageStore();
  const hasMoreHints = hintsUsed < hints.length;
  const visibleHints = hints.slice(0, hintsUsed);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <LightBulbIcon className="h-5 w-5 text-yellow-500" />
          {t.hints}
        </h3>
        {hintsUsed > 0 && (
          <button
            onClick={onToggleHints}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            {showHints ? (
              <>
                <EyeSlashIcon className="h-4 w-4" />
                {t.hide}
              </>
            ) : (
              <>
                <EyeIcon className="h-4 w-4" />
                {t.show}
              </>
            )}
          </button>
        )}
      </div>

      {/* Hint counter */}
      <div className="mb-3">
        <p className="text-sm text-gray-600">
          {t.hintsAvailable} {hints.length - hintsUsed} / {hints.length}
        </p>
      </div>

      {/* Hints content */}
      {showHints && visibleHints.length > 0 && (
        <div className="space-y-2 mb-3">
          {visibleHints.map((hint, index) => (
            <div
              key={index}
              className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm"
            >
              <p className="font-medium text-yellow-800 mb-1">{t.hintLabel} {index + 1}:</p>
              <p className="text-yellow-700">{hint}</p>
            </div>
          ))}
        </div>
      )}

      {/* Use hint button */}
      {hasMoreHints && (
        <button
          onClick={onUseHint}
          className="w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors text-sm font-medium"
        >
          {t.useNextHint} ({hints.length - hintsUsed} {t.remaining})
        </button>
      )}

      {/* No more hints message */}
      {!hasMoreHints && hintsUsed > 0 && (
        <p className="text-sm text-gray-500 text-center">
          {t.allHintsUsed}
        </p>
      )}
    </div>
  );
};