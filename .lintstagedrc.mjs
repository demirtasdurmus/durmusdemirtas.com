/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  '*.{ts,tsx}': 'eslint',
  '*.{ts,tsx}': 'bash -c "pnpm typecheck"',
  '*': 'prettier --write'
};

export default lintStagedConfig;
