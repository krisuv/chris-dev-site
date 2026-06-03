import { createRelativeColor } from '@/app/[locale]/lib/utils/style.utils';
import { CSSProperties, ReactNode } from 'react';

interface TwoToneTextProps {
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hidden?: boolean;
  children: ReactNode;
  className?: string;
  color?: string;
}

function TwoToneText(props: TwoToneTextProps): ReactNode {
  const { heading, hidden, className = '', children, color } = props;

  const style: CSSProperties = {
    color: color ?? 'auto',
  };

  if (color) {
    style.textShadow = `4px 0px ${createRelativeColor(color, 15, -25)}`;
  }

  if (hidden) return null;

  switch (heading) {
    case 'h1':
      return (
        <h1
          className={`font-code text-primary-100 text-shadow-[4px_0px_var(--color-primary-200)] ${className}`}
          style={style}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`font-code text-primary-100 text-shadow-[4px_0px_var(--color-primary-200)] ${className}`}
          style={style}
        >
          {children}
        </h2>
      );
    default:
      return (
        <p
          className={`font-code font-extrabold text-base text-primary-100 text-shadow-[2px_0px_var(--color-primary-300)] ${className}`}
          style={{ color }}
        >
          {children}
        </p>
      );
  }
}

export default TwoToneText;
