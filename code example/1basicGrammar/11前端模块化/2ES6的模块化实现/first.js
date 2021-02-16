/* 在这里展示一些变量导出的方式 */

// 方式1.定义变量的时候直接导出
export let num1 = 100

// 方式2: 导出多个
let num2 = 222
let num3 = 333

export {
  num2,num3
}

// 方式3.导出函数类等等
export function func() {
  console.log("hhhh");
}

// 方式4.默认导出

//导出变量
// let def = "default"
// export default def

//导出匿名函数
export default function() {
  console.log('我是default');
}
