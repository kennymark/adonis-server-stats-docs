# adonisjs-server-stats documentation

Documentation site for [adonisjs-server-stats](https://github.com/simulieren/adonisjs-server-stats), built with [VitePress](https://vitepress.dev/).

## Development

```bash
npm install
npm run docs:dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run docs:build
npm run docs:preview
```

Output is written to `docs/.vitepress/dist`.

## Deploy

### GitHub Pages

If deploying to `https://<user>.github.io/server-stats-docs/`, set `base` in `docs/.vitepress/config.ts`:

```ts
export default defineConfig({
  base: '/server-stats-docs/',
  // ...
})
```

Then build and deploy the `docs/.vitepress/dist` folder (e.g. with `actions/deploy-pages`).

### Vercel / Netlify

- **Build command:** `npm run docs:build`
- **Output directory:** `docs/.vitepress/dist`

## Package source

The [adonisjs-server-stats](https://github.com/simulieren/adonisjs-server-stats) repository remains the source of truth for releases and the [CHANGELOG](https://github.com/simulieren/adonisjs-server-stats/blob/main/CHANGELOG.md).
