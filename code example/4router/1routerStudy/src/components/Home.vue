<template>
<div>
  <h2>大家好</h2>
  <p>我是Home</p>

  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">文字</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
