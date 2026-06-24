# Source: https://www.iriscode.co/docs/reference/scoring

## Scoring & Metrics

### Health score

Per-file composite score from 0 to 100. Starts at 100 — deductions are applied based on findings. Floor is 0, never negative. Fully deterministic: same code always produces the same score.

| Finding | Default deduction | Weight key (Pro) |
| --- | --- | --- |
| Hardcoded secret | −10 each | `hardcodedSecret` |
| Error-level warning | −5 each | `errorWarning` |
| Warning-level warning | −3 each | `warningWarning` |
| `@ts-ignore` | −3 each | `tsIgnore` |
| `any` usage | −2 each | `anyUsage` |
| Deep nesting (per function) | −2 each | `deepNesting` |
| Unused function | −2 each | `unusedFunction` |
| `console.log` | −1 each | `consoleLog` |
| Long parameter list (per function) | −1 each | `longParamList` |
| Unused variable | −1 each | `unusedVar` |

Note: These are the default deductions. Pro users can override any weight via `healthScoreWeights` in `.irisconfig.json` — see [Scoring Weights](https://www.iriscode.co/docs/configuration/scoring-weights). Setting a weight to `0`removes that finding's contribution to the score entirely without disabling detection.

Note: `@ts-ignore` carries a heavier penalty than `console.log` because it is an active decision to suppress the type system. Unused functions carry a heavier penalty than unused variables because a dead function is a maintenance trap — someone will eventually spend time tracing it and find it does nothing.

Note: Error-level warnings cost more than warning-level warnings, which cost more than info-level findings — so a file with one long function is flagged but not cratered.

### Complexity score

Separate 1–10 scale that answers a different question from health: not “is this code problematic?” but “how hard is this code to reason about?” Score starts at 1 and caps at 10. Each factor has a cap on its contribution — no single factor can max out the score alone.

| Factor | What it measures |
| --- | --- |
| Function density | Number of functions relative to file size. Reflects how much is packed into one place. |
| Max indentation depth | Proxy for nesting complexity. Deeply indented code usually means deeply nested logic. |
| Control flow count | Every `if`, `for`, `while`, `switch`, `catch`, and ternary is a decision point that multiplies paths through the code. |
| Third-party import volume | A file pulling in many external dependencies tends to be doing many things. |

### Workspace health score

Average of all per-file health scores across the scanned project. One very unhealthy file will pull the average down but won't dominate the score unfairly.

### Language differences

Warning: TypeScript-specific deductions — `any` usage, `@ts-ignore`, non-null assertions, missing return types — only apply to JS/TS files and are automatically zeroed out for Go and Python. Health scores are not directly comparable across languages: a Go file and a TypeScript file with identical structure may score differently.

### Configurable thresholds

The thresholds that feed into the health score — function length, file length, max functions per file, max imports per file, max parameter count — are all configurable via [VS Code settings](https://www.iriscode.co/docs/configuration/vscode-settings) or [.irisconfig.json](https://www.iriscode.co/docs/configuration/irisconfig). Two projects can produce different health scores for the same file if their thresholds differ.