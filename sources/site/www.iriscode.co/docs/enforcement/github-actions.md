# Source: https://www.iriscode.co/docs/enforcement/github-actions

## GitHub ActionsNew

Add Iris health checks to your CI pipeline. Every push and pull request runs `iris gate` against your workspace — if your code fails the gate, the workflow fails, the merge is blocked, and the failing lines are annotated directly on the pull request diff. Everything runs on your own runners; your code never leaves your infrastructure.

### What the workflow does

- Installs the Iris CLI via `npm install -g @iris-code/cli`
- Runs `iris gate .` against your workspace using your configured threshold
- Renders inline annotations on the pull request diff at the exact failing lines
- Exits with code `1` if the gate fails — blocking the merge
- Writes a pass/fail summary table to the workflow run's job summary

### Full workflow

Copy this into `.github/workflows/iris.yml` in your repository.

.github/workflows/iris.ymlCopy

name: Iris

on:
 push:
 branches: \[main\]
 pull\_request:
 branches: \[main\]

permissions:
 contents: read

jobs:
 iris:
 name: iris
 runs-on: ubuntu-latest

 steps:
 - uses: actions/checkout@v5

 - uses: actions/setup-node@v5
 with:
 node-version: '20'

 - name: Install Iris CLI
 run: npm install -g @iris-code/cli

 - name: Run Iris enforcement gate
 run: iris gate . --format github
 env:
 IRIS\_LICENCE\_TOKEN: ${{ secrets.IRIS\_LICENCE\_TOKEN }}

Tip: Add `IRIS_LICENCE_TOKEN` to your repository secrets under **Settings → Secrets and variables → Actions**. Directory scans require a Pro licence — the workflow will run as Free and skip the directory check if no token is provided.

### Setting a threshold

Control the minimum health score by adding a `.irisconfig.json` at your project root:

.irisconfig.jsonCopy

{
 "minHealthScore": 75,
 "ignoreFiles": \["\*\*/\*.test.ts", "\*\*/generated/\*\*"\]
}

If no config is present, the default threshold of `70` is used.

### Inline annotations

The `--format github`flag emits GitHub workflow commands, so each broken gate rule renders as a red annotation on the relevant file — no extra parsing step. It also writes a pass/fail summary table to the run's job summary. The flag works on both `iris gate` and `iris check`. Gate rules (`gateMaxSecrets`, `gateMaxComplexity`, `gateMaxFileLength`) are configured in `.irisconfig.json`.

### Keeping a JSON report

To also capture a machine-readable report as a build artifact — regardless of pass or fail — add these steps:

.github/workflows/iris.ymlCopy

 - name: Save JSON report
 if: always()
 run: iris gate . --format json --output iris-report.json
 env:
 IRIS\_LICENCE\_TOKEN: ${{ secrets.IRIS\_LICENCE\_TOKEN }}

 - uses: actions/upload-artifact@v5
 if: always()
 with:
 name: iris-report
 path: iris-report.json

### Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Gate passed — workflow continues |
| `1` | Gate failed — workflow blocked |
| `2` | Invalid arguments or config error |

Note: The Iris CLI is available via `npm install -g @iris-code/cli`. No VS Code installation required for CI use, and it runs on Alpine/musl runners unchanged. You can generate this workflow from VS Code with **Iris: Add GitHub Actions Workflow** — or use **Iris: Add CI Pipeline Snippet** for GitLab CI, Bitbucket Pipelines, an npm/pnpm/yarn script, or a generic shell step.