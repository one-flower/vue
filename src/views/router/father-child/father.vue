<template>
  <div>
    <prop-emit :child1="father1" :child2="father2" @emitSend="emitFather"></prop-emit>
    <br><span>-------------------华丽的分割线------------------</span><br>
    <el-button type="primary" size="default" @click="refMethod()">ref调用</el-button>
    <ref-parent ref="pass"></ref-parent>
    <br><span>-------------------华丽的分割线------------------</span><br>
    <event-bus1></event-bus1>
    <event-bus2></event-bus2>
    <br><span>-------------------华丽的分割线------------------</span><br>
    <provide-inject1></provide-inject1>
    <provide-inject2></provide-inject2>
  </div>
</template>
<script>
import propEmit from './prop-emit'
import refParent from './ref-parent'
import eventBus1 from './eventbus1'
import eventBus2 from './eventbus2'
import provideInject1 from './provide-inject1'
import provideInject2 from './provide-inject2'
export default {
  name: '',
  components: {
    propEmit, refParent, eventBus1, eventBus2, provideInject1, provideInject2
  },
  props: {

  },
  data () {
    return {
      father1: '父组件props传递',
      father2: 18
    }
  },
  created () {

  },
  mounted () {
    this.$EventBus.$on('sendBus', 'eventbus')
    // 解绑事件，一般在destoryed(),生命周期解绑
    // this.$EventBus.$off()
    // this.$EventBus.$off('sendBus', 'eventbus')
    this.init()
  },
  methods: {
    init () {

    },
    emitFather (val) {
      alert(val)
    },
    refMethod () {
      this.$refs.pass.refNum++
    }
  },
  computed: {

  },
  provide () {
    return {
      msg: '我是provide'
    }
  }
}
</script>
<style scoped>
</style>
