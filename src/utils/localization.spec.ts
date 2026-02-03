import { describe, it, expect } from 'vitest';
import { getLocalizedText } from './localization';
import { LocalizedString } from '../types/global';

describe('localization utility', () => {
    it('should return empty string for undefined input', () => {
        expect(getLocalizedText(undefined)).toBe('');
    });

    it('should return the string itself if input is a string', () => {
        expect(getLocalizedText('Hello' as any)).toBe('Hello');
    });

    it('should return preferred language text', () => {
        const text: LocalizedString = {
            ENG: 'Hello',
            CAS: 'Hola',
            EUS: 'Kaixo'
        };
        expect(getLocalizedText(text, 'CAS')).toBe('Hola');
        expect(getLocalizedText(text, 'EUS')).toBe('Kaixo');
    });

    it('should fallback to ENG if preferred language is missing', () => {
        const text: LocalizedString = {
            ENG: 'Hello',
            EUS: 'Kaixo'
        };
        expect(getLocalizedText(text, 'CAS')).toBe('Hello');
    });

    it('should fallback to first available language if ENG is also missing', () => {
        const text: any = {
            EUS: 'Kaixo'
        };
        expect(getLocalizedText(text, 'CAS')).toBe('Kaixo');
    });

    it('should return empty string if object is empty', () => {
        const text: any = {};
        expect(getLocalizedText(text, 'CAS')).toBe('');
    });
});
