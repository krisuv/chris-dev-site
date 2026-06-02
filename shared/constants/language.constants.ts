import { Language, LanguageLevel } from '../enums';

export const LanguageFlags: Record<Language, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  pl: '🇵🇱',
  es: '🇪🇸',
};

export const LanguageLabels: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  pl: 'Polski',
  es: 'Español',
};

export const LanguageSkills: Record<Language, LanguageLevel> = {
  pl: LanguageLevel.NATIVE,
  en: LanguageLevel.C1,
  de: LanguageLevel.B1,
  es: LanguageLevel.A1,
};

export const LanguagesSpoken = Object.fromEntries(
  Object.entries(LanguageSkills).filter(([, level]) =>
    [
      LanguageLevel.B1,
      LanguageLevel.B2,
      LanguageLevel.B2_C1,
      LanguageLevel.C1,
      LanguageLevel.NATIVE,
      LanguageLevel.C2,
    ].includes(level),
  ),
);
