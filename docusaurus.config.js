// @ts-check

const copyright = `Copyright © ${new Date().getFullYear()} Promise Solutions`;

/** @type { import("@docusaurus/types").Config } */
const config = {
  baseUrl: "/",
  title: "Promise Solutions",
  url: "https://promise.solutions",
  favicon: "./logo.svg",
  tagline: "A group of developers making stuff so you don't have to",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

  /** @type { import("@docusaurus/preset-classic").ThemeConfig } */
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    metadata: [{ name: "theme-color", content: "#09BAC4" }],
    navbar: {
      title: "Promise Solutions",
      logo: {
        alt: "Promise Solutions Logo",
        src: "./logo.png",
      },
      items: [
        {
          label: "Meta",
          position: "left",
          to: "meta",
        },
        {
          label: "Blog",
          position: "left",
          to: "blog",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Promise Solutions",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/biaw",
            },
          ],
        },
        {
          title: "Projects",
          items: [
            {
              label: "Countr",
              href: "https://countr.xyz",
            },
          ],
        },
        {
          title: "Sponsors",
          items: [
            {
              label: "TLive",
              href: "https://trovo.live",
            },
          ],
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",

      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({ // eslint-disable-line no-extra-parens
        path: "content/meta",
        routeBasePath: "/meta",
        exclude: ["README.md", "template.md"],
      }),
    ],
    [
      "@docusaurus/plugin-content-blog",

      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({ // eslint-disable-line no-extra-parens
        path: "content/blog",
        blogTitle: "Promise Solutions Blog",
        blogDescription: "Our small and rarely updated blog, where we write about the stuff we do and stuff we like.",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "Blog",
        routeBasePath: "/blog",
        authorsMapPath: "../authors.yml",
        feedOptions: {
          type: "all",
          title: "Promise Solutions Blog",
          description: "Our small and rarely updated blog, where we write about the stuff we do and stuff we like.",
          copyright,
          language: "en",
        },
        exclude: ["README.md", "template.md"],
      }),
    ],
    [
      "@docusaurus/plugin-content-pages",

      /** @type {import('@docusaurus/plugin-content-pages').Options} */
      ({ path: "src/pages", routeBasePath: "/" }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-client-redirects",

      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({ fromExtensions: ["html"] }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-google-gtag",

      /** @type {import('@docusaurus/plugin-google-gtag').Options} */
      ({ trackingID: "G-EDNF9Y3NXJ" }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-sitemap",

      /** @type {import('@docusaurus/plugin-sitemap').Options} */
      ({ changefreq: "hourly", priority: 0.5 }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-ideal-image",

      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({ name: "assets/images/[name]-[hash:hex:7]-[width].[ext]" }), // eslint-disable-line no-extra-parens
    ],
  ],
  scripts: [{ src: "https://arc.io/widget.min.js#M49WnUbm", async: true }],
  themes: ["@docusaurus/theme-classic"],
  clientModules: [require.resolve("./src/style.css")],
};

module.exports = config;
