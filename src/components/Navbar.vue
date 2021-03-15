<template>
  <div>
    <div class="positionContainer">
      <Sidebar :open="showSideBar"  @togglenav="showSideBar = !showSideBar"></Sidebar>
      <div class="main" style="position: fixed; z-index:1040;">
        <nav class="navbar navbar-expand-lg navbar-light bg-white navBottom">
          <div class="container custom-container-width">
            <router-link to="/" class="navbar-brand homeLogo col-lg-2 col-md-6">
              <h1 class="wundoo-logo" alt="溫度部落">
                <img
                  src="../assets/image/navbar/logo(2).svg"
                  alt=""
                  class="main-logo mr-2"
                />
                溫度部落
              </h1>
            </router-link>
            <div
              class="row col-lg-10 col-md-6 col-2 d-flex justify-content-end"
            >
              <div class="hp-menu d-flex align-items-center col-lg-10">
                <div class="input-group homeSearch">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="搜尋文章關鍵字"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-brilliantRed"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link to="/harvestSeason" class="nav-link homemenu">
                    <img src="../assets/image/navbar/ic_harvest_festival.svg" />
                      <p class="mb-0">溫度豐收祭</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/arena" class="nav-link homemenu">
                      <img src="../assets/image/navbar/ic_arena.svg" />
                      <p class="mb-0">競技場</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/missionpage" class="nav-link homemenu">
                      <img src="../assets/image/navbar/ic_task.svg" />
                      <p class="mb-0">任務</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link homemenu" href="#">
                      <img src="../assets/image/navbar/ic_hunt_ground.svg" />
                      <p class="mb-0">獵場</p>
                    </a>
                    <ul class="list-unstyled local-hunt-son-menu">
                      <li>
                        <router-link to="/localhuntground" class="nav-link d-flex flex-row w-100 justify-content-center">
                          <img src="../assets/image/navbar/local_hunting.svg" alt="" />
                          <p class="mb-0 d-flex align-items-center">在地獵場</p>
                        </router-link>
                        <ul class="list-unstyled local-huntting-menu">
                          <li class="py-2">
                            <a
                              href="#"
                              class="w-100 d-flex justify-content-center"
                              >基隆獵場</a
                            >
                          </li>
                          <li class="py-2">
                            <a
                              href="#"
                              class="w-100 d-flex justify-content-center"
                              >台北獵場</a
                            >
                          </li>
                          <li class="py-2">
                            <a
                              href="#"
                              class="w-100 d-flex justify-content-center"
                              >新北獵場</a
                            >
                          </li>
                          <li class="py-2">
                            <a
                              href="#"
                              class="w-100 d-flex justify-content-center"
                              >宜蘭獵場</a
                            >
                          </li>
                          <li class="py-2">
                            <a
                              href="#"
                              class="w-100 d-flex justify-content-center"
                              >花蓮獵場</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <router-link to="/huntground" class="nav-link d-flex flex-row w-100 justify-content-center">
                          <img src="../assets/image/navbar/ic_hunt_ground.svg" alt="" />
                          <p class="mb-0 d-flex align-items-center">同好獵場</p>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link homemenu" style="cursor: pointer;">
                    <img src="../assets/image/navbar/ic_nonotice.svg" />
                      <p class="mb-0">通知</p>
                    </a>
                    <ul class="list-unstyled local-hunt-son-menu notice_menu">
                      <li class="d-flex justify-content-between align-items-center already_read pb-2 mb-2">
                        <button class="btn btn_primary check_notice">全部標示已讀</button>
                        <router-link to="/notice" class="all-notice-message mb-0">全部訊息</router-link>
                      </li>
                      <li class="d-flex justify-content-center" v-for="notice in 4" :key="notice.index">
                        <p class="mb-2 notice_message">【提醒】您有一則留言回應！</p>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item d-flex" v-if="!login_status">
                    <ol class="d-flex list-unstyled home-login">
                      <li class="d-flex align-items-center">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#loginModal"
                          >登入/註冊
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li class="nav-item d-flex" v-if="login_status">
                    <ol class="d-flex list-unstyled home-login">
                      <li class="d-flex align-items-center">
                        <a>
                          <MemberAvatar></MemberAvatar>
                        </a>
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
              <div
                class="col-lg-1 d-flex align-items-center justify-content-end pr-0"
              >
                <div class="d-flex align-items-center">
                  <button
                    class="btn homemenu sidemenu burgerbtn px-0 pb-0"
                    @click="sideBaropen"
                  >
                    <i class="fas fa-bars fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </nav>
      </div>
      <!-- 登入註冊Modal -->
      <!-- Modal -->
      <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-body p-0">
              <div class="row">
                <div class="col-sm-0 col-md-6 login-left-block">
                  <div class="d-flex justify-content-end">
                    <div class="sign-bubble">
                      <img src="../assets/image/images/signin/login-chat-bubble.png" class="signin-comment" alt="" />
                      <div class="bubble-text">
                        <p>全民小確幸 遊戲化社群</p>
                        <p>抽獎 交友 玩在地</p>
                        <h2>溫度部落</h2>
                      </div>
                    </div>
                  </div>
                  <div class="lao-ya">
                    <img
                      src="../assets/image/images/signin/signin_laoya.png"
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
                          src="../assets/image/icon/signin/ic_account.svg"
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
                          src="../assets/image/icon/signin/ic_view.svg"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import Sidebar from '../components/Sidebar.vue'
import GoogleLogin from '../components/GoogleLogin.vue'
import FacebookLogin from '../components/FaceBookLogin.vue'
import LineLogin from '../components/LineLogin.vue'
import axios from 'axios'
import Qs from 'qs'
import jwtDecode from 'jwt-decode'
import MemberAvatar from '../components/MemberAvatar.vue'
export default {
  components: {
    Sidebar,
    GoogleLogin,
    FacebookLogin,
    LineLogin,
    MemberAvatar
  },
  data () {
    return {
      data: {
        email: '',
        password: '',
        login_type: '',
        social_id: ''
      },
      showSideBar: false,
      query: {},
      tokenResult: {},
      idTokenDecode: {}
    }
  },
  methods: {
    sideBaropen () {
      this.showSideBar = !this.showSideBar
    },
    movetoSign () {
      $('#loginModal').modal('hide')
      $('.modal-backdrop').remove()
      this.$router.push('/signUp')
    },
    movetoRepass () {
      $('#loginModal').modal('hide')
      $('.modal-backdrop').remove()
      this.$router.push('/repassWord')
    },
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
      vm.$http.post('/apipath/api/login', formData, config).then((response) => {
        console.log(response)
        if (response.data.status) {
          vm.login_status = response.data.status
          alert(response.data.msg)
          $('#loginModal').modal('hide')
        }
      })
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
  },
  computed: {
    login_status () {
      return this.$store.state.login_status
    }
  }
}
</script>
