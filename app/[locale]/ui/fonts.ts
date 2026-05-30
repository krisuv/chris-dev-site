import { JetBrains_Mono, Roboto, Roboto_Mono, Space_Grotesk } from 'next/font/google';

export const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetBrains-mono',
  subsets: ['latin', 'latin-ext'],
});

export const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin', 'latin-ext'],
});

export const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin', 'latin-ext'],
});

export const spaceGrotesk = Space_Grotesk({
  variable: '--font-spaceGrotesk-sans',
  subsets: ['latin', 'latin-ext'],
});
