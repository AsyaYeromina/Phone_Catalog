import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import pluginReactHooks from "eslint-plugin-react-hooks";

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
      prettier: pluginPrettier,
      "react-hooks": pluginReactHooks
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...pluginReact.configs.flat.recommended,
      ...pluginReact.configs.flat['jsx-runtime'],
      configPrettier
    ],
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn"
    }
  },
  {
    ignores: ["dist", "node_modules", "eslint.config.js"]
  }
]);
