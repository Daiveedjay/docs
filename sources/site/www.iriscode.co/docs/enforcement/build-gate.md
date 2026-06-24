# Source: https://www.iriscode.co/docs/enforcement/build-gate

## Build GateNew

Install a build hook from the command palette and every `pnpm build`, `npm run build`, or `make build` will run an Iris health check before the compiler starts. Builds where any file falls below your threshold are blocked before compilation begins.

### Installing

Run **Iris: Install Build Hook** from the command palette. Iris detects your project type and writes the hook automatically — no manual edits required.

### What the hook does on build

- Detects the project type — `package.json` for Node, `go.mod` for Go, `pyproject.toml` / `requirements.txt` for Python
- Node: appends an Iris `prebuild` entry to `package.json` — chains safely before any existing prebuild command
- Go / Python: writes an `iris-check` Makefile target and wires it as a prerequisite of the `build` or `all` target
- If any file falls below `minHealthScore`, the build exits with code 1 and the offending files are listed
- Exits cleanly if all files pass — the build proceeds normally

### Configuring the threshold

Set `"minHealthScore": 80` (0-100) in your `.irisconfig.json`. Default is `70` if the key is absent.

Tip: The Node hook chains safely before any existing `prebuild` script. Uninstalling removes only the Iris entry — your original command is preserved.

### Output

Each file is scored and printed inline. Files below the threshold are marked with `✗` and the primary finding is shown beneath them. The build fails after all files are checked — the full list is always shown before exit.

pnpm build

$ pnpm build

\> iris check

Checking 5 files against threshold 70...

✓ src/lib/utils.ts 92 / 100

✓ src/api/client.ts 78 / 100

✓ src/components/PricingTable.tsx 74 / 100

✗ src/auth/session.ts 61 / 100

→ Hardcoded token-like value (line 42)

✗ src/cart/checkout.ts 66 / 100

→ Function exceeds length threshold (line 118)

Build failed — 2 files below threshold (70)

### Insights tracking

Every build hook run is logged in your account Insights as a pass or fail — so you can see enforcement activity over time without digging through build logs. Head to `iriscode.co/account/insights` to view the breakdown.

### Uninstalling

Run **Iris: Uninstall Build Hook** from the command palette. Iris removes only its own entry. For Node projects, if no other prebuild commands remain, the `prebuild` key is deleted entirely.