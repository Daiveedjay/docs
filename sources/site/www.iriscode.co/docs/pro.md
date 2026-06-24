# Source: https://www.iriscode.co/docs/pro

## Iris Pro

Iris is free to install and use for file analysis. Pro unlocks workspace and folder-level features — and every new account includes a **14-day free trial**, no credit card required.

### What's included in Pro

- Workspace analysis — scan your entire project at once
- Folder analysis — scoped scans for any directory
- Gate Preview drilldown — see exactly which files fail each preset, with scores and warning pills
- Git hook enforcement — block pushes below your health threshold
- Build hook enforcement — block builds below your health threshold
- Dependents table — version audit and advisory scan for project dependencies
- Issues tab — blocking issues and warning-level findings across the latest scan scope
- TODOs tab — all TODO/FIXME/HACK items aggregated across your project
- Clickable jump-to-line on all findings
- Custom `.irisconfig.json` — override individual thresholds, detections, and severity per rule
- Custom scoring weights — control how many points each finding type deducts via `healthScoreWeights`
- Config Studio (Custom mode) — full visual editor with gate limits, scoring weights, and global default sync
- Unlimited trend history — track health score changes over time
- Full Pro CLI suite — `iris gate`, `iris deps`, `iris todos`, `iris hook install`, `iris check` for directories and staged files
- Account Insights — enforcement activity dashboard showing hook pass/fail counts, push-blocked history, and daily usage

### Free trial

New accounts automatically get a 14-day Pro trial. Full access to everything in the list above — no credit card needed upfront. After 14 days the account reverts to Free unless you subscribe.

Tip: The trial is the easiest way to test enforcement. Install a git or build hook, trigger a couple of blocked pushes or builds, then check your Insights dashboard to see pass/fail counts before committing to a subscription.

### How to upgrade

Go to [iriscode.co/pricing](https://iriscode.co/pricing) and click **Start free trial**. Pricing is adjusted for your region automatically.

### How sign-in works

1. 1.Run **Iris: Sign In** from the VS Code command palette
2. 2.Your browser opens and you sign in with Google or GitHub
3. 3.You're redirected back to VS Code automatically - no copy-pasting needed
4. 4.Pro features unlock instantly

Tip: The extension never stores your password or any sensitive credentials - only a license key in VS Code's encrypted secret storage.

### Managing your subscription

Visit [iriscode.co/account/billing](https://iriscode.co/account/billing) to:

- View your current plan and renewal date
- Choose card auto-renew or one-time bank transfer checkout in Nigeria
- Cancel or reactivate your card subscription
- Open a fresh transfer account each month for manual renewals
- Update your payment method if a saved card expires

If you use card auto-renew, you can still cancel anytime and keep Pro access until the end of the current billing period.

If you are billed in Nigeria, Iris can also open a Paystack bank-transfer checkout for manual renewal. Paystack shows a transaction-specific account number you can pay from OPay, Kuda, Moniepoint, PalmPay, or your regular bank app, and that account typically expires after about 30 minutes. When you want to renew again next month, Iris opens a fresh transfer checkout.

### What happens if payment fails

Paystack retries automatically over a few days. Your Pro access stays active during retries. If all retries fail, your subscription is cancelled and you revert to the free plan. You'll receive an email if this happens.