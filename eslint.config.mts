import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

import nextTs from "eslint-config-next/typescript";

import prettierRecommended from "eslint-plugin-prettier/recommended";

const config = [
  ...defineConfig([
    ...nextVitals,
    ...nextTs,
    globalIgnores([
      // Default ignores of eslint-config-next:
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ]),
    { settings: { react: { version: "19.2" } } },
  ]),
  prettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
];

export default config;
