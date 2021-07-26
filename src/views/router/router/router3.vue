<template>
  <div>
    router3--{{msg}}
  </div>
</template>
<script>
export default {
  name: 'router3',
  components: {

  },
  props: {

  },
  data () {
    return {
      msg: ''
    }
  },
  created () {
    console.log('我是-----created-----router3');
  },
  mounted () {
    console.log('我是-----mounted-----router3');
    this.init()
  },
  methods: {
    init () {
      this.msg = this.$route.params.id
      console.log(this.$route);
    }
  },
  computed: {

  },
  watch: {
    '$route' (to, from) {
      console.log(to, from);
    }
  }
}
</script>
<style scoped>
</style>
