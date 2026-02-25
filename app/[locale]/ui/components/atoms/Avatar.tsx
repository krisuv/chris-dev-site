import clsx from 'clsx';
import Image from 'next/image';

type ImageSize = 'small' | 'medium';
type ThemeColor = 'primary' | 'success' | 'error';

interface AvatarProps {
  size: ImageSize;
  color: ThemeColor;
}

const AvatarSize: Record<ImageSize, number> = {
  small: 50,
  medium: 100,
};

const AvatarSizeClass: Record<ImageSize, string> = {
  small: 'w-[50px] h-[50px]',
  medium: 'w-[100px] h-[100px]',
};

const AvatarColorClass: Record<ThemeColor, string> = {
  primary: 'before:bg-primary-500',
  success: 'before:bg-success-500',
  error: 'before:bg-error-500',
};

export default function Avatar(props: AvatarProps) {
  const { size, color } = props;

  return (
    <div
      className={clsx(
        "relative inline-flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-full",
        AvatarSizeClass[size],
        AvatarColorClass[color],
      )}
    >
      <Image
        src="/avatar.png"
        width={AvatarSize[size]}
        height={AvatarSize[size]}
        alt=""
        className={clsx(`rounded-full relative z-10 opacity-35 grayscale`)}
      />
    </div>
  );
}
