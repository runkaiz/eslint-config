const antfuOptions = {
    typescript: {
        tsconfigPath: 'tsconfig.json',
        filesTypeAware: ['**\/*.{ts}']
    },
    stylistic: {
        indent: 4
    },
    svelte: true,
    formatters: {
        css: true,
        html: true,
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
