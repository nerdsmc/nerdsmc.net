const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'U\'World',
  tagline: 'U\'World est un serveur minecraft Survie et OneBlock de l\'1.8 à l\'1.19',
  url: 'https://uworldmc.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'uworldmc', // Usually your GitHub org/user name.
  projectName: 'uworld', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/uworldmc/uworld/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/uworldmc/uworld/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAnalytics: {
        trackingID: 'UA-194379266-1',
        anonymizeIP: false,
      },
      gtag: {
        trackingID: '845063437',
        anonymizeIP: true,
      },
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'U\'World',
        logo: {
          alt: 'U\'World Logo',
          src: 'img/uworld.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {
            to: '/ranks',
            label: 'Ranks',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/VJe8Hs5TT4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Top-Serveurs.net',
                href: 'https://vote.top-serveurs.net/minecraft/uworld',
              },
              {
                label: 'ServeursMinecraft.org',
                href: 'https://www.serveursminecraft.org/serveur/5550/',
              },
              {
                label: 'LSM.org',
                href: 'https://www.liste-serveurs-minecraft.org/serveur-minecraft/uworld-serveur-survie-crack-accepte/',
              },
              {
                label: 'Liste-Serveurs.fr',
                href: 'https://www.liste-serveurs.fr/server-u-world-survie-oneblock.350',
              },
              {
                label: 'Serveur-Prive.net',
                href: 'https://serveur-prive.net/minecraft/u-world-8693',
              },
            ],
          },
        ],
        copyright: `U'World est un serveur minecraft Survie et OneBlock de l'1.8 à l'1.19`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});