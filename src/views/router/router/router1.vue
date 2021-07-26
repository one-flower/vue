<template>
  <div>
    router1
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
    console.log('我是-----created-----router1');
  },
  mounted () {
    console.log('我是-----mounted-----router1');
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
