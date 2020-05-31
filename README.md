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

You can also check the type of value whether it is a particular type:

```javascript
realTypeOf.isNumber(45);              // true
realTypeOf.isString('hello');         // true
realTypeOf.isBoolean(true);           // true
realTypeOf.isNull(null);              // true
realTypeOf.isUndefined(undefined);    // true
realTypeOf.isSymbol(Symbol());        // true
realTypeOf.isArray([]);               // true
realTypeOf.isFunction(() => {});      // true
realTypeOf.isObject({});              // true
realTypeOf.isMap(new Map());          // true
realTypeOf.isSet(new Set());          // true
realTypeOf.isWeakMap(new WeakMap());  // true
realTypeOf.isWeakSet(new WeakSet());  // true
```

> The type of returned value of these methods is always boolean
