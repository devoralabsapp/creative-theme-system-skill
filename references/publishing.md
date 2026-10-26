# Optional GitHub / Vercel delivery

Use only when requested. These instructions do not grant credentials or permission for unrelated account changes.

## GitHub

Inspect repository, branch, uncommitted work and remotes. Discover the signed-in account through an available connector or `gh`. Use the requested owner/name/visibility. Preserve existing visibility or default new repos to private unless public is requested.

Before public publication, exclude credentials, environment files, private IDs, proprietary content, customer data, reference screenshots and unauthorized artwork. Use fictional data and authorized/original assets. Stage intended files only.

Use authenticated tools; never print tokens, embed them in URLs, force-push unrelated history or configure broad permanent ownership exceptions. Verify the remote branch SHA and actual visibility.

## Vercel

Prefer an authenticated connector. Confirm team, project, production branch and reviewed commit. Preserve access controls. If a user consent link is required, present it and resume after authorization; do not sidestep missing scope by changing accounts.

Buildless starter configuration:

```json
{
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "outputDirectory": "."
}
```

Use the real output directory: `dist` if the demo is there, `.` only when the project root is the static demo. Exclude source-only/secret files from deployment input. Adapt to an existing framework rather than forcing static settings onto it.

Link the requested Git repository. After pushing, inspect commit deployment status. If no deployment was created, investigate integration or explicitly deploy that same reviewed SHA within authorization. Do not claim automatic deployment was proven. Do not duplicate a running deployment.

Wait for READY/success; confirm the commit and production alias. Open the canonical URL, exercise selection and a meaningful user flow, and verify assets. Use authenticated access for protected deployments rather than disabling protection. Return repository/live URLs, visibility/environment and verified commit.
