---
paths:
  - "**/*.ts"
---

# Imports

No relative imports (`./`, `../`) — including same-directory siblings.

- **`#*`** — internal imports, within the same package. Each package declares an
  `imports` map in its `package.json` (`"#*"` → `./src/*.ts` in development,
  `./dist/*.js` by default). Example: `import { config } from '#config'`.
- **`@rigi/*`** — external imports from another workspace package. Example:
  `import { loadConfig } from '@rigi/config'`.

`#` = internal (this package), `@rigi` = external (another package).
