# Source: https://www.iriscode.co/docs/reference/commands

## Commands

All commands are available via the command palette (`Ctrl+Shift+P`):

| Command | Description |
| --- | --- |
| `Iris: Analyse Current File` | Manually re-analyse the active file |
| `Iris: Analyse Workspace` | Analyse all JS/TS/Go/Python files in the workspace |
| `Iris: Analyse This File` | Right-click a file in Explorer to analyse it |
| `Iris: Analyse This Folder` | Right-click a folder in Explorer to analyse it |
| `Iris: Analyse Current Folder` | Analyse the folder of the currently open file |
| `Iris: Open in Panel` | Pop the sidebar out into a full editor panel beside your code |
| `Iris: Export Scan Report as HTML` | Save the current analysis as a standalone HTML report |
| `Iris: Install Git Hook` | Install the pre-push hook into `.git/hooks/pre-push` |
| `Iris: Uninstall Git Hook` | Remove the Iris block from the pre-push hook |
| `Iris: Install Build Hook` | Wire Iris health checks into the project build — `prebuild` for Node, Makefile target for Go/Python |
| `Iris: Uninstall Build Hook` | Remove the Iris build hook, leaving any other build steps intact |
| `Iris: Open Dependents Table` | Open the dependency audit panel (versions + CVEs) |
| `Iris: Show Welcome Page` | Open the Getting Started welcome page |

## Context Menus

Iris adds entries to the right-click menu in two places:

### Explorer (file tree)

- Right-click a JS/TS/Go/Python file → **Iris: Analyse This File**
- Right-click a folder → **Iris: Analyse This Folder**
- Right-click anywhere → **Iris: Analyse Workspace**

### Editor (inside a file)

- **Iris: Analyse Current File**
- **Iris: Analyse Current Folder**
- **Iris: Analyse Workspace**