import axios from "axios"

// 第一种方式
// export function request(config, success, failure) {
// //  1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       success(res) // 不在这里使用res,用success函数把数据回调出去
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// 第二种方式
// export function request(config, success, failure) {
// //  1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res) // 不在这里使用res,用success函数把数据回调出去
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

// 第三种方式 （当然是越来越简化）
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 最终形式
export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  //2。1请求拦截器的作用
  instance.interceptors.request.use(config => {
    console.log(config)
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时，地希望在界面中显示一个请求的图标（类似缓冲的圆圈）

    // 3.某些网络请求（比如登录（token）），必须写代一些特殊的信息。
    return config // 必须返回出去 不然拦截之后后面就接收不到数据了
  }, err => {
    console.log(err)
  })
  //2.2请求拦截器的作用
  instance.interceptors.response.use(res => {
    console.log(res)

    return res.data // 必须返回出去 不然拦截之后后面就接收不到数据了
  }, err => {
    console.log(err)
  })

  return instance(config)
}
