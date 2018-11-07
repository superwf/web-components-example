# Web Component Example

use web component to share function in React and Vue

## exmpale customElement name is `share-component`

must register first by `customElements`.

```js
global.customElements.define('share-component', ShareComponent)
```

## Raw HTML

```html
<share-component sku="8477015" />
```

## React

In React, self defined component is capitalized,
so lower case tag name could be use directly as raw element.

```js
<share-component sku="8477015" />
```

## Vue

must tell vue this element tag is already defined

```js
Vue.config.ignoreElements = ['share-component']
```

then in `.vue` file template

```js
<share-component sku="8477015" />
```

## NOTICE

Can __NOT__ be used in IE AND EDGE.

## Reference

[shadowdom](https://developers.google.com/web/fundamentals/web-components/shadowdom)
[web components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

## Usage

```bash
yarn
yarn start
```
