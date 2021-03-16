<template>
  <div>
    <div class="row">
      <div class="col-sm-0 col-md-6 login-left-block">
        <div class="d-flex justify-content-end">
          <div class="sign-bubble">
            <img src="../../assets/image/images/signin/login-chat-bubble.png" class="signin-comment" alt="" />
            <div class="bubble-text">
              <p>全民小確幸 遊戲化社群</p>
              <p>抽獎 交友 玩在地</p>
              <h2>溫度部落</h2>
            </div>
          </div>
        </div>
        <div class="lao-ya">
          <img
            src="../../assets/image/images/signin/signin_laoya.png"
            class="signin-laoya"
            alt=""
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 login-form p-3">
        <div class="modal-header border-0">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form class="p-3" method="post" enctype=multipart/form-data>
          <div class="login-title mb-2">
            <span class="left-sm-bar"></span> 登入
          </div>
          <div class="form-group mb-account">
            <label for="modalEmail"
              >會員帳號(Email)
              <img
                src="../../assets/image/icon/signin/ic_account.svg"
                alt=""
              />
              <input
                type="email"
                class="form-control"
                id="modalEmail"
                aria-describedby="emailHelp"
                v-model="data.email"
                max-length="40"
              />
            </label>
          </div>
          <div class="form-group mb-account">
            <label for="modalPassword"
              >會員密碼
              <img
                src="../../assets/image/icon/signin/ic_view.svg"
                alt=""
              />
              <input
                type="password"
                class="form-control"
                id="modalPassword"
                aria-describedby="emailHelp"
                v-model="data.password"
                max-length="40"
              />
            </label>
          </div>
          <div class="form-group d-flex justify-content-between">
            <div
              class="custom-control form-control-lg custom-checkbox login-modal-checkbox"
            >
              <input
                type="checkbox"
                class="custom-control-input login-modal-input d-flex align-items-center"
                id="customCheck1"
              />
              <label class="custom-control-label login-modal-label" for="customCheck1"
                >記住我(公用電腦請勿點選)</label
              >
            </div>
            <a class="d-flex align-items-center" @click="movetoRepass"
              ><span class="d-flex align-items-center forgetpass"
                >忘記密碼?</span
              ></a
            >
          </div>
          <button
            type="submit"
            class="btn btn-mainRed login-btn w-100"
            @click.prevent="userlogin"
          >
            登入
          </button>
          <div class="d-flex py-5 justify-content-center pl-signup">
            如果還未註冊會員
            <a @click="movetoSign" class="pl-signup-cl">請點此註冊</a>
          </div>
          <div class="d-flex justify-content-center">
            <p class="other-way-login mb-0">其他登入方式</p>
          </div>
          <div class="d-flex justify-content-center">
            <ul class="list-unstyled d-flex mt-3">
              <li class="px-2">
                <GoogleLogin/>
              </li>
              <li class="px-2">
                <FacebookLogin/>
              </li>
              <li class="px-2">
                <LineLogin  @click="loginEvent()"/>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import GoogleLogin from '../../components/GoogleLogin.vue'
import FacebookLogin from '../../components/FaceBookLogin.vue'
import LineLogin from '../../components/LineLogin.vue'
import axios from 'axios'
import Qs from 'qs'
import jwtDecode from 'jwt-decode'
import $ from 'jquery'
export default {
  components: {
    GoogleLogin,
    FacebookLogin,
    LineLogin
  },
  data () {
    return {
      query: {},
      tokenResult: {},
      idTokenDecode: {},
      user: [],
      login_status: false
    }
  },
  methods: {
    loginEvent () { // 當你按下按鈕發生的事件
      let URL = 'https://access.line.me/oauth2/v2.1/authorize?'
      // 必填
      URL += 'response_type=code' // 希望LINE回應什麼  但是目前只有code能選
      URL += `&client_id=${process.env.VUE_APP_LINE_CHANELL_ID}` // 你的頻道ID
      URL += `&redirect_uri=${process.env.VUE_APP_LINE_REDIRECT_URL}` // 要接收回傳訊息的網址
      URL += '&state=123456789' // 用來防止跨站請求的 之後回傳會傳回來給你驗證 通常設亂數 這邊就先放123456789
      URL += '&scope=openid%20profile' // 跟使用者要求的權限 目前就三個能選 openid profile email
      // 選填
      URL += '&nonce=helloWorld' // 順便將機器人也加好友
      URL += '&prompt=consent'
      URL += '&max_age=3600'
      URL += '&ui_locales=zh-TW'
      URL += '&bot_prompt=normal'
      window.open(URL, '_self') // 轉跳到該網址
    },
    userlogin () {
      const vm = this
      // const api = `${process.env.VUE_APP_APIPATH}api/login`
      if (vm.data.email === '') {
        alert('帳號欄位不得為空')
        return
      } else if (vm.data.password === '') {
        alert('密碼欄位不得為空')
        return
      }
      if (vm.data.email !== '' && vm.data.password !== '') {
        vm.loginRes()
      }
    },
    loginRes () {
      const vm = this
      const formData = new FormData()
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      formData.append('email', this.data.email)
      formData.append('password', this.data.password)
      formData.append('login_type', this.data.login_type)
      formData.append('social_id', this.data.social_id)
      axios.post('/apipath/api/login', formData, config).then((response) => {
        console.log(response)
        if (response.data.status) {
          vm.login_status = response.data.status
          vm.$store.dispatch('updateLoginStatus', response.data.status)
          vm.$store.dispatch('loginRes', response.data.data)
          vm.$store.dispatch('getUserToken', response.data.token)
          alert(response.data.msg)
          $('#loginModal').modal('hide')
        } else {
          alert(response.data.msg)
        }
      })
    }
  },
  mounted () {
    this.query = this.$route.query // 接網址的參數
    const options = Qs.stringify({ // POST的參數  用Qs是要轉成form-urlencoded 因為LINE不吃JSON格式
      grant_type: 'authorization_code',
      code: this.query.code,
      redirect_uri: process.env.VUE_APP_LINE_REDIRECT_URL,
      client_id: process.env.VUE_APP_LINE_CHANELL_ID,
      client_secret: process.env.VUE_APP_LINE_CHANELL_SECRET
    })
    axios.post('https://api.line.me/oauth2/v2.1/token', options, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(res => {
      console.log(res)
      this.tokenResult = res.data // 回傳的結果
      this.idTokenDecode = jwtDecode(res.data.id_token) // 把結果的id_token做解析
    })
  }
}
</script>
