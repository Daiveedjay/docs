# Iris Code documentation

Public product and reference documentation, served at https://docs.iriscode.co with Mintlify. Navigation lives in `docs.json`; source pages are MDX. Read [the writing guide](docs-writing-style.md) and [project instructions](AGENTS.md) before editing.

The local recurring Free and UI rollout covers monthly project actions, retained results, manual-by-default cloud scans and opt-in automation. Backend configuration supplies current limits; historical release notes remain historical. Local changes are prepared for review, with deployment held.

## Development

Use Node 18-22; Mintlify does not support Node 25. Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview your documentation changes locally. To install, use the following command:

```
npm i -g mint
```

Run the following command at the root of your documentation, where your `docs.json` is located:

```
mint dev --port 3003
```

View your local preview at `http://localhost:3003`.

## Verification

Run `npm test`, `node scripts/check-mdx-comments.mjs`, `mint validate` and `mint broken-links`, then inspect the changed pages locally. Local search uses the deployed index.

## Publishing changes

Install our GitHub app from your [dashboard](https://dashboard.mintlify.com/settings/organization/github-app) to propagate changes from your repo to your deployment. Changes are deployed to production automatically after pushing to the default branch.

## Need help?

### Troubleshooting

- If your dev environment isn't running: Run `mint update` to ensure you have the most recent version of the CLI.
- If a page loads as a 404: Make sure you are running in a folder with a valid `docs.json`.

### Resources
- [Mintlify documentation](https://mintlify.com/docs)
