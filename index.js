const realTypeOf = value =>
  Object.prototype.toString.call(value)
    .replace(/\[|\]/g, '')
    .split(' ')[1]
    .toLocaleLowerCase();

realTypeOf.isNumber = value => realTypeOf(value) === 'number';
realTypeOf.isString = value => realTypeOf(value) === 'string';
realTypeOf.isBoolean = value => realTypeOf(value) === 'boolean';
realTypeOf.isNull = value => realTypeOf(value) === 'null';
realTypeOf.isUndefined = value => realTypeOf(value) === 'undefined';
realTypeOf.isSymbol = value => realTypeOf(value) === 'symbol';
realTypeOf.isArray = value => realTypeOf(value) === 'array';
realTypeOf.isFunction = value => realTypeOf(value) === 'function';
realTypeOf.isObject = value => realTypeOf(value) === 'object';
realTypeOf.isMap = value => realTypeOf(value) === 'map';
realTypeOf.isSet = value => realTypeOf(value) === 'set';
realTypeOf.isWeakMap = value => realTypeOf(value) === 'weakmap';
realTypeOf.isWeakSet = value => realTypeOf(value) === 'weakset';

module.exports = realTypeOf;
