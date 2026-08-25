# Documentation project instructions

**Read [docs-writing-style.md](./docs-writing-style.md) before writing or editing any page.** It is the house style guide, written after a full rewrite of all 39 pages, and it records the banned constructions and the structural rules with real before-and-after examples. Nothing else in this file overrides it.

## About this project

- The public documentation for **Iris Code**, built on [Mintlify](https://mintlify.com) and served at docs.iriscode.co
- Pages are MDX with YAML frontmatter; navigation and redirects live in `docs.json`
- The product repositories are siblings of this one under `IRIS/`: `Iris-extension` (extension, CLI, LSP), `iris-package` (the `@iris/core` analysis engine), `Iris-landing`, `iris-backend`

## Running it locally

```bash
mint dev
```

Mintlify **does not run on Node 25 or later** and fails with an error that only appears after a long startup delay, which looks like a hang. Use Node 18-22.

Local search requires `mint login`, and it queries the **deployed** index. Pages you have written but not deployed will never appear in local search results. That is expected, not a bug.

## MDX, not Markdown

A comment is `{/* text */}`. An HTML comment outside a code fence fails the build for the **whole site**: MDX reads `<!--` as a JSX tag and stops at the `!` ("Unexpected character ! (U+0021) before name"). This shipped on 2026-08-25, when a generator reused the marker convention from the `iris rules` splicer - correct there, because those files are plain Markdown. Inside a code fence it is fine, which is why `agents/project-rules.mdx` still shows the `<!-- >>> iris-rules-start <<< -->` markers as example content.

```bash
node scripts/check-mdx-comments.mjs
```

No dependencies, so it runs in a fresh clone. Run it before every push, and then **watch the deploy finish** - a push is not a publish. The build runs on Mintlify's side, so a parse error leaves the live page serving the old bytes while git looks perfectly healthy.

## Generated content

`trust/accuracy-benchmark.mdx` carries a block between `{/* >>> iris-benchmark-start <<< */}` markers that is **generated**, not hand-written. Every figure in it comes from the analysis engine's own benchmark data via `Iris-extension/scripts/generate-benchmark-docs.js`. Editing a number by hand there will be overwritten, and the counts are guarded by tests in `Iris-extension/src/test/benchmarkDocs.test.ts`. Prose outside the markers is yours to edit freely.

## Terminology

- The product is **Iris Code** in all prose. Never bare "Iris"
- Technical identifiers stay as they are: `iris check`, `iris gate`, `.irisconfig.json`, `@iris-code/cli`, `iris.*` settings
- "Workspace" for the open project, "file naming" not "filename conventions", "health score" not "quality score"
- Findings are **blockers** or **warnings**; the enforcement mechanism is a **gate**

## Style preferences

Full detail in [docs-writing-style.md](./docs-writing-style.md). The short version:

- Professional but human. Not corporate, not chatty. No punchlines, no asides, no rhetorical questions as headings
- Explain the reason before the instruction, and the cause before the fix
- Active voice, second person, sentence case headings
- Bold for UI elements: click **Settings**. Code formatting for filenames, commands, paths and config keys
- British spelling where natural. **Never use em dashes**
- Every page opens with two or three sentences of context before the first heading

## Content boundaries

- **Never overclaim.** If a feature is planned and unbuilt, the page says it does not exist yet
- **Never state a tier from the roadmap.** Check the code: Free versus Pro is enforced in `Iris-extension`, and the docs must match what actually ships
- **Never restyle `changelog.mdx` history.** New entries follow the house voice; existing entries stay as written
- Do not document internal tooling, release process, or admin surfaces. Those live in the private repositories
- Do not include real licence keys, webhook URLs, tokens, or customer names in examples
