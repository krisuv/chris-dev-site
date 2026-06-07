'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { HEXColor } from '@/shared/types';
import SectionTemplate from '../templates/SectionTemplate';
import TwoToneText from '../atoms/TwoToneText';
import ColorContrastItem from '../organisms/ColorContrastItem';
import FontSizeItem from '../organisms/FontSizeItem';

const DEFAULT_FONT_SIZE_PX = 16;
const MAX_FONT_SIZE_PX = 64;

export default function A11ySection() {
  const t = useTranslations('HomePage.A11ySection');
  const [color, setColor] = useState<HEXColor>('#ffffff');
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE_PX);

  return (
    <SectionTemplate className="flex flex-col gap-2 mb-30">
      <TwoToneText heading="h2" className="mb-2">
        {t('title')}
      </TwoToneText>

      <p>{t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>

      <p
        className="font-bold text-base/[120%] flex items-center justify-center mt-2"
        style={{ color, fontSize: `${fontSize}px`, height: `${4 * 1.2 * MAX_FONT_SIZE_PX}px` }}
      >
        {t('interactiveText')}
      </p>

      <div className="flex flex-col gap-5">
        <ColorContrastItem color={color} onColorChange={setColor} fontSize={fontSize} />
        <FontSizeItem fontSize={fontSize} onChange={(fontSize) => setFontSize(fontSize)} />
      </div>
    </SectionTemplate>
  );
}
