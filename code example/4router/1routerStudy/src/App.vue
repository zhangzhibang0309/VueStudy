<template>
  <div id="app">
    <!--  自己代码实现路由跳转  -->
    <!--    <button @click="homeRouter">首页</button>-->
    <!--    <button @click="aboutRouter">关于</button>-->

    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link> 这最后的replace是选择replace方式，也就是没有历史记录。后面的是修改这个选中的class，下面还有简便方法 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/' + user" tag="button" replace>用户</router-link>
    <!--  只写个replace，然后再路由js文件里面再进行一个配置  -->
    <!--    <router-link :to="{path: '/profile',query: {name: 'zzb',age: 21,height: 181}}" tag="button">档案</router-link>-->
    <button @click="profileRouter">档案</button> <!-- 如果不用router-link实现路由跳转的话传递query就要在函数里面进行传参，详见profileRouter函数 -->

    <!--    keep alive 这个可以使渲染出来的组件拥有缓存 每次跳转路由当前组件不会被销毁-->
    <keep-alive exclude='Profile,About'>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: 'zhangzhibang'
    }
  },
  methods: {
    homeRouter() {
      // push -> pushState
      // this.$router.push('/home');
      //replace -> replaceState
      this.$router.replace('/home'); // 这样是没有历史记录
    },
    aboutRouter() {
      // push -> pushState
      // this.$router.push('/home');
      this.$router.replace('/about');
    },
    profileRouter() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'zzb',
          age: 21,
          height: 181
        }
      })
    }
  },
  create() {
    console.log('creat');
  }
}
</script>

<style scoped>
.active {
  color: #0000ff;
}
</style>
