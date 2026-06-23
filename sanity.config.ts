import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schema";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  name: "hyperfit",
  title: "HyperFit CMS",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
