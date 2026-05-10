import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "SIRIUS Wiki",
    pageTitleSuffix: " — Sirius Ingénierie",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "fr-FR",
    baseUrl: "sirius-wiki.github.io",
    ignorePatterns: [
      // Système
      "private", ".obsidian", "_wiki_*", "*.base", "mempalace.yaml", "_ged_backup",
      // Opérationnel — CONFIDENTIEL
      "00_INBOX",
      "04_DIRIGEANT",
      "04_PROJETS",
      "05_OPERATIONS",
      "06_JOURNAL",
      "07_TEMPLATES",
      "08_SOP",
      // Notes individuelles confidentielles (marketing dans Sagesse)
      "Sagesse_Cold_Email*",
      "Sagesse_Delivrabilite*",
      "Sagesse_LinkedIn*",
      "Sagesse_Funnel*",
      "Sagesse_Vente*",
      "Sagesse_Google_Ads*",
      "PIEGE-*",
      "PROTOCOLE-*",
      "INDEX_SAGESSE*",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#F8FAFB",
          lightgray: "#E6EDF4",
          gray: "#5D7380",
          darkgray: "#1a1a1a",
          dark: "#0C122F",
          secondary: "#2998B2",
          tertiary: "#F37021",
          highlight: "rgba(41, 152, 178, 0.12)",
          textHighlight: "#F3702133",
        },
        darkMode: {
          light: "#0f1419",
          lightgray: "#1a2029",
          gray: "#7a8a9e",
          darkgray: "#e8edf3",
          dark: "#ffffff",
          secondary: "#2998B2",
          tertiary: "#F37021",
          highlight: "rgba(41, 152, 178, 0.15)",
          textHighlight: "#F3702144",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled for faster builds
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
