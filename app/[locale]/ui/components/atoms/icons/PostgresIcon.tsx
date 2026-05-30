import Image, { type ImageProps } from 'next/image';

type PostgresIconProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  width?: number;
  height?: number;
};

const PostgresIcon = ({ width = 60, height = 60, ...props }: PostgresIconProps) => {
  return (
    <Image
      src="/tech-stack/postgres.svg"
      alt=""
      width={width}
      height={height}
      aria-hidden
      {...props}
    />
  );
};

export default PostgresIcon;
