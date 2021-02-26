import Vue from 'vue'
// import axios from 'axios' // 主要AJAX套件
// import VueAxios from 'vue-axios' // 將它轉為Vue套件
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
// 客製化textarea
import CKEditor from '@ckeditor/ckeditor5-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow
} from 'swiper/js/swiper.esm.js'
import 'swiper/css/swiper.css'
Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow])
Vue.use(VueAwesomeSwiper)
Vue.use(CKEditor)
// Vue.use(VueAxios, axios)
// Vue.prototype.$axios = axios
// axios.defaults.withCredentials = true
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log('這裡需要驗證') // 到時後端要製作登入驗證的api寫在這(Vue出一個...驗證登入及...)
  } else {
    next()
  }
})
