# Source: https://www.iriscode.co/docs/features/language-support

## TypeScript & JavaScript

Iris scans **.js**, **.jsx**, **.ts**, and **.tsx** files. Unused import detection (named, default, and namespace bindings that are imported but never referenced) is TS/JS only - Go and Python handle unused imports at the compiler or runtime level. For TypeScript-specific quality metrics (any usage, @ts-ignore suppressions, non-null assertions, missing return types), see [TypeScript Metrics](https://www.iriscode.co/docs/features/file-analysis#typescript-metrics).

## Go Support

Full Go analysis with language-aware routing:

- **Functions** — both top-level `func Name(` and methods `func (r *T) Name(` detected
- **Third-party imports** — packages with a dot in the root path segment (e.g. `golang.org/x/...`, `pkg.example.com/...`)
- **Debug prints** — `fmt.Print*`, `log.Print*`, `log.Fatal*`, `log.Panic*` flagged in Code Lens and Code Smells
- **No-exports warning** — flags if no capitalised (exported) function names are found
- **Unused Go modules** — workspace scan reads `go.mod` and flags declared modules never imported across `.go` files
- `vendor/` directory — skipped automatically during workspace/folder scans

## Python Support

Full Python analysis with language-aware routing:

- **Functions** — all `def` declarations detected (top-level and class methods), with line numbers
- **Third-party imports** — `import pkg` and `from pkg import ...`; stdlib modules are excluded automatically
- **print() calls** — flagged in Code Lens and Code Smells
- **No public functions warning** — flags if all functions start with `_` (private by convention)
- **Unused Python packages** — workspace scan reads `requirements.txt` and `pyproject.toml` and flags declared packages never imported across `.py` files
- `__pycache__`, `.venv`, `venv` — skipped automatically during scans
- **Parameter lists** — `self` and `cls` are excluded from the parameter count