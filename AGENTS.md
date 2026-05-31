# AGENTS

This file documents contributor and automation-agent expectations for this repository.

## Project Context

- Stack: Next.js + TinaCMS
- Package manager: npm or yarn
- Main site: https://www.experienciasfutaleufu.cl

## Local Development

- Install dependencies:
  - `npm install`
  - or `yarn install`
- Run local dev server:
  - `npm run dev`
  - or `yarn dev`

## Postinstall Rules

- The postinstall script must not run encryption/decryption logic in production.
- In local/dev environments, postinstall may encrypt/decrypt `.env` and `.env.enc`.
- For non-interactive runs, provide one of:
  - `POSTINSTALL_PASSWORD`
  - `ENV_ENCRYPTION_PASSWORD`
  - `DOTENV_ENCRYPTION_PASSWORD`

## Automation Notes

- Prefer small, targeted changes over broad refactors.
- Validate changes with local commands when possible.
- Do not print or commit secrets.
- If a command prompts for sensitive input, supply it directly in terminal rather than logging it.
