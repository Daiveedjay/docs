# Source: https://www.iriscode.co/docs

[iris](https://www.iriscode.co/)docs

getting started

# Iris documentation for installing, scanning, and enforcing code health.

Install Iris Code in VS Code, run your first scan, configure \`.irisconfig.json\`, and learn how local enforcement works across the editor, build, and git flow.

Works with VS Code 1.85+.

TypeScriptJavaScriptGoPython

[.irisconfig.json guide](https://www.iriscode.co/docs/configuration/irisconfig) [Health score reference](https://www.iriscode.co/docs/reference/scoring) [Download Iris Code](https://www.iriscode.co/download)

[Feature walkthrough\\ \\ See how file analysis, workspace scans, hooks, and diagnostics connect across the product.](https://www.iriscode.co/features) [Manual download\\ \\ Install the Iris VSIX manually in VS Code, Cursor, Windsurf, and VSCodium.](https://www.iriscode.co/download) [Plans and limits\\ \\ Compare Free and Pro, including workspace scans, hooks, and shared config.](https://www.iriscode.co/pricing) [Release notes\\ \\ Track version updates, bug fixes, and product changes across Iris Code.](https://www.iriscode.co/changelog)

[start\\ \\ Getting Started\\ \\ Install Iris and run your first analysis](https://www.iriscode.co/docs) [features\\ \\ Features\\ \\ Core analysis capabilities of the extension](https://www.iriscode.co/docs/features) [gates\\ \\ Enforcement\\ \\ New\\ \\ Prevent issues from reaching production](https://www.iriscode.co/docs/enforcement) [config\\ \\ Configuration\\ \\ Customise rules and project settings](https://www.iriscode.co/docs/configuration) [cli\\ \\ CLI\\ \\ New\\ \\ Use Iris outside VS Code - in terminals and CI pipelines](https://www.iriscode.co/docs/cli) [reference\\ \\ Reference\\ \\ Commands, metrics, and all the details](https://www.iriscode.co/docs/reference) [pro\\ \\ Iris Pro\\ \\ Advanced features for power users](https://www.iriscode.co/docs/pro)

## How it Works

From install to insights in four steps. Iris runs entirely locally - no analysis backend, no AI, and no configuration required to get started.

Prefer the terminal? Install `@iris-code/cli` to scan, gate, and audit without opening VS Code. See the [CLI docs](https://www.iriscode.co/docs/cli).

1

### Install & open a file

Install Iris from the VS Code Marketplace and open a supported file — the Iris sidebar populates instantly with no configuration required.

![Iris in the VS Code Marketplace](https://www.iriscode.co/_next/image?url=%2Fdocs%2Fstep-1-install.webp&w=3840&q=75)

2

### Read the File tab

Open any JS, TS, Go, or Python file — the File tab leads with an enforcement snapshot, then drops into score, complexity, functions, and code smells.

3

### Run a workspace scan

Run Iris: Analyse Workspace from the command palette — Workspace Readiness, the Issues tab, and the TODOs tab populate with aggregated findings across every file in the project.

4

### Upgrade to Pro

Unlock advanced metrics with a Pro licence — regional pricing, sign in with Google or GitHub, and Pro features activate instantly after payment.

Iris Pro

$6/moregional pricing

- Workspace & folder analysis
- Git hook enforcement
- Build hook enforcement
- Dependents table + CVE audit
- Issues & TODOs tabs
- Unlimited trend history
- Shared .irisconfig.json

Sign in to activate instantly after payment

[Continue with Google](https://www.iriscode.co/sign-in?redirect_url=/pricing) [Continue with GitHub](https://www.iriscode.co/sign-in?redirect_url=/pricing)Upgrade to Pro →

## Overview

Iris is a VS Code extension for static code insights - health scores, complexity analysis, function detection, code smell detection, and TypeScript quality metrics. It supports **JavaScript, TypeScript (JS/JSX/TS/TSX), Go, and Python**. Everything runs locally - no analysis backend, no AI, and no source-code upload for analysis. Iris does send limited account, billing, and product-use events needed for licensing and lifecycle features.

- Automatic analysis on every file open and save
- Health score from 0 - 100 per file and workspace
- Complexity scoring, function lists, import tracking
- Code smell detection for console logs, magic numbers, TODOs, and more
- Workspace and folder-level aggregated stats
- Configurable thresholds via `.irisconfig.json` or VS Code settings

## Installation

Install Iris from the VS Code Marketplace — it's free.

1. 1Open VS Code and go to the Extensions panel (`Ctrl+Shift+X`)
2. 2Search for **Iris** and click Install
3. 3The Iris icon appears in the Activity Bar
4. 4Open any JS, TS, Go, or Python file — the sidebar populates instantly

Tip: Prefer the terminal? Run `npm install -g @iris-code/cli` to install the CLI globally and start scanning without VS Code. See the [CLI overview](https://www.iriscode.co/docs/cli) for setup and all available commands.

## Quick Start

Once installed, Iris works with zero configuration. Here's what to expect:

- Open any supported file — the **File tab** opens with an enforcement snapshot, score, blockers, warnings, and code smells
- Run **Iris: Analyse Workspace** from the command palette to scan your entire project
- Right-click any folder in Explorer and choose **Iris: Analyse This Folder** for scoped analysis
- Click blockers, warnings, TODO load, or findings in the sidebar to jump directly to the right fix surface
- Add a `.irisconfig.json` at your project root to share thresholds across your team

Tip: Iris auto-refreshes the File tab on every save — no need to trigger analysis manually.