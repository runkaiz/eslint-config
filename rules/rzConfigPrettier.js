import eslintConfigPrettier from 'eslint-config-prettier'

const rzConfigPrettier = [
    eslintConfigPrettier,
    {
        rules: {
            'format/prettier': 'off'
        }
    }
]

export default rzConfigPrettier
