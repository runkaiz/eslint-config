import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

const rzConfigTailwind = [
    ...compat.config({
        extends: ['plugin:tailwindcss/recommended']
    })
]

export default rzConfigTailwind
