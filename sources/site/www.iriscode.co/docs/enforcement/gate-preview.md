# Source: https://www.iriscode.co/docs/enforcement/gate-preview

## Gate PreviewNew

Gate Preview runs a full workspace scan and shows how your codebase scores against all five built-in preset thresholds in one read-only view. It is the right first step before committing to enforcement — you see exactly how many files would be blocked, at which threshold, and why, before a single hook is installed.

Note: Gate Preview is free for all users. No files are blocked, no config is written, and no enforcement is enabled. It is always read-only.

### How to open it

Scroll to the bottom of the **File tab** in the Iris sidebar and click **Preview Gate**. Iris runs a background workspace scan and renders results inline. The scan respects your `ignoreFiles` list from `.irisconfig.json`.

### The five presets

Each row in the Gate Preview corresponds to one built-in preset. Presets are ordered from most lenient to most strict:

| Preset | Min score | Focus |
| --- | --- | --- |
| **legacy** | 60 | Loose. For large, old codebases with accumulated debt. |
| **balanced** | 70 | Sane defaults for a typical TypeScript project. Best starting point. |
| **typescript** | 76 | Raises the bar on type-safety: any, ts-ignore, missing return types. |
| **strict** | 82 | Every rule on, tighter limits. For greenfield code or shared libraries. |
| **security** | 85 | Prioritises secrets and safety. Tightest threshold available. |

### What the preview shows

- **Workspace average** — a single 0-100 health score across every scanned file.
- **Files analysed** — the total number of JS/TS/Go/Python files included in the scan.
- **Threshold card** — which presets you already pass and what the next failing threshold is.
- **Recommendation card** — the highest preset you can lock in today with zero files blocked, plus the next goal.
- **Focus card** — the currently selected preset shown large, with prev/next cycling controls, a chip strip for direct jumps, and an Apply button to lock it in.
- **Preset overview grid** — all five presets at a glance. Click any card to jump the focus card to that preset.

BackRead-only preview

### Gate Preview

Free

How your workspace scores against the five Iris quality presets. No enforcement — read-only.

Workspace avg

74/100

Files analysed

17files

Passes legacy, balanced

Next: `typescript` (min 76) — fix **3** files to pass.

Recommendation

Workspace avg 74. Lock in **Balanced** now — no files blocked. Next: **TypeScript** requires fixing 3 files.

#### Presets

5

Legacymin 60

0pass

Balancedmin 70

0pass

TypeScriptmin 76

3 / 17fail

Strictmin 82

7 / 17fail

Securitymin 85

9 / 17fail

✦ Iris Pro

Enforce automatically

Pick a preset and Iris will block commits that drop files below its score. Right now 9 files would be blocked by **Security**.

Upgrade to Pro

### Preset cycling

The focus card shows one preset at a time in detail. Use the **prev/next arrows** to step through all five presets in order, or click any chip in the strip — Legacy, Balanced, TypeScript, Strict, Security — to jump directly. The chip for your currently active preset is labelled _Current_.

The focus card shows the preset name, its minimum score, the fail count for your workspace, and an expanded drilldown (Pro). When you have found the right threshold, click **Apply** to write the `presetId` to your workspace `.irisconfig.json` immediately, without leaving the surface. **Customize in Docs** opens the configuration reference for that preset.

### Reading the preset overview

Below the focus card, the overview grid shows all five presets as compact cards — name, min score, and pass/fail count. Click any card to bring it into focus. A green border indicates a preset your workspace already passes; an accent border marks the currently focused preset.

Expanding a row in the focus card drilldown: Free users see a locked panel showing the count of failing files; Pro users see the actual file names, scores, and the warning pills that are driving each failure.

### The recommendation card

Below the stat tiles, Iris shows two pieces of advice: which preset you can lock in today with no disruption, and what it would take to reach the next threshold. The recommendation looks at which presets you already pass and picks the highest one as your baseline. If none pass yet, it recommends the easiest preset to reach first.

### Free vs Pro

- Gate Preview scan and results — **free**
- Per-preset pass/fail counts and progress bars — **free**
- Per-file drilldown inside each preset row (filenames, scores, warning pills) — **Pro**
- Actual enforcement via git hook or build hook — **Pro**

Tip: If the preview shows a large number of failing files, start with `legacy` or `balanced` and work up over time. Add `"presetId": "balanced"` to your `.irisconfig.json` to align the whole team to a baseline for free — no enforcement yet, just consistent thresholds.

### Acting on the results

Once Gate Preview confirms which threshold is realistic for your codebase, you have two paths. The free path is to add a `presetId` to `.irisconfig.json` — this aligns the team's local analysis thresholds without blocking any pushes. The Pro path is to install the git hook or build hook, which will start blocking files that fall below your chosen threshold. See [Git Hook](https://www.iriscode.co/docs/enforcement/git-hook) and [Build Gate](https://www.iriscode.co/docs/enforcement/build-gate) for the enforcement setup.