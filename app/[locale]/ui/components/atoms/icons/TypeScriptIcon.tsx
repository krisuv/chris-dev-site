import Image, { type ImageProps } from 'next/image';

type TypeScriptIconProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  width?: number;
  height?: number;
};

const TypeScriptIcon = ({ width = 60, height = 60, ...props }: TypeScriptIconProps) => {
  return (
    <Image
      src="/tech-stack/typescript.svg"
      alt=""
      width={width}
      height={height}
      aria-hidden
      {...props}
    />
  );
};

export default TypeScriptIcon;
