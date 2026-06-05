# Edge Tag

The `@serverStats()` Edge tag renders a self-contained stats bar with inline HTML, CSS, and JS — no external assets, no build step.

```edge
<body>
  @inertia()
  @serverStats()
</body>
```

## Behavior

- Polls the stats API at the configured interval
- Color-coded thresholds (green/amber/red)
- SVG sparkline charts with gradient fills
- Hover tooltips with min/max/avg stats
- Show/hide toggle (persisted via `localStorage`)
- Auto-hides for non-admin users (403 detection)
- Scoped CSS (`.ss-` prefix)
- Stale connection indicator (amber dot after 10s)

For Inertia apps using React or Vue, see [React & Vue (Alpha)](/react-vue).

---

Next: [React & Vue (Alpha)](/react-vue) · [Dev Toolbar](/dev-toolbar)
