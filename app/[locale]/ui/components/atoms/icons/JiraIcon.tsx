import Image, { type ImageProps } from 'next/image';

type JiraIconProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  width?: number;
  height?: number;
};

const JiraIcon = ({ width = 60, height = 60, ...props }: JiraIconProps) => {
  return (
    <Image src="/tech-stack/jira.svg" alt="" width={width} height={height} aria-hidden {...props} />
  );
};

export default JiraIcon;
