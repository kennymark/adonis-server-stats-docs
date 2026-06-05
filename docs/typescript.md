# TypeScript

All types are exported for consumer use.

```ts
// Core types
import type {
  ServerStats,
  ServerStatsConfig,
  ResolvedServerStatsConfig,
  MetricCollector,
  MetricValue,
  LogStats,
  DevToolbarOptions,
  ToolbarConfig,
  DashboardConfig,
  AdvancedConfig,
} from 'adonisjs-server-stats'

// Debug types
import type {
  DebugPane,
  DebugPaneColumn,
  DebugPaneFormatType,
  DebugPaneSearch,
  BadgeColor,
  QueryRecord,
  EventRecord,
  EmailRecord,
  RouteRecord,
  TraceSpan,
  TraceRecord,
} from 'adonisjs-server-stats'

// Dashboard types
import type {
  RequestFilters,
  QueryFilters,
  EventFilters,
  EmailFilters,
  LogFilters,
  TraceFilters,
  PaginatedResult,
} from 'adonisjs-server-stats'

// Dashboard store (advanced)
import { DashboardStore } from 'adonisjs-server-stats'

// Trace helper
import { trace } from 'adonisjs-server-stats'

// Collector option types
import type {
  HttpCollectorOptions,
  DbPoolCollectorOptions,
  QueueCollectorOptions,
  QueueRedisConnection,
  LogCollectorOptions,
} from 'adonisjs-server-stats/collectors'
```
