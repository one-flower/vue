// 导入图片预览组件
import ImagePreview from './image-preview'
// 存储组件列表
const components = [
  ImagePreview,
]

// 定义install方法，接受Vue做参数
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return
  }
  // 遍历全局注册组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否直接引入组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出
export default {
  install,
  ...components // 或 单独注册 ImagePreview
}