## Runkai's ESLint & Prettier configuration for Svelte

Opinionated eslint & prettier configuration for the Svelte & SvelteKit environment. Configured to work with TypeScript. Based on `@antfu/eslint-config` and `stefanobartoletti/eslint-config`.

## 🛠️ Setup

### Installation

```bash
pnpm i -D eslint @runkaiz/eslint-config
```

### Configuration

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

#### Basic use

Using the default config without arguments uses the following `@antfu/eslint-config` options as defaults:

-   autodetects Typescript
-   enables ESlint Stylistic

```js
// eslint.config.js
import { runkai } from '@runkai/eslint-config'

export default runkai()
```

#### Setting options and using custom rules

It is possible to add custom rules with the following configuration.

-   The first item must contain options to be passed to `@antfu/eslint-config` (read more on [its docs](https://github.com/antfu/eslint-config) for possible options). **It must always be present even if left empty.**
-   From the second item going on, you can add as many custom ESlint flat config objects as you need.

```js
// eslint.config.js
import { runkai } from '@runkai/eslint-config'

export default runkai(
    // @antfu/eslint-config options, must be the first argument
    {
        stylistic: false
    },
    // Additional flat configs start from here
    {
        rules: {
            curly: 'off'
        }
    }
)
```

##### Using optional Svelte or Tailwind configs

This package also provides optional configuration for Svelte and Tailwind. They can be used together or by themselves, and together with further custom rules.

```js
// eslint.config.js
import { runkai, svelte, tailwind } from '@runkai/eslint-config'

export default runkai(
    {}, // @antfu/eslint-config options, must always be present as first item
    svelte,
    tailwind,
    {
        // ESlint Flat config rule object
    }
)
```

## 📝 VS Code Support

If you use VS Code, you should manually enable support for ESLint flat config.

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Add the following settings to your `package.json`:

```json
{
    "prettier": "@runkai/eslint-config"
}
```

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
    // Enable the ESLint flat config support
    "eslint.experimental.useFlatConfig": true,

    // Use Prettier for files that Eslint cannot process
    "editor.formatOnSave": true,
    "editor.defaultFormatter": null,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    // Auto fix
    "editor.codeActionsOnSave": {
        "source.fixAll": "never",
        "source.fixAll.eslint": "explicit",
        "source.organizeImports": "never"
    },

    // Silent the stylistic rules in you IDE, but still auto fix them
    "eslint.rules.customizations": [
        { "rule": "style/*", "severity": "off" },
        { "rule": "format/*", "severity": "off" },
        { "rule": "*-indent", "severity": "off" },
        { "rule": "*-spacing", "severity": "off" },
        { "rule": "*-spaces", "severity": "off" },
        { "rule": "*-order", "severity": "off" },
        { "rule": "*-dangle", "severity": "off" },
        { "rule": "*-newline", "severity": "off" },
        { "rule": "*quotes", "severity": "off" },
        { "rule": "*semi", "severity": "off" }
    ],

    // Enable eslint for all supported languages
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "vue",
        "html",
        "markdown",
        "json",
        "jsonc",
        "yaml",
        "toml",
        "gql",
        "graphql",
        "svelte",
        "postcss"
    ]
}
```

For more settings, check the "VS Code support" section in [antfu/eslint-config](https://github.com/antfu/eslint-config#vs-code-support-auto-fix)
