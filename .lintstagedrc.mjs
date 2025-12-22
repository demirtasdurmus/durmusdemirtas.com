/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  '*.{ts,tsx}': 'eslint',
  '*.{ts,tsx}': 'bash -c "pnpm typecheck"',
  '*.{js,jsx,ts,tsx,json,css,md}': 'prettier --write',
  'messages/**/*.json': 'bash -c "pnpm i18n:check"'
};

export default lintStagedConfig;
