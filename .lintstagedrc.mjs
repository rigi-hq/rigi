export default {
  '*.{ts,tsx,js,jsx,cjs,mjs,json}': [
    'biome check --write --no-errors-on-unmatched',
  ],
};
