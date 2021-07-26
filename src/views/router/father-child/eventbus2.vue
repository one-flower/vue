<template>
  <div>
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

    this.$EventBus.$on('enentbus1', val => {
      this.busB1(val)
    })

    EventBus.$on('enentbus2', val => {
      this.busB2(val)
    })
    this.init()
  },
  beforeDestroy () {
    this.$EventBus.$off('enentbus1', this.busB1())

    EventBus.$off('enentbus1', this.busB2())
  },
  methods: {
    init () {

    },
    busB1 (val) {
      alert(val)
    },
    busB2 (val) {
      alert(val)
    }
  },
  computed: {

  }
}
</script>
<style scoped>
</style>
