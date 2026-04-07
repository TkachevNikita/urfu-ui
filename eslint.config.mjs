// import storybook from "eslint-plugin-storybook";
import angularEslint from "@angular-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import prettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ["**/dist", "node_modules", "**/*.config.ts"],
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "@angular-eslint": angularEslint,
      "@typescript-eslint": tseslint.plugin,
      prettier: prettier,
    },
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "no-public",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: {
            memberTypes: [
              "signature",
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "private-field",
              "protected-field",
              "public-field",
              "constructor",
              "public-method",
              "protected-method",
              "private-method",
            ],
            order: "as-written",
          },
        },
      ],
      "@typescript-eslint/prefer-readonly": "error",

      "@angular-eslint/component-class-suffix": [
        "error",
        { suffixes: ["Component"] },
      ],
      "@angular-eslint/directive-class-suffix": [
        "error",
        { suffixes: ["Directive"] },
      ],
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/prefer-on-push-component-change-detection": "error",

      "no-restricted-imports": "error",
      "max-lines": ["warn", 500],
      "max-lines-per-function": [
        "warn",
        { max: 75, skipComments: true, skipBlankLines: true },
      ],
      complexity: ["warn", 10],
      "no-console": "error",
      "no-debugger": "error",
      "prettier/prettier": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
