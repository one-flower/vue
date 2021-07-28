<template>
  <div id="app">
    <!-- <el-button type="primary" size="default" @click="add()">主要按钮</el-button> -->
    <img :src="list[0]" alt="" @click="add()" />
    <image-preview ref="imgs" :list="list"></image-preview>
  </div>
</template>

<script>
import ImagePreview from '../packages/image-preview/src/ImagePreview.vue'
export default {
  components: { ImagePreview },
  name: 'App',
  data () {
    return {
      list: ['https://img0.baidu.com/it/u=103721101,4076571305&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=718703975,3304338114&fm=26&fmt=auto&gp=0.jpg']
    }
  },
  methods: {
    add () {
      this.$refs.imgs.open(0)
    }
  }
}

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
