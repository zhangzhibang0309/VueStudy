import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations·types'

//1.安装组件
Vue.use(Vuex)

//2.创建对象

const moduleA = {
  state: {
    name: '无名'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName','wangwu')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    fullName3(state, getters, rootState) {
      return state.name + rootState.counter
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 0,
    students: [
      {naem: 'zzb', age: 22, hpbby: 'code'},
      {naem: 'zbz', age: 18, hpbby: 'coding'},
      {naem: 'bzz', age: 23, hpbby: 'coded'},
      {naem: 'zbb', age: 19, hpbby: 'codee'}
    ],
    info: {
      name: 'kobe',
      age: 40,
      hobby: 'basketball'
    }
  },
  // 注意mutations里面的方法必须都是同步的
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 第二个参数叫做payload，可以这样做来解决一些动态的问题
    // incrementCount(state,count) {
    //   state.counter += count
    // },
    // 对应特殊的提交风格
    incrementCount(state, payload) {
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // 直接操作已经存在的属性它是响应式的
      // state.info.name = '我改了我改了'
      // 如果增加或者删除属性 就不是响应式了
      // state.info['address'] = '洛杉矶' //！响应式
      // 下面用vue的一个方法，set就可以实现响应式了
      Vue.set(state.info, 'address', '洛杉矶')

      //  如果要是想删除属性
      // delete state.info.age // 非响应式
      // Vue.delete(state.info,'age')

      // 下面测试异步
      // 异步的话界面虽然能够改变 但是devtool不会检测改变
      // setTimeout(() => {
      //   state.info.name = 'aaaaaaaa'
      // }, 1000)
    }
  },
  // action本身和mutations差不多 不过它是专门处理异步操作的
  actions: {
    aUpdateInfo(context, payload) {
      // 不太优雅的方式
      // setTimeout(() => {
      //   context.commit("uPdateInfo")
      //   console.log(payload.message)
      //   payload.success()
      // },1000)

      // 用promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)

          resolve('11111')
        }, 1000)
      })
    }
  },
  // getters其实就是计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20Stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20StuLength(state, getters) {
      return getters.more20Stu.length
    },
    //  组件置顶显示年龄界限
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

//3.导出
export default store

