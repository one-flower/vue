<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 跳转 -->
      <router-link to="/router/router1">router1</router-link> |
      <!-- 样式 -->
      <!-- <router-link to="/router/router2" tag="div">router2</router-link> | -->
      <!-- 动态跳转 -->
      <router-link to="/router/3">router3</router-link> |
      <!-- 动态跳转,生命周期不更新，使用监听watch或检测key之 -->
      <router-link to="/router/3-1">router3-1</router-link> |
    </div>
    <router-view :key="key" />
  </div>
</template>
<script>

export default ({
  computed: {
    key () {
      // 重新生成fullPath，更新生命周期
      return this.$route.fullPath
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
