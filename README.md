# DevTrail

DevTrail is an AI-powered developer productivity and learning platform that helps developers track their development journey, projects, and learning progress.

As developers consume a lot of tutorials, documentation, and resources daily, it becomes difficult to track what they have learned. DevTrail solves this problem by providing a centralized platform where users can organize their learning and monitor their growth.

The platform allows developers to track projects, record learning milestones, and get AI assistance using Large Language Models (LLMs). It helps users stay consistent and structured in their development journey.

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Query, Wouter
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL + Drizzle ORM
- Auth: Clerk
- AI: OpenRouter (OpenAI-compatible API)

## Features

- Clerk-authenticated user experience
- Journal entries with `content`, `bug`, `solution`, `timeSpent`, `confidence`, and `notes`
- Tag support and project linking per entry
- Project management (create/list/get/delete)
- AI weekly report generation
- AI skill heatmap generation
- AI bug pattern analysis
- AI summary generation
- AI next-step suggestions

## Project Structure

```text
client/                React app
server/                Express API + auth + AI integration
shared/                Shared schema and route contracts
script/build.ts        Production build script
drizzle.config.ts      Drizzle configuration
```

## Prerequisites

- Node.js 
- npm
- PostgreSQL database (local or hosted)
- Clerk application keys
- OpenRouter API key

## Environment Variables

Create a root `.env`:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
OPENROUTER_API_KEY=your_openrouter_key

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Optional `client/.env` (if you keep client env values separately):

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Push schema to database:

```bash
npm run db:push
```

3. Run in development:

```bash
npm run dev
```

App runs on `http://localhost:5000`.

## Available Scripts

- `npm run dev`: start server in development mode (tsx)
- `npm run build`: build production output to `dist/`
- `npm run start`: run production build
- `npm run check`: TypeScript type-check
- `npm run db:push`: push Drizzle schema to PostgreSQL

## API Overview

Protected routes (require Clerk auth):

- `GET /api/entries`
- `POST /api/entries`
- `GET /api/entries/:id`
- `PUT /api/entries/:id`
- `DELETE /api/entries/:id`
- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/tags`
- `POST /api/ai/summary`
- `POST /api/ai/next-steps`
- `GET /api/ai/weekly-report`
- `GET /api/ai/skill-heatmap`
- `GET /api/ai/bug-patterns`

## author
Nitn kapil 
LinkedIn: https://www.linkedin.com/in/nitin-kapil-313188328/