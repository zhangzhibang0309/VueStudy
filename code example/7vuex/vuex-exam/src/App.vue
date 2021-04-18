<template>
  <div id="app">
    <h2>------App内容:modules中的内容-------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName()">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click='asyncUpdateName()'>异步修改名字</button>

    <h2>下面是app的内容</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStudent()">加人</button>
    <h2>info:{{ $store.state.info }}</h2>
    <button @click="updateInfo()">修改信息</button>
    <button @click="aUpdateInfo()">异步修改信息</button>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloVuex";
import {
  INCREMENT
} from "./store/mutations·types";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'aaa'
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    // 第二个参数叫做payload，可以这样做来解决一些动态的问题
    addCount(count) {
      // this.$store.commit('incrementCount',count)

      // 特殊的提交风格
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {name: 'x', age: 30, hobbby: 'eat'}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      this.$store.commit('updateInfo')
    },
    aUpdateInfo() {
      // 不太优雅的方式
      // this.$store.dispatch('aUpdateInfo',{
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了')
      //   }
      // })

      // 用promise
      this.$store
        .dispatch('aUpdateInfo','我是携带的信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>
