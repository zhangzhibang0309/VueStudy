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

  module.exports = { // commjs的导出 但是这里是不会生效的 浏览器不支持，webpack打包之后就可以了
    flag,
    sum
  }

