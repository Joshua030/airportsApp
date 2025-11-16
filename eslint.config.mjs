import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Import plugins
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";

// Load recommended configs manually
const testingLibraryReact = testingLibrary.configs.react;
const jestDomRecommended = jestDom.configs.recommended;

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Testing Library + Jest DOM configs
  {
    ...testingLibraryReact,
    ...jestDomRecommended,

    plugins: {
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
