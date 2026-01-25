import { LocalizedString } from '../types/global';

export const getLocalizedText = (text: LocalizedString | undefined, lang: string = 'ENG'): string => {
    if (!text) return '';
    if (typeof text === 'string') return text;
    // Try preferred lang, then ENG, then 'en', then first available
    return text[lang] || text['ENG'] || text['en'] || Object.values(text)[0] || '';
};
