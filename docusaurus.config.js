const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'NerdsMC',
  tagline: 'NerdsMC is a minecraft server open to crack version. There is Prop Hunt, MissileWars, Creative, Parkour, Spleef, Sumo and much more. The server is open from 1.8 to 1.19',
  url: 'https://nerdsmc.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nerdsmc', // Usually your GitHub org/user name.
  projectName: 'nerdsmc.net', // Usually your repo name.

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nerdsmc/nerdsmc.net/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: '845063437',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'UA-194379266-1',
          anonymizeIP: false,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'NerdsMC',
        logo: {
          alt: 'NerdsMC Logo',
          src: 'img/logo.png',
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
                href: 'https://discordapp.com/invite/nerd',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Top-Serveurs.net',
          //       href: 'https://vote.top-serveurs.net/minecraft/uworld',
          //     },
          //     {
          //       label: 'ServeursMinecraft.org',
          //       href: 'https://www.serveursminecraft.org/serveur/5550/',
          //     },
          //     {
          //       label: 'LSM.org',
          //       href: 'https://www.liste-serveurs-minecraft.org/serveur-minecraft/uworld-serveur-survie-crack-accepte/',
          //     },
          //     {
          //       label: 'Liste-Serveurs.fr',
          //       href: 'https://www.liste-serveurs.fr/server-u-world-survie-oneblock.350',
          //     },
          //     {
          //       label: 'Serveur-Prive.net',
          //       href: 'https://serveur-prive.net/minecraft/u-world-8693',
          //     },
          //   ],
          // },
        ],
        copyright: `NerdsMC is a minecraft server open to crack version. There is Prop Hunt, MissileWars, Creative, Parkour, Spleef, Sumo and much more. The server is open from 1.8 to 1.19`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});