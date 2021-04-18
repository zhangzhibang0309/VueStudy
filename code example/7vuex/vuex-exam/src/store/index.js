// 导入
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

//1.安装组件
Vue.use(Vuex)

//2.创建对象
const state = {
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
}

const store = new Vuex.Store({
  // 单一状态树
  state,
  // 注意mutations里面的方法必须都是同步的
  mutations,
  // action本身和mutations差不多 不过它是专门处理异步操作的
  actions,
  // getters其实就是计算属性
  getters,
  // 为了方便管理，又不冲突单一状态树，可以把store分为多个模块
  modules: {
    a: moduleA
  }
})

//3.导出
export default store
