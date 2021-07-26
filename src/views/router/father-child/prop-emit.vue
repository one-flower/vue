<template>
  <div>
    {{child1}}----{{child2}}
    <br><span>------------------------------</span><br>
    <el-button type="primary" size="default" @click="emitChild()">emit</el-button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {

  },
  props: {
    child1: {
      type: String,
      default: '',
      required: true
    },
    // 带有默认值的数字
    child2: {
      type: [String, Number],
      default: '',
      required: true
    },
  },
  data () {
    return {

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
    emitChild () {
      this.$emit('emitSend', '我是emit')
    }
  },
  computed: {

  }
}
</script>
<style scoped>
</style>
