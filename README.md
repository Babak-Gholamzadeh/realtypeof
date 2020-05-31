# realtypeof

This is a very simple and light package to get the real type of values.

## Installation

```bash
$ npm install realtypeof
```

## Usage

```javascript
const realTypeOf = require('realtypeof');

realTypeOf(45);             // 'number'
realTypeOf('hello');        // 'string'
realTypeOf(true);           // 'boolean'
realTypeOf(null);           // 'null'
realTypeOf(undefined);      // 'undefined'
realTypeOf(Symbol());       // 'symbol'
realTypeOf([]);             // 'array'
realTypeOf(() => {});       // 'function'
realTypeOf({});             // 'object'
realTypeOf(new Map());      // 'map'
realTypeOf(new Set());      // 'set'
realTypeOf(new WeakMap());  // 'weakmap'
realTypeOf(new WeakSet());  // 'weakset'
```

> The type of returned value is always string