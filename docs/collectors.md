# Collectors

When `collectors` is `'auto'` (the default), the package probes installed packages at boot and enables matching collectors automatically. On startup you'll see a log showing all 8 collectors with a checkmark or cross.

You only need to specify collectors explicitly if you want to customize their options.

Each collector is a factory function that returns a `MetricCollector`. All collectors run in parallel each tick; missing peer dependencies are handled gracefully.

## Built-in collectors

| Collector | Metrics | Options | Peer deps |
| --- | --- | --- | --- |
| `processCollector()` | CPU %, event loop lag, heap/RSS memory, uptime, Node version | none | — |
| `systemCollector()` | OS load averages, system memory, system uptime | none | — |
| `httpCollector(opts?)` | Requests/sec, avg response time, error rate, active connections | optional | — |
| `dbPoolCollector(opts?)` | Pool used/free/pending/max connections | optional | `@adonisjs/lucid` |
| `redisCollector()` | Status, memory, clients, keys, hit rate | none | `@adonisjs/redis` |
| `queueCollector(opts)` | Active/waiting/delayed/failed jobs, worker count | **required** | `bullmq` |
| `logCollector(opts?)` | Errors/warnings/entries (5m window), entries/minute | optional | — |
| `appCollector()` | Online users, pending webhooks, pending emails | none | `@adonisjs/lucid` |

## Collector options

```ts
httpCollector({
  maxRecords: 10_000,
  windowMs: 60_000,
})

dbPoolCollector({
  connectionName: 'postgres',
})

queueCollector({
  queueName: 'default',
  connection: {
    host: 'localhost',
    port: 6379,
    password: 'secret',
  },
})

// Zero-config: hooks into AdonisJS Pino logger automatically
logCollector()

// Or file-based fallback:
logCollector({ logPath: 'logs/adonisjs.log' })
```

## Custom collectors

Implement the `MetricCollector` interface:

```ts
import type { MetricCollector } from 'adonisjs-server-stats'

function diskCollector(): MetricCollector {
  return {
    name: 'disk',
    async collect() {
      const { availableSpace, totalSpace } = await getDiskInfo()
      return {
        diskAvailableGb: availableSpace / 1e9,
        diskTotalGb: totalSpace / 1e9,
        diskUsagePercent: ((totalSpace - availableSpace) / totalSpace) * 100,
      }
    },
  }
}

export default defineConfig({
  collectors: [processCollector(), diskCollector()],
})
```

### MetricCollector interface

```ts
interface MetricCollector {
  name: string
  start?(): void | Promise<void>
  stop?(): void | Promise<void>
  collect(): Record<string, MetricValue> | Promise<Record<string, MetricValue>>
}
```

---

Next: [API Routes](/api-routes)
