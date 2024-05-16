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
        astro: false,
        css: true,
        graphql: true,
        html: true,
        markdown: true,
        slidev: false,
        xml: true
    }
}

export default antfuOptions
