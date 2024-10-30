import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [starlightLinksValidator()],

            title: "nin0chat Documentation",
            titleDelimiter: "-",
            logo: {
                dark: "./src/assets/logo-dark.webp",
                light: "./src/assets/logo-light.webp",
                alt: "Ninochat Docs",
                replacesTitle: true
            },
            editLink: {
                baseUrl: "https://github.com/nin0chat/docs/tree/main/"
            },
            favicon: "favicon.png",
            lastUpdated: true,
            customCss: ["./src/style/custom.css"],
            social: {
                github: "https://github.com/nin0chat",
                discord: "https://discord.gg/yJzpa68Pnh"
            },
            sidebar: [
                {
                    label: "Getting Started",
                    autogenerate: { directory: "getting-started" }
                }
            ]
        })
    ],

    base: "docs",

    markdown: {
        rehypePlugins: [
            rehypeHeadingIds,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap"
                }
            ]
        ]
    }
});
