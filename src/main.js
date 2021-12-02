import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/store";
import toast from "@/components/common/toast/index"
import LazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'


Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()
Vue.use(toast)
fastClick.attach(document.body)
Vue.use(LazyLoad, {
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
