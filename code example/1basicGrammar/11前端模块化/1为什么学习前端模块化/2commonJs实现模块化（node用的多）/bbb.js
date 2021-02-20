// 小明
var name = '小红'
var age = 20

console.log(name);

module.exports = { // commjs的导出 但是这里是不会生效的 浏览器不支持，webpack打包之后就可以了
  age
}
var aaa = require('./aaa') // commonJs的另一种导入 放到一个对象里面
var flag = aaa.flag
var sum = aaa.sum
sum(20, 30)
