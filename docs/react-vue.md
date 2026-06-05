# React & Vue (Inertia.js) — Alpha

::: warning Alpha feature
React and Vue integrations are new and may have rough edges. Bug reports are welcome on [GitHub Issues](https://github.com/simulieren/adonisjs-server-stats/issues).
:::

For **Inertia.js** with React or Vue, use native components with the same features as the Edge tag.

## Peer dependencies (optional)

```bash
# React
npm install react react-dom

# Vue
npm install vue

# Real-time updates (optional — falls back to polling)
npm install @adonisjs/transmit-client
```

## React

```tsx
import { ServerStatsBar, DebugPanel, DashboardPage } from 'adonisjs-server-stats/react'
import 'adonisjs-server-stats/react/css'

<ServerStatsBar endpoint="/admin/api/server-stats" pollInterval={3000} />
<DebugPanel debugEndpoint="/admin/api/debug" />
<DashboardPage dashboardEndpoint="/__stats/api" />
```

Hooks:

```tsx
import {
  useServerStats,
  useDebugData,
  useDashboardData,
  useTheme,
  useFeatures,
} from 'adonisjs-server-stats/react'
```

### Shared building blocks

```tsx
import {
  ThemeToggle,
  Badge,
  MethodBadge,
  StatusBadge,
  JsonViewer,
  Tooltip,
} from 'adonisjs-server-stats/react'
```

## Vue

```vue
<script setup>
import { ServerStatsBar, DebugPanel, DashboardPage } from 'adonisjs-server-stats/vue'
import 'adonisjs-server-stats/vue/css'
</script>

<template>
  <ServerStatsBar endpoint="/admin/api/server-stats" :poll-interval="3000" />
  <DebugPanel debug-endpoint="/admin/api/debug" />
  <DashboardPage dashboard-endpoint="/__stats/api" />
</template>
```

Composables:

```ts
import {
  useServerStats,
  useDebugData,
  useDashboardData,
  useTheme,
  useFeatures,
} from 'adonisjs-server-stats/vue'
```

## Auth & visibility

- **Cookie auth** — requests use `credentials: 'include'` automatically
- **Bearer token** — pass `authToken` as a prop to any component

The server `authorize` callback gates all API routes. Components detect 403 and hide themselves.

## Real-time updates

With `@adonisjs/transmit-client`, the stats bar uses SSE; otherwise it polls at the configured interval.

## Known limitations (alpha)

- Dashboard page bundle may be large
- Some custom pane edge cases may be incomplete
- Minimal error boundaries
- Tested with React 18/19 and Vue 3.3+

---

Next: [Dev Toolbar](/dev-toolbar)
