# Source: https://www.iriscode.co/docs/configuration/vscode-settings

## VS Code Settings

Open settings with `Ctrl+,` and search **"Iris"** to configure:

| Setting | Default | Description |
| --- | --- | --- |
| `iris.functionLengthThreshold` | 40 | Lines before a function is flagged |
| `iris.fileLengthThreshold` | 300 | Lines before a file is flagged |
| `iris.maxFunctionsPerFile` | 10 | Max functions before flagging |
| `iris.maxImportsPerFile` | 8 | Max third-party imports before flagging |
| `iris.maxParameterCount` | 5 | Max parameters before flagging a function |
| `iris.complexityThreshold` | 7 | Complexity score that triggers status bar warning |
| `iris.enableConsoleLogWarnings` | true | Flag console.log / print() / fmt.Print\* statements |
| `iris.enableMagicNumberDetection` | true | Flag raw numeric literals used without a named binding |
| `iris.enableTodoDetection` | true | Flag TODO / FIXME / HACK comments |
| `iris.enableLongParamDetection` | true | Flag functions with too many parameters |
| `iris.enableUnusedDetection` | true | Flag unused variables and functions |
| `iris.enableMissingReturnTypeWarnings` | true | Flag exported functions missing return types (TS/JS only) |
| `iris.enableCodeLens` | true | Show inline Code Lens hints |
| `iris.enableStatusBar` | true | Show Iris item in status bar |
| `iris.severityOverrides` | {} | Override severity per warning type |
| `iris.ignoreFiles` | \["\*\*/\*.test.ts", ...\] | Glob patterns for files to skip in workspace analysis |
| `iris.ignoreFunctions` | \[\] | Function names Iris should never flag |