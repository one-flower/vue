<template>
  <div>
    404
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

    }
  },
  created () {
    console.log(this.$route.params.pathMatch)
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    }
  },
  computed: {

  }
}
</script>
<style scoped>
</style>
