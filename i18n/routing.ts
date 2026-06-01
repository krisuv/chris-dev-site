import { LanguagesSpoken } from '@/shared/constants/language.constants';
import { Language } from '@/shared/enums';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(LanguagesSpoken),

  // Used when no locale matches
  defaultLocale: Language.EN,
});
