# AGENTS

## Purpose

- This repository publishes CodeMirror 6 themes in the Vitesse style.
- Keep changes focused on theme behavior, packaging, and playground verification.

## Fast Start

- Install: pnpm install --frozen-lockfile
- Build library: pnpm run build
- Watch library during edits: pnpm run dev
- Lint: pnpm run lint
- Typecheck: pnpm run typecheck
- Run playground: pnpm run play
- Build playground: pnpm run play:build

## Repo Map

- Core exports: [src/index.ts](src/index.ts)
- Theme implementations: [src/themes](src/themes)
- Build config and bundle entries: [tsdown.config.ts](tsdown.config.ts)
- Package exports and scripts: [package.json](package.json)
- Playground app: [playground](playground)
- Usage and API examples: [README.md](README.md)

## Working Conventions

- Use pnpm for all package management (see packageManager in package.json).
- Keep theme modules consistent with existing pattern:
  - defaultSettingsVitesse\*
  - createVitesse\*Theme(options)
  - vitesse\* default instance export
- Preserve ESM + typed exports expected by package exports.
- Favor small, isolated changes and do not refactor unrelated files.

## Theme Change Checklist

- If you add or rename a theme file under src/themes:
  - Update [src/index.ts](src/index.ts) re-exports.
  - Ensure tsdown entry still includes the file via [tsdown.config.ts](tsdown.config.ts).
  - Add or update subpath exports in [package.json](package.json) when needed.
  - Verify README usage examples if public API changed.
- Validate with:
  - pnpm run build
  - pnpm run lint
  - pnpm run typecheck
  - pnpm run play (manual visual check)

## Playground Notes

- Playground is a separate workspace package at [playground/package.json](playground/package.json).
- Use root script wrappers (pnpm run play / pnpm run play:build) or pnpm -C playground run <script>.
- Keep the CodeMirror state dedupe workaround in sync with [playground/vite.config.ts](playground/vite.config.ts).

## CI and Release

- CI checks: [build, lint, typecheck](.github/workflows/ci.yml).
- Tagged releases use [release workflow](.github/workflows/release.yml) and publish from CI.
- Before preparing a release, run pnpm run release:check locally.

## Reference Docs

- Primary documentation: [README.md](README.md)
- CI behavior: [.github/workflows/ci.yml](.github/workflows/ci.yml)
- Release behavior: [.github/workflows/release.yml](.github/workflows/release.yml)
