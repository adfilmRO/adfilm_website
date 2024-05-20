import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'

import { schemaTypes } from "./adfilm-sanity/schemaTypes/index";

const config = defineConfig({
  title: "Adfilm Website",
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "9evdt08o",
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
});

export default config
