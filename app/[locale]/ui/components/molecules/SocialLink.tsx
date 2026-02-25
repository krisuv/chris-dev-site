import type { IconComponent } from '@/shared/interfaces/icon.interfaces';

interface SocialLinkProps {
  label: string;
  href: string;
  icon: IconComponent;
}

export default function SocialLink(props: SocialLinkProps) {
  const { label, icon: Icon, href } = props;
  return (
    <a className="group flex gap-2 items-center font-medium" href={href}>
      <Icon className="fill-primary-100 group-hover:fill-primary-200" />
      <p className="font-code text-primary-25 text-sm group-hover:underline group-hover:text-primary-200">
        {label}
      </p>
    </a>
  );
}
