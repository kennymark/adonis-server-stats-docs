# Visibility Control

Use `authorize` to control who can see the stats bar and access all auto-registered API routes (stats, debug, dashboard). The callback receives the AdonisJS `HttpContext` and should return `true` to allow access, `false` to deny (403).

Because `authorize` runs **after** middleware (including auth), you have full access to `ctx.auth`.

## Examples

```ts
// Only show in development
export default defineConfig({
  authorize: () => env.get('NODE_ENV') === 'development',
})
```

```ts
// Only show for logged-in admin users
export default defineConfig({
  authorize: (ctx) => ctx.auth?.user?.isAdmin === true,
})
```

```ts
// Only show for specific roles
export default defineConfig({
  authorize: (ctx) => {
    const role = ctx.auth?.user?.role
    return role === 'admin' || role === 'superadmin'
  },
})
```

::: warning Production access
When `authorize` is not set, the bar and all routes are accessible to everyone. In production you almost always want to set this.
:::

::: info Migration note
`shouldShow` still works as a deprecated alias for `authorize`. Both have the same signature and behavior.
:::

## Session and auth middleware

Auto-registered routes bypass route-level middleware but are still subject to global/server middleware.

### Session middleware

If session middleware is registered globally in `router.use()`, every polling request (~3s) may trigger `Set-Cookie`. The package strips `Set-Cookie` from its own routes, but for cleanest results move session middleware to a named route group:

```ts [start/kernel.ts]
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/shield/shield_middleware'),
])

// start/routes.ts
router.group(() => {
  // your app routes
}).use(middleware.session())
```

### Auth middleware

Global auth middleware causes a DB query every few seconds on polling. Either move auth to a named route group or use `authorize` for access control (recommended).

---

Next: [Edge Tag](/edge)
