import Avatar from '../atoms/Avatar';
import TwoToneText from '../atoms/TwoToneText';

interface LogoProps {
  displayTitle?: boolean;
}

export default function Logo(props: LogoProps) {
  const { displayTitle = false } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar size="small" color="primary" />
      <TwoToneText hidden={!displayTitle}>chris dev</TwoToneText>
    </div>
  );
}
