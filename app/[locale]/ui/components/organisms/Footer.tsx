import EmailIcon from '../atoms/icons/EmailIcon';
import GithubIcon from '../atoms/icons/GithubIcon';
import InstagramIcon from '../atoms/icons/InstagramIcon';
import LinkedinIcon from '../atoms/icons/LinkedinIcon';
import SocialLink from '../molecules/SocialLink';
import { useTranslations } from 'next-intl';

type FooterProps = Record<string, never>;

/**
 * Renders the site footer with social links, contact details, and copyright.
 * @param props - Component does not accept props.
 */
export default function Footer(props: FooterProps) {
  void props;
  const t = useTranslations('Shared.Footer');

  return (
    <footer className="mt-auto border-t-2 border-primary-400 border-dashed py-3 px-2">
      <div className="flex flex-wrap tablet:justify-center gap-8 mb-8">
        <section>
          <h2 className=" text-primary-100 font-code text-2xl font-extrabold">
            {t('social-media')}
          </h2>
          <ul className="w-fit flex flex-col gap-2 pl-1 tablet:pl-2 pt-2 list-none">
            <li>
              <SocialLink icon={InstagramIcon} label="bukrisv" href="#" />
            </li>
            <li>
              <SocialLink icon={LinkedinIcon} label="Krzysztof Bujalski" href="#" />
            </li>
            <li>
              <SocialLink icon={GithubIcon} label="krisuv" href="#" />
            </li>
          </ul>
        </section>
        <section>
          <h2 className=" text-primary-100 font-code text-2xl font-extrabold">{t('contact')}</h2>
          <address className="not-italic">
            <ul className="w-fit flex flex-col gap-2 pl-1 tablet:pl-2 pt-2 list-none">
              <li>
                <SocialLink
                  icon={EmailIcon}
                  label="1krzysztof.bujalski@gmail.com"
                  href="mailto:1krzysztof.bujalski@gmail.com"
                />
              </li>
              <li>
                <p className=" font-code text-sm text-primary-25">
                  <span className="font-extrabold">{t('address')}:&nbsp;</span>
                  <span className="font-medium">Szczecin, Zachodniopomorskie</span>
                </p>
              </li>
              <li>
                <p className=" font-code text-sm text-primary-25">
                  <span className="font-extrabold">{t('tax-id')}:&nbsp;</span>
                  <span className="font-medium">022-41-11-111 </span>
                </p>
              </li>
            </ul>
          </address>
        </section>
      </div>

      <small className="font-code text-primary-25 font-bold text-xs text-center block">
        {t('copyright', { name: 'Krzysztof Bujalski', year: new Date().getFullYear() })}
      </small>
    </footer>
  );
}
