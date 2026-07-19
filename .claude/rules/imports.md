---
paths:
  - "**/*.ts"
---

# Imports

No `../` parent-directory imports (enforced by biome `noRestrictedImports`) —
use a `#`-aliased import instead. Same-directory `./sibling` imports are fine.

- **`#*`** — internal imports, within the same package. Each package declares an
  `imports` map in its `package.json` (`"#*"` → `./src/*.ts` in development,
  `./dist/*.js` by default). Example: `import { config } from '#config'`.
- **`@rigi/*`** — external imports from another workspace package. Example:
  `import { loadConfig } from '@rigi/config'`.

`#` = internal (this package), `@rigi` = external (another package).

## No barrel files

No barrel/index re-export files (`export * from ...`, an `index.ts` that only
re-exports). They bloat the module graph and hurt tree-shaking (enforced by
biome `noBarrelFile` / `noReExportAll`). Packages expose entry points via
per-file `exports` subpaths in `package.json` (e.g. `@rigi/pkg/thing` →
`./dist/thing.js`), and consumers import the specific subpath.
