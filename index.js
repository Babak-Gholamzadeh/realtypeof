const realTypeOf = new Proxy(value =>
  Object.prototype.toString.call(value)
    .replace(/\[|\]/g, '')
    .split(' ')[1]
    .toLocaleLowerCase(),
    {
      get(target, prop) {
        if(prop.toLowerCase().startsWith('is')) {
          const type = prop.substr(2).toLowerCase();
          return value => target(value) === type;
        } else
          throw Error(`'${prop}' is not a method.\n\tIf you want to check the type of a value, use 'is' followed by the type name (i.e. isNumber) and then call it`);
      }
    });

module.exports = realTypeOf;
