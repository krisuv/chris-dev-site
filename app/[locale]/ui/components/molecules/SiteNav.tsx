'use client';

import { Link, usePathname } from '@/i18n/navigation';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

const items = [
  { key: 'contact', href: '/contact' },
  // { key: 'about', href: '/about' },
  { key: 'main-page', href: '/' },
  { key: 'blog', href: '/blog' },
] as const;

/**
 * Renders the main site navigation and highlights the active page.
 */
export default function SiteNav() {
  const t = useTranslations('Shared.Navigation');
  const pathname = usePathname();

  return (
    <nav className="py-4" aria-label={t('main-menu')}>
      <ul className="flex gap-4 justify-center">
        {items.map(({ key, href }) => (
          <li
            key={key}
            className={clsx(
              "text-primary-100 font-bold text-base text-center hover:underline before:content-['/'] before:text-primary-200 w-14",
              {
                'text-secondary-200 before:text-secondary-300 font-extrabold': pathname === href,
              },
            )}
          >
            <Link href={href}>{t(key)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
