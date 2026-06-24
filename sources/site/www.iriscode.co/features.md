# Source: https://www.iriscode.co/features

Analysis14Configuration7Enforcement3CLI9Languages4

FreePro

01

## Analysis

Detect and measure — every file, every save.

Per file

### Know what's wrong before review starts.

Open a file and Iris scores it instantly — functions, complexity, and every smell pinned to a line.

Free

IRIS · file

72

/100

cancel-order-modal.tsx

3 issues holding this back

Lines

379

Code

349

Fns

12

Cmplx

6/10

Free

### File health score

A 0–100 score for every file, recomputed on each save.

Free

### Function inventory

Every function listed with its complexity and line numbers.

Free

### Code smells

Console logs, magic numbers, TODOs, and unused vars and functions.

Free

### TypeScript quality

Flags any usage, @ts-ignore, and missing return types.

Free

### Hardcoded secrets

Two layers: suspicious names plus known token formats.

Free

### Inline diagnostics

Squiggles and Problems-panel entries, opt-in per workspace.

Free

### Status bar + Code Lens

Live score in the status bar; complexity above each function.

Free

### Detached panel + export

Pop the report into its own window or export it to HTML.

Free + Pro

### Trend tracking

2 snapshots on Free; unlimited history on Pro to chart long-range health.

Pro

### Workspace + folder scan

Aggregate stats, ranked files, and unused packages across the repo.

Pro

### Issues tab

Every blocking issue and warning aggregated into one filterable list.

Pro

### TODOs tab

Every TODO, FIXME, and HACK note collected across the codebase.

Pro

### Jump to line

Every finding clicks straight to the exact line it lives on.

Pro

### Dependents table

Version audit and CVE scan for npm, Go, and Python dependencies.

02

## Configuration

Set the bar once; align the whole team.

Gate Preview

### Try a threshold before you commit to it.

Scan read-only against all five presets, watch the fail count change, and apply the one that fits.

Free

IRIS · gate preview

LegacyBalancedTypeScriptStrictSecurity

Threshold

70

**2** of **128** files would fail this gate

Apply

Free

### Gate Preview

Scan against all five preset thresholds, cycle through them, and apply in one click.

Free

### Config presets

One presetId line in .irisconfig.json aligns thresholds for the whole team.

Free

### Dashboard config sync

Pick a preset on the web and push it straight to VS Code with a diff preview.

Pro

### Gate Preview drilldown

Failing file names, scores, and warning pills inside each preset row.

Pro

### Custom enforcement limits

Block on secret count, complexity ceiling, file size, or smell density.

Pro

### Custom scoring weights

Tune how much each finding type costs the health score.

Pro

### Config Studio

A visual editor for your full config, synced back to VS Code.

03

## Enforcement

Block what falls below the line.

Hooks

### Nothing broken gets past the line.

Secrets and sub-threshold files stop at the pre-push and build hooks — before they ever ship.

Pro

IRIS · pre-push

31const API\_TOKEN = "ghp\_aB3xQ9f2Lm…"

32const password = "hunter2"

2 secrets · push blockedpre-push

Pro

### Git pre-push hook

Block any push that falls below your health threshold.

Pro

### Build hook

Stop JS, Go, and Python builds before they run.

Pro

### Push-blocked counter

Monthly and total pushes blocked, plus health score improvement since Pro activation.

04

## CLI

Nine commands for terminals and CI pipelines.

Free

### iris auth

Sign in via browser or pass a licence token. Credentials stored at ~/.iris/credentials.

Free + Pro

### iris check

Single-file scan is free. Directory scans, --staged, and --changed require Pro.

Free

### iris secrets

Scan for hardcoded credentials, API keys, and tokens. No authentication required.

Pro

### iris deps

Audit package.json, go.mod, and requirements.txt for outdated versions and CVEs.

Pro

### iris todos

Collect all TODO, FIXME, and HACK comments across the codebase.

Pro

### iris gate

Run the full enforcement gate. Exits 1 when any file falls below threshold. Designed for CI.

Free

### iris report

Export a standalone HTML health report. Defaults to iris-report.html in the current directory.

Free + Pro

### iris hook

Status check is free. Install and uninstall pre-push and build hooks requires Pro.

Free

### iris config

Init generates .irisconfig.json with preset selection. Validate checks an existing config.

05

## Languages

Parsed and scored natively.

TypeScript

.ts .tsx

JavaScript

.js .jsx

Go

.go

Python

.py

## Make code health a metric you can enforce.

Install free for analysis. Upgrade to Pro when you're ready to block.

[Install Iris for VS Code](https://marketplace.visualstudio.com/items?itemName=davidjaja.iris-code)