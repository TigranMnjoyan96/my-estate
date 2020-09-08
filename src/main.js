import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import YmapPlugin from 'vue-yandex-maps'



Vue.use(ElementUI)
Vue.use(YmapPlugin)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
