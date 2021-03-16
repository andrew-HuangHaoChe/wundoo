import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' // 主要AJAX套件
import VueAxios from 'vue-axios' // 將它轉為Vue套件
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
// 客製化textarea
import CKEditor from '@ckeditor/ckeditor5-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VuejsClipper from 'vuejs-clipper'
import GoogleAuth from '@/config/google_oAuth.js'
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow
} from 'swiper/js/swiper.esm.js'
import 'swiper/css/swiper.css'
const gauthOption = {
  clientId: '794338067396-qqnlrcf60fvgoqn81547kmbshk70nerm.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow])
Vue.prototype.$axios = axios
Vue.use(VueAwesomeSwiper)
Vue.use(CKEditor)
Vue.use(VuejsClipper)
Vue.use(GoogleAuth, gauthOption)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log(to.fullPath)
  const formData = new FormData()
  formData.append('uri', to.fullPath)
  formData.append('token', localStorage.getItem('token'))
  if (to.meta.requiresAuth) {
    axios.post('/apipath/api/flow', formData).then((res) => {
      console.log(res)
      if (res.data.status) {
        next()
      } else {
        next({
          path: '/redirectLogin'
        })
      }
    })
  } else {
    next()
  }
})
