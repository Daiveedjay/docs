# Source: https://www.iriscode.co/docs/cli/commands

## Command Reference

Eight commands cover the full Iris workflow. Commands marked Pro require an active Iris Pro licence.

### iris check

Scores source files and prints findings. Single-file scans are free. Scanning a directory, --staged, or --changed requires Pro.

- `<path>` - file or directory to scan
- `--staged` - scan staged git files only (Pro)
- `--changed` - scan files changed since the last commit (Pro)
- `--threshold <n>` - minimum health score 0-100; overrides `.irisconfig.json`
- `--json` - output results as JSON

terminalCopy

iris check src/index.ts
iris check src/ --threshold 80
iris check --staged

- 0 - all files at or above threshold
- 1 - one or more files below threshold
- 2 - bad arguments or config error

### iris secrets

Scans the project for hardcoded credentials, API keys, tokens, and passwords. Free. No authentication required.

- `--path <dir>` - directory to scan (defaults to current directory)
- `--ignore <pattern>` - glob pattern for files to skip
- `--json` - output results as JSON

terminalCopy

iris secrets
iris secrets --path ./src --json

- 0 - no secrets found
- 1 - secrets found
- 2 - bad arguments

### iris deps

Note: Requires Iris Pro.

Audits dependencies in package.json, go.mod, or requirements.txt for outdated versions and known CVEs.

- `--json` - output results as JSON
- `--config <path>` - path to `.irisconfig.json`

terminalCopy

iris deps
iris deps --json

- 0 - all dependencies current
- 1 - outdated or vulnerable packages found
- 2 - bad arguments

### iris todos

Note: Requires Iris Pro.

Lists all TODO, FIXME, HACK, and similar comment markers found across the project.

- `--path <dir>` - directory to scan (defaults to current directory)
- `--json` - output results as JSON

terminalCopy

iris todos
iris todos --path ./src --json

- 0 - no findings
- 1 - findings found
- 2 - bad arguments

### iris gate

Note: Requires Iris Pro.

Runs a full workspace health check and exits 1 if any file falls below the configured threshold. The recommended command for CI gates.

- `--threshold <n>` - override the minimum health score; takes precedence over `.irisconfig.json`
- `--json` - output results as JSON
- `--config <path>` - path to `.irisconfig.json`

terminalCopy

iris gate
iris gate --threshold 75

- 0 - all files pass
- 1 - one or more files fail
- 2 - bad arguments or config error

### iris report

Note: Requires Iris Pro.

Runs a workspace scan and exports the results as a standalone HTML file. The output mirrors the export produced by the VS Code extension.

- `--output <path>` - output file (default: `./iris-report.html`)
- `--config <path>` - path to `.irisconfig.json`

terminalCopy

iris report
iris report --output ./reports/latest.html

- 0 - report written
- 1 - scan failed
- 2 - bad arguments

### iris hook

Note: Requires Iris Pro.

Installs and removes the git pre-push hook and the build gate hook. Equivalent to the VS Code command palette hooks.

- `install git` - write the Iris block to `.git/hooks/pre-push`
- `install build` - wire Iris into the project build command
- `uninstall git` - remove the Iris block from `.git/hooks/pre-push`
- `uninstall build` - remove the Iris build entry

terminalCopy

iris hook install git
iris hook uninstall build

- 0 - success
- 1 - hook operation failed
- 2 - bad arguments

### iris config

Reads or writes .irisconfig.json. With no arguments, prints the resolved config. Pass key=value pairs to set individual settings.

- `<key>=<value>` - set a config value (e.g. `minHealthScore=80`)
- `--global` - read or write `~/.iris/config.json` instead of the project file
- `--path <dir>` - project directory to resolve config from

terminalCopy

iris config
iris config minHealthScore=80
iris config --global

- 0 - success
- 2 - invalid key or arguments