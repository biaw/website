import type { Options as PluginClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as PluginContentBlogOptions } from "@docusaurus/plugin-content-blog";
import type { Options as PluginContentDocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as PluginContentPagesOptions } from "@docusaurus/plugin-content-pages";
import type { Options as PluginGoogleGtagOptions } from "@docusaurus/plugin-google-gtag";
import type { Options as PluginIdealImageOptions } from "@docusaurus/plugin-ideal-image";
import type { Options as PluginSitemapOptions } from "@docusaurus/plugin-sitemap";
import type { ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { EnumChangefreq } from "sitemap";

const copyright = `Copyright © ${new Date().getFullYear()} Promise Solutions`;

const config: Config = {
  baseUrl: "/",
  title: "Promise Solutions",
  url: "https://promise.solutions",
  favicon: "./logo.svg",
  tagline: "A group of developers making stuff so you don't have to",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

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
  } satisfies ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      ({
        path: "content/meta",
        routeBasePath: "/meta",
        exclude: ["README.md", "template.md"],
      }) satisfies PluginContentDocsOptions,
    ],
    [
      "@docusaurus/plugin-content-blog",
      ({
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
      }) satisfies PluginContentBlogOptions,
    ],
    [
      "@docusaurus/plugin-content-pages",
      ({ path: "src/pages", routeBasePath: "/" }) satisfies PluginContentPagesOptions,
    ],
    [
      "@docusaurus/plugin-client-redirects",
      ({ fromExtensions: ["html"] }) satisfies PluginClientRedirectsOptions,
    ],
    [
      "@docusaurus/plugin-google-gtag",
      ({ trackingID: "G-EDNF9Y3NXJ" }) satisfies PluginGoogleGtagOptions,
    ],
    [
      "@docusaurus/plugin-sitemap",
      ({ changefreq: EnumChangefreq.HOURLY, priority: 0.5 }) satisfies PluginSitemapOptions,
    ],
    [
      "@docusaurus/plugin-ideal-image",
      ({ name: "assets/images/[name]-[hash:hex:7]-[width].[ext]" }) satisfies PluginIdealImageOptions,
    ],
  ],
  scripts: [{ src: "https://arc.io/widget.min.js#M49WnUbm", async: true }],
  themes: ["@docusaurus/theme-classic"],
  clientModules: [require.resolve("./src/style.css")],
};

export default config;
