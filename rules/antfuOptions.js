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
        css: true,
        html: true,
        markdown: 'prettier'
    },
    ignores: [
        'node_modules',
        'build',
        'public',
        '.changeset',
        '.github'
    ]
}

export default antfuOptions
