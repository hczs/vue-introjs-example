// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import intro from 'intro.js' // introjs库
import 'intro.js/introjs.css' // introjs默认css样式
import 'intro.js/themes/introjs-modern.css' // introjs主题

Vue.config.productionTip = false

// 加到prototype中，直接通过vue实例就能调用intro了
Vue.prototype.$intro = intro

// 封装一个v-intro-if指令，这样就可以在循环中展示符合特定条件的引导了
Vue.directive('intro-if', {
  bind: function (el, binding) {
    if (binding.value === false) {
      delete el.dataset.intro
      delete el.dataset.hint
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
