import type { IconProps } from '@/shared/interfaces/icon.interfaces';

export default function ArrowIcon({ className = 'fill-primary-100' }: IconProps) {
  return (
    <svg
      width="30"
      height="18"
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M27.045 17.5049L29.7 14.8499L14.85 -0.000118256L0 14.8499L2.655 17.5049L14.85 5.30988L27.045 17.5049Z" />
    </svg>
  );
}
