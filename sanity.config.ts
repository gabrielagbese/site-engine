import { defineConfig } from "sanity";
import { schema } from "./src/sanity/schemas";
import { media } from "sanity-plugin-media";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { assist } from "@sanity/assist";
import { structure } from "./src/sanity/lib/structure";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/presentation/resolve";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { defaultDocumentNode } from "./src/sanity/lib/structure/default-document-node";
import {
    apiVersion,
    dataset,
    projectId,
    studioUrl,
    useCdn,
} from "./src/sanity/lib/api";

const config = defineConfig({
    title: process.env.SANITY_STUDIO_SITE_NAME,
    useCdn: useCdn,
    dataset: dataset,
    basePath: studioUrl,
    projectId: projectId,
    apiVersion: apiVersion,
    plugins: [
        structureTool({
            structure,
            defaultDocumentNode,
        }),
        assist(),
        presentationTool({
            resolve,
            previewUrl: {
                previewMode: {
                    enable: "/api/draft-mode/enable",
                    disable: "/api/draft-mode/disable",
                },
            },
        }),
        media(),
        visionTool(),
        simplerColorInput(),
    ],
    schema: schema,
});

export default config;
