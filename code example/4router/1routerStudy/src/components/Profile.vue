<template>
<div>
  <h2>哈哈哈哈我是profile</h2>
  <p>{{$route.query.name}}</p>
  <p>{{$route.query.age}}</p>
  <p>{{$route.query.height}}</p>
</div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
