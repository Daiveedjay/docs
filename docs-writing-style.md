# Iris Code documentation style guide

Updated 2026-10-08 after the readability audit of all 61 current documentation pages. This is the mandatory writing and review standard for Iris Code documentation. Read it before creating or editing a page, then use the completion checklist before publishing.

## 1. Write for someone new to the product

A reader may understand their work without knowing programming terminology. Help them understand what a feature is for, how to use it and what its result means before describing its internals.

Every customer page opens with two or three sentences that establish the feature and its purpose. A reader should be able to explain that purpose after reading the opening, without visiting another page.

**Example:**

> A package is code written by someone else that your project uses. A coding agent can install one before you have reviewed its name or version. The free package guard checks the requested version before installation and can stop packages with known risks.

Define a technical term at its first useful appearance on each page. Readers can arrive from search or a direct link, so a definition elsewhere is not enough.

| Term | Explain it as |
| --- | --- |
| CLI | Commands you type in a terminal |
| MCP | A connection that lets a coding agent call tools |
| Baseline | A saved starting point used for comparison |
| Dependency | A package of code that your project uses |
| Public API | Code that other files or projects depend on |

Keep exact commands, configuration keys and language-specific detail available in reference sections. Simplicity must preserve the technical contract.

## 2. Use a professional, human voice

Write as a knowledgeable colleague explaining something carefully. Use active voice, second person and concrete examples. Use British spelling where natural: behaviour, organisation, analyse and licence as a noun.

Explain the reason before the instruction, and the cause before the fix. Prefer "Restart the IDE so it can register the file types" to a restart instruction with no explanation.

| Avoid | Use |
| --- | --- |
| Corporate noun stacks | Name the feature, what it does and why it matters |
| "That's the whole integration." | "Install the CLI and run `iris gate`." |
| "You found one. Now what?" | "Acting on a finding" |
| "Big old codebases with real debt" | "Large codebases with accumulated debt" |
| "Read it." | "Review the proposed changes before applying them." |

Use sentence case headings that describe the content. Keep jokes, punchlines, rhetorical questions and editorial asides out of documentation. Never use em dashes; use a comma, colon or separate sentence.

Contractions are acceptable in moderation. Use "does not" when stating an important rule and "it's" where it reads naturally.

## 3. Keep paragraphs short and focused

Give each paragraph one idea, usually in two or three sentences. Aim for roughly 40-70 words where that fits the explanation. Treat a prose paragraph over 75 words as a review flag: split or rewrite it, or establish why the technical explanation needs to stay together.

Split when the subject changes, even if the paragraph is already short. Use separate paragraphs for the reason, the action and the exceptions. Do not split a sentence into fragments just to reduce a word count.

Use a list when several independent conditions, outcomes or exceptions are being described. This applies inside notes and warnings as well as ordinary prose.

**Dense version:**

> Removing the last name from an import can stop its module loading, and a module can run code when it loads. JavaScript keeps that load as a side-effect import. TypeScript behaves differently depending on `verbatimModuleSyntax`, and Vue and Svelte templates may use names that appear unused in the script.

**Readable version:**

> An import lets one file use code from another. Loading that other file can also run code, such as registering a plugin, so removing an unused name must not stop that work.
>
> JavaScript keeps the module loading with a side-effect import. TypeScript behaves differently depending on `verbatimModuleSyntax`, so a whole unused value import needs review.
>
> Vue and Svelte imports are kept because a component's template may use a name that appears unused in its script.

Keep the reason for each restriction. Replacing a dense paragraph with a dense table cell or a long list item does not solve the problem.

## 4. Organise a page around the reader's task

Use this order where it applies:

1. **Purpose:** what the feature does and why it matters.
2. **Access:** where to find it, what is required and whether it needs Pro.
3. **Actions:** what to click or run, in order.
4. **Results:** what the reader will see and what to do next.
5. **Reference:** exact settings, flags, supported cases and technical detail.
6. **Limits:** what is not checked, what can fail and what needs review.
7. **Related pages:** relevant next steps.

State the Free or Pro boundary early. Use a `<Note>` or a clear opening sentence. Keep critical limitations beside the action or result they qualify, even when fuller detail appears later.

Use **bold** for actual UI labels, such as **Get plan**. Use `code formatting` for filenames, commands, paths, configuration keys and rule IDs. Match the labels users see; do not invent a more convenient command or button name.

Use recurring headings consistently: `Installing`, `Configuring the threshold`, `Configuration`, `Uninstalling`, `CLI scanning`, `Insights tracking`, `Acting on the results` and `Free and Pro`.

Examples should explain both the action and the outcome. Mark placeholders clearly. Preserve the distinction between a command succeeding, a check passing and a check not running.

## 5. Use one name for each concept

The product is **Iris Code** in prose. Technical identifiers remain unchanged: `iris check`, `.irisconfig.json`, `iris.*`, `@iris-code/core` and `@iris-code/cli`.

Use the canonical terminology in [reference/terminology.mdx](./reference/terminology.mdx):

- **Workspace:** the project folder open in the editor.
- **Team:** the entity that owns seats, membership and billing.
- **Scan:** the act of analysing code at any scope.
- **Finding:** one reported observation, classified as a blocker or warning.
- **Threshold:** a configured value used by a check.
- **Gate:** the decision made by comparing a scan with configured thresholds.
- **Health score:** the score used to summarise findings.

A blocker or warning label alone does not decide whether a gate passes. Explain the configured threshold rather than implying that every serious finding automatically prevents a push or merge.

Names such as **Review My Changes** and **Audit history** remain unchanged when referring to actual UI labels. Use "scan" when describing the act in ordinary prose.

