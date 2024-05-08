const rzConfigBase = [
    // General Rules
    {
        name: 'runkai/general',
        rules: {
            'node/prefer-global/process': ['error', 'always'],
            'antfu/top-level-function': 'off',
            'style/max-len': ['error', {
                code: 80,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }],
            'style/comma-dangle': ['error', 'never']
        }
    },
    // Exceptions
    {
        name: 'runkai/exceptions/style',
        files: ['package.json'],
        rules: {
            'style/max-len': 'off'
        }
    }
]

export default rzConfigBase
