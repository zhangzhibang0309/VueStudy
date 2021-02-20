;
var moduleB = (function () {
  var obj = {}

  // 小明
  var name = '小红'
  var age = 20

  console.log(name);

  obj.age = age
  return obj
})()
// 虽然这样函数自调用能解决这个重名问题，但是代码不可复用了。
