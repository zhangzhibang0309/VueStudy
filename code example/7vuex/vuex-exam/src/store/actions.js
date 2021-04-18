export default {
  // aUpdateInfo(context, payload) {
  //   // 不太优雅的方式
  //   // setTimeout(() => {
  //   //   context.commit("uPdateInfo")
  //   //   console.log(payload.message)
  //   //   payload.success()
  //   // },1000)
  //
  //   // 用promise
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       context.commit('updateInfo')
  //       console.log(payload)
  //
  //       resolve('11111')
  //     }, 1000)
  //   })
  // },
  // 为什么会出现下面这段代码呢，是有一个es6的语法叫做对象的解构，就是下面本来是一个context对象，然后用一个类似匿名对象的东西进行接收，里面的的参数会以参数名为标准一一对应，而且不一定全部属性都赋值过来
  aUpdateInfo({state,commit,rootState}, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('updateInfo')
        console.log(payload)

        resolve('11111')
      }, 1000)
    })
  }
}
