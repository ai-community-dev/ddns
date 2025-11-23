import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DDNS",
  description: "A free subdomain provider for the Machine Learning community ",
  head: [
    ['link', { rel: 'icon', href: 'https://github.com/ai-community-dev.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started' },
      { text: 'Fork', link: 'https://github.com/ai-community-dev/ddns/fork' },
    ],

    logo: "https://github.com/ai-community-dev.png",

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Format', link: '/format' },
          { text: 'Team', link: '/team' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ai-community-dev/ddns' }
    ],

    editLink: {
      pattern: "https://github.com/ai-community-dev/ddns/edit/main/docs/:path",
    },

    lastUpdated: {
      text: 'Last Updated',
    },

    returnToTopLabel: 'Back to top',
  },
})
