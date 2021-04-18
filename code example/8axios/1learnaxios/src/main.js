import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 下面这种方式是全局的 但是一般都会创建一些axios实例，不会直接用全局的
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   method: 'get',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// }).then(res => {
//   console.log(res);
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// // 处理并发请求
// axios.all([
//   axios({
//     url: '/home/multidata',
//     method: 'get'// 不写默认get
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   })
// ]).then(axios.spread((res1,res2) => {
//   // 用这种方法类似数组的解构 将两个请求分开 不然不用spread直接写个res接收数据 他会把两次请求放到一个数组里面，需要手动用索引分开
//   console.log(res1);
//   console.log(res2);
// }))

// 创建axios实例 一般不同实例对应不同服务器
// const axiosInstance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// axiosInstance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// })
//
// axiosInstance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 3
//   }
// }).then(res => {
//   console.log(res);
// })

// 下面是第二个实例 当然接口是瞎扯的 不能跑
// const axiosInstance2 = axios.create({
//   baseURL: 'http://111.222.33.22:8000',
//   timeout: 10000,
//   // headers:
// })
//
// axiosInstance2({
//   url: 'xxx'
// }).then(res => {
//   console.log(res);
// })

// 封装后的效果展示
import {request} from "./network/request";

// 第一种方式
// request({
//   url: '/home/multidata',
// }, resSucc => {
//   console.log(resSucc);
// }, errFail => {
//   console.log(errFail);
// })

// 第二种方式
// request({
//   baseConfig: {
//     url: '/home/multidata',
//   },
//   success: res => {
//     console.log(res);
//   },
//   failure: err => {
//     console.log(err);
//   }
// })

// 第三/四种方式 也是最后的形式
request({
  url: '/home/multidata',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
