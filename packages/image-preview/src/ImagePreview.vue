<template>
<base-image-view ref="img-view" v-show="show" :initial-index="initIndex" :onClose="closePannel" :url-list="list"/>
</template>

<script>
import BaseImageView from './BaseImageView'
export default {
  name: "ImagePreview",
  data() {
    return {
      show: false,
      initIndex: 0,
    }
  },
  components: {
    BaseImageView
  },
  methods: {
    open(index) {
      try { this.$refs['img-view'].reset() } catch (err) { console.error(err) }
      this.show = true
      this.initIndex = index || 0
    },
    closePannel() {
      this.show = false
    }
  },
  props:{
    list: {
      type: Array
    }
  }

}
</script>
<style lang="scss" scoped>
  .el-icon-circle-close{
    color:white;
  }
</style>
