# Source: https://www.iriscode.co/docs/configuration/irisconfig

## .irisconfig.json

Drop a `.irisconfig.json` at your project root and commit it. Every developer on the team runs Iris with the same thresholds — no per-machine drift.

**Priority order:** nearest folder `.irisconfig.json` → workspace root `.irisconfig.json` → personal default → VS Code settings → built-in defaults

### Config presets (Free + Pro)

The fastest way to get started is a preset. Add `presetId` and commit — your whole team is aligned in one line, no threshold spreadsheet required.

.irisconfig.jsonCopy

{
 // Use a shipped Iris preset as the source of truth for this config.
 "presetId": "legacy"
}

Available presets: `strict`, `balanced`, `legacy`, `security`, `typescript`.

**Free users** — Iris applies the shipped preset values as the source of truth. Local edits to threshold fields are ignored and receive a yellow warning squiggle in the editor. The preset registry in the extension is the authority, not the file on disk.

**Pro users** — the preset acts as a base layer. Any threshold you override locally is merged on top, giving your team a customisable baseline.

### Config Studio

All signed-in users can open [Account → Config](https://www.iriscode.co/account/config) to pick a preset and sync the resulting `presetId` to VS Code without touching a file manually. Pro users get the full studio: switch to Custom mode to edit individual thresholds, toggle detections, configure inline diagnostic categories, set severity overrides per rule, and watch a live `.irisconfig.json` preview update as you change each value. See the full guide at [Config Studio](https://www.iriscode.co/docs/configuration/config-studio).

When ready, click **Sync to VS Code**. The extension resolves a short-lived one-time token, opens a diff preview of the exact changes, and asks for confirmation before writing. Nothing is written silently.

**Write targets** — `Workspace` writes `.irisconfig.json` to the workspace root (available to all users). `Global default` writes to your personal default path so the config applies to every project on the machine — this target requires Pro.

### Full custom config (Pro)

.irisconfig.jsonCopy

{
 "functionLengthThreshold": 40,
 "fileLengthThreshold": 300,
 "maxFunctionsPerFile": 10,
 "maxImportsPerFile": 8,
 "maxParameterCount": 5,
 "complexityThreshold": 7,
 "enableConsoleLogWarnings": true,
 "enableMagicNumberDetection": true,
 "enableTodoDetection": true,
 "enableLongParamDetection": true,
 "enableUnusedDetection": true,
 "enableMissingReturnTypeWarnings": true,
 "enableSecretsDetection": true,
 "enableCodeLens": true,
 "enableStatusBar": true,
 "enableInlineDiagnostics": true,
 "inlineDiagnostics": {
 "hardcodedSecrets": true,
 "errorWarnings": false,
 "warningLevelWarnings": false,
 "tsIgnore": true,
 "unusedFunctions": true,
 "anyUsage": true,
 "consoleLogs": false,
 "magicNumbers": false,
 "longParamLists": false,
 "unusedVars": false,
 "todos": false
 },
 "minHealthScore": 70,
 "gateMaxSecrets": 0,
 "gateMaxComplexity": 12,
 "gateMaxFileLength": 500,
 "gateMaxSmellsPerFile": 8,
 "ignoreFiles": \[
 "\*\*/\*.test.ts",
 "\*\*/\*.spec.ts",
 "\*\*/generated/\*\*"
 \],
 "ignoreFunctions": \[
 "main",
 "handler"
 \],
 "testConvention": "colocated",
 "sidebarFontSize": 14,
 "severityOverrides": {
 "file-too-long": "warning",
 "function-too-long": "warning",
 "too-many-functions": "warning",
 "too-many-imports": "warning",
 "no-exports": "warning"
 },
 "healthScoreWeights": {
 "hardcodedSecret": 10,
 "errorWarning": 5,
 "warningWarning": 3,
 "anyUsage": 2,
 "tsIgnore": 3,
 "consoleLog": 1,
 "deepNesting": 2,
 "longParamList": 1,
 "unusedVar": 1,
 "unusedFunction": 2
 }
}

Only include the keys you want to override — anything omitted falls back to the preset (if set), then VS Code settings, then defaults.

**testConvention** - controls where Iris looks for test files alongside the analysed file. `"colocated"` (default) checks for `foo.test.ts` / `foo.spec.ts` next to the source file. `"dedicated"` looks in `__tests__/foo.test.ts`. `"both"` checks all locations.

**sidebarFontSize** - base font size in pixels (10-20, default 14) for the Iris sidebar and detached panel.

**enableSecretsDetection** - enables two-layer hardcoded credential scanning across JS/TS, Go, and Python (default `true`).

**enableInlineDiagnostics** - master toggle for squiggles and Problems panel entries. It is off by default, and the `inlineDiagnostics` object controls per-category behaviour when you opt in. See [Inline Diagnostics](https://www.iriscode.co/docs/enforcement/inline-diagnostics).

**minHealthScore** - threshold used by the CLI and git pre-push hook. Files below this score are considered failures. CLI-only key (not a VS Code setting).

**gateMaxSecrets** (Pro) - maximum number of hardcoded secrets allowed across the entire workspace. Set to `0` to require a clean workspace before any push is allowed. The CLI counts secrets across all scanned files and fails the gate if the total exceeds this value.

**gateMaxComplexity** (Pro) - maximum complexity score allowed per file (1-10 scale). Files with a complexity score above this threshold fail the gate regardless of their health score.

**gateMaxFileLength** (Pro) - maximum line count allowed per file. Any file exceeding this length fails the gate. Works alongside `fileLengthThreshold`, which controls the warning — this field controls enforcement.

**gateMaxSmellsPerFile** (Pro) - maximum total number of code smells allowed in a single file. Smells include console logs, magic numbers, long parameter lists, unused variables, unused functions, and TODO comments.

**healthScoreWeights** (Pro) - optional object that overrides how many points each finding type subtracts from the base 100 health score. Useful when your team wants to amplify secrets penalties or soften noise from unused variables without changing which rules fire. Omitted keys fall back to the active preset's values, or the built-in defaults. See [Scoring Weights](https://www.iriscode.co/docs/configuration/scoring-weights) for the full reference and examples.

## Severity Overrides

Override the severity of any warning type on a per-project basis:

| Warning key | Valid severities |
| --- | --- |
| `file-too-long` | `error` · `warning` · `info` |
| `function-too-long` | `error` · `warning` · `info` |
| `too-many-functions` | `error` · `warning` · `info` |
| `too-many-imports` | `error` · `warning` · `info` |
| `no-exports` | `error` · `warning` · `info` |