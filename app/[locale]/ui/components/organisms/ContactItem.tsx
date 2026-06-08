import React, { ReactNode } from 'react';
import { PaletteColor } from '@/shared/types';
import { AsciiColors } from '@/shared/constants/styles.constants';

export interface ContactItemProps {
  header: ReactNode;
  link: {
    href: string;
    label: string;
  };
  content: ReactNode;
  color: PaletteColor;
  asciiIcon: string;
  className?: string;
}

const WrapperColors: Record<PaletteColor, string> = {
  primary: 'border-primary-500 bg-primary-500/30',
  secondary: 'border-secondary-500 bg-secondary-500/30',
  accent: 'border-accent-500 bg-accent-500/30',
  success: 'border-success-500 bg-success-500/30',
  warning: 'border-warning-500 bg-warning-500/30',
  error: 'border-error-500 bg-error-500/30',
};

export default function ContactItem(props: ContactItemProps) {
  const { color, link, content, asciiIcon, header, className } = props;

  return (
    <div
      className={`border-l-8 pt-2 pb-4 px-4 flex flex-col gap-1 relative overflow-hidden min-h-30 ${WrapperColors[color]} ${className}`}
    >
      <h3 className="font-code font-extrabold">{header}</h3>
      <a
        href={link.href}
        className="text-secondary-300 underline text-[1.125rem] block mb-1.5 w-fit"
      >
        {link.label}
      </a>

      {content}

      <pre
        role="img"
        className={`absolute top-0 right-4 pointer-events-none opacity-50 text-[0.5rem]/[100%] -z-1 bg-linear-to-b ${AsciiColors[color]}`}
        style={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {asciiIcon}
      </pre>
    </div>
  );
}
