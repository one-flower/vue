<template>
  <div>
    兄弟1----{{msg}}
  </div>
</template>
<script>
export default {
  name: 'ProvideInject1',
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

    }
  },
  computed: {

  },
  inject: ['msg']
}
</script>
<style scoped>
</style>
