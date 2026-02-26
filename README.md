# MazeWorks Monorepo

Phase 1 bootstrap for MazeWorks (API + Web + Shared package) using pnpm workspaces.

## Prerequisites

- Node.js 20+
- pnpm 10+

## Quick start

### PowerShell (Windows)

```powershell
pnpm install
pnpm dev
```

- API health: http://localhost:4000/health
- Web app: http://localhost:3000

## Workspace packages

- `apps/api` - Express + TypeScript API scaffold
- `apps/web` - Next.js App Router scaffold
- `packages/shared` - shared TypeScript package scaffold
