import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
    login_status: localStorage.getItem('accessToken') ? 1 : 0,
    user: localStorage.getItem('user') ? localStorage.getItem('user') : [],
    accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ''
  },
  actions: {
    updateLoginStatus (context, status) {
      context.commit('LOADINGSTATUS', status)
    },
    loginRes (context, payload) {
      context.commit('USERINFO', payload)
    },
    getUserToken (context, payload) {
      context.commit('SETTOKEN', payload)
      localStorage.setItem('token', payload)
    },
    loginUser (context, payload) {
      axios.post('/apipath/api/login', payload.formlogin, payload.config).then((response) => {
        console.log(response)
        if (response.data.token) {
          alert(response.data.msg)
          // save token
          localStorage.setItem('accessToken', response.data.token)
          // save userInf
          localStorage.setItem('user', JSON.stringify(response.data.data))
          // const userinf = localStorage.getItem('user')
          // console.log(JSON.parse(userinf).email) 從localstorage取值相應的方法
          context.commit('USERINFO', response.data.data)
          window.location.reload()
          console.log(response)
          // window.location.reload()
        }
      })
    }
  },
  mutations: {
    LOADINGSTATUS (state, status) { // 登入狀態
      state.login_status = status
    },
    USERINFO (state, payload) { // 儲存使用者信息
      state.user = payload
    },
    SETTOKEN (state, payload) { // 儲存token
      state.token = payload
    }
  },
  getters: {
    getToken (state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  },
  modules: {
  }
})
