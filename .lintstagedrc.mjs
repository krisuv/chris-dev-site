import path from 'node:path';

const buildEslintCommand = (filenames) =>
  `eslint --max-warnings=0 ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => `"${path.relative(process.cwd(), f)}"`).join(' ')}`;

const config = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '*.{json,md,css}': [buildPrettierCommand],
};

export default config;
