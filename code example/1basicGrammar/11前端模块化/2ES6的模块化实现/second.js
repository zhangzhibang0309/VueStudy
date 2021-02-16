import {num1, num2} from "./first.js"

console.log(num1);
console.log(num2);

import {num3,func} from "./first.js" /*不是默认的话要加大括号*/
console.log(num3);
console.log(func);

import defau from "./first.js" /*这是默认导出的导入方式*/
console.log(defau);

import * as obj from "./first.js" /* *这样是导出所有的东西来自first文件里的赋值给obj对象 */
console.log(obj);
