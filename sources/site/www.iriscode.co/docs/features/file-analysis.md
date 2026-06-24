# Source: https://www.iriscode.co/docs/features/file-analysis

## File Analysis

Iris analyses every supported file automatically as you open or save it. The **File tab** shows:

- **Enforcement snapshot** — top-of-file readiness summary with score, blockers, hook posture, and trend direction
- **Health score** — 0–100 composite score penalising warnings, secrets, deep nesting, long functions, and debug prints
- **Trend signal** — score movement vs the previous snapshot once trend history exists
- **Language badge** — Go / TypeScript / JavaScript / Python badge in the file header
- **Line counts** — total lines, blank lines, code lines
- **Complexity score** — 1–10 score based on function density, nesting depth, control flow, and import count
- **Function list** — all detected functions with line numbers, each clickable to jump to source
- **Code smells** — TODOs, unused code, magic numbers, debug prints, and long parameter lists grouped in one section
- **Coverage signal** — whether a matching test file is detected (configurable via `testConvention` in `.irisconfig.json`)

Note: Unused import detection is TypeScript/JavaScript-only. Go and Python handle this at the compiler/runtime level.

## TypeScript Metrics

Shown only for TS/JS files; hidden automatically for Go and Python.

| Metric | What it tracks |
| --- | --- |
| `any` usages | Counts explicit `: any` / `as any`. Each occurrence is clickable. |
| `@ts-ignore` | Count of TypeScript suppressions |
| Non-null assertions | Count of `!` usages |
| Missing return types | Exported functions without an explicit return type annotation |

## Code Smells

Iris detects several code smell patterns across all supported languages. Every finding is clickable to jump to the line.

| Smell | Detected in | Toggle setting |
| --- | --- | --- |
| Debug prints — `console.log/warn/error` | JavaScript / TypeScript | `enableConsoleLogWarnings` |
| Debug prints — `fmt.Print*` / `log.Print*` / `log.Fatal*` / `log.Panic*` | Go | `enableConsoleLogWarnings` |
| Debug prints — `print()` | Python | `enableConsoleLogWarnings` |
| Magic numbers — raw numeric literals (excluding 0 and 1) used inline without a named binding | All supported languages | `enableMagicNumberDetection` |
| TODOs / FIXMEs / HACKs — from `//` comments (JS/TS, Go) and `#` comments (Python) | All supported languages | `enableTodoDetection` |
| Long parameter lists — functions with too many parameters | All supported languages | `enableLongParamDetection` |
| Unused variables — declared but never referenced elsewhere in the file | All supported languages | `enableUnusedDetection` |
| Unused functions — defined but never called within the file and not exported | All supported languages | `enableUnusedDetection` |

Tip: Disabling a toggle hides both the stat counter and the detail section from the sidebar entirely — useful for reducing visual clutter.

## Warnings

Five warning types, each with configurable severity:

| Type | Default severity | Triggers at |
| --- | --- | --- |
| `file-too-long` | error / warning | \> threshold / > ⅔ threshold |
| `function-too-long` | error / warning | \> 2× threshold / > threshold |
| `too-many-functions` | warning | \> maxFunctionsPerFile |
| `too-many-imports` | warning | \> maxImportsPerFile |
| `no-exports` | info | no exported identifier found |

Tip: Override severity per warning type using `severityOverrides` in `.irisconfig.json`.