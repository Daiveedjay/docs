# Source: https://www.iriscode.co/docs/enforcement/dependents-table

## Dependents TableNew

Open **Iris: Open Dependents Table** from the command palette to audit every third-party dependency for outdated versions and CVEs in one panel.

### Supported package sources

- npm — `package.json`
- Go modules — `go.mod`
- Python — `requirements.txt` and `pyproject.toml`

### What the table shows

- Package name
- Installed version
- Latest version
- Known CVEs from the GitHub Advisory Database

Dependents Table6 packages

| Package | Installed → Latest | Advisories |
| --- | --- | --- |
| next | 
14.1.0→15.3.2

 | — |
| express | 

4.18.2→4.21.2

 | 

CVE-2024-29041

 |
| jsonwebtoken | 

8.5.1→9.0.2

 | 

CVE-2022-23529CVE-2022-23540

 |
| axios | 

1.6.7→1.7.9

 | — |
| zod | 

3.22.4

 | — |
| tailwindcss | 

3.4.1→4.1.5

 | — |

### Caching

Results are cached locally for 24 hours at `.iris-cache/dependents.json`. Re-opening the panel is instant without a new network round-trip. `.iris-cache/` is added to `.gitignore` automatically on the first write.

### GitHub PAT (optional)

The unauthenticated GitHub Advisory API rate limit is 60 requests per hour. Store a personal access token via the in-panel token button to raise it to 5,000 per hour. The token is stored in VS Code's `SecretStorage` and never leaves your machine.

To generate a token: go to GitHub [Settings](https://github.com/settings/profile) → [Developer settings](https://github.com/settings/apps) → [Personal access tokens → Tokens (classic)](https://github.com/settings/tokens) and generate a new token. No scopes are required — leave all boxes unchecked.

Tip: Advisory API errors return empty CVE lists silently — the table still loads with version data even when the advisory API is unavailable or rate-limited.