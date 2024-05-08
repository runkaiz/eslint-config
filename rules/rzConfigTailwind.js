import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

const rzConfigTailwind = [
    ...compat.config({
        name: 'runkai/tailwind',
        extends: ['plugin:tailwindcss/recommended']
    })
]

export default rzConfigTailwind
