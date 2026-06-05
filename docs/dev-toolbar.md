# Dev Toolbar

Adds a debug panel with SQL query inspection, event tracking, email capture with HTML preview, route table, live logs, and per-request tracing. Enable with `toolbar: true` or a `ToolbarConfig` object.

```ts [config/server_stats.ts]
export default defineConfig({
  toolbar: {
    slowQueryThreshold: 100,
    tracing: true,
    persist: true,
  },
})
```

Debug routes are auto-registered at `/admin/api/debug/*` (configurable via `advanced.debugEndpoint`).

## Built-in emails tab

The toolbar captures emails sent via AdonisJS mail (`mail:sending`, `mail:sent`, `mail:queued`, `queued:mail:error`). Click any row to preview HTML in an iframe.

::: tip Email preview and Shield
If `@adonisjs/shield` sets `X-Frame-Options: DENY`, email previews are blocked. Use `SAMEORIGIN` in `config/shield.ts`:

```ts
xFrame: {
  enabled: true,
  action: 'SAMEORIGIN',
},
```
:::

## Cross-process email capture (queue workers)

Mail events are process-local. Emails sent from Bull queue workers are bridged via **Redis pub/sub** when `@adonisjs/redis` is installed:

1. In `console` environment — lightweight email bridge publisher only
2. Email events publish to a Redis channel
3. In `web` environment — subscriber ingests into debug panel and dashboard

Register the main provider without `environment` restriction so it loads in `web` + `console`.

## Persistent debug data

`toolbar.persist: true` saves queries, events, and emails to `.adonisjs/server-stats/debug-data.json` (customize via `advanced.persistPath`):

- **Loaded** on server startup
- **Flushed** every 30 seconds
- **Saved** on graceful shutdown

## Request tracing

When `tracing: true`, the debug panel gains a **Timeline** tab with a waterfall view per HTTP request.

```
GET /organizations/create    286ms
├─ SELECT * FROM users          2ms  █
├─ SELECT * FROM orgs           4ms    █
├─ fetchMembers (custom)      180ms    ██████████████████
└─ response sent                5ms                      ██
```

### Span categories

| Category | Color | Auto-captured |
| --- | --- | --- |
| DB | Purple | `db:query` events |
| Request | Blue | Full request lifecycle |
| Mail | Green | — |
| Event | Amber | — |
| View | Cyan | — |
| Custom | Gray | Via `trace()` helper |

### Custom spans

```ts
import { trace } from 'adonisjs-server-stats'

const result = await trace('organization.fetchMembers', async () => {
  return OrganizationService.getMembers(orgId)
})
```

If tracing is disabled or no request is active, `trace()` runs the function with no overhead.

### Related logs

Trace detail views correlate logs using `ctx.request.id()`. Works with SQLite persistence and in-memory mode — no extra configuration when your app uses AdonisJS request IDs.

---

Next: [Dashboard](/dashboard) · [Custom Debug Panes](/custom-panes)
