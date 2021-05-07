module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "prettier/vue",
  ],
  plugins: ["prettier"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
