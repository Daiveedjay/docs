# Iris Code documentation style guide

Written 2026-08-08, after a full rewrite of all 39 pages. It exists because the docs had drifted twice in opposite directions: first into corporate noun-stacking, then, correcting for that, into chatty blog voice. Both are wrong. This records where the line sits, with real before-and-after from that rewrite.

Read this before writing or editing any page.

---

## 1. The register

**A knowledgeable colleague explaining something carefully.** Professional, but written by a person who understood the thing rather than transcribed it.

Two failure modes, both real, both already made here:

| Too corporate | Too chatty |
| --- | --- |
| "Iris Code catches secrets, duplicate code, security smells, and maintainability regressions before they reach human review." | "Your assistant just touched fourteen files. You skim it, it looks fine, and you approve it." |
| Noun stacks, passive voice, no subject | Punchlines, asides, jokes at the reader |

**The target, between them:**

> An AI assistant can change fourteen files in one prompt. Reviewing that properly takes longer than most people have, so the diff gets skimmed and approved.

Concrete, human, no joke in it.

### The test

Read the sentence aloud. If it sounds like a person talking, but not like a person *performing*, it is right.

---

## 2. Banned constructions

These were removed roughly 90 times in the 2026-08-08 pass. Do not reintroduce them.

**Asides nobody says out loud.**
- ✗ "There's nobody there to click anything."
- ✗ "your HTTPS is now HTTP with extra steps"
- ✗ "not something anyone can act on at 6pm on a Friday"
- ✓ Say the thing plainly, or cut it.

**Punchline fragments.**
- ✗ "That's the whole integration." / "That's the lot." / "Same amount of code, not guessable."
- ✓ "Install the CLI, pass your licence as an environment variable, and run `iris gate`."

**Imperatives aimed at the reader.**
- ✗ "Read it." / "Don't just install it and look at the dashboard."
- ✓ "Review it before confirming." / "The most useful way to evaluate the trial is to..."

**Rhetorical questions as headings or openers.**
- ✗ "You found one. Now what?" / "How actionable is it?"
- ✓ "Acting on a finding" / "Confidence labels"

**Casual headings.**
- ✗ "Getting rid of it" → ✓ "Uninstalling"
- ✗ "Setting the bar" → ✓ "Configuring the threshold"
- ✗ "What you actually get" → ✓ "What you get"

**Editorialising in table cells.** Tables are reference material.
- ✗ "Big old codebases with real debt"
- ✓ "Large, established codebases with accumulated debt"

---

## 3. What good writing here does

**Reason before instruction.** This is the single most valuable habit and the reason the docs read as curated. Explain why something exists, then how to use it. The why is usually what decides whether someone uses it at all.

> On an established codebase, an absolute threshold can block a large share of the project from the first day, which usually ends with the hook being uninstalled. `gateBaselineMode` avoids that.

> The Problems panel is where you look for what is broken right now. Filling it with forty TODOs means it stops being read, which costs more than the TODOs do.

**Cause before fix**, in troubleshooting. The JetBrains JSON error page explains what IntelliJ records and why reinstalling cannot clear it, *then* gives the steps. Someone who understands the cause can solve the next variant themselves.

**Concrete over abstract.** Name the actual file, the actual command, the actual number.

**Honest scoping.** Where a feature does not cover something, say so and say why. Never imply completeness a scan does not have.

> A scan that covers less than it appears to is worse than no scan, because the result gets trusted.

---

## 4. Voice mechanics

**Contractions:** yes, in moderation. "does not" when the sentence carries weight or states a rule; "it's" in ordinary prose. Neither stiff nor breezy.

**Sentence length:** vary it. A short sentence after two long ones lands. Three short ones in a row is a blog.

**Second person:** yes. "You" and "your project", not "the user".

**Active voice**, except where the actor genuinely does not matter ("Test files are skipped").

**Headings:** sentence case. They should say something, but as a statement rather than a joke.

**British spelling** where natural: behaviour, organisation, analyse, licence (noun). Do not force it.

