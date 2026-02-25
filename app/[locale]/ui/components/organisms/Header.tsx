import Logo from '../molecules/Logo';
import LanguageSelect from '../molecules/LanguageSelect';
import SiteNav from '../molecules/SiteNav';

type HeaderProps = Record<string, never>;

/**
 * Renders the main site header with logo, navigation links, and language switcher.
 * @param props - Component does not accept props.
 */
export default function Header(props: HeaderProps) {
  void props;

  return (
    <header className="relative py-4">
      <Logo displayTitle />

      <SiteNav />

      <div className="absolute top-4 right-4">
        <LanguageSelect />
      </div>
    </header>
  );
}
