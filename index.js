module.exports = value =>
  Object.prototype.toString.call(value)
    .replace(/\[|\]/g, '')
    .split(' ')[1]
    .toLocaleLowerCase();
