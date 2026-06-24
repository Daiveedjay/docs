# Source: https://www.iriscode.co/docs/features/workspace-analysis

## Workspace Analysis

Run **Iris: Analyse Workspace** from the command palette or the **Scan Workspace** button in the Workspace tab to get:

- Top-level **Workspace Readiness** summary with score, blockers, warnings, TODO load, and trend posture
- Total files, directories, lines, functions
- File type breakdown and ranked hotspots for the biggest or most complex files
- Largest files (top 5) and most complex files (top 5)
- Unused packages declared in `package.json`, `go.mod`, `requirements.txt`, or `pyproject.toml` but never imported
- Blocking issues and warning-level findings aggregated into the **Issues** tab
- All TODOs aggregated into the **TODOs** tab, grouped by type
- Interactive file tree grouped by directory
- **Trend summary** — overall score movement plus improved and regressed files since the last snapshot
- Results are cached — navigate away and come back without re-scanning

## Folder Analysis

Right-click any folder in Explorer and choose **Iris: Analyse This Folder**, or click **Scan Current Folder** in the Folder tab to analyse the folder of the currently open file.

Results appear in the dedicated **Folder** tab, which auto-activates on scan. The Folder tab shows the same stats, pie chart, ranked files, and tree as the Workspace tab, plus Rescan and Clear buttons.

## Issues & TODOs

The **Issues** and **TODOs** tabs populate from the most recent folder or workspace scan. Each row shows severity (colour-coded dot), filename, line number, and message — all clickable to jump to source.

- Issues tab badge shows the error count (red) or total issue count
- TODOs tab badge shows the total count of TODO/FIXME/HACK items found
- Readiness cards in File, Folder, and WS can jump you straight into Issues or TODO cleanup
- Findings persist until you run a new scan or click Clear

Issues tab

TODOs tab

## Trend Tracking

Iris saves a daily health-score snapshot for each file after a workspace scan. Over time these snapshots show whether your codebase is improving or regressing.

### Where trends appear

- **File analysis** — a ↑/↓ delta is shown next to the health score, comparing the current score against the previous snapshot
- **Workspace analysis** — after each scan you see the overall score delta, a list of top 3 improved files, and a list of top 3 regressed files

### How snapshots work

- One snapshot is saved per day — running multiple scans on the same day updates the existing snapshot rather than creating a new one
- Snapshots are stored in `.iris-snapshots/` at your workspace root
- `.iris-snapshots/` is automatically added to your `.gitignore` — snapshots are local to each developer
- To reset your history, delete the `.iris-snapshots/` folder

Tip: Free plan stores 2 rolling snapshots (~2 days of history). Pro stores unlimited snapshots so you can track trends week over week and month over month. Upgrade at `iriscode.co/pricing`.

## Export Report

Save your current analysis as a standalone dark-themed HTML file you can share with your team, attach to a PR, or keep as an archive.

### How to export

1. 1.Run any analysis — file, workspace, or folder
2. 2.Open the command palette and run `Iris: Export Scan Report as HTML`
3. 3.Choose a save location — defaults to `iris-report.html` in your workspace root
4. 4.Click **Open in Browser** in the prompt to preview the report immediately

### What's included

- **File analysis** — health score, warnings table, and functions table for the currently analysed file
- **Workspace analysis** — summary stats grid, top files by health score, and file type breakdown
- **Folder analysis** — scoped results for the selected folder
- Only sections you have actually run are included in the report

Iris Analysis Report

iris-web · generated 2026-05-27

v1.2.1

File Analysis — cancel-order-modal.tsx

64

Blockers

2

Warnings

3

Smells

7

Coverage

MISS

Workspace Summary — iris-web

Files

128

Directories

19

Total Lines

18.4k

Functions

461

checkout.ts61 / 100

session.ts64 / 100

PricingTable.tsx74 / 100

api/client.ts78 / 100

lib/utils.ts92 / 100

Note: The report is a static snapshot. Re-run your analysis and re-export to get updated data. Export is available on all plans — no Pro required.

The default filename is `iris-report.html`. The file is self-contained — no external assets or internet connection needed to open it.