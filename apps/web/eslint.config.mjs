import nextPlugin from "@next/eslint-plugin-next";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import rootConfig from "../../eslint.config.mjs";

export default [
  ...rootConfig,
  {
    settings: {
      react: { version: "detect" },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ["next.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  reactHooksPlugin.configs["recommended-latest"],
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  { ignores: [".next/*"] },
];
