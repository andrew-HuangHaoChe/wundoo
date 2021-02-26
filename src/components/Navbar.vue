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
                  <li class="nav-item d-flex">
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
                </ul>
              </div>
              <div
                class="col-lg-1 d-flex align-items-center justify-content-end pr-0"
              >
                <div class="d-flex align-items-center">
                  <button
                    class="btn homemenu sidemenu burgerbtn px-0"
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
                  <form class="p-3">
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
                          <a href="#"
                            ><img
                              src="../assets/image/icon/signin/ic_google.svg"
                              alt=""
                          /></a>
                        </li>
                        <li class="px-2">
                          <a href="#"
                            ><img
                              src="../assets/image/icon/signin/ic_fb.svg"
                              alt=""
                          /></a>
                        </li>
                        <li class="px-2">
                          <a href="#"
                            ><img
                              src="../assets/image/icon/signin/ic_line.svg"
                              alt=""
                          /></a>
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
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSideBar: false
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
    }
    // btnfn () {
    //   this.$refs.toggle.option = !this.$refs.toggle.option
    //   console.log(this.$refs.toggle.option)
    // }
  }
}
</script>
