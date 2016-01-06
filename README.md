# mrspider-jsdom

Middleware for [mrspider](https://github.com/vermiculite/mrspider) typically used after [mrspider-request](https://github.com/vermiculite/mrspider-request) adding a $ property to the page object loading the page into a jquery object.

## Install

npm i -S mrspider-jsdom

## Usage

```js
var spider = require('mrspider)();
var mrspiderRequest = require('mrspider-request');
var mrspiderJsdom = require('mrspider-jsdom');

spider.use(mrspiderRequest);
spider.use(mrspiderJsdom);
```

## Example

You can find an [example project](https://github.com/vermiculite/mrspider-parking-example) that is a complete solution.npm publish
