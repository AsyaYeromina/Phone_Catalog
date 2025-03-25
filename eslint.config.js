import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 12,
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      js,
      react: pluginReact,
      "@typescript-eslint": tseslint.plugin,
      prettier: pluginPrettier
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginReact.configs.flat.recommended,
      configPrettier
    ],
    rules: {
      "prettier/prettier": "error"
    }
  },
  {
    ignores: ["dist", "node_modules", "eslint.config.js"]
  }
]);
