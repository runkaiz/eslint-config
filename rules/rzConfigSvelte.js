const rzConfigSvelte = [
    {
        name: 'runkai/svelte',
        files: ['**/*.svelte'],
        rules: {
            'style/indent-binary-ops': 'off',
            'svelte/html-self-closing': ['error', 'always'],
            'svelte/first-attribute-linebreak': 'off',
            'svelte/sort-attributes': 'error',
            'svelte/shorthand-directive': [
                'error',
                {
                    prefer: 'always'
                }
            ],
            'svelte/shorthand-attribute': [
                'error',
                {
                    prefer: 'always'
                }
            ],
            'svelte/no-extra-reactive-curlies': 'error',
            'svelte/prefer-destructured-store-props': 'error',
            'svelte/block-lang': [
                'error',
                {
                    enforceScriptPresent: false,
                    enforceStylePresent: false,
                    script: ['ts', null],
                    style: null
                }
            ],
            'svelte/no-ignored-unsubscribe': 'error',
            'svelte/no-immutable-reactive-statements': 'error',
            'svelte/no-inline-styles': [
                'error',
                {
                    allowTransitions: false
                }
            ],
            'svelte/require-event-dispatcher-types': 'error',
            'svelte/require-optimized-style-attribute': 'error',
            'svelte/require-stores-init': 'error',
            'svelte/no-target-blank': 'error',
            'svelte/infinite-reactive-loop': 'error',
            'svelte/no-dom-manipulating': 'error',
            'svelte/no-dupe-on-directives': 'error',
            'svelte/no-reactive-reassign': 'error',
            'svelte/no-store-async': 'error',
            'svelte/require-store-reactive-access': 'error',
            'svelte/valid-prop-names-in-kit-pages': 'error',
            'svelte/html-quotes': ['warn', { prefer: 'double' }],
            'svelte/indent': 'off'
        }
    }
]

export default rzConfigSvelte
