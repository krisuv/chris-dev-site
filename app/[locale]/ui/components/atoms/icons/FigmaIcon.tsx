import Image, { type ImageProps } from 'next/image';

type FigmaIconProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  width?: number;
  height?: number;
};

const FigmaIcon = ({ width = 60, height = 61, ...props }: FigmaIconProps) => {
  return (
    <Image
      src="/tech-stack/figma.svg"
      alt=""
      width={width}
      height={height}
      aria-hidden
      {...props}
    />
  );
};

export default FigmaIcon;
