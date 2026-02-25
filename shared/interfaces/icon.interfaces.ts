import { ReactNode } from 'react';

export interface IconProps {
  className?: string;
  size?: number;
}

export type IconComponent = (props: IconProps) => ReactNode;
