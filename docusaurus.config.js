// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Amyst',
  tagline: 'A low code platform that enables you to build reliable backend applications faster.',
  url: 'https://console.amyst.co',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'amyst-co', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/amyst-co/docs/blob/master',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/amyst-co/docs/blob/master',
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
        title: 'Amyst Documentation',
        logo: {
          alt: 'Amyst',
          src: '/docs/img/favicon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://console.amyst.co',
            label: 'Console',
            position: 'right',
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
                label: 'Documentation',
                to: '/docs/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/magedev',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/magedev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portal',
                href: 'https://console.amyst.co',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/mage-repo',
              },
              {
                label: 'Sample output',
                href: 'https://gitlab.com/mage-repo/example',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code4Me Technologies Pvt. Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
