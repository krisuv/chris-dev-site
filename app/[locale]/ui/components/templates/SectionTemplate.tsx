import { ReactNode } from 'react';

interface SectionTemplateProps {
  children: ReactNode;
  className?: string;
}

const SectionTemplate = (props: SectionTemplateProps) => {
  const { className = '', children } = props;
  return (
    <section className={`w-full max-w-87.5 mx-auto px-4 desktop:px-0 ${className}`}>
      {children}
    </section>
  );
};

export default SectionTemplate;
