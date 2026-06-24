# Source: https://www.iriscode.co/docs/enforcement/hardcoded-secrets

## Hardcoded SecretsNew

Iris scans every file for hardcoded credentials using a two-layer system. Each finding deducts 10 points from the file health score — the highest single penalty in the system.

### Layer 1 — suspicious variable names

Matches suspicious variable names assigned to string literals:

- `key`, `token`, `secret`, `password`, `auth`, `credential`, `api`, and their common variants assigned to string literals

### Layer 2 — known credential formats

Matches known credential formats regardless of variable name:

- GitHub PATs (`ghp_`)
- OpenAI and Stripe keys (`sk-`)
- AWS access key IDs (`AKIA`)
- Google API keys (`AIza`)
- Slack bot tokens (`xoxb-` / `xoxp-`)
- Inline Bearer tokens

Note: Placeholder values (`your_key_here`, `changeme`, `REPLACE_ME`, all-caps templates) are suppressed automatically. Layer 1 hits also suppress matching Layer 2 hits on the same line to avoid duplicate Problems entries.

### Configuration

Set `"enableSecretsDetection": false` in `.irisconfig.json` to disable detection entirely. To keep detection active but suppress squiggles and Problems panel entries, set `inlineDiagnostics.hardcodedSecrets` to `false` instead.