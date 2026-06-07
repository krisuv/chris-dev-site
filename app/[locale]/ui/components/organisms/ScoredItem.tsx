import { ReactNode } from 'react';
import type { ScoreStyleVariant } from '@/app/[locale]/lib/utils/style.utils';

interface ScoredItemProps<TScore extends string> {
  inputControl: ReactNode;
  score: TScore;
  scoreLabel?: string;
  scoreStyleMap: Record<TScore, ScoreStyleVariant>;
  description: string;
  helperText?: string;
}

export default function ScoredItem<TScore extends string>(props: ScoredItemProps<TScore>) {
  const { inputControl, score, scoreLabel, scoreStyleMap, description, helperText } = props;

  return (
    <div className="flex gap-4 items-start">
      <div className="flex-1 flex flex-col gap-2">
        <div
          className={`pt-2 px-2 pb-6 border-4 rounded-lg rounded-bl-2xl flex gap-2 items-center relative ${scoreStyleMap[score].wrapper}`}
        >
          {inputControl}

          <p
            className={`rounded-bl-2xl rounded-tr-2xl py-0.5 pl-3.5 pr-4.5 absolute -bottom-0.5 -left-0.5 min-w-15 font-semibold tracking-wider ${scoreStyleMap[score].score}`}
          >
            {scoreLabel ?? score}
          </p>
        </div>

        {helperText && (
          <p className={`font-semibold h-8 ${scoreStyleMap[score].helperText}`}>{helperText}</p>
        )}
      </div>

      <p className="flex-[1.25] -mt-1">{description}</p>
    </div>
  );
}
