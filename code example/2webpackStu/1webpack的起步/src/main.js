/* 这个相当于是入口文件 */

/* commonJs的模块化规范 */
const {add, mul} = require("./mathUtils") /* 这里必须加./ 但是不一定要后面加.js */

console.log(add);
console.log(mul);


/* es6的模块化的规范 */
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);
