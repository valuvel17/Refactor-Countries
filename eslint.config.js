import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-alert": "warn",
      "no-var": "warn",
      "max-depth": ["warn", 3],
      "max-statements": ["warn", 15, { ignoreTopLevelFunctions: true }],
      "prettier/prettier": "error",
    },
    extends: [js.configs.recommended],
  },
]);
