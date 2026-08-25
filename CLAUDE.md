# Iris Code documentation

## Read this first, every time

**[docs-writing-style.md](./docs-writing-style.md) is mandatory before writing or editing any `.mdx` page in this repository.** Not optional, not "if in doubt". It is the house style guide, written on 2026-08-08 after every one of the 39 pages was rewritten twice, and it records the exact constructions that were removed and why.

It exists because the writing drifted twice in opposite directions: first into corporate noun-stacking, then, over-correcting, into chatty blog voice with punchlines and asides. Both were wrong, both took a full pass to undo, and neither would have happened if the rules had been written down.

If you are about to write a sentence and have not read that file, stop and read it.

[AGENTS.md](./AGENTS.md) carries the operational detail: local dev, terminology, content boundaries.

## The rules most often broken

Full list in the style guide. These are the ones to hold in your head:

1. **No punchlines, asides, or rhetorical questions.** "That's the whole integration", "There's nobody there to click anything", "You found one. Now what?" all got removed. Say the thing plainly.
2. **Reason before instruction.** Explain why a feature exists, then how to use it. In troubleshooting, cause before fix.
3. **Never use em dashes.** Hyphen with spaces, comma, colon, or rewrite.
4. **The product is "Iris Code"** in every sentence a human reads. `iris check` and `.irisconfig.json` stay lowercase.
5. **Every page opens with two or three sentences of context** before the first heading.
6. **Never overclaim.** Unbuilt features are described as not existing yet. Tiers come from the code, not the roadmap.
7. **`<Frame>` is for images only.** Wrapping a code block in it renders the text invisibly.

## Structural rules

- Six nav groups: Start here, What Iris Code finds, Blocking bad code, Configuration, Editors, Reference. "Finds" is detection, "Blocking" is enforcement. A new page goes in whichever verb fits.
- **Every new page needs an inbound link** from a related page. Sidebar-only pages are invisible to readers who navigate by links.
- **Moving a page requires a redirect** in `docs.json` plus updating every internal link.
- **`changelog.mdx` is a historical record.** Never restyle existing entries.

## Running it

```bash
mint dev
```

Mintlify does not run on Node 25 or later. Use Node 18-22. The failure appears only after a long startup delay, so it looks like a hang rather than an error.

## These are .mdx files, not .md

A comment is `{/* text */}`. An HTML comment outside a code fence fails the build
for the **whole site**, not just its own page - MDX reads `<!--` as a JSX tag and
stops at the `!`. This shipped on 2026-08-25 and took the deploy down; inside a
code fence it is fine, which is why `agents/project-rules.mdx` can still show the
`<!-- >>> iris-rules-start <<< -->` markers as example content.

```bash
node scripts/check-mdx-comments.mjs
```

No dependencies, so it runs in a fresh clone. Run it before any push.

## Before finishing

1. Render the page, do not just read the source.
2. Run `node scripts/check-mdx-comments.mjs`.
3. Every nav entry resolves; every internal link resolves; moved paths have redirects.
4. Grep the diff for em dashes, bare "Iris", and anything from the banned list.
5. Feature and tier claims match the code in `Iris-extension`, not the roadmap.
6. **Watch the deploy finish.** A push is not a publish: this repo builds on
   Mintlify's side, and a parse error there leaves the live page serving the old
   bytes while git looks perfectly healthy.
