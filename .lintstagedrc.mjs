/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  '*.{ts,tsx}': 'eslint',
  '*.{ts,tsx}': 'tsc-files --noEmit',
  '*': 'prettier --write --ignore-path .gitignore'
};

export default lintStagedConfig;
