const antfuOptions = {
    typescript: {
        tsconfigPath: 'tsconfig.json',
        filesTypeAware: ['**\/*.{ts,svelte}']
    },
    stylistic: {
        indent: 4
    },
    svelte: true,
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
