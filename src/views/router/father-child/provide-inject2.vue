<template>
  <div>
    兄弟2----{{msg}}
  </div>
</template>
<script>
export default {
  name: 'ProvideInject2',
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
