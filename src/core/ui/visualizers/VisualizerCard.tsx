import React from 'react';

export interface VisualizerCardProps {
  /** Title displayed in the header. If omitted, no header is rendered */
  title?: string;
  /** Optional subtitle/instruction text below the title */
  instruction?: string;
  /** Icon text/symbol displayed in the colored badge */
  icon?: string;
  /** Tailwind color class for the icon badge (e.g., 'bg-blue-600') */
  iconColor?: string;
  /** Children rendered in the card body */
  children: React.ReactNode;
  /** Optional className for the card container */
  className?: string;
}

/**
 * Base card component for all visualizers.
 * Provides consistent styling with header, icon badge, and content area.
 */
export const VisualizerCard: React.FC<VisualizerCardProps> = ({
  title,
  instruction,
  icon,
  iconColor,
  children,
  className = ''
}) => {
  return (
    <div className={`my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden font-sans ${className}`}>
      {title && (
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
            {icon && iconColor && (
              <span className={`${iconColor} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono`}>
                {icon}
              </span>
            )}
            {title}
          </h3>
          {instruction && (
            <p className="text-sm text-gray-500 mt-1">{instruction}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default VisualizerCard;
