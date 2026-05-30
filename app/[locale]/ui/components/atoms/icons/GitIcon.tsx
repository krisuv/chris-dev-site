import Image, { type ImageProps } from 'next/image';

type GitIconProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  width?: number;
  height?: number;
};

const GitIcon = ({ width = 60, height = 60, ...props }: GitIconProps) => {
  return (
    <Image src="/tech-stack/git.svg" alt="" width={width} height={height} aria-hidden {...props} />
  );
};

export default GitIcon;
