# Configuration

All fields are optional. `defineConfig({})` works with zero configuration.

```ts [config/server_stats.ts]
import { defineConfig } from 'adonisjs-server-stats'

export default defineConfig({})
```

## ServerStatsConfig

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `pollInterval` | `number` | `3000` | Collection + broadcast interval (ms) |
| `collectors` | `'auto' \| MetricCollector[]` | `'auto'` | `'auto'` probes installed packages; or pass an explicit array |
| `realtime` | `boolean` | `true` | `true` = SSE via Transmit, `false` = poll-only |
| `statsEndpoint` | `string \| false` | `'/admin/api/server-stats'` | HTTP endpoint. `false` to disable. |
| `authorize` | `(ctx) => boolean` | — | Per-request visibility guard |
| `onStats` | `(stats) => void` | — | Callback after each collection tick |
| `toolbar` | `boolean \| ToolbarConfig` | — | `true` to enable with defaults, or pass a `ToolbarConfig` object |
| `dashboard` | `boolean \| DashboardConfig` | — | `true` to enable at `/__stats`, or pass a `DashboardConfig` |
| `verbose` | `boolean` | `false` | Log initialization details to console |
| `advanced` | `AdvancedConfig` | — | Channel name, db path, buffer sizes, etc. |

## ToolbarConfig

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `slowQueryThreshold` | `number` | `100` | Slow query threshold (ms) |
| `tracing` | `boolean` | `true` | Enable per-request tracing with timeline |
| `persist` | `boolean` | `false` | Persist debug data to disk across restarts |
| `panes` | `DebugPane[]` | — | Custom debug panel tabs |
| `excludeFromTracing` | `string[]` | `['/admin/api/debug', '/admin/api/server-stats']` | URL prefixes to exclude from tracing/persistence |

## DashboardConfig

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `path` | `string` | `'/__stats'` | URL path for the dashboard page |
| `retentionDays` | `number` | `7` | Days to keep historical data in SQLite |

## AdvancedConfig

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `skipInTest` | `boolean` | `true` | Skip collection during tests |
| `channelName` | `string` | `'admin/server-stats'` | Transmit channel name |
| `debugEndpoint` | `string` | `'/admin/api/debug'` | Base path for debug toolbar API endpoints |
| `renderer` | `'preact' \| 'vue'` | `'preact'` | Client-side rendering library for Edge |
| `dbPath` | `string` | `'.adonisjs/server-stats/dashboard.sqlite3'` | Path to the SQLite database file |
| `persistPath` | `string` | `'.adonisjs/server-stats/debug-data.json'` | Path for persisted debug data |
| `maxQueries` | `number` | `500` | Max SQL queries to buffer |
| `maxEvents` | `number` | `200` | Max events to buffer |
| `maxEmails` | `number` | `100` | Max emails to buffer |
| `maxTraces` | `number` | `200` | Max request traces to buffer |

## Legacy config (deprecated)

The following field names still work but show deprecation warnings at boot:

| Legacy Name | Replacement | Notes |
| --- | --- | --- |
| `intervalMs` | `pollInterval` | Same type and default |
| `transport` | `realtime` | `'transmit'` = `true`, `'none'` = `false` |
| `channelName` | `advanced.channelName` | Same type and default |
| `endpoint` | `statsEndpoint` | Same type and default |
| `shouldShow` | `authorize` | Same type and default |
| `skipInTest` | `advanced.skipInTest` | Same type and default |
| `devToolbar` | `toolbar` + `dashboard` + `advanced` | Split into focused config objects |

Example using the new shape:

```ts [config/server_stats.ts]
export default defineConfig({
  toolbar: {
    slowQueryThreshold: 100,
    tracing: true,
    persist: true,
  },
  dashboard: {
    path: '/__stats',
    retentionDays: 7,
  },
  advanced: {
    dbPath: '.adonisjs/server-stats/dashboard.sqlite3',
  },
})
```

---

Next: [Visibility Control](/visibility) · [Edge Tag](/edge)
