# Log Stream

The log stream module watches a JSON log file and broadcasts new entries via Transmit (SSE).

**Two purposes:**

1. Provides error/warning counts to the stats bar via `logCollector()`
2. Broadcasts individual log entries to a Transmit channel via `LogStreamProvider`

## Standalone usage

```ts
import { LogStreamService } from 'adonisjs-server-stats/log-stream'

const service = new LogStreamService('logs/app.log', (entry) => {
  console.log('New log entry:', entry)
})

await service.start()
// later...
service.stop()
```

The main provider includes log stream functionality — you no longer need a separate `log-stream/provider` registration.

---

Next: [TypeScript](/typescript)
