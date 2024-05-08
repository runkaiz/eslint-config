const rzConfigBase = [
    // General Rules
    {
        name: 'runkai/general',
        rules: {
            'style/comma-dangle': ['error', 'never']
        }
    },
    // Code Style Rules
    {
        name: 'runkai/code-style',
        files: ['**/*.{js,jsx,ts,tsx,svelte}'],
        rules: {
            'node/prefer-global/process': ['error', 'always'],
            'antfu/top-level-function': 'off',
            'antfu/if-newline': 'off',
            'style/max-len': [
                'warn',
                {
                    code: 80,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true
                }
            ],
            'style/operator-linebreak': ['error', 'before'],
            'style/brace-style': ['error', '1tbs', { allowSingleLine: true }]
        }
    }
]

export default rzConfigBase
