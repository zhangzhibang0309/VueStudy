<template>
  <div>
    <h2>哈哈哈大家好</h2>
    <p>我是{{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userName() {
      return this.$route.params.name
    }
  }
}
</script>

<style scoped>

</style>
