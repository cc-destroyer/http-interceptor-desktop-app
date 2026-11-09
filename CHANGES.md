# Local fork changes

Upstream files touched by this fork (keep this list current to make rebases easy).

| Upstream file | Change | Why |
|---|---|---|
| `package.json` | `start:main` runs `electron ./src/main/dev-main.cjs` | Electron 42 loads a `.ts` entry via the ESM loader, bypassing ts-node; dev mode crashed |

## Local-only files

- `src/main/dev-main.cjs` – CJS dev bootstrap (ts-node + `main.ts`). Must stay in `src/main/` so the background
  renderer resolves `src/node_modules`. `RQ_REMOTE_DEBUG_PORT=9223` exposes DevTools protocol.
