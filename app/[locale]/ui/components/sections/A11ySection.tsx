'use client';

import SectionTemplate from '../templates/SectionTemplate';
import TwoToneText from '../atoms/TwoToneText';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useMemo, useState } from 'react';
import {
  calculateColorContrastRatio,
  calcWCAGScore,
  convertHEXToRGB,
  WCAGConformanceLevel,
} from '@/app/[locale]/lib/utils/style.utils';
import { HEXColor } from '@/shared/types';
import styles from '../../styles/A11ySection.module.css';
import WCAGScoredItem from '../organisms/WCAGScoredItem';

export default function A11ySection() {
  const t = useTranslations('HomePage.A11ySection');

  const [color, setColor] = useState('#ffffff');
  const [fontSizePx] = useState(16);

  const colorContrastRatio = useMemo(
    () =>
      Number(
        calculateColorContrastRatio(
          convertHEXToRGB('#060714'),
          convertHEXToRGB(color as HEXColor),
        ).toFixed(2),
      ),

    [color],
  );

  const score = calcWCAGScore(colorContrastRatio, fontSizePx);

  function onChangeColor(event: ChangeEvent<HTMLInputElement>): void {
    setColor(event.target.value);
  }

  const ItemStyles: Record<
    WCAGConformanceLevel,
    { wrapper: string; score: string; helperText: string }
  > = {
    FAIL: {
      wrapper: 'border-error-500',
      score: 'bg-error-500 text-error-900',
      helperText: 'It works',
    },
    AAA: {
      wrapper: 'border-success-700',
      score: 'bg-success-700 text-success-200',
      helperText: 'It works',
    },
    AA: {
      wrapper: 'border-secondary-300',
      score: 'bg-secondary-300 text-secondary-900',
      helperText: 'It works',
    },
    A: {
      wrapper: 'border-warning-300',
      score: 'bg-warning-300 text-warning-900',
      helperText: 'It works',
    },
  };

  return (
    <SectionTemplate>
      <TwoToneText heading="h2" color={color}>
        {t('title')}
      </TwoToneText>

      <WCAGScoredItem
        id="col"
        value={
          <p className="text-[2rem]/[115%] text-bold font-code">
            {String(colorContrastRatio).split('.')[0]}
            <span className="tracking-tighter">.</span>
            <span className="text-[1.4rem] min-w-3.5 opacity-80">
              {String(colorContrastRatio).split('.')[1] ?? '00'}
            </span>
            :1
          </p>
        }
        inputControl={
          <input
            type="color"
            // TODO: useId
            id="col"
            name="col"
            value={color}
            onChange={onChangeColor}
            className={styles.color}
          />
        }
        description="lorem20"
        label="Color contrast"
        score={score}
        helperText={ItemStyles[score].helperText}
      />

      <p>{t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>
    </SectionTemplate>
  );
}
