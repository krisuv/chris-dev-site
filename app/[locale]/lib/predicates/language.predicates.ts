import { Language } from '@/shared/enums';

export function isLanguage(value: unknown): value is Language {
  if (typeof value !== 'string') return false;

  return Object.values(Language).includes(value);
}
