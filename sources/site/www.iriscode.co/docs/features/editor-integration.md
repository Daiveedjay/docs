# Source: https://www.iriscode.co/docs/features/editor-integration

## Code Lens

Inline hints appear above functions that exceed the length threshold. Language-aware:

- **JS/TS:** hints next to every `@ts-ignore` and `console.log`
- **Go:** hints next to `fmt.*` / `log.*` debug print calls
- **Python:** hints next to `print()` calls

payment.ts

9const stripe \= new Stripe(process.env.KEY!);

10

Iris · console.log left in · 2 occurrences

11export async function processPayment(amount: number) {

12 console.log("processing:", amount);

13 const charge \= await stripe.charges.create({

14 amount, currency: 'usd'

15 });

16 console.log("charge id:", charge.id);

17 return charge;

18}

Disable Code Lens via VS Code setting: `iris.enableCodeLens: false`

## Status Bar

Shows health score, line count, and function count for the active file. Turns warning/error colour based on health score and complexity threshold. Works for all supported languages.

page.tsx

40 const session \= await getSession(req);

41 if (!session) return redirect('/sign-in');

42 const token \= "sk-proj-live-abc123def456";

43 const res \= await fetchAccount(token);

44 return <AccountPage data\={res} /\>;

45}

main0 ↯2 ⚠

Spaces: 2UTF-8TypeScript⚠ Iris 64 · 379 lines · 12 fns

Disable via VS Code setting: `iris.enableStatusBar: false`

## Detached Panel

Pop Iris out of the narrow sidebar and into a full editor column beside your code. The panel shows the same analysis as the sidebar but with more space for the two-column layout.

### How to open

Click the pop-out icon in the Iris sidebar title bar, or run `Iris: Open in Panel` from the command palette (`Ctrl+Shift+P`). Close it the same way to restore the sidebar.

VS Code

cancel-order-modal.tsx

34export function CancelOrderModal({ orderId }: Props) {

35 const \[open, setOpen\] \= useState(false);

36 const { mutate, isPending } \= useCancelOrder();

37

38 async function handleConfirm() {

39 await mutate({ orderId });

40 setOpen(false);

41 }

Iris (Panel)

Enforcement Snapshot

Needs cleanup before it becomes a gate problem

score 642 blockerstrend -4

Lines

379

Code

349

Fns

12

Imports

6

Code Smells

console.log2

Magic Numbers7

Unused Vars1

Unused Fns0

### What the panel does

- Auto-refreshes when you switch files or save, always showing the current file
- Switches to a two-column layout when wide enough (700px or more): file stats on the left, findings on the right; workspace ranked lists go side-by-side
- While the panel is open, the Iris sidebar shows a placeholder so data is never duplicated
- Supports jump-to-line for Pro findings while keeping the same wide layout as the sidebar

Note: The detached panel is available on all plans — no Pro subscription required.