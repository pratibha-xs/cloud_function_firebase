module.Exports = {
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        "ecmaVersion": 2018,
        sourceType: "module"
    },
    extends: [
        "eslint:recommended",
        "google",
    ],
    rules: {
        "no-restricted-globals": ["error", "name", "length"],
        "prefer-arrow-callback": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "spaced-comment": "off",
        "indent": ["error", 4],
        "padded-blocks": ["error", "never"],
        "eol-last": ["error", "always"],
    },
    overrides: [{
        files: ["**/*.html,.css,.js.*"],
        env: {
            mocha: true,
        },
        rules: {},
    }],
    globals: {},
};