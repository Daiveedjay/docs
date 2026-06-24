# Source: https://www.iriscode.co/

local code health enforcement

# Stop weak code before you ship.

Iris scores every file on save, surfaces problems in the editor, and blocks pushes that fall below your threshold. Enforce from the sidebar, the terminal, or your CI pipeline — runs entirely on your machine, no analysis backend, no AI, no code upload.

[Install Free](https://marketplace.visualstudio.com/items?itemName=davidjaja.iris-code) [Read the docs](https://www.iriscode.co/docs)

local-firstno analysis backendno AIgate preview freeCLI included14-day Pro trial

TypeScript

JavaScript

Go

Python

local rules

## Five panels. One sidebar. Zero context switch.

Each tab has a different lens on the same workspace. Open the panels you care about and ignore the rest.

per file

### Know what's wrong before review starts.

Iris scores every file on save. Blockers, warnings, smells, and secrets surface immediately in the sidebar — nothing surprises you in code review.

- Health score 0-100, recomputed every save.
- Function inventory with length, complexity, and line number.
- Hardcoded secrets flagged with a masked preview before they ship.

Iris / file

0

cancel-order-modal.tsx

lines

379

code

349

fns

12

cplx

6/10

across the project

### The whole codebase in one view.

Workspace scan crawls every file and ranks the places most likely to slow the team down.

- Largest and most complex files ranked first.
- Folder analysis for monorepos and feature areas.
- Unused packages across npm, Go, and Python.

Iris / workspacescan complete

1constants.ts1148L

2sidebar.tsx728L

3grid.tsx519L

4modal.tsx453L

unused packages

@hookform/resolvers0 imports

embla-carousel0 imports

enforcement

### See your enforcement posture before you commit to it.

Gate Preview lets you run a free, read-only scan against all five preset thresholds before a single hook is installed. When you're ready, git and build hooks take over — or run \`iris gate\` in CI to block weak code before it merges.

- Cycle through Legacy, Balanced, TypeScript, Strict, and Security — see exact fail counts per preset.
- Apply a preset in one click from the preview. No config editing required.
- Git pre-push hook, build hook, and \`iris gate\` in CI all enforce the same threshold — pick whichever fits your workflow.

Iris / gate preview

read-only

Legacy60

✓ pass

Balanced70

2 fail

TypeScript76

2 fail

Strict82

5 fail

Security85

5 fail

Recommendation: Legacy — 0 files blocked

Fix 2 files to reach Balanced (min 70)

### Turn a health score into a hard gate.

Preview your posture for free, pick the right threshold, then block weak pushes and builds automatically.

#### Gate Preview

Cycle through all five preset thresholds, see pass/fail file counts, drill into failing files (Pro), and apply the chosen preset in one click — free and read-only.

#### Config presets

Free for all users — one presetId in .irisconfig.json aligns the whole team. Build and sync custom configs from the Config Studio with Pro.

#### Git pre-push hook

Block pushes when any file falls below your minimum health threshold.

#### Build hook

Stop a weak build before review starts. Wires into prebuild, Makefile, or CI.

#### Dependents & CVE

Audit third-party packages for outdated versions and known vulnerabilities.

## From signal to guardrail

Install the extension, set the threshold once, and let Iris make quality visible in the editor and enforceable in your workflow.

01

### Install the extension

Add Iris to VS Code and open a supported project. Analysis runs locally as you work.

02

### Preview your gates

Open Gate Preview from the File tab — free and read-only. See how your workspace scores against all five preset thresholds, then apply the right one in a click.

03

### Block weak code automatically

Install the git hook or build hook. From then on, files below your threshold are blocked before they ever reach the team.

04

### Or run it from the terminal

Install @iris-code/cli to scan files, gate CI builds, and audit dependencies. Works without VS Code in any terminal or pipeline.

## One config, same rules everywhere

Commit `.irisconfig.json` and the sidebar, diagnostics, git hook, and build hook all evaluate the same thresholds.

.irisconfig.jsonCopy

{
 "presetId": "balanced",
 "minHealthScore": 75,
 "functionLengthThreshold": 60,
 "fileLengthThreshold": 400,
 "enableSecretsDetection": true,
 "gateMaxSecrets": 0,
 "ignoreFiles": \["\*\*/\*.test.ts", "\*\*/generated/\*\*"\]
}

## Free for analysis. Pro for enforcement.

Gate Preview, file scoring, secrets detection, and preset configs are free forever. Pro turns signal into a gate — workspace scans, git hooks, drilldowns, and custom rules.

local

in-process

backend calls

license only

code upload

never for analysis

### Free

$0/ month

forever

- File analysis (health score, complexity, functions)
- TypeScript metrics
- Code smell detection
- Hardcoded secrets detection
- Inline diagnostics (squiggles + Problems panel)
- Status bar + Code Lens
- JS, TypeScript, Go, and Python support
- Detached panel & HTML report export
- Health score trend tracking (2 snapshots)
- .irisconfig.json preset configs (presetId)
- Gate Preview (read-only enforcement posture check)
- iris check: single-file health scan from the terminal (CLI)
- iris secrets: hardcoded credential scanner, no auth required (CLI)
- iris report: standalone HTML health report (CLI)
- iris hook status: check hook installation state (CLI)
- iris config init and validate (CLI)

[Install Free](https://marketplace.visualstudio.com/items?itemName=davidjaja.iris-code)

Pro

### Pro

$6/ month

14-day free trial included

Card

- 14-day free trial — no credit card required
- Everything in Free
- Workspace analysis
- Folder analysis
- Gate Preview drilldown — see exactly which files fail each preset
- Git hook enforcement
- Build hook enforcement
- Dependents table (version audit + CVE scan)
- Issues tab with blocker and warning filters
- TODOs tab aggregation
- Clickable jump-to-line on all findings
- .irisconfig.json custom config (threshold overrides)
- Custom enforcement limits — block on secret count, complexity ceiling, file size, or smell density
- Custom health score weights per finding type
- Config Studio — build, preview, and sync to VS Code
- Unlimited trend history
- iris gate: full enforcement gate for CI pipelines (CLI)
- iris deps: dependency and CVE audit (CLI)
- iris todos: aggregate TODO and FIXME comments (CLI)
- iris hook install and uninstall (CLI)
- iris check: directory and staged file scans (CLI)
- Push-blocked counter — monthly and total pushes blocked, with health score delta since Pro activation

Start free trialSkip trial - get Pro now

side by side

### What's in each plan.

FreePro

File health score

Function inventory

Complexity scoring

Code smells

Inline diagnostics

Config presets (presetId)

Gate Preview (read-only — pass/fail per preset)

Gate Preview file drilldown (failing filenames + scores)

Workspace + folder scan

Git pre-push hook

Build hook

Custom .irisconfig thresholds

Custom enforcement limits (secrets, complexity, file size, smells)

Custom scoring weights (healthScoreWeights)

Config Studio (build + sync to VS Code)

Dependents & CVE

iris check: single-file scan (CLI)

iris secrets: credential scanner, no auth required (CLI)

iris report: HTML health report export (CLI)

iris hook status (CLI)

iris config init and validate (CLI)

iris gate: CI enforcement gate (CLI)

iris deps: dependency and CVE audit (CLI)

iris todos: aggregate TODO and FIXME comments (CLI)

iris hook install and uninstall (CLI)

iris check: directory and staged scans (CLI)

Pricing adjusts by region when available.

## Common questions

Is Iris really free?

Is there a free trial for Iris Pro?

Does Iris send my code anywhere?

What languages does Iris support?

How is the health score calculated?

Can I use .irisconfig.json without Pro?

Can I pay by bank transfer instead of card?

## Install Iris. Set a threshold. Stop bad code before it ships.

Two minutes from install to your first blocked push.

[Install Free on VS Code](https://marketplace.visualstudio.com/items?itemName=davidjaja.iris-code)

[Read documentation](https://www.iriscode.co/docs) [Explore features](https://www.iriscode.co/features) [Manual download](https://www.iriscode.co/download) [Release notes](https://www.iriscode.co/changelog)