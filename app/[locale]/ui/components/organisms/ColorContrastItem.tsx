'use client';

import { ChangeEvent, useId, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import {
  WCAGConformanceLevel,
  calculateColorContrastRatio,
  calcWCAGScore,
  convertHEXToRGB,
  wcagScoreStyleMap,
} from '@/app/[locale]/lib/utils/style.utils';
import { HEXColor } from '@/shared/types';
import styles from '../../styles/A11ySection.module.css';
import ScoredItem from './ScoredItem';

interface ColorContrastItemProps {
  color: HEXColor;
  onColorChange(color: HEXColor): void;
  fontSize: number;
}

const BACKGROUND_COLOR: HEXColor = '#060714';

export default function ColorContrastItem(props: ColorContrastItemProps) {
  const { color, onColorChange, fontSize } = props;
  const t = useTranslations('HomePage.A11ySection.ColorContrastItem');
  const id = useId();

  const colorContrastRatio = useMemo(
    () =>
      Number(
        calculateColorContrastRatio(
          convertHEXToRGB(BACKGROUND_COLOR),
          convertHEXToRGB(color),
        ).toFixed(2),
      ),
    [color],
  );

  const score = useMemo(
    () => calcWCAGScore(colorContrastRatio, fontSize),
    [colorContrastRatio, fontSize],
  );

  const helperTextMap: Record<WCAGConformanceLevel, string> = {
    [WCAGConformanceLevel.FAIL]: t('helperText.fail'),
    [WCAGConformanceLevel.A_ESSENTIAL]: t('helperText.a'),
    [WCAGConformanceLevel.AA_RECOMMENDED]: t('helperText.aa'),
    [WCAGConformanceLevel.AAA_MAXIMUM]: t('helperText.aaa'),
  };

  function handleColorChange(event: ChangeEvent<HTMLInputElement>): void {
    onColorChange(event.target.value as HEXColor);
  }

  return (
    <ScoredItem
      inputControl={
        <>
          <input
            type="color"
            id={id}
            name={id}
            value={color}
            onChange={handleColorChange}
            className={styles.color}
          />
          <div>
            <div className="text-[2rem]/[115%] text-bold font-code">
              {String(colorContrastRatio).split('.')[0]}
              <span className="tracking-tighter">.</span>
              <span className="text-[1.4rem] min-w-3.5 opacity-80">
                {String(colorContrastRatio).split('.')[1] ?? '00'}
              </span>
              :1
            </div>
            <label htmlFor={id} className="text-[1.2rem] font-code">
              {t('label')}
            </label>
          </div>
        </>
      }
      description={t('description')}
      score={score}
      scoreStyleMap={wcagScoreStyleMap}
      helperText={helperTextMap[score]}
    />
  );
}
