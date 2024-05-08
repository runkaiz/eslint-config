const antfuOptions = {
    svelte: true,
    typescript: {
        tsconfigPath: 'tsconfig.json',
        filesTypeAware: [`**\/*.{ts,tsx,svelte}`]
    },
    stylistic: {
        indent: 4
    },
    formatters: {
        css: 'prettier',
        html: 'prettier',
        markdown: 'prettier'
    },
    ignores: [
        'build',
        'public',
        '.changeset',
        '.github'
    ]
}

export default antfuOptions
