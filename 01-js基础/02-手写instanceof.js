function myInstanceof(left, right) {
  // 获取右边构造函数的原型对象
  let prototype = right.prototype;
  // 获取左边对象的原型
  left = left.__proto__;
  // 遍历左边对象的原型链
  while (true) {
    // 如果左边对象的原型为null，返回false
    if (left === null) return false;
    // 如果左边对象的原型与右边构造函数的原型相同，返回true
    if (left === prototype) return true;
    // 继续向上查找原型链
    left = left.__proto__;
  }
}

// 测试
console.log(myInstanceof([], Array)); // true
console.log(myInstanceof({}, Object)); // true
console.log(myInstanceof([], Object)); // true
console.log(myInstanceof({}, Array)); // false
console.log(myInstanceof(function () {}, Function)); // true
