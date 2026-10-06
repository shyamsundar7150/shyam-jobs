# Shyam Job

Shyam Job is a personal career-intelligence system for discovering, understanding, and preparing for relevant opportunities without turning into a giant application tracker or AI-first chat product.

## Project purpose

The future product is designed to:

- discover recent jobs matching the user's role, location, and experience preferences
- normalize and structure job data
- store source-backed information in Supabase
- support a Prepare flow for each job
- provide company intelligence and interview insight
- allow the user to apply through the original or company portal when ready

This repository is currently implementing Phase 0 only: a clean foundation for future phases.

## Frontend stack

- Expo
- React Native
- Expo Router
- TypeScript
- Web + Android-ready foundation

## Backend stack

- Node.js
- Express
- TypeScript
- CORS
- dotenv

## Supabase

Supabase is prepared architecturally for future persistence and data modeling. Frontend environment variables use Expo public naming, while backend/server-side values remain in server-only env files.

## Local setup

1. Copy `.env.example` to a real `.env` file and fill the values you need locally.
2. Install frontend dependencies: `npm install`
3. Install backend dependencies in `backend/render-api`: `cd backend/render-api && npm install`
4. Start the frontend: `npm run start`
5. Start the backend: `cd backend/render-api && npm run dev`

## Frontend start command

```bash
npm run start
```

## Backend start command

```bash
cd backend/render-api
npm run dev
```

## Environment configuration

The project uses environment files to keep credentials out of source control.

- Frontend: `.env` and `EXPO_PUBLIC_*` variables
- Backend: `backend/render-api/.env` and server-side variables
- See `.env.example` and `backend/render-api/.env.example` for placeholders only

## Health endpoint

The backend exposes:

```http
GET /api/health
```

Response:

```json
{
  "status": "ok",
  "service": "shyam-job-api"
}
```

## Project architecture

- Frontend: Expo app shell
- Backend: Express API with health endpoint and config-ready foundation
- Supabase: environment-driven setup and future integration points
- Docs: architecture and future data model definitions

## Phase 0 scope

This repository intentionally covers only the foundation for future work:

- clean Expo Router shell
- environment variable scaffolding
- backend health endpoint and config
- source adapter and job model foundations
- future Supabase separation
- architecture docs for job sourcing, normalization, and interview intelligence

## Intentionally not implemented yet

- real job search
- job scraping
- AI enrichment
- company research
- interview intelligence UI
- job cards or filters
- application tracker
- resume management
- production deployment
- scheduled jobs

## Future phases

- Phase 1: Job discovery UI and source integration foundation
- Phase 2: normalized job ingestion and source adapters
- Phase 3: company intelligence and prepare flows
- Phase 4: interview intelligence and source-backed research
- Phase 5: refinement, scale, and deployment hardening

Phase 0 = foundation only.
