# Dashboard

The dashboard is a dedicated page with historical data, charts, query analysis, and integration inspectors — similar to Laravel Telescope built into your dev toolbar.

## Prerequisites

```bash
npm install better-sqlite3
```

Without `better-sqlite3`, the dashboard logs a helpful message and disables itself gracefully.

## Enable

```ts [config/server_stats.ts]
export default defineConfig({
  authorize: (ctx) => ctx.auth?.user?.role === 'admin',
  dashboard: true,
})
```

Visit **`/__stats`** (or `dashboard.path`).

## Configuration

```ts
export default defineConfig({
  dashboard: {
    path: '/__stats',
    retentionDays: 7,
  },
  toolbar: {
    tracing: true,
    excludeFromTracing: ['/admin/api/debug'],
  },
  advanced: {
    dbPath: '.adonisjs/server-stats/dashboard.sqlite3',
  },
})
```

## Sections

| Section | Description |
| --- | --- |
| **Overview** | Performance cards with sparklines; time ranges 1h/6h/24h/7d |
| **Requests** | Paginated history; detail with queries and trace |
| **Queries** | SQL with duration, model, connection; grouped view; EXPLAIN for SELECT |
| **Events** | Application events from the AdonisJS emitter |
| **Routes** | Route table with methods, patterns, handlers, middleware |
| **Logs** | Level filtering, text search, JSON field search |
| **Emails** | History with HTML preview |
| **Timeline** | Waterfall timeline (`tracing: true`) |
| **Cache** | Redis key browser (requires `@adonisjs/redis`) |
| **Jobs** | Queue overview and retry (requires `@rlanz/bull-queue`) |
| **Config** | Sanitized app config; secrets auto-redacted |

## Access control

The dashboard reuses `authorize` from the main config. Unauthorized requests receive 403.

## Deep links

When the dashboard is enabled, the debug panel shows link icons on rows that open the dashboard in a new tab at the relevant item.

## Real-time updates

- **Transmit (SSE)** — subscribes to `server-stats/dashboard` when `@adonisjs/transmit` is installed
- **Polling fallback** — polls the API when Transmit is unavailable

## Data storage

SQLite database with `server_stats_*` tables:

- Auto-migrated on startup
- Separate Knex connection — never touches app migrations
- Self-cleaning via `retentionDays`
- WAL mode for concurrent reads

Add to `.gitignore`:

```
.adonisjs/server-stats/
```

## Theme support

Dark/light themes follow `prefers-color-scheme`, with a manual toggle synced across stats bar, debug panel, and dashboard via `localStorage`.

---

Next: [Custom Debug Panes](/custom-panes) · [Collectors](/collectors)
