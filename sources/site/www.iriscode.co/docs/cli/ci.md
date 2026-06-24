# Source: https://www.iriscode.co/docs/cli/ci

## CI Integration

The CLI is designed for non-interactive pipelines. Install it with `npm install -g @iris-code/cli`, pass your licence via environment variable, and use `iris gate` as the gate step.

### Exit codes

- 0 - all files pass; the pipeline continues
- 1 - one or more files fall below the threshold; fail the build
- 2 - bad arguments or invalid config; fix the workflow step

### Setting IRIS\_LICENCE\_TOKEN

Add your licence key as a secret in your CI provider settings, then expose it as the `IRIS_LICENCE_TOKEN` environment variable in the step that runs Iris. The CLI checks this variable before reading the credentials file, so no login step is needed on runners.

Note: `iris secrets` runs without any authentication at all. Use it for a free CI scan that requires no licence.

### GitHub Actions

Tip: The [GitHub Actions](https://www.iriscode.co/docs/enforcement/github-actions) page covers the full workflow including branch protection rules and threshold configuration. The example below shows a minimal `iris gate` step to add to an existing workflow.

.github/workflows/iris.ymlCopy

name: Iris health check
on: \[push, pull\_request\]

jobs:
 iris:
 runs-on: ubuntu-latest
 steps:
 - uses: actions/checkout@v5
 - uses: actions/setup-node@v5
 with:
 node-version: 20
 - run: npm install -g @iris-code/cli
 - name: Gate check
 run: iris gate
 env:
 IRIS\_LICENCE\_TOKEN: ${{ secrets.IRIS\_LICENCE\_TOKEN }}

For a free secrets scan that needs no licence, add this step independently:

.github/workflows/iris.ymlCopy

 - name: Secrets scan (free, no licence needed)
 run: |
 npm install -g @iris-code/cli
 iris secrets

### GitLab CI

.gitlab-ci.ymlCopy

iris-gate:
 stage: test
 image: node:20
 script:
 - npm install -g @iris-code/cli
 - iris gate
 variables:
 IRIS\_LICENCE\_TOKEN: $IRIS\_LICENCE\_TOKEN

### Generic shell

For any CI environment that runs arbitrary shell scripts:

ci.shCopy

#!/bin/sh
set -e
npm install -g @iris-code/cli
iris gate --threshold 80

Tip: Pair `iris gate` (Pro) with `iris secrets` (free) for layered coverage: gate blocks low-quality code, secrets scan catches leaked credentials on every push regardless of licence status.