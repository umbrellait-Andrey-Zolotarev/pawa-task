/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
		'airbnb-base'
	],
	env: {
		'vue/setup-compiler-macros': true
	},
	rules: {
		'no-param-reassign': 'off',
		'no-void': 'off',
		'no-nested-ternary': 'off',
		'max-classes-per-file': 'off',

		'import/first': 'off',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'prefer-promise-reject-errors': 'off',
		semi: ['error', 'never'],

		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		'vue/multi-word-component-names': 'off',
		'vue/v-on-event-hyphenation': 'off',
		'vue/no-v-html': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': ['error', { endOfLine: 'lf' }],
		quotes: ['warn', 'single'],

		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'lines-between-class-members': 'off',
		'no-return-await': 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'no-undef': 'off',
		'comma-dangle': ['error', 'never']
	}
}
