# Source: https://www.iriscode.co/docs/configuration/scoring-weights

## Custom Scoring WeightsNew

By default, Iris deducts a fixed number of points per finding — secrets cost 10, a warning-level finding costs 3, and so on. With `healthScoreWeights` you can change exactly how much each finding type dents the base 100 score, so the health metric reflects what matters most to your team.

Note: Custom scoring weights require Iris Pro. The key is set under `healthScoreWeights` in `.irisconfig.json` and can also be configured in the [Config Studio](https://www.iriscode.co/docs/configuration/config-studio) under Custom Scoring.

### Default weights

These are the values every preset starts from. Omitting a key falls back to the active preset's default for that finding type.

| Key | Default | What it penalises |
| --- | --- | --- |
| `hardcodedSecret` | 10 | Per hardcoded secret found. Largest single deduction. |
| `errorWarning` | 5 | Per error-severity structural warning. |
| `warningWarning` | 3 | Per warning-severity structural warning. |
| `tsIgnore` | 3 | Per `@ts-ignore` comment (TS/JS only). |
| `anyUsage` | 2 | Per explicit `any` type (TS/JS only). |
| `deepNesting` | 2 | Multiplier applied to deep nesting score per function. |
| `unusedFunction` | 2 | Per unused function definition. |
| `consoleLog` | 1 | Per console/debug print statement. |
| `longParamList` | 1 | Per long parameter list finding. |
| `unusedVar` | 1 | Per unused variable. |

### Visualising the effect

Custom ScoringPro

Start at 100 — subtract per finding

Default scoring

72/100

using preset defaults

Custom scoring

68/100

secrets & any weighted higher

hardcodedSecret

10\-15 pts

errorWarning

\-5 pts

warningWarning

\-3 pts

tsIgnore

3\-4 pts

anyUsage

2\-3 pts

unusedFunction

\-2 pts

deepNesting

\-2 pts

consoleLog

\-1 pts

longParamList

\-1 pts

unusedVar

1\-0 pts

Config snippet

.irisconfig.json—only changed keys needed

// Only include keys you want to override
{
 "presetId": "balanced", "healthScoreWeights": { "hardcodedSecret": 15 "tsIgnore": 4 "anyUsage": 3 "unusedVar": 0 }
}

### When to customise weights

- Your team ships to a regulated environment and wants secrets to cost twice the default — `"hardcodedSecret": 18`.
- Your codebase is a prototype and left-in console logs are not a blocker — `"consoleLog": 0`.
- TypeScript safety is the team's top concern — bump `anyUsage` and `tsIgnore` above their preset values.
- You want the health score to reflect only the findings you actually act on — zero out the noise.

### Security-focused example

Amplify the secrets penalty and make console logs carry more weight for audit-ready code:

.irisconfig.jsonCopy

{
 "presetId": "security",
 "healthScoreWeights": {
 "hardcodedSecret": 18,
 "consoleLog": 3,
 "anyUsage": 2
 }
}

### Softening noise for a legacy codebase

Zero out findings your team has accepted as-is so the health score reflects only what you plan to fix:

.irisconfig.jsonCopy

{
 "presetId": "balanced",
 "healthScoreWeights": {
 "consoleLog": 0,
 "unusedVar": 0,
 "unusedFunction": 0
 }
}

Warning: Setting a weight to `0` means that finding type does **not** affect the health score at all — it still shows in the sidebar, it still fires inline diagnostics if enabled, but it contributes nothing to the 0-100 number. Use this intentionally.

### Interaction with presets

When a `presetId` is active, the preset's own weight values are the base. Any key you specify in `healthScoreWeights` overrides only that key — omitted keys inherit the preset's value. If you have no preset and no custom weights, the global defaults in the table above apply.

### Configuring via Config Studio

Open [Account → Config](https://www.iriscode.co/account/config), switch to **Custom** mode, then expand the **Custom scoring** accordion. Each weight field shows the current preset default next to the input — you only need to touch the keys you want to change. Click **Sync to VS Code** when done and only the non-default keys are written to the config file.