import React, { ReactNode } from 'react';

interface TwoToneTextProps {
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hidden?: boolean;
  children: string;
}

function TwoToneText(props: TwoToneTextProps): ReactNode {
  const { heading, hidden, children } = props;

  if (hidden) return null;

  switch (heading) {
    case 'h1':
      return <h1 className="font-code text-primary-100 text-shadow-[5px_5px_red]">{children}</h1>;
    default:
      return (
        <p className="font-code font-extrabold text-base text-primary-100 text-shadow-[2px_0px_var(--color-primary-300)]">
          {children}
        </p>
      );
  }
}

export default TwoToneText;
