# Source: https://www.iriscode.co/docs/cli

## Iris CLINew

The Iris CLI runs the same health analysis as the VS Code extension from any terminal, build script, or CI pipeline. No editor required.

### How it differs from the extension

The VS Code extension is interactive: it scores files as you work and surfaces findings inline. The CLI is non-interactive: it scans, prints results, and exits with a code. Use it wherever there is no editor - pre-commit hooks, build pipelines, and CI workflows.

### Installing

terminalCopy

npm install -g @iris-code/cli

Note: Node 18 or later is required. Run `iris --version` to confirm the install.

### Free

- `iris check <file>` - single-file health scan
- `iris secrets` - hardcoded secrets scan across the whole project, no auth required
- `iris config` - view or write `.irisconfig.json`

### Pro

- `iris check <dir>` - scan an entire directory
- `iris check --staged` - scan staged files only
- `iris check --changed` - scan files changed since the last commit
- `iris deps` - audit dependencies for outdated versions and CVEs
- `iris todos` - list all TODO and FIXME comments across the project
- `iris gate` - CI gate; exits 1 when any file fails the threshold
- `iris report` - export a standalone HTML health report
- `iris hook` - install and remove git and build hooks

### Quick start

terminalCopy

\# 1. Install
npm install -g @iris-code/cli

# 2. Authenticate (opens browser)
iris auth login

# 3. Scan the current directory
iris check .

### Next steps

- [Authentication](https://www.iriscode.co/docs/cli/auth) - log in, set up tokens, and manage credentials
- [Command Reference](https://www.iriscode.co/docs/cli/commands) - all eight commands with flags and exit codes
- [CI Integration](https://www.iriscode.co/docs/cli/ci) - GitHub Actions, GitLab CI, and generic shell pipelines