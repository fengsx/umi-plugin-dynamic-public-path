# umi-plugin-dynamic-public-path

[![NPM version](https://img.shields.io/npm/v/umi-plugin-dynamic-public-path.svg?style=flat)](https://npmjs.org/package/umi-plugin-dynamic-public-path) [![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-dynamic-public-path.svg?style=flat)](https://npmjs.org/package/umi-plugin-dynamic-public-path)

## Install

```bash
# or yarn add umi-plugin-dynamic-public-path
$ npm install umi-plugin-dynamic-public-path
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js` or `config/config.ts`,

```js
export default {
  dynamicPublicPath: {
    polyfill: true,
  },
};
```

## Options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| polyfill | whether need polyfill of `document.currentScript` for IE11- | `boolean` | false |

## Related

https://github.com/webpack/webpack/issues/7077

https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/commands/build/setPublicPath.js

## LICENSE

MIT
