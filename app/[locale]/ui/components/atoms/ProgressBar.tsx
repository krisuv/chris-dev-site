import type { CSSProperties } from 'react';

interface ProgressBarProps {
  percent: number;
}

type ProgressBarStyle = CSSProperties & {
  '--progress-width': string;
};

export default function ProgressBar({ percent }: ProgressBarProps) {
  const clampedPercent = Math.max(0, Math.min(100, percent));
  const style: ProgressBarStyle = {
    '--progress-width': `${clampedPercent}%`,
  };

  return (
    <div
      className={`relative bg-primary-700 h-3 [background:repeating-conic-gradient(var(--color-primary-500)_0_25%,var(--color-primary-100)_0_50%)_left_top/8px_8px] before:content-[""] before:absolute before:top-0 before:left-0 before:w-(--progress-width) before:h-full before:bg-primary-100`}
      style={style}
    />
  );
}
