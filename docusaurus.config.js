// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const oceanicNext = require("prism-react-renderer/themes/oceanicNext");
const duotoneLight = require("prism-react-renderer/themes/duotoneLight");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Chen's Wiki",
  tagline: "这里是陈晨的知识库，欢迎访问~",
  url: "https://404Lab.top",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "Chen's Wiki", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-K06FBEHD1R",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/HiChen404/MyWikiSite/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Chen's Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Wiki",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://404Lab.top",
            label: "Home",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Chen's Wiki",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Wechat Channel",
                href: "https://mp.weixin.qq.com/s/ytNsiyIjCb-URVLY90uSMw",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Telegram Channel",
                href: "https://t.me/EnjoyDigitalLife",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chen's Project, Inc.`,
      },
      prism: {
        theme: duotoneLight,
        darkTheme: oceanicNext,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: "support_us",
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="https://github.com/HiChen404/MyWikiSite/tree/master/">this survey</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
    }),
};

module.exports = config;
