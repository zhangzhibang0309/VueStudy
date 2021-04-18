<template>
  <div>
    <h2>-------以下是hello-vuex的内容</h2>
    <h2>counter:{{ $store.state.counter }}</h2>
    <h2>powerCounter:{{ $store.getters.powerCounter }}</h2>
    <h2>more20Stu:{{ $store.getters.more20Stu }}</h2>
    <h2>length:{{ $store.getters.more20StuLength }}</h2>
    <h2>length:{{ $store.getters.moreAgeStu(18) }}</h2>
    <h2>info:{{ $store.state.info }}</h2>
  </div>
</template>

<script>

export default {
  name: "HelloVuex"
}
</script>

<style scoped>

</style>
