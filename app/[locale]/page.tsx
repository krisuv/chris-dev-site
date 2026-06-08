import A11ySection from './ui/components/sections/A11ySection';
import LanguageSection from './ui/components/sections/LanguageSection';
import TechStackSection from './ui/components/sections/TechStackSection';
import ContactSection from './ui/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <TechStackSection />
      <LanguageSection />
      <A11ySection />
      <ContactSection />
    </main>
  );
}
