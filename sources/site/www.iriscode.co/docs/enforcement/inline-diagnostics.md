# Source: https://www.iriscode.co/docs/enforcement/inline-diagnostics

## Inline DiagnosticsNew

When inline diagnostics are enabled, Iris findings surface as a squiggle in the editor and an entry in VS Code's Problems panel. They are off by default so routine code-health findings stay in Iris unless you opt in. Severity follows your `severityOverrides` config.

### Per-category toggles

Secrets, `@ts-ignore`, unused functions, and `any` usage are enabled when inline diagnostics are on. Structural warnings like `file-too-long` default off so the Problems panel does not read like a compiler error list for routine Iris findings.

| Category | Default | What it shows |
| --- | --- | --- |
| `hardcodedSecrets` | true | Secrets findings |
| `errorWarnings` | false | Error-severity structural warnings |
| `warningLevelWarnings` | false | Warning/info structural warnings |
| `tsIgnore` | true | `@ts-ignore` usage |
| `unusedFunctions` | true | Unused function definitions |
| `anyUsage` | true | TypeScript `any` usage |
| `consoleLogs` | false | `console.log` statements |
| `magicNumbers` | false | Magic number literals |
| `longParamLists` | false | Oversized parameter lists |
| `unusedVars` | false | Unused variables |
| `todos` | false | TODO/FIXME/HACK comments |

pricing.ts

4import { API\_URL } from "@/lib/constants";

5

6const apiKey \= "sk-proj-abc123def456ghi789jkl";

7

8async function fetchPrices() {

9 const res \= await fetch(API\_URL, {

10 headers: { Authorization: \`Bearer ${apiKey}\` }

11 });

12 return res.json();

13}

Problems3

Hardcoded token-like value detectedpricing.ts:6

Function exceeds configured lengthcheckout.ts:118

Magic number in conditional branchcheckout.ts:204

### Configuration

.irisconfig.jsonCopy

{
 "enableInlineDiagnostics": true,
 "inlineDiagnostics": {
 "consoleLogs": true,
 "magicNumbers": false,
 "todos": false
 }
}

Set `"enableInlineDiagnostics": false` to disable all squiggles and Problems panel entries globally while keeping findings visible in the Iris sidebar.