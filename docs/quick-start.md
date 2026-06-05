# Quick Start

## Common setup

Add access control and enable the toolbar and dashboard:

```ts [config/server_stats.ts]
import { defineConfig } from 'adonisjs-server-stats'

export default defineConfig({
  authorize: (ctx) => ctx.auth?.user?.role === 'admin',
  toolbar: true,
  dashboard: true,
})
```

::: tip Enable query capture
Lucid only emits `db:query` events when `debug: true` is set on the connection. Without it, the Queries panel will be empty.

```ts [config/database.ts]
connections: {
  postgres: {
    client: 'pg',
    debug: app.inDev,
    connection: { /* ... */ },
  },
}
```
:::

## Render the stats bar (Edge)

All API routes are auto-registered — no controllers or route definitions needed.

Add the Edge tag before `</body>`:

```edge
<body>
  @inertia()
  @serverStats()
</body>
```

On startup you'll see:

```
[server-stats] auto-registered routes: /admin/api/server-stats, /admin/api/debug/*, /__stats/*
```

## Dashboard prerequisite

The dashboard requires `better-sqlite3`:

```bash
npm install better-sqlite3
```

Visit **`/__stats`** (or your configured `dashboard.path`) after enabling `dashboard: true`.

## Explicit collectors (optional)

Override auto-detection when you need custom collector options:

```ts [config/server_stats.ts]
import env from '#start/env'
import { defineConfig } from 'adonisjs-server-stats'
import {
  processCollector,
  systemCollector,
  httpCollector,
  dbPoolCollector,
  redisCollector,
  queueCollector,
  logCollector,
  appCollector,
} from 'adonisjs-server-stats/collectors'

export default defineConfig({
  pollInterval: 3000,
  collectors: [
    processCollector(),
    systemCollector(),
    httpCollector({ maxRecords: 10_000 }),
    dbPoolCollector({ connectionName: 'postgres' }),
    redisCollector(),
    queueCollector({
      queueName: 'default',
      connection: {
        host: env.get('QUEUE_REDIS_HOST'),
        port: env.get('QUEUE_REDIS_PORT'),
        password: env.get('QUEUE_REDIS_PASSWORD'),
      },
    }),
    logCollector(),
    appCollector(),
  ],
})
```

---

See [Configuration](/configuration) and [Collectors](/collectors) for all options. Next: [Visibility Control](/visibility)
