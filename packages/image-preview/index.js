import Vue from 'vue'
import ImagePreview from './src/ImagePreview'

// 为组件提供install方法
ImagePreview.install = function () {
  Vue.component(ImagePreview.name, ImagePreview);
}

export default ImagePreview