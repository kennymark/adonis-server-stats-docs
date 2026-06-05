# Prometheus Integration

Export all metrics as Prometheus gauges. Requires `@julr/adonisjs-prometheus`.

```ts [config/prometheus.ts]
import { defineConfig } from '@julr/adonisjs-prometheus'
import { httpCollector } from '@julr/adonisjs-prometheus/collectors/http_collector'
import { serverStatsCollector } from 'adonisjs-server-stats/prometheus'

export default defineConfig({
  endpoint: '/metrics',
  collectors: [httpCollector(), serverStatsCollector()],
})
```

Gauges are updated automatically on each collection tick.

---

Next: [Log Stream](/log-stream)
