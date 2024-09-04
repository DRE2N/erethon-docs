// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Erethon Docs',
  tagline: 'Official Erethon documentation',
  url: 'https://erethon.de',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
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
		  routeBasePath: '/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Erethon',
        logo: {
          alt: 'Erethon Site Logo',
          src: 'img/logo.png',
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
            docId: 'questsxl/intro',
            position: 'left',
            label: 'QuestsXL',
          },
          {
            type: 'doc',
            docId: 'aether/intro',
            position: 'left',
            label: 'Aether',
          },
          {
            type: 'doc',
            docId: 'spellbook/spells',
            position: 'left',
            label: 'Spellbook',
          },
          {
            type: 'doc',
            docId: 'bedrock/intro',
            position: 'left',
            label: 'Bedrock',
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
                label: 'DungeonsXL',
                to: '/docs/dungeonsxl/intro',
              },
			             {
                label: 'QuestsXL',
                to: '/docs/questsxl/intro',
              },
{
                label: 'Aether',
                to: '/docs/aether/intro',
              },
              {
                label: 'Spellbook',
                to: '/docs/spellbook/spells',
              },
              {
                label: 'Bedrock',
                to: '/docs/bedrock/intro',
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
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@erethon',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/erethonmc',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dev Blogs',
                to: 'https://erethon.de/blogs',
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
		additionalLanguages: [
            'kotlin',
            'java',
            'yaml',
        ],
      },
    }),
};

module.exports = config;
