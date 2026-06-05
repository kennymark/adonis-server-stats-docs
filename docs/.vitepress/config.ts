import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'adonisjs-server-stats',
  description:
    'Laravel Telescope-inspired dev toolbar and real-time server monitor for AdonisJS v6 & v7',
  lang: 'en-US',
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    logo: '📊',
    nav: [
      { text: 'Guide', link: '/installation' },
      { text: 'Configuration', link: '/configuration' },
      { text: 'API', link: '/api-routes' },
      {
        text: 'GitHub',
        link: 'https://github.com/simulieren/adonisjs-server-stats'
      },
      {
        text: 'npm',
        link: 'https://www.npmjs.com/package/adonisjs-server-stats'
      }
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Configuration', link: '/configuration' },
          { text: 'Visibility Control', link: '/visibility' }
        ]
      },
      {
        text: 'UI',
        items: [
          { text: 'Edge Tag', link: '/edge' },
          { text: 'React & Vue (Alpha)', link: '/react-vue' },
          { text: 'Dev Toolbar', link: '/dev-toolbar' },
          { text: 'Dashboard', link: '/dashboard' },
          { text: 'Custom Debug Panes', link: '/custom-panes' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Collectors', link: '/collectors' },
          { text: 'API Routes', link: '/api-routes' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Prometheus', link: '/prometheus' },
          { text: 'Log Stream', link: '/log-stream' },
          { text: 'TypeScript', link: '/typescript' }
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/simulieren/adonisjs-server-stats'
      }
    ],
    editLink: {
      pattern:
        'https://github.com/simulieren/server-stats-docs/edit/main/docs/:path'
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © simulieren'
    },
    search: {
      provider: 'local'
    }
  }
})
