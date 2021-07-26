<template>
  <div>
    ref调用----{{refNum}}
    <br>
    <el-button type="primary" size="default" @click="parentMethod()">parent调用</el-button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {

  },
  props: {

  },
  data () {
    return {
      refNum: 0,
    }
  },
  created () {

  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    },
    parentMethod () {
      this.$parent.refMethod()
    }
  },
  computed: {

  }
}
</script>
<style scoped>
</style>
