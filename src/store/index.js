import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
    login_status: false,
    user: []
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
