import Image, { type ImageProps } from 'next/image';

type LinuxIconProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  width?: number;
  height?: number;
};

const LinuxIcon = ({ width = 60, height = 60, ...props }: LinuxIconProps) => {
  return (
    <Image
      src="/tech-stack/linux.png"
      alt=""
      width={width}
      height={height}
      aria-hidden
      {...props}
    />
  );
};

export default LinuxIcon;
