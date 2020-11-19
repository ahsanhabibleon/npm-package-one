@letsgrowtogetherwithahsan/npm-package-one

[![npm version](https://badge.fury.io/js/%40letsgrowtogetherwithahsan%2Fnpm-package-one.svg)](https://badge.fury.io/js/%40letsgrowtogetherwithahsan%2Fnpm-package-one)

Removes all spaces from a string.

## Install

```
$ npm install @letsgrowtogetherwithahsan/npm-package-one
```

## Usage

```js
const removeSpace = require("@letsgrowtogetherwithahsan/npm-package-one");

removeSpace("So much space!");
//=> "Somuchspace!"

removeSpace(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```