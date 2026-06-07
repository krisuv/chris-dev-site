'use client';

import { ChangeEvent, useId } from 'react';
import { useTranslations } from 'next-intl';
import {
  FontSizeScore,
  calcFontSizeScore,
  fontSizeScoreStyleMap,
} from '@/app/[locale]/lib/utils/style.utils';
import ScoredItem from './ScoredItem';
import styles from '../../styles/A11ySection.module.css';
import ArrowIcon from '../atoms/icons/ArrowIcon';

const MIN_FONT_SIZE_PX = 8;
const MAX_FONT_SIZE_PX = 64;

interface FontSizeItemProps {
  fontSize: number;
  onChange(fontSize: number): void;
}

export default function FontSizeItem(props: FontSizeItemProps) {
  const { fontSize, onChange } = props;
  const t = useTranslations('HomePage.A11ySection.FontSizeItem');
  const id = useId();

  const score = calcFontSizeScore(fontSize);
  const scoreLabelMap: Record<FontSizeScore, string> = {
    [FontSizeScore.ERROR]: t('score.error'),
    [FontSizeScore.WARNING]: t('score.warning'),
    [FontSizeScore.SUCCESS]: t('score.success'),
  };
  const helperTextMap: Record<FontSizeScore, string> = {
    [FontSizeScore.ERROR]: t('helperText.error'),
    [FontSizeScore.WARNING]: t('helperText.warning'),
    [FontSizeScore.SUCCESS]: t('helperText.success'),
  };

  function onChangeFontSize(event: ChangeEvent<HTMLInputElement>): void {
    const parsed = parseInt(event.target.value, 10);
    if (!isNaN(parsed)) {
      onChange(Math.min(Math.max(parsed, MIN_FONT_SIZE_PX), MAX_FONT_SIZE_PX));
    }
  }

  function onPressButton(value: number) {
    return () => {
      const sum = value + fontSize;
      if (sum >= MIN_FONT_SIZE_PX && sum <= MAX_FONT_SIZE_PX) {
        onChange(sum);
      }
    };
  }

  return (
    <ScoredItem
      inputControl={
        <>
          <div className={`flex flex-col gap-1 ${styles.buttonWrapper}`}>
            <button onClick={onPressButton(1)} disabled={fontSize === MAX_FONT_SIZE_PX}>
              <ArrowIcon />
            </button>
            <button
              className="rotate-180"
              onClick={onPressButton(-1)}
              disabled={fontSize === MIN_FONT_SIZE_PX}
            >
              <ArrowIcon />
            </button>
          </div>
          <div className="flex flex-col gap-0.5">
            <input
              type="number"
              id={id}
              name="fontSize"
              value={fontSize}
              min={MIN_FONT_SIZE_PX}
              max={MAX_FONT_SIZE_PX}
              onChange={onChangeFontSize}
              className={`text-[2rem]/[115%] text-bold font-code ${styles.fontSize}`}
            />
            <label htmlFor={id} className="text-[1.2rem] font-code">
              {t('label')}
            </label>
          </div>
        </>
      }
      description={t('description')}
      score={score}
      scoreLabel={scoreLabelMap[score]}
      scoreStyleMap={fontSizeScoreStyleMap}
      helperText={helperTextMap[score]}
    />
  );
}
