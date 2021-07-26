<template>
  <div>
    <el-button type="primary" size="default" @click="busA1()">busA1</el-button>
    <span>--------</span>
    <el-button type="primary" size="default" @click="busA2()">busA2</el-button>
  </div>
</template>
<script>
import { EventBus } from './eventbus'
export default {
  name: '',
  components: {

  },
  props: {

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
    busA1 () {
      this.$EventBus.$emit('enentbus1', 'bus1')
    },
    busA2 () {
      EventBus.$emit('enentbus2', 'bus2')
    }
  },
  computed: {

  }
}
</script>
<style scoped>
</style>
