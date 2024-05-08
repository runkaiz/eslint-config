import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

const rzConfigTailwind = [
    {
        name: 'runkai/tailwind',
        ...compat.config({
            extends: ['plugin:tailwindcss/recommended']
        })
    }
]

export default rzConfigTailwind
