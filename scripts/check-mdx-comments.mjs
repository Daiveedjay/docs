#!/usr/bin/env node
// One MDX trap, one guard: an HTML comment fails the whole Mintlify build.
//
// MDX reads `<!--` as the start of a JSX tag and stops at the `!`:
//
//   Failed to parse page content at path trust/accuracy-benchmark.mdx:
//   Unexpected character ! (U+0021) before name, expected a character that can
//   start a name, such as a letter, $, or _
//   (note: to create a comment in MDX, use {/* text */})
//
// That is one page failing the deploy for the entire site, and it shipped on
// 2026-08-25 because a generator reused the marker convention from the agent-rules
// splicer - correct there, since those files are plain Markdown, wrong here.
//
// Inside a fenced code block it is fine, which is why this walks fences rather
// than grepping: `agents/project-rules.mdx` legitimately shows the HTML markers
// as example content and must keep them.
//
//   node scripts/check-mdx-comments.mjs
//
// Exits 0 clean, 1 naming every offending file and line. No dependencies, so it
// runs in a fresh clone - a gate that needs an install is a gate that gets skipped.
import { readdirSync, statSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')

function pages(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) pages(full, found)
    else if (entry.endsWith('.mdx')) found.push(full)
  }
  return found
}

const offences = []
for (const page of pages(root)) {
  let inFence = false
  readFileSync(page, 'utf8')
    .split(/\r?\n/)
    .forEach((line, index) => {
      // A fence toggles on ``` or ~~~ at the start of the line, indented or not.
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence
        return
      }
      if (inFence) return
      // Inline code spans are also safe, so only flag a `<!--` with an odd number
      // of backticks before it... simpler and sufficient: flag it unless the whole
      // occurrence sits inside a single-line code span.
      if (!line.includes('<!--')) return
      const spans = line.match(/`[^`]*`/g) ?? []
      if (spans.some((span) => span.includes('<!--'))) return
      offences.push(`${relative(root, page)}:${index + 1}: ${line.trim()}`)
    })
}

if (offences.length) {
  console.error('[docs] HTML comments outside a code fence will fail the Mintlify build:')
  for (const offence of offences) console.error(`  - ${offence}`)
  console.error('[docs] use {/* ... */} instead.')
  process.exit(1)
}

console.log(`[docs] no HTML comments outside code fences (${pages(root).length} pages checked)`)
