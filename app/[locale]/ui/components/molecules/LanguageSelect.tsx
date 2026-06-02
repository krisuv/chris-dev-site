'use client';
import { useLocale } from 'next-intl';
import { Language } from '@/shared/enums';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/LanguageSelect.module.css';
import {
  LanguageFlags,
  LanguageLabels,
  LanguagesSpoken,
} from '@/shared/constants/language.constants';

type LanguageSelectProps = Record<string, never>;

/**
 * Renders a locale switcher dropdown that updates the current route language.
 * @param props - Component does not accept props.
 */
export default function LanguageSelect(props: LanguageSelectProps) {
  void props;
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const languages = Object.keys(LanguagesSpoken) as Language[];
  const selectedLanguage = languages.includes(locale as Language)
    ? (locale as Language)
    : Language.EN;

  function onSelectLocale(lang: Language): void {
    setIsOpen(false);
    if (lang === selectedLanguage) {
      return;
    }
    router.replace(pathname, { locale: lang });
  }

  useEffect(() => {
    function onPointerDown(event: PointerEvent): void {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function onEscape(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.root} font-code font-medium w-18`}>
      <button
        id="language"
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{LanguageFlags[selectedLanguage]}</span>
        <span>{LanguageLabels[selectedLanguage]}</span>
      </button>
      {isOpen ? (
        <ul className={styles.menu} role="listbox" aria-labelledby="language">
          {languages.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={lang === selectedLanguage}
                data-selected={lang === selectedLanguage ? 'true' : 'false'}
                className={styles.option}
                onClick={() => onSelectLocale(lang)}
              >
                <span>{LanguageFlags[lang]}</span>
                <span>{LanguageLabels[lang]}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
