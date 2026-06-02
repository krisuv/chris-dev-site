import { Language, LanguageLevel } from '@/shared/enums';
import TwoToneText from '../atoms/TwoToneText';
import SectionTemplate from '../templates/SectionTemplate';
import ProgressBar from '../atoms/ProgressBar';
import { LanguageFlags, LanguageSkills } from '@/shared/constants/language.constants';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

export default function LanguageSection() {
  const tLanguage = useTranslations('Shared.Language');
  const tSection = useTranslations('HomePage.LanguageSection');

  const languageSkills = Object.entries(LanguageSkills) as [Language, LanguageLevel][];

  return (
    <SectionTemplate className="flex flex-col gap-2 mb-30">
      <TwoToneText heading="h2" className="mb-2">
        {tSection('title')}
      </TwoToneText>

      <p>{tSection('paragraph1')}</p>
      <p>{tSection('paragraph2')}</p>

      <dl className="mt-1">
        {languageSkills.map(([language, level], index) => (
          <div key={language} className={clsx({ 'mb-4': index !== languageSkills.length - 1 })}>
            <div className="flex justify-between mb-0.5">
              <dt className="font-code font-medium">
                <span className="mr-1" aria-hidden>
                  {LanguageFlags[language]}
                </span>
                {tLanguage(language)}
              </dt>
              <dd className="font-code font-medium">{level}</dd>
            </div>
            <ProgressBar percent={languageLevelPercent[level]} />
          </div>
        ))}
      </dl>
    </SectionTemplate>
  );
}

const languageLevelPercent: Record<LanguageLevel, number> = {
  [LanguageLevel.A1]: 15,
  [LanguageLevel.A2]: 25,
  [LanguageLevel.A2_B1]: 35,
  [LanguageLevel.B1]: 45,
  [LanguageLevel.B2]: 60,
  [LanguageLevel.B2_C1]: 75,
  [LanguageLevel.C1]: 85,
  [LanguageLevel.NATIVE]: 95,
  [LanguageLevel.C2]: 100,
};
