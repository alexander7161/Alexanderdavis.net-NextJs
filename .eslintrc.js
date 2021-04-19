module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["react", "@typescript-eslint", "jest"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-var-requires": "off",
	},
	env: {
		node: true,
	},
};
