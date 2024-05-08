import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfuOptions.js'
import rzConfigBase from './rules/rzConfigBase.js'
import rzConfigSvelte from './rules/rzConfigSvelte.js'
import rzConfigTailwind from './rules/rzConfigTailwind.js'
import rzConfigPrettier from './rules/rzConfigPrettier.js'

const runkai = (options, ...configs) => {
    return antfu(
        // @antfu/eslint-config options, must be the first argument
        {
            ...antfuOptions,
            ...options
        },
        // Additional flat configs start from here
        rzConfigBase,
        ...configs
    )
}

const svelte = rzConfigSvelte
const tailwind = rzConfigTailwind
const prettier = rzConfigPrettier

export { runkai, svelte, tailwind, prettier }
