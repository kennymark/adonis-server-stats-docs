# API Routes

All API routes are registered automatically during `boot()` — no manual controllers or route definitions needed. Each route group is gated by the `authorize` callback if configured.

## Stats bar endpoint

Registered when `statsEndpoint` is a string (default: `/admin/api/server-stats`). Returns the latest stats snapshot as JSON.

## Debug toolbar routes

Registered when `toolbar` is enabled. Base path: `advanced.debugEndpoint` (default: `/admin/api/debug`).

| Method | Path | Description |
| --- | --- | --- |
| GET | `/queries` | SQL queries with summary stats |
| GET | `/events` | Application events |
| GET | `/routes` | Registered route table |
| GET | `/logs` | Paginated log entries (up to 200) |
| GET | `/emails` | Captured emails (stripped HTML) |
| GET | `/emails/:id/preview` | Email HTML preview |
| GET | `/traces` | Request traces with log correlation |
| GET | `/traces/:id` | Trace detail with spans and related logs |
| GET | `/config` | Debug store configuration |
| GET | `/diagnostics` | Provider diagnostics and status |

## Dashboard routes

Registered when `dashboard` is enabled. Base path: `dashboard.path` (default: `/__stats`).

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | Dashboard page (HTML) |
| GET | `/api/overview` | Overview metrics |
| GET | `/api/overview/chart` | Time-series chart data |
| GET | `/api/requests` | Paginated request history |
| GET | `/api/requests/:id` | Request detail with queries/trace |
| GET | `/api/queries` | Paginated query list |
| GET | `/api/queries/grouped` | Queries grouped by normalized SQL |
| GET | `/api/queries/:id/explain` | EXPLAIN plan for a query |
| GET | `/api/events` | Paginated event list |
| GET | `/api/routes` | Route table |
| GET | `/api/logs` | Paginated log entries |
| GET | `/api/emails` | Paginated email list |
| GET | `/api/emails/:id/preview` | Email HTML preview |
| GET | `/api/traces` | Paginated trace list |
| GET | `/api/traces/:id` | Trace detail with spans |
| GET | `/api/cache` | Cache stats and key listing |
| GET | `/api/cache/:key` | Cache key detail |
| DELETE | `/api/cache/:key` | Delete a cache key |
| GET | `/api/jobs` | Job queue overview |
| GET | `/api/jobs/:id` | Job detail |
| POST | `/api/jobs/:id/retry` | Retry a failed job |
| GET | `/api/config` | App config (secrets redacted) |
| GET | `/api/filters` | Saved filters |
| POST | `/api/filters` | Create saved filter |
| DELETE | `/api/filters/:id` | Delete saved filter |

## Global middleware note

Auto-registered routes bypass route-level middleware but are still subject to global/server middleware. See [Visibility Control](/visibility) for session and auth middleware recommendations.

---

Next: [Prometheus](/prometheus) · [TypeScript](/typescript)
