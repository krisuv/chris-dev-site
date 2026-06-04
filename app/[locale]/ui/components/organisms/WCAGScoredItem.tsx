'use client';

import { WCAGConformanceLevel } from '@/app/[locale]/lib/utils/style.utils';
import { ReactNode } from 'react';

interface WCAGScoredItemProps {
  id: string;
  value: ReactNode;
  // onChange(event: EventType): void;
  label: string;
  inputControl: ReactNode;
  score: WCAGConformanceLevel;
  helperText?: string;
  description: string;
}

export default function WCAGScoredItem(props: WCAGScoredItemProps) {
  const { id, value, label, inputControl, score, helperText, description } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div
          className={`pt-2 px-2 pb-6 border-4 rounded-lg rounded-bl-2xl flex gap-2 items-center relative ${ItemStyles[score].wrapper}`}
        >
          {inputControl}
          <div>
            <p className="text-[2rem]/[115%] text-bold font-code">{value}</p>
            <label htmlFor={id} className="text-[1.2rem] font-code">
              {label}
            </label>
          </div>

          <p
            className={`rounded-bl-2xl rounded-tr-2xl py-0.5 pl-3.5 pr-4.5 absolute -bottom-0.5 -left-0.5 min-w-15 font-semibold tracking-wider ${ItemStyles[score].score}`}
          >
            {score}
          </p>
        </div>

        <p>{description}</p>
      </div>

      <p>{helperText}</p>
    </div>
  );

  return <div>WCAGScoredItem</div>;
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
