/**
 * Terminology guard.
 *
 * One concept, one name. This corpus once used four labels for the act of
 * scanning a project, two unrelated meanings for "workspace", five for "rule"
 * and three for "gate". Each page was internally consistent, so nothing looked
 * wrong until all 51 were read at once. Nothing was watching, so it accumulated.
 *
 * This is a tripwire for the mistakes actually made, not a style engine. Keep
 * the list short. A rule earns its place here by having already gone wrong.
 *
 * The canonical list is IRIS/TERMINOLOGY.md.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

/** Excluded from the build, or a record of what shipped under the names it shipped with. */
const SKIP_DIRS = new Set(["node_modules", ".git", "sources", "scripts", ".github", ".claude"]);
const SKIP_FILES = new Set(["changelog.mdx"]);

const RULES = [
  { pattern: /IrisCode/g, use: "Iris Code (with a space)" },
  { pattern: /\bIris\b(?!\s+Code)(?![-\w])/g, use: "Iris Code - never bare Iris" },
  { pattern: /quality score/gi, use: "health score" },
  { pattern: /Code Health/g, use: "health score" },
  { pattern: /project review/gi, use: "workspace scan" },
  { pattern: /cloud audit/gi, use: "cloud scan" },
  { pattern: /(solo|personal|team) workspace/gi, use: "team, or account - workspace means the editor folder" },
  { pattern: /quality gate/gi, use: "gate" },
];

/**
 * Lines that are allowed to break a rule, because the wording is the point.
 * Keyed by "<file>:<line>" so a rule cannot be silenced file-wide by accident.
 */
const ALLOW = new Set([
  // Quotes what this page itself used to get wrong. Rewriting it destroys the point.
  "trust/accuracy-benchmark.mdx:60",
  // The terminology page has to spell the forms it forbids in order to forbid them.
  "reference/terminology.mdx:103",
  "reference/terminology.mdx:104",
]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(entry)) walk(full, out);
    } else if (entry.endsWith(".mdx") && !SKIP_FILES.has(entry)) {
      out.push(full);
    }
  }
  return out;
}

const failures = [];
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file).split(sep).join("/");
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    const at = `${rel}:${index + 1}`;
    if (ALLOW.has(at)) return;
    for (const { pattern, use } of RULES) {
      pattern.lastIndex = 0;
      for (const hit of line.matchAll(pattern)) {
        failures.push(`${at}  "${hit[0]}"  ->  use ${use}`);
      }
    }
  });
}

if (failures.length > 0) {
  console.error(`Terminology guard: ${failures.length} problem(s).\n`);
  for (const failure of failures) console.error(`  ${failure}`);
  console.error("\nThe canonical list is IRIS/TERMINOLOGY.md.");
  process.exit(1);
}

console.log("Terminology guard: every page uses one name per thing.");
