const antfuOptions = {
    svelte: true,
    typescript: {
        tsconfigPath: 'tsconfig.json',
        filesTypeAware: [`**\/*.{ts,svelte}`],
        parserOptions: { extraFileExtensions: ['.ts', '.svelte'] }
    },
    stylistic: {
        indent: 4
    },
    formatters: {
        css: true,
        html: true,
        markdown: true
    }
}

export default antfuOptions
