# Source: https://www.iriscode.co/docs/cli/auth

## Authentication

Most CLI commands require an active Iris Pro licence. There are two ways to authenticate: a browser flow for local development, or a token for non-interactive environments.

### Commands

terminalCopy

\# Browser-based OAuth flow (interactive)
iris auth login

# Licence token flow (non-interactive)
iris auth login --token sk\_live\_your\_licence\_key\_here

# Confirm the active session
iris auth status

# Remove stored credentials
iris auth logout

### How credentials are stored

Both flows write to `~/.iris/credentials`. The file is created with `chmod 600` so only the current user can read it. Add `~/.iris/` to your global gitignore to prevent accidental commits.

### Priority order

The CLI resolves credentials in this order:

- **IRIS\_LICENCE\_TOKEN** environment variable - checked first; takes precedence over the credentials file
- Credentials file at `~/.iris/credentials` - written by `iris auth login` or `iris auth login --token`

Tip: The environment variable is the recommended approach for CI runners. It avoids writing any files to the runner filesystem and is revoked by rotating the secret in your repository settings.

### Using IRIS\_LICENCE\_TOKEN in CI

terminalCopy

\# Set for the current shell session
export IRIS\_LICENCE\_TOKEN=sk\_live\_your\_licence\_key\_here

# Or inline for a single command
IRIS\_LICENCE\_TOKEN=sk\_live\_your\_licence\_key\_here iris gate

- Add your licence key as a repository secret named `IRIS_LICENCE_TOKEN`
- Reference it in your workflow environment as shown above
- The CLI reads the env var automatically - no `iris auth login` step required on the runner

Note: `iris secrets` scans for hardcoded credentials and runs without any authentication at all. It is usable on the free tier with no licence required.