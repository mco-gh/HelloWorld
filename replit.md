# React Example (Google AI Studio)

## Overview
A React + Vite + TypeScript frontend application originally from Google AI Studio. Features Tailwind CSS v4 for styling and Framer Motion for animations.

## Tech Stack
- **Runtime**: Node.js 20
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Animation**: Motion (Framer Motion)
- **Other deps**: `@google/genai`, `lucide-react`, `express`, `better-sqlite3`

## Project Structure
- `src/App.tsx` - Main application component
- `src/main.tsx` - Entry point
- `src/index.css` - Global styles
- `index.html` - HTML template
- `vite.config.ts` - Vite configuration (port 5000, all hosts allowed, HMR disabled)
- `package.json` - Dependencies and scripts

## Running
- **Dev**: `npm run dev` (runs on port 5000 via Vite)
- **Build**: `npm run build` (outputs to `dist/`)

## Replit Configuration
- Frontend runs on port 5000 with `0.0.0.0` host
- HMR is disabled to prevent reload loops from Replit internal file changes
- Vite file watcher ignores `.local/`, `.cache/`, `.git/`, `.agents/`, `.replit`
- Deployment configured as static site (build + serve `dist/`)
