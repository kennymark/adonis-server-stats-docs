# Custom Debug Panes

Add custom tabs to the debug panel:

```ts [config/server_stats.ts]
import { defineConfig } from 'adonisjs-server-stats'
import type { DebugPane } from 'adonisjs-server-stats'

const webhooksPane: DebugPane = {
  id: 'webhooks',
  label: 'Webhooks',
  endpoint: '/admin/api/debug/webhooks',
  columns: [
    { key: 'id', label: '#', width: '40px' },
    { key: 'event', label: 'Event', searchable: true },
    { key: 'url', label: 'URL', searchable: true },
    {
      key: 'status',
      label: 'Status',
      width: '80px',
      format: 'badge',
      badgeColorMap: { delivered: 'green', pending: 'amber', failed: 'red' },
    },
    { key: 'duration', label: 'Duration', width: '70px', format: 'duration' },
    { key: 'timestamp', label: 'Time', width: '80px', format: 'timeAgo' },
  ],
  search: { placeholder: 'Filter webhooks by event or URL...' },
  clearable: true,
}

export default defineConfig({
  toolbar: {
    panes: [webhooksPane],
  },
})
```

The endpoint must return JSON with the data array under a key matching the pane `id` (or `dataKey`):

```ts
async webhooks({ response }: HttpContext) {
  const events = await WebhookEvent.query().orderBy('created_at', 'desc').limit(200)
  return response.json({ webhooks: events })
}
```

## DebugPane options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | Unique identifier (also default data key) |
| `label` | `string` | — | Tab display name |
| `endpoint` | `string` | — | API endpoint URL |
| `columns` | `DebugPaneColumn[]` | — | Column definitions |
| `search` | `{ placeholder }` | — | Enable search bar |
| `dataKey` | `string` | `id` | JSON key for data array (dot notation OK) |
| `fetchOnce` | `boolean` | `false` | Cache after first fetch |
| `clearable` | `boolean` | `false` | Show Clear button |

## DebugPaneColumn options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | — | JSON field name |
| `label` | `string` | — | Column header text |
| `width` | `string` | auto | CSS width (e.g. `'60px'`) |
| `format` | `DebugPaneFormatType` | `'text'` | Cell format |
| `searchable` | `boolean` | `false` | Include in search filtering |
| `filterable` | `boolean` | `false` | Click to set as search filter |
| `badgeColorMap` | `Record<string, string>` | — | Value-to-color map for badge format |

## Format types

| Format | Renders as | Expected input |
| --- | --- | --- |
| `text` | Escaped plain text | any |
| `time` | HH:MM:SS.mmm | Unix timestamp (ms) |
| `timeAgo` | 3s ago, 2m ago | Unix timestamp (ms) |
| `duration` | X.XXms with color coding | number (ms) |
| `method` | HTTP method pill badge | GET, POST, etc. |
| `json` | Compact preview, click to expand | object or array |
| `badge` | Colored pill via `badgeColorMap` | string |

Badge colors: `green`, `amber`, `red`, `blue`, `purple`, `muted`

---

Next: [Collectors](/collectors)
