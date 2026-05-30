import { ReactNode } from 'react';

interface TwoToneTextProps {
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hidden?: boolean;
  children: ReactNode;
  className?: string;
}

function TwoToneText(props: TwoToneTextProps): ReactNode {
  const { heading, hidden, className = '', children } = props;

  if (hidden) return null;

  switch (heading) {
    case 'h1':
      return (
        <h1
          className={`font-code text-primary-100 text-shadow-[4px_0px_var(--color-primary-200)] ${className}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`font-code text-primary-100 text-shadow-[3px_0px_var(--color-primary-200)] ${className}`}
        >
          {children}
        </h2>
      );
    default:
      return (
        <p
          className={`font-code font-extrabold text-base text-primary-100 text-shadow-[2px_0px_var(--color-primary-300)] ${className}`}
        >
          {children}
        </p>
      );
  }
}

export default TwoToneText;
