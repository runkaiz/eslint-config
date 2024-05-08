import { prettier, runkai, svelte, tailwind } from './index.js'

export default runkai(
    {
        ignores: ['*.yaml', '.github/**']
    },
    prettier,
    svelte,
    tailwind
)