**Never use em dashes.** Use a hyphen with spaces, a comma, a colon, or rewrite. This applies to every authored file in every Iris Code repository.

---

## 5. Product and naming rules

- The product is **Iris Code**, in every sentence a human reads. Never bare "Iris".
- Technical identifiers stay lowercase and unchanged: `iris check`, `iris gate`, `.irisconfig.json`, `@iris-code/cli`, `iris.*` settings.
- **Bold** for UI elements the reader clicks: **Preview Gate**, **Settings → Plugins**.
- `Code formatting` for filenames, commands, paths, config keys, rule ids.
- Mark tier clearly and early. "This requires **Iris Code Pro**" in a `<Note>`, or "It is free" in the opening lines.
- **Document shipped behaviour only.** Do not mention planned, proposed, partially designed, or otherwise unlaunched features in customer documentation. Keep them in the roadmap until users can use them. Describing an unlaunched feature as planned or marking it "coming soon" still creates an expectation and is not an exception to this rule.

---

## 6. Page structure

Every page opens with **two or three sentences of context**, before any heading, that answer: what is this, and why would I care? No page starts with a heading or a bare feature list.

Then: how to use it, then reference material, then edge cases and configuration.

**Headings that recur across pages, use these exact names:**

`Installing` · `Configuring the threshold` · `Configuration` · `Uninstalling` · `CLI scanning` · `Insights tracking` · `Acting on the results` · `Free and Pro`

Consistency here matters more than finding a better word for one page.

---

## 7. Navigation

Six groups, ordered by what a reader is trying to do:

| Group | Contains |
| --- | --- |
| **Start here** | Home, Quick Start, Installation, Pro |
| **What Iris Code finds** | Detection: file analysis, change review, workspace, secrets, security smells, duplicates, quality signals, diagnostics, dependencies, languages |
| **Blocking bad code** | Enforcement: gate preview, git hook, build gate, CI, Slack, suppressions |
| **Configuration** | irisconfig, file naming, Config Studio, weights, VS Code settings |
| **Editors** | Overview and parity matrix, VS Code, forks, JetBrains |
| **Reference** | CLI, editor commands, scoring, accuracy, security, changelog |

**The rule that keeps this clean:** "What Iris Code finds" is things Iris Code *detects*. "Blocking bad code" is things that *stop* something happening. When a new page could go in either, ask which verb it is.

**Every new page needs at least one inbound link** from a related page. A page reachable only from the sidebar is invisible to anyone who navigates by following links. This was a real gap: the Slack page shipped with zero inbound links.

**Moving a page means adding a redirect** to `docs.json`, in the `redirects` array, plus updating every internal link. Old URLs appear in blog posts, the extension UI and marketplace listings.

---

## 8. Mintlify components

- `<Frame>` is **for images and screenshots only**. Wrapping a code block in it puts the text in the DOM without painting it visibly, so the page looks blank and only copy-paste reveals the content. This actually happened. Use a plain fenced code block.
- `<Note>` for context worth pausing on, `<Tip>` for a recommendation, `<Warning>` for something that will cost the reader time or data.
- `<Steps>` for ordered procedures. `<Tabs>` for per-platform or per-provider variants.
- Do not invent a component pattern used nowhere else in the docs. Check first.

---

## 9. Before you commit

1. `mint dev` and read the page rendered, not just the source. Mintlify needs **Node 18-22**; it refuses to run on Node 25.
2. Every nav entry resolves to a real file.
3. Every internal link resolves. Old paths have redirects.
4. New page has an inbound link from somewhere relevant.
5. Search the diff for em dashes, bare "Iris", and anything from section 2.
6. Tier claims and feature claims match shipped code, not the roadmap. Search the page for planned or unlaunched behaviour and remove it.

## 10. The changelog is a record

`changelog.mdx` documents what shipped and when. Do not restyle historical entries: rewriting them changes the record. New entries follow the house voice; old ones stay as they were written.
