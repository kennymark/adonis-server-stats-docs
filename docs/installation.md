# Installation

## Install the package

```bash
npm install adonisjs-server-stats
```

## Register the provider

```ts [adonisrc.ts]
providers: [
  () => import('adonisjs-server-stats/provider'),
]
```

For cross-process email capture (queue workers), register the provider **without** an `environment` restriction so it loads in `web` and `console`:

```ts [adonisrc.ts]
providers: [
  () => import('adonisjs-server-stats/provider'),
]
```

## Register middleware

```ts [start/kernel.ts]
server.use([() => import('adonisjs-server-stats/middleware')])
```

## Create config

```ts [config/server_stats.ts]
import { defineConfig } from 'adonisjs-server-stats'

export default defineConfig({})
```

That's it for installation — zero config required. Collectors are auto-detected from installed packages (Lucid, Redis, BullMQ, etc.).

## Peer dependencies

All integrations use lazy `import()` — missing peer deps won't crash the app. The corresponding collector returns defaults instead.

| Dependency | Required by |
| --- | --- |
| `@adonisjs/core` | Everything (**required**) |
| `@adonisjs/lucid` | `dbPoolCollector`, `appCollector`, dashboard |
| `@adonisjs/redis` | `redisCollector`, dashboard cache inspector, email bridge |
| `@adonisjs/transmit` | Provider (SSE broadcast), dashboard real-time |
| `@adonisjs/transmit-client` | React/Vue real-time (falls back to polling) |
| `@julr/adonisjs-prometheus` | `serverStatsCollector` |
| `bullmq` | `queueCollector` |
| `better-sqlite3` | Dashboard (`dashboard: true`) |
| `edge.js` | Edge tag |
| `react`, `react-dom` | React components (alpha) |
| `vue` | Vue components (alpha) |

---

Next: [Quick Start](/quick-start)
