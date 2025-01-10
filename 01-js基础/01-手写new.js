// 手写一个new
function myNew(fn, ...args) {
  // 创建一个新对象
  const obj = Object.create(fn.prototype);
  // 执行构造函数
  const result = fn.apply(obj, args);
  // 判断构造函数返回值
  return result instanceof Object ? result : obj;
}

// 不实用Object.create手写一个new
function myNew(fn, ...args) {
  // 创建一个新对象
  const obj = {};
  // 将新对象的原型指向构造函数的原型
  obj.__proto__ = fn.prototype;
  // 执行构造函数
  const result = fn.apply(obj, args);
  // 判断构造函数返回值
  return result instanceof Object ? result : obj;
}
