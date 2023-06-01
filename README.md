# Vue3-Template-Project

vue3 + vite + vue-router + pinia + tailwindcss

### if need get .env

- vite build **--mode [env]**

### if need set base_url

- vite build **--base=/[base_url]/**

# Create a Vue3-Template-Project

```
npm init vue@latest
```

> Vue.js - The Progressive JavaScript Framework  
> ? Project name: » vue-projectVue3-Template-Project  
> √ Project name: ... Vue3-Template-Project  
> ? Package name: » vue3-template-project  
> √ Package name: ... vue3-template-project  
> ? Add TypeScript? » No / Yes  
> √ Add TypeScript? ... No  
> ? Add JSX Support? » No / Yes  
> √ Add JSX Support? ... No  
> ? Add Vue Router for Single Page Application development? » No / Yes  
> √ Add Vue Router for Single Page Application development? ... Yes  
> ? Add Pinia for state management? » No / Yes  
> √ Add Pinia for state management? ... Yes  
> ? Add Vitest for Unit Testing? » No / Yes  
> √ Add Vitest for Unit Testing? ... No  
> ? Add an End-to-End Testing Solution? » - Use arrow-keys. Return to submit.  
>  No  
> Cypress  
> Playwright  
> √ Add an End-to-End Testing Solution? » No  
> ? Add ESLint for code quality? » No / Yes  
> √ Add ESLint for code quality? ... No

- add TailwindCSS with PostCSS

```
npm install -D tailwindcss postcss
```

- add [postcss.config.js](/postcss.config.js)

set nesting

**postcss.config.js**

```
"tailwindcss/nesting": {}
```

- add [tailwind.config.js](/tailwind.config.js)

if need nth in TailWindCSS

**tailwind.config.js**

```
plugins:[
  plugin(function ({ matchVariant, theme }) {
    matchVariant(
      "nth",
      (value) => {
        return `&:nth-child(${value})`;
      },
      {
        values: {
          DEFAULT: "n", // Default value for `nth:`
          "2n": "2n", // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
          "3n": "3n",
          "4n": "4n",
          "5n": "5n",
        },
      }
    );
  }),
];
```

- add [tailwind.css](/src/assets/tailwind.css)
- add postcss-preset-env

```
npm install -D postcss-preset-env
```

**postcss.config.js**

```
"postcss-preset-env": {
  features: {
    //let tailwindcss/nesting handle
    "nesting-rules": false;
  }
},
```

- if need copy in [vite.config.js](/vite.config.js)

```
npm install -D rollup-plugin-copy
```

**vite.config.js**

ex.

```
import copy from "rollup-plugin-copy";
plugins: [
  copy({
    targets: [
      {
        src: "/.env.dev",
        dest: "/dist",
        rename: "/.env",
      },
    ],
    hook: "writeBundle",
  }),
],
```

[hook 參考資料 1](https://rollupjs.org/plugin-development/#build-hooks)

[hook 參考資料 2](https://zhuanlan.zhihu.com/p/129890038)

- if need env in [vite.config.js](/vite.config.js)

**vite.config.js**

```
import { loadEnv } from "vite";
export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  ...
};
```

# ADD ESLINT

- add and init **eslint**

```
yarn add -D eslint

npx eslint --init
```

> √ How would you like to use ESLint? · problems  
> √ What type of modules does your project use? · esm  
> √ Which framework does your project use? · vue  
> √ Does your project use TypeScript? · **No** / Yes  
> √ Where does your code run? · browser  
> √ What format do you want your config file to be in? · JavaScript  
> The config that you've selected requires the following dependencies:  
> eslint-plugin-vue@latest  
> √ Would you like to install them now? · No / **Yes**  
> √ Which package manager do you want to use? · yarn

- add **vue-eslint-parser**

```
yarn add -D vue-eslint-parser
```

- add **vite-plugin-eslint**

```
// 說明: 該包是用於配置vite運行的時候自動檢測eslint規範
// 問題: 不裝這個包可以嗎? 答案是“可以的”,使用yarn dev時並不會主動檢查代碼

yarn add -D vite-plugin-eslint
```

- add **eslint-parser**

```
yarn add -D @babel/core

yarn add -D @babel/eslint-parser
```

- add **prettier**

```
yarn add -D prettier
yarn add -D eslint-config-prettier // eslint兼容的插件
yarn add -D eslint-plugin-prettier // eslint的prettier
```

set [**.prettierrc.js**](/.prettierrc.js)

set [**.eslintrc.js**](/.eslintrc.js)

set [**vite.config.js**](/vite.config.js)

```
import eslintPlugin from 'vite-plugin-eslint';

plugins: [
  vue(),
  eslintPlugin({
  include: ['src/**/*.ts', 'src/**/*.vue', 'src/*ts', 'src/*.vue'],
  }),
],

```
