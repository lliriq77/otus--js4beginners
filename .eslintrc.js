module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-param-reassign": ["error", { props: false }],
    "no-console": "off",
    "no-alert": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
  plugins: ["jest"],
};
