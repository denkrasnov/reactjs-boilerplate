module.exports = {
  extends: ["eslint:recommended", "prettier"],
  parser: "babel-eslint",
  plugins: ["babel", "react"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: ["error", "double"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "no-var": "error",
    "no-new-object": "error",
    "object-shorthand": ["error", "always", { avoidQuotes: true }],
    "no-array-constructor": "error",
    "no-console": "warn",
    "array-callback-return": "error",
    "prefer-destructuring": [
      "error",
      { array: true, object: true },
      { enforceForRenamedProperties: false },
    ],
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "no-eval": "error",
    "space-before-blocks": [
      "error",
      { functions: "always", keywords: "always", classes: "always" },
    ],
    "no-param-reassign": ["error", { props: true }],
    "arrow-parens": ["error", "as-needed"],
    "no-restricted-syntax": ["error", "WithStatement", "BinaryExpression[operator='in']"],
    "dot-notation": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "nonblock-statement-body-position": ["error", "beside"],
    "no-else-return": "error",
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
};
