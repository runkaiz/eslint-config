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
            'style/max-len': [
                'error',
                {
                    code: 80,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true
                }
            ],
            'antfu/if-newline': 'off'
        }
    }
]

export default rzConfigBase
