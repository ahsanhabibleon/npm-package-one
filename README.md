@letsgrowtogetherwithahsan/npm-package-one

[![npm version](https://badge.fury.io/js/%40letsgrowtogetherwithahsan%2Fnpm-package-one.svg)](https://badge.fury.io/js/%40letsgrowtogetherwithahsan%2Fnpm-package-one)

Removes all spaces from a string.

## Install

```
$ npm install @bamblehorse/tiny
```

## Usage

```js
const tiny = require("@bamblehorse/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```