## 6. Make Related pages a list

Every **Related pages** section uses a Markdown bullet list. Put exactly one linked page in each item, give it a descriptive name and leave out the current page. Choose links that help the reader's next task.

```markdown
## Related pages

- [Fixes and suggestions](/refactor/reference)
- [Verification](/refactor/verification)
- [Refactor configuration](/refactor/configuration)
```

Every new page needs an inbound link from a relevant existing page, in addition to its sidebar entry. A page move requires a redirect in `docs.json` and updated internal links.

Preserve established section anchors where possible. When changing a heading, update links to its section and verify the actual rendered ID. A page-level link check can pass while the section anchor is broken.

Navigation follows reader tasks: Start here, What Iris Code finds, Blocking bad code, Refactor playbook, Cloud scanning, Teams, Configuration, Working with AI agents, Editors and Reference. Put detection in "What Iris Code finds" and enforcement in "Blocking bad code".

## 7. Draw diagrams that explain one thing clearly

Add a diagram when it makes a workflow, decision, relationship or data boundary easier to understand. Use prose for a simple fact or a one-step action. A diagram should reduce the work of understanding the page.

Use one main reading direction, short plain-language labels, consistent spacing and clear arrows. Put detailed conditions and exceptions in nearby text. Avoid crossing connectors, tightly packed boxes and tiny text.

Prefer a crisp SVG for a static explanatory diagram. The diagrams in `images/guides/` are the current examples for refactoring, verification, cloud scans and package checks. For a 480px-wide SVG, start with body text around 20px and check how it scales on a phone.

Provide meaningful alt text and a caption explaining the takeaway. Provide light and dark variants when the colours depend on the theme. Ensure the text has sufficient contrast in both.

Before accepting a diagram, inspect it at desktop width and phone width, around 360-390px. Check every label and arrow for clipping, overlap and readability. Also check the deployed image: hosting can rewrite image URLs and transform SVGs.

## 8. Keep claims accurate and bounded

Check feature availability, tiers, defaults and UI labels against the shipped implementation. A roadmap is not evidence that a feature is available. Customer documentation describes shipped behaviour; keep planned work in the roadmap.

State what a check can establish and what it cannot. A health score, a successful command or an improved refactor verdict does not prove that the program behaves correctly. Explain when tests or human review are still needed.

For privacy explanations, distinguish what is read, what is sent, what is deleted and what is retained. Check these separately for local scans, cloud reports, team evidence, agent tools and notifications. "No source retained" does not mean "no file paths retained".

For enforcement, distinguish reporting a failure from preventing an action. For example, a failed GitHub workflow needs a required status check in branch protection or a ruleset to prevent a merge.

Keep generated evidence under its generator's ownership. Preserve the benchmark and refactor-review blocks in `trust/accuracy-benchmark.mdx` and the coverage block in `refactor/language-coverage.mdx`. Update their source data and generator when figures need changing; do not edit generated figures by hand.

Avoid restating generated counts in prose unless the copy is checked against the same source. Preserve existing `changelog.mdx` entries as historical records; apply this guide to new entries.

Examples use placeholders, never real tokens, licence keys, webhook URLs or customer data. Internal release and administration procedures belong in private project documentation.

## 9. Use Mintlify components correctly

- `<Frame>` wraps images and screenshots only. Code blocks belong in ordinary fenced blocks.
- `<Note>` adds useful context, `<Tip>` gives a recommendation and `<Warning>` identifies a consequence the reader needs to understand.
- `<Steps>` presents an ordered procedure; `<Tabs>` separates platform or provider variants.
- Follow component patterns already used in the docs.
- In MDX, write comments as `{/* comment */}`. HTML comments outside a code fence break the build.

Keep a component's text as readable as ordinary prose. A warning box is not a place to hide a long paragraph.

## 10. Complete the review before publishing

A documentation change is ready when every applicable check below has passed. Automated checks support the review; they do not establish that a nontechnical reader can understand the page.

### Readability review

- [ ] Every changed page explains its purpose before its technical detail.
- [ ] The reader can identify where to find the feature, how to use it and what the result means.
- [ ] Technical terms are defined where they first matter on that page.
- [ ] Paragraphs each cover one idea; long paragraphs and list items have been reviewed.
- [ ] Independent conditions and exceptions are easy to scan.
- [ ] Every Related pages section has one linked page per list item and no self-link.
- [ ] Examples preserve the actual command, setting or UI behaviour.

### Accuracy and source review

- [ ] Availability, tiers, defaults and limits match shipped code.
- [ ] Reporting, enforcement and checks that did not run are clearly distinguished.
- [ ] Privacy claims distinguish source content from retained report data.
- [ ] Generated blocks and historical changelog entries remain unchanged unless their authorised source process updates them.
- [ ] Terminology, sentence case and the house voice are consistent; no em dashes have been introduced.

### Render and link review

- [ ] Read every changed page in `mint dev`, using Node 18-22.
- [ ] Inspect changed diagrams in light and dark themes and at phone width.
- [ ] Navigation entries, image paths and internal page links resolve.
- [ ] Section links reach the intended rendered heading.
- [ ] New pages have inbound links; moved pages have redirects.

Run the repository checks:

```bash
npm test
node scripts/check-mdx-comments.mjs
mint validate
mint broken-links
```

Local search uses the deployed index, so an unpublished page missing from local search is not evidence of a page failure.

### Production verification

After an authorised push, watch the deployment finish. Confirm that CI and Mintlify deployment succeeded, then open the live changed pages and images. Check the live Related pages lists and any changed section links.

Report local validation, deployment status and live verification separately. A successful push alone is not evidence that the new documentation is being served.
