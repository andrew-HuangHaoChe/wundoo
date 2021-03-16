<template>
  <div>
    <Sidebar :open="showSideBar"  @togglenav="showSideBar = !showSideBar"></Sidebar>
    <NavBar></NavBar>
    <!-- 登入註冊Modal -->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="row">
              <div class="col-sm-0 col-md-6 login-left-block">
                <div class="d-flex justify-content-end">
                  <img
                    src="../../assets/image/images/signin/signin_comment.png"
                    class="signin-comment"
                    alt=""
                  />
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
                <form class="p-3">
                  <div class="login-title mb-2">
                    <span class="left-sm-bar"></span> 登入
                  </div>
                  <div class="form-group mb-account">
                    <label for="exampleInputEmail1"
                      >會員帳號(Email)
                      <img
                        src="../../assets/image/icon/signin/ic_account.svg"
                        alt=""
                      />
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </label>
                  </div>
                  <div class="form-group mb-account">
                    <label for="memberPassword"
                      >會員密碼
                      <img
                        src="../../assets/image/icon/signin/ic_view.svg"
                        alt=""
                      />
                      <input
                        type="password"
                        class="form-control"
                        id="memberPassword"
                        aria-describedby="emailHelp"
                        name="password"
                      />
                    </label>
                  </div>
                  <div class="form-group d-flex justify-content-between">
                    <div
                      class="custom-control form-control-lg custom-checkbox"
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input d-flex align-items-center"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1"
                        >記住我(公用電腦請勿點選)</label
                      >
                    </div>
                    <a class="d-flex align-items-center" @click="movetoRepass"><span class="d-flex align-items-center forgetpass">忘記密碼?</span></a>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-mainRed login-btn w-100"
                  >
                    登入
                  </button>
                  <div class="d-flex py-5 justify-content-center pl-signup">
                    如果還未註冊會員
                    <a @click="movetoSign" class="pl-signup-cl"
                      >請點此註冊</a
                    >
                  </div>
                  <div class="d-flex justify-content-center">
                    <p class="other-way-login mb-0">其他登入方式</p>
                  </div>
                  <div class="d-flex justify-content-center">
                    <ul class="list-unstyled d-flex mt-3">
                      <li class="px-2">
                        <a href="#"
                          ><img
                            src="../../assets/image/icon/signin/ic_google.svg"
                            alt=""
                        /></a>
                      </li>
                      <li class="px-2">
                        <a href="#"
                          ><img
                            src="../../assets/image/icon/signin/ic_fb.svg"
                            alt=""
                        /></a>
                      </li>
                      <li class="px-2">
                        <a href="#"
                          ><img
                            src="../../assets/image/icon/signin/ic_line.svg"
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
    <!--每日簽到modal-->
    <div class="modal fade" id="everydaySignModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true" :class="modal">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content pb-2">
          <div class="modal-header everyday-modal-title">
            <h5 class="modal-title" id="everydaySignModalLabel"></h5>
            <button type="button" class="close close-every-sign" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body row mx-0 justify-content-center">
            <div class="col-4 col-md-3 col-lg-2 col-xl-1 evdsign-block" v-for="item in everyDaysign" :key="item.id">
              <div class="sign-block">
                <div class="sign-box">
                  <h5>{{ item.title }}</h5>
                  <img :src="item.img_url" alt="">
                </div>
                <div class="signbox-footer">
                  <span>{{ item.day }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap align-items-center justify-content-center evd-seven-title mx-auto p-2">
            <div class="mr-2 evd-seven pb-2">
              <h4>連續7天登入額外贈送</h4>
              <p class="mb-0">還有5天</p>
            </div>
            <div class="lottery-prize">
              <h5>大獵券</h5>
              <img src="../../assets/image/images/bighuntticket.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container custom-container-width">
      <section class="home-carousel-wrap">
        <div class="example-3d">
          <swiper class="swiper" :options="swiperOptions" ref="mySwiper">
            <swiper-slide><img class="carousel_img" src="https://images.unsplash.com/photo-1576766027273-0164eb3d6dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""></swiper-slide>
            <swiper-slide><img class="carousel_img" src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""></swiper-slide>
            <swiper-slide><img class="carousel_img" src="https://images.unsplash.com/photo-1476611317561-60117649dd94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination" />
            <div @click="prev" class="swiper-button-prev slide-one-button-prev" slot="button-prev"></div>
            <div @click="next" class="swiper-button-next slide-one-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </section>
    </div>
    <div class="home-content">
      <div class="container custom-container-width">
        <!--部落大聲公塞這-->
        <Tribeloudly/>
        <!--部落大聲公塞這-->
        <div class="row">
          <div class="col-12 col-md-12 col-lg-8">
            <div class="count">
              <div class="row">
                <div class="col-md-12 col-lg-5 col-xl-3 d-flex">
                  <img
                    src="../../assets/image/icon/部落日記.svg"
                    alt=""
                    class="d-inline-block diary"
                  /><span class="d-flex align-items-center"
                    >部落日記數: 15920</span
                  >
                </div>
                <div class="col-md-12 col-lg-7 col-xl-9 d-flex">
                  <img
                    src="../../assets/image/icon/num_of_hg.svg"
                    alt=""
                    class="d-inline-block hunter"
                  /><span class="d-flex align-items-center"
                    >在線獵人: 25813</span
                  >
                </div>
                <div class="row egles mx-0">
                  <div class="col-md-12 col-lg-4 d-flex">
                    <img
                      src="../../assets/image/category/Title1_Img01.png"
                      alt=""
                      class="eglesLogo"
                    />
                    <h2 class="d-flex align-items-center">頂尖獵人榜</h2>
                  </div>
                  <div class="col-md-12 col-lg-8 d-flex align-items-center px-4">
                    <div>
                      <img
                        src="../../assets/image/category/Title1_Img02.svg"
                        alt=""
                        class="eglesTotem"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--獵人榜-->
            <!--獵人區塊start-->
            <div class="col-md-12 leaderboard">
              <div class="row">
                <div class="col-6 col-md-3 d-flex flex-column justify-content-center leaderboard-style">
                  <div class="d-flex justify-content-center">
                    <img src="../../assets/image/icon/階級.svg" alt="" class="d-inline-block"/>
                    <span class="d-flex align-items-center leaderboard-title">階級</span>
                  </div>
                  <div class="col-md-12 py-3 hunter-info" v-for="item in level" :key="item.id">
                    <div class="d-flex justify-content-center flex-wrap">
                      <div>
                        <div class="avatar">
                          <img
                            src="../../assets/image/account/badge_yellow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="ml-3">
                        <div class="icon-list d-flex">
                          <img
                            src="../../assets/image/badge/Lv1.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv120.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv50.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv10.png"
                            alt=""
                          />
                        </div>
                        <span class="hunterGrade">Lv.{{ item.lv }} 戰績:{{ item.record }}</span>
                        <p class="local-hunter">{{ item.jobTitle }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 d-flex flex-column justify-content-center leaderboard-style">
                  <div class="d-flex justify-content-center">
                    <img src="../../assets/image/icon/message_count.svg" alt="" class="d-inline-block"/>
                    <span class="d-flex align-items-center leaderboard-title">留言數</span>
                  </div>
                  <div class="col-md-12 py-3 hunter-info" v-for="item in level" :key="item.id">
                    <div class="d-flex justify-content-center flex-wrap">
                      <div>
                        <div class="avatar">
                          <img
                            src="../../assets/image/account/badge_yellow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="ml-3">
                        <div class="icon-list d-flex">
                          <img
                            src="../../assets/image/badge/Lv1.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv120.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv50.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv10.png"
                            alt=""
                          />
                        </div>
                        <span class="hunterGrade">Lv.50 戰績:梅花鹿</span>
                        <p class="local-hunter">帥帥cat在地獵人</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 d-flex flex-column justify-content-center leaderboard-style">
                  <div class="d-flex justify-content-center">
                    <img src="../../assets/image/icon/postIcon.svg" alt="" class="d-inline-block"/>
                    <span class="d-flex align-items-center leaderboard-title">發文數</span>
                  </div>
                  <div class="col-md-12 py-3 hunter-info" v-for="item in level" :key="item.id">
                    <div class="d-flex justify-content-center flex-wrap">
                      <div>
                        <div class="avatar">
                          <img
                            src="../../assets/image/account/badge_yellow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="ml-3">
                        <div class="icon-list d-flex">
                          <img
                            src="../../assets/image/badge/Lv1.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv120.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv50.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv10.png"
                            alt=""
                          />
                        </div>
                        <span class="hunterGrade">Lv.50 戰績:梅花鹿</span>
                        <p class="local-hunter">帥帥cat在地獵人</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 d-flex flex-column justify-content-center leaderboard-style">
                  <div class="d-flex justify-content-center">
                    <img src="../../assets/image/icon/部落網紅.svg" alt="" class="d-inline-block"/>
                    <span class="d-flex align-items-center leaderboard-title">部落網紅</span>
                  </div>
                  <div class="col-md-12 py-3 hunter-info" v-for="item in level" :key="item.id">
                    <div class="d-flex justify-content-center flex-wrap">
                      <div>
                        <div class="avatar">
                          <img
                            src="../../assets/image/account/badge_yellow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="ml-3">
                        <div class="icon-list d-flex">
                          <img
                            src="../../assets/image/badge/Lv1.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv120.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv50.png"
                            alt=""
                          />
                          <img
                            src="../../assets/image/badge/Lv10.png"
                            alt=""
                          />
                        </div>
                        <span class="hunterGrade">Lv.50 戰績:梅花鹿</span>
                        <p class="local-hunter">帥帥cat在地獵人</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--獵人區塊end-->
            </div>
            <!--豐年祭、競技場BTN-->
            <div class="col-md-12 d-flex align-items-end">
              <div class="row">
                <div
                  class="col-md-6 d-flex justify-content-start p-0 align-items-end w-100 harvest-btn"
                >
                  <router-link to="/harvestSeason" class="ml-0 w-100 playground-btn" href="#">
                    <img src="../../assets/image/btn/豐年祭.png" alt="" />
                  </router-link>
                </div>
                <div
                  class="col-md-6 d-flex justify-content-end p-0 align-items-end w-100 arena-btn"
                >
                  <router-link to="/arena" class="w-100 playground-btn" href="#">
                    <img src="../../assets/image/btn/競技場.png" alt="" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!--右側溫度字卡-->
          <div class="col-12 col-md-12 col-lg-4 mt-5 tempCard d-flex justify-content-center">
            <div class="card">
              <div class="card-top-block">
                <div class="row">
                  <div class="col-md-12 d-flex justify-content-center mt-4">
                    <img
                      src="../../assets/image/images/每日溫度標題.png"
                      alt=""
                      class="tempTitle"
                    />
                  </div>
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-lg-12 col-xl-6 col-md-12 d-flex justify-content-center align-items-center zongzi-wood-board">
                        <img src="../../assets/image/images/temperature_title.png" class="zongzi" alt=""/>
                      </div>
                      <div class="col-lg-12 col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                        <router-link to="/tempeveryday" class="btn btn-darkbrownBtn activeBtn">
                          參與活動GO!
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="col-md-12">
                  <div class="d-flex justify-content-center">
                    <div>
                      <div class="cardAvatar">
                        <img
                          src="../../assets/image/account/badge_red.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="ml-3">
                      <span class="zongzi-name">貓貓candy粗乃完粗乃玩</span>
                      <p class="local-hunter">
                        我是北部粽派，因為北部粽的米比較硬!喜歡口感偏硬的，打亂我們原先的部...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                  <img
                    src="../../assets/image/images/zongzi.jpg"
                    alt=""
                    class="w-100 zongzi-image"
                  />
                </div>
                <!--溫度計、留言、分享-->
                <div class="col-md-12 d-flex align-items-center pb-1 mt-2">
                  <div class="d-flex pr-2">
                    <img
                      src="../../assets/image/icon/thermometer.svg"
                      alt=""
                      class="d-inline-block hunter"
                    /><span class="d-flex align-items-center">223141</span>
                  </div>
                  <div class="d-flex pr-2">
                    <img
                      src="../../assets/image/icon/comment.svg"
                      alt=""
                      class="d-inline-block hunter"
                    /><span class="d-flex align-items-center">36則留言</span>
                  </div>
                  <div class="d-flex">
                    <img
                      src="../../assets/image/icon/share.svg"
                      alt=""
                      class="d-inline-block hunter"
                    /><span class="d-flex align-items-center">2則分享</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--部落and獵場-->
    <section class="hunting-tv-section">
      <div class="container custom-container-width">
        <div class="row">
          <div class="col-md-12 col-lg-5 tv-youtube mb-5">
            <img
              class="tv-youtube-background"
              src="../../assets/image/images/TV.png"
              alt=""
            />
            <div class="videoWrapper">
              <!-- 這裡是貼上YouTube的嵌入iframe碼-->
              <iframe
                width="460"
                height="249"
                src="https://www.youtube.com/embed/4HbPJK4qeUY"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-md-12 col-lg-7 d-flex align-items-center hunt-map">
            <div class="hunting-ground">
              <img
                src="../../assets/image/images/local-hunting-bg.svg"
                alt=""
              />
              <div class="lhg_title">
                <img src="../../assets/image/images/localhunt_ground_title.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 格線 -->
    <div class="hr-img">
      <div
        class="container custom-container-width d-flex justify-content-center"
      >
        <img src="../../assets/image/category/Title1_Img02.svg" alt="" />
      </div>
    </div>
    <!--同好獵場字卡-->
    <HomeContent></HomeContent>
    <Footer></Footer>
    <Scrolltop/>
  </div>
</template>
<script>
import Scrolltop from '../../components/ScrolltoTop.vue'
import Tribeloudly from '../../components/Tribeloudly.vue'
import NavBar from '../../components/Navbar.vue'
import HomeContent from './HomeContent.vue'
import Footer from '../../components/Footer.vue'
import $ from 'jquery'
import Sidebar from '../../components/Sidebar.vue'
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
// $(document).ready(function () {
//   $('.sidemenu, .closeAside').click(function (event) {
//     $('body').toggleClass('open')
//   })
// })
export default {
  components: {
    Tribeloudly,
    Scrolltop,
    swiper,
    swiperSlide,
    NavBar,
    HomeContent,
    Footer,
    // carousel,
    Sidebar
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      modal: false,
      swiperOptions: {
        initialSlide: 1,
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: '2',
        loop: true,
        grabCursor: true,
        parallax: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 595,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: '.slide-one-button-next',
          prevEl: '.slide-one-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      },
      showSideBar: false,
      Announcement: [
        {
          id: 1,
          title: '今日簽到即可獲得抽獎券一張，快前往簽到吧!'
        },
        {
          id: 2,
          title: '今日完成獵場創建，即可獲得虛擬寶物一個!'
        },
        {
          id: 3,
          title: '每日固定9~10點發送最新消息推播!'
        },
        {
          id: 4,
          title: '新冠肺炎疫情延燒，呼籲會員們勤洗手!'
        }
      ],
      avatars: [
        {
          name: '貓貓candy粗乃完',
          description: '我是北部粽派，因為北部粽的米比較硬!喜歡口感偏硬的，打亂我們原先的部...',
          id: 5
        },
        {
          name: '狗狗hotdog粗乃玩',
          description: '我是南部粽派，因為南部粽的米比較軟爛!喜歡口感偏軟的，打亂我們原先的部...',
          id: 6
        },
        {
          name: '鴨鴨ducky粗乃完',
          description: '我是兩種都愛吃，因為南北一家親，硬的軟的通通都是我喜歡的食感...',
          id: 7
        },
        {
          name: '熊熊bear粗乃完',
          description: '我是兩種都愛吃，因為南北一家親，硬的軟的通通都是我喜歡的食感...',
          id: 8
        }
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      ],
      level: [
        {
          lv: 50,
          record: '小水獺',
          jobTitle: '帥帥欸在地獵人',
          id: 1
        },
        {
          lv: 20,
          record: '毒樹蛙',
          jobTitle: '帥帥欸在地獵人',
          id: 2
        },
        {
          lv: 30,
          record: '穿山甲',
          jobTitle: '帥帥欸在地獵人',
          id: 3
        }
      ],
      everyDaysign: [
        {
          day: '第一天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 4
        },
        {
          day: '第二天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 5
        },
        {
          day: '第三天',
          title: '貝殼幣',
          img_url: require('@/assets/image/icon/shellcoin.svg'),
          id: 6
        },
        {
          day: '第四天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 7
        },
        {
          day: '第五天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 8
        },
        {
          day: '第六天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 9
        },
        {
          day: '第七天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 10
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
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
    prev () {
      this.$refs.mySwiper.swiper.slidePrev()
    },
    next () {
      this.$refs.mySwiper.swiper.slideNext()
    }
  },
  mounted: function () {
    $('#everydaySignModal').modal('show')
  },
  created () {
    this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
  }
}
</script>
<style lang="scss" scoped>
.example-3d {
  width: 100%;
}
.swiper-container {
  height: 28vw;
  width: 100%;
}
.swiper {
  height: 100%;
    .swiper-slide {
      width: 512px;
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: #fff;
        border: 1px solid #fff;
      }
    }
  }
  .carousel_img {
    border-radius: 10px;
    width: 100%;
  }
  .hunter {
    width: 34px;
    height: 34px;
  }
</style>
