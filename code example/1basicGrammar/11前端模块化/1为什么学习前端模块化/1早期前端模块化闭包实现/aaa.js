// 闭包实现模块化
var moduleA = (function () {
  // 导出的对象
  var obj = {}

  // 小明
  var name = '小明'
  var agent = 21

  function sum(sum1, sum2) {
    return sum1 + sum2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  obj.sum = sum;

  return obj
})();
