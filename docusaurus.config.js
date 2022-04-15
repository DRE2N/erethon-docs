// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Erethon Docs',
  tagline: 'Official Erethon documentation',
  url: 'https://erethon.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DRE2N', // Usually your GitHub org/user name.
  projectName: 'erethon-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DRE2N/erethon-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DRE2N/erethon-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Erethon',
        logo: {
          alt: 'Erethon Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Welcome',
          },
          {
            type: 'doc',
            docId: 'dungeonsxl/intro',
            position: 'left',
            label: 'DungeonsXL',
          },
          {
            type: 'doc',
            docId: 'aergia/intro',
            position: 'left',
            label: 'Aergia',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/welcome',
              },
              {
                label: 'DungeonsXL',
                to: '/docs/dungeonsxl/intro',
              },
              {
                label: 'Aergia',
                to: '/docs/aergia/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://dc.erethon.de',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dev Blogs',
                to: 'https://erethon.de/category/dev/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DRE2N',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Erethon`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
