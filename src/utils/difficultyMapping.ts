/**
 * Difficulty mapping utilities
 * Maps between Spanish and English difficulty levels
 */

export type DifficultySpanish = 'facil' | 'intermedio' | 'dificil' | 'medio';
export type DifficultyEnglish = 'easy' | 'medium' | 'hard';
export type DifficultyAll = DifficultySpanish | DifficultyEnglish | 'medio';

/**
 * Map Spanish difficulty to English
 */
export const mapDifficultyToEnglish = (difficulty: string | DifficultyAll): DifficultyEnglish => {
  const map: Record<string, DifficultyEnglish> = {
    'facil': 'easy',
    'fácil': 'easy',
    'intermedio': 'medium',
    'medio': 'medium',
    'dificil': 'hard',
    'difícil': 'hard',
    'easy': 'easy',
    'medium': 'medium',
    'hard': 'hard'
  };
  
  return map[difficulty.toLowerCase()] || 'medium';
};

/**
 * Map English difficulty to Spanish
 */
export const mapDifficultyToSpanish = (difficulty: string | DifficultyAll): DifficultySpanish => {
  const map: Record<string, DifficultySpanish> = {
    'easy': 'facil',
    'medium': 'intermedio',
    'hard': 'dificil',
    'facil': 'facil',
    'fácil': 'facil',
    'intermedio': 'intermedio',
    'medio': 'intermedio',
    'dificil': 'dificil',
    'difícil': 'dificil'
  };
  
  return map[difficulty.toLowerCase()] || 'intermedio';
};

/**
 * Get difficulty color
 */
export const getDifficultyColor = (difficulty: string | DifficultyAll): string => {
  const englishDifficulty = mapDifficultyToEnglish(difficulty);
  
  switch(englishDifficulty) {
    case 'easy':
      return 'text-green-600 bg-green-100';
    case 'medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'hard':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

/**
 * Get difficulty display text
 */
export const getDifficultyText = (difficulty: string | DifficultyAll, lang: 'es' | 'en' = 'es'): string => {
  if (lang === 'en') {
    const englishDifficulty = mapDifficultyToEnglish(difficulty);
    return englishDifficulty.charAt(0).toUpperCase() + englishDifficulty.slice(1);
  } else {
    const spanishDifficulty = mapDifficultyToSpanish(difficulty);
    return spanishDifficulty.charAt(0).toUpperCase() + spanishDifficulty.slice(1);
  }
};