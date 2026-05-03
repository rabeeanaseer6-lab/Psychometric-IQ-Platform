# FreeIQTest.online

A professional, high-authority IQ testing platform built for deployment at **freeiqtest.online**. Delivers a scientifically styled 30-question cognitive assessment with IRT-based scoring, instant percentile results, a live leaderboard, long-form blog, knowledge wiki, and full authority-content infrastructure.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Deploying to Hostinger](#deploying-to-hostinger)
- [Author](#author)

---

## Overview

FreeIQTest.online is a full-stack monorepo web platform designed to be a trusted, high-traffic IQ assessment destination. It combines psychometrically rigorous test scoring with a deep content ecosystem (blog, wiki, methodology pages) to build domain authority and organic search presence.

Key design goals:
- **Scientific credibility** — IRT-based scoring normalized to mean=100, SD=15 (WAIS standard)
- **SEO authority** — structured data (JSON-LD), comprehensive meta tags, canonical URLs, Open Graph / Twitter Cards
- **Performance** — React + Vite SPA, Express API, MySQL backend
- **Analytics** — Google Analytics 4 (G-RVCG58P63Z) integrated via gtag.js

---

## Features

### Assessment Engine
- 30-question adaptive IQ test covering matrix reasoning, quantitative reasoning, and spatial visualization
- IRT-based scoring algorithm (not raw count) — rewards answering harder questions correctly
- Time bonus applied for faster completion
- Score normalized to IQ scale (70–145 range), percentile calculated from normal distribution

### Results & Leaderboard
- Instant results page with IQ score, percentile rank, bell curve visualization (Recharts)
- Score breakdown by domain
- Daily live leaderboard (top 10 by score)
- Platform-wide stats: total tests taken, average score, highest score, tests today

### Content Ecosystem
- **Blog** — 13 long-form articles with featured Unsplash images, author bios, related posts, tag filtering
- **Wiki** — 17 in-depth knowledge base entries across 5 categories (Intelligence Theory, Psychometrics, Neuroscience, Cognitive Factors, Test Design) with full-text search
- **Methodology** — detailed explanation of IRT, g-factor assessment, and scoring pipeline
- **Science** — deep-dive into the neuroscience and psychology of intelligence
- **Updates** — platform changelog

### SEO & Identity
- Branded SVG brain favicon
- Full `<head>` meta suite: description, keywords, author, robots, theme-color, canonical
- Open Graph tags for social sharing previews
- Twitter Card tags
- JSON-LD structured data: `WebSite`, `Organization`, `Quiz` schemas
- Dynamic `document.title` on every page via `usePageTitle` hook
- Google Analytics 4 tracking on all pages

### Site Infrastructure
- **About** — mission, methodology summary, author bio
- **Author** — dedicated profile page for Rabeea Naseer (founder, NovatraTech)
- **Contact** — contact form
- **Careers** — open roles and company values
- **Legal** — Privacy Policy, Terms of Service, Disclaimer, Cookie Policy
- Footer with sitemap across all sections

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 7, TypeScript |
| Routing | Wouter |
| UI Components | shadcn/ui, Tailwind CSS v4 |
| Charts | Recharts |
| Animations | Framer Motion |
| Icons | Lucide React |
| Data Fetching | TanStack Query v5 |
| API | Express 5, TypeScript |
| ORM | Drizzle ORM |
| Database | MySQL (mysql2 driver) |
| Schema Validation | Zod |
| API Code Generation | Orval (OpenAPI → React Query hooks) |
| Package Manager | pnpm (workspace monorepo) |
| Build Tool | esbuild (API), Vite (frontend) |
| Logging | Pino + pino-http |

---

## Project Structure

```
/
├── artifacts/
│   ├── iq-test/              # React + Vite frontend (main site)
│   │   ├── index.html        # SEO meta, JSON-LD, Google Analytics
│   │   ├── public/
│   │   │   └── favicon.svg   # Branded brain icon
│   │   └── src/
│   │       ├── pages/        # All page components (17 routes)
│   │       ├── components/   # Layout, Header, Footer, UI primitives
│   │       ├── data/         # Questions, articles (blog), wiki terms
│   │       └── hooks/        # usePageTitle, use-toast, etc.
│   │
│   └── api-server/           # Express REST API
│       └── src/
│           ├── routes/       # /results, /leaderboard, /stats, /health
│           └── lib/          # Logger
│
└── lib/
    ├── db/                   # @workspace/db — Drizzle schema + MySQL connection
    │   ├── src/schema/       # testResultsTable definition
    │   ├── src/index.ts      # mysql2 driver + drizzle instance
    │   └── drizzle.config.ts # dialect: "mysql"
    ├── api-spec/             # OpenAPI spec (source of truth)
    ├── api-zod/              # Zod schemas auto-generated from spec
    └── api-client-react/     # TanStack Query hooks auto-generated by Orval
```

---

## Pages & Routes

| Path | Page |
|---|---|
| `/` | Home — hero, stats ticker, how-it-works, IQ distribution, EQ comparison, CTA |
| `/test` | 30-question IQ test with timer |
| `/results/:id` | Results — score, percentile, bell curve, share |
| `/blog` | Blog listing with tag filter and search |
| `/blog/:slug` | Individual long-form article |
| `/wiki` | Knowledge base — 17 entries, category filter, search |
| `/methodology` | IRT methodology deep-dive |
| `/science` | Science of intelligence (g-factor, Flynn Effect, neuroscience) |
| `/updates` | Platform changelog |
| `/about` | About FreeIQTest + author bio |
| `/author` | Rabeea Naseer — full author profile |
| `/contact` | Contact form |
| `/careers` | Open roles and company values |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/disclaimer` | Disclaimer |
| `/cookies` | Cookie Policy |

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- A MySQL database (local or hosted)

### Installation

```bash
# Clone the repo
git clone https://github.com/rabeeanaseer6-lab/freeiqtest
cd freeiqtest

# Install all workspace dependencies
pnpm install
```

### Development

Two services need to run simultaneously — the API server and the Vite dev server.

```bash
# Start the API server (port 8080 by default)
pnpm --filter @workspace/api-server run dev

# Start the frontend (separate terminal)
pnpm --filter @workspace/iq-test run dev
```

The frontend will be available at `http://localhost:<PORT>`.

### Database Setup

After setting your `DATABASE_URL`, push the schema to your database:

```bash
pnpm --filter @workspace/db run push
```

This creates the `test_results` table using Drizzle's push (no migration files needed).

---

## Environment Variables

Set these in your deployment environment or a local `.env` file (never commit secrets).

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | MySQL connection string (see format below) |
| `SESSION_SECRET` | Yes | Secret key for signing sessions |
| `NODE_ENV` | Yes | Set to `production` for deployment |
| `PORT` | No | API server port (default: 8080, auto-injected by most hosts) |
| `LOG_LEVEL` | No | Pino log level — `info` (default), `warn`, `error` |

**`DATABASE_URL` format:**

```
mysql://DB_USERNAME:DB_PASSWORD@DB_HOST:3306/DB_NAME
```

Example (Hostinger):
```
mysql://u123456789_mydb:MySecurePassword@srv1234.hstgr.io:3306/u123456789_mydb
```

---

## Database

The app uses a single table:

```sql
CREATE TABLE test_results (
  id          SERIAL PRIMARY KEY,
  user_name   VARCHAR(255),
  score       INT NOT NULL,
  time_taken  INT NOT NULL,        -- seconds
  correct_answers INT NOT NULL,
  total_questions INT NOT NULL,
  percentile  INT NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

Managed via **Drizzle ORM** (`lib/db/src/schema/results.ts`). To sync schema changes:

```bash
pnpm --filter @workspace/db run push
```

---

## Deploying to Hostinger

### 1. Build the frontend

```bash
pnpm --filter @workspace/iq-test run build
```

Output goes to `artifacts/iq-test/dist/`. Upload or serve this as static files.

### 2. Build the API server

```bash
pnpm --filter @workspace/api-server run build
```

Output goes to `artifacts/api-server/dist/index.mjs`. Run with:

```bash
node artifacts/api-server/dist/index.mjs
```

### 3. Set environment variables in Hostinger hPanel

Add these three keys under **Advanced → PHP / Node.js configuration** or your Hostinger environment settings:

| Key | Value |
|---|---|
| `DATABASE_URL` | Your MySQL connection string |
| `SESSION_SECRET` | A long random string (32+ characters) |
| `NODE_ENV` | `production` |

### 4. Push database schema

Run once after setting `DATABASE_URL`:

```bash
DATABASE_URL="mysql://..." pnpm --filter @workspace/db run push
```

### 5. Point your domain

In Hostinger DNS, point `freeiqtest.online` to your hosting IP. SSL is handled by Hostinger's built-in Let's Encrypt integration.

---

## Author

**Rabeea Naseer**  
Founder @ [NovatraTech](https://novatratech.online) — AI & Data-Driven Systems Developer

Building scalable SaaS products, automated web infrastructures, and data-intelligent digital ecosystems.

- Portfolio: [rabeeanaseer.online](https://rabeeanaseer.online)
- Company: [novatratech.online](https://novatratech.online)
- LinkedIn: [linkedin.com/in/rabeea-naseer-045b4a337](https://www.linkedin.com/in/rabeea-naseer-045b4a337/)
- GitHub: [github.com/rabeeanaseer6-lab](https://github.com/rabeeanaseer6-lab)
- Kaggle: [kaggle.com/rabeeanaseer](https://kaggle.com/rabeeanaseer)

---

## License

This project is proprietary software. All rights reserved — FreeIQTest.online © 2026.  
For licensing inquiries contact: legal@freeiqtest.online
