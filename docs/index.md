---
layout: home
hero:
  name: adonisjs-server-stats
  text: Real-time server monitoring for AdonisJS
  tagline: Laravel Telescope-inspired dev toolbar and stats bar for AdonisJS v6 & v7. Zero frontend dependencies — just @serverStats() and go.
  image:
    src: https://raw.githubusercontent.com/simulieren/adonisjs-server-stats/main/screenshots/hero.png
    alt: adonisjs-server-stats demo
  actions:
    - theme: brand
      text: Quick Start
      link: /quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/simulieren/adonisjs-server-stats
    - theme: alt
      text: npm
      link: https://www.npmjs.com/package/adonisjs-server-stats
features:
  - title: Live stats bar
    details: CPU, memory, event loop lag, HTTP throughput, DB pool, Redis, queues, and logs — updated in real time.
  - title: Debug toolbar
    details: SQL queries, events, emails, routes, logs with search, filtering, and per-request tracing.
  - title: Full-page dashboard
    details: Historical data at /__stats with charts, query analysis, EXPLAIN plans, and cache/queue inspectors.
  - title: Pluggable collectors
    details: Auto-detected from installed packages, or write your own MetricCollector implementations.
  - title: Self-contained Edge tag
    details: Inline HTML/CSS/JS — no external assets, no build step required.
  - title: React & Vue (alpha)
    details: Native Inertia.js components with the same features as the Edge integration.
---

::: info Version
These docs track package **v1.12.x**. See the [CHANGELOG](https://github.com/simulieren/adonisjs-server-stats/blob/main/CHANGELOG.md) on GitHub for release notes.
:::

## Screenshots

| Queries | Events |
| --- | --- |
| ![Queries panel](https://raw.githubusercontent.com/simulieren/adonisjs-server-stats/main/screenshots/debug-queries.png) | ![Events panel](https://raw.githubusercontent.com/simulieren/adonisjs-server-stats/main/screenshots/debug-events.png) |

| Routes | Logs |
| --- | --- |
| ![Routes panel](https://raw.githubusercontent.com/simulieren/adonisjs-server-stats/main/screenshots/debug-routes.png) | ![Logs panel](https://raw.githubusercontent.com/simulieren/adonisjs-server-stats/main/screenshots/debug-logs.png) |

## Requirements

- AdonisJS v6 or v7
- Node.js 20+

## License

MIT — see [LICENSE](https://github.com/kennymark/adonisjs-server-stats/blob/main/LICENSE) in this repository.
