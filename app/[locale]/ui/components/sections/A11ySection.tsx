'use client';

import SectionTemplate from '../templates/SectionTemplate';
import TwoToneText from '../atoms/TwoToneText';
import { useTranslations } from 'next-intl';
import { ChangeEvent, useMemo, useState } from 'react';
import {
  contrastSignalColor,
  calculateColorContrastRatio,
  convertHEXToRGB,
} from '@/app/[locale]/lib/utils/style.utils';
import { HEXColor } from '@/shared/types';
import styles from '../../styles/A11ySection.module.css';

export default function A11ySection() {
  const t = useTranslations('HomePage.A11ySection');

  const [color, setColor] = useState('#ffffff');

  const colorContrastRatio = useMemo(
    () =>
      Math.round(
        calculateColorContrastRatio(convertHEXToRGB('#060714'), convertHEXToRGB(color as HEXColor)),
      ),
    [color],
  );

  function onChangeColor(event: ChangeEvent<HTMLInputElement>): void {
    setColor(event.target.value);
  }

  return (
    <SectionTemplate>
      <p
        className="text-secondary-300 text-xl"
        style={{ color: contrastSignalColor(colorContrastRatio) }}
      >
        {colorContrastRatio}
      </p>
      <input
        type="color"
        id="color"
        name="color"
        value={color}
        onChange={onChangeColor}
        className={styles.color}
      />
      <TwoToneText heading="h2" color={color}>
        {t('title')}
      </TwoToneText>

      <p>{t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>
    </SectionTemplate>
  );
}
