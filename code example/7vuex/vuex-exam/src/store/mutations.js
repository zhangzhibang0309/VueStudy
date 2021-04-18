import {INCREMENT} from "./mutations·types";
import Vue from "vue";

export default {
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
}
