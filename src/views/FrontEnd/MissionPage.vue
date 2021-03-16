<template>
    <div>
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
        <!-- <div class="carousel-header">
          <carousel :items="1" :dots="false" :nav="false">
            <div
              v-for="(img, index) in images"
              :key="index"
              class="owl-image-frame"
            >
              <div
                class="owl-image"
                :style="{ backgroundImage: 'url(' + img + ')' }"
              ></div>
            </div>
            <template slot="prev"><span class="prev"></span></template>
            <template slot="next"><span class="next"></span></template>
          </carousel>
        </div> -->
      </div>
      <div class="signevery-mission-block mb-3">
        <div class="container custom-container-width">
          <Tribeloudly/>
        </div>
      </div>
      <div class="mission-card-block mb-5">
        <div class="container custom-container-width">
          <h2 class="mb-4">尚未完成的任務</h2>
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div v-for="item in missionCard" :key="item.id">
                <div class="mission-confirm-card" v-if="item.title === '完善個人資料'">
                  <div class="mb-4">
                    <span class="mission-sm-bar d-inline" v-if="item.title === '完善個人資料'"></span><h4 class="d-inline" v-if="item.title === '完善個人資料'">{{ item.title }}</h4>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p v-if="item.missionContent === '完成個人資料100%，獲得'">{{ item.missionContent }} <span>{{ item.prize}}</span></p>
                      <span v-if="item.schedule === 80" class="d-flex justify-content-between align-items-center">目前進度:{{ item.schedule }}%</span>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                      <button class="btn btn-mainRed go-btn">GO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div v-for="item in missionCard" :key="item.id">
                <div class="mission-confirm-card" v-if="item.title === '每日發文'">
                  <div class="mb-4">
                    <span class="mission-sm-bar d-inline" v-if="item.title === '每日發文'"></span><h4 class="d-inline" v-if="item.title === '每日發文'">{{ item.title }}</h4>
                  </div>
                  <div class="row">
                    <div class="col-7">
                      <p v-if="item.missionContent === '每天發一篇文章持續30天，獲得'">{{ item.missionContent }} <span>{{ item.prize}}</span></p>
                      <span v-if="item.schedule === '已發文28天'" class="d-flex justify-content-between align-items-center">目前進度:{{ item.schedule }}</span>
                    </div>
                    <div class="col-5 d-flex justify-content-end">
                      <button class="btn btn-mainRed go-btn">GO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mission-card-complete-block mb-5">
        <div class="container custom-container-width">
          <h2 class="mb-4">已完成的任務</h2>
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div v-for="item in missionCard" :key="item.id">
                <div class="mission-confirm-card mission-card-complete-card" v-if="item.title === '完善個人資料'">
                  <div class="complete-stamp">
                    <img src="../../assets/image/images/complete.png" alt="">
                  </div>
                  <div class="mb-4">
                    <span class="mission-sm-bar d-inline" v-if="item.title === '完善個人資料'"></span><h4 class="d-inline" v-if="item.title === '完善個人資料'">{{ item.title }}</h4>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p v-if="item.missionContent === '完成個人資料100%，獲得'">{{ item.missionContent }} <span>{{ item.prize}}</span></p>
                      <span v-if="item.schedule === 80" class="d-flex justify-content-between align-items-center">目前進度:{{ item.schedule }}%</span>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                      <button class="btn btn-mainRed go-btn">GO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div v-for="item in missionCard" :key="item.id">
                <div class="mission-confirm-card mission-card-complete-card" v-if="item.title === '每日發文'">
                  <div class="complete-stamp">
                    <img src="../../assets/image/images/complete.png" alt="">
                  </div>
                  <div class="mb-4">
                    <span class="mission-sm-bar d-inline" v-if="item.title === '每日發文'"></span><h4 class="d-inline" v-if="item.title === '每日發文'">{{ item.title }}</h4>
                  </div>
                  <div class="row">
                    <div class="col-7">
                      <p v-if="item.missionContent === '每天發一篇文章持續30天，獲得'">{{ item.missionContent }} <span>{{ item.prize}}</span></p>
                      <span v-if="item.schedule === '已發文28天'" class="d-flex justify-content-between align-items-center">目前進度:{{ item.schedule }}</span>
                    </div>
                    <div class="col-5 d-flex justify-content-end">
                      <button class="btn btn-mainRed go-btn">GO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--每日簽到modal-->
      <div class="modal fade" id="everydaySignModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content pb-2">
              <div class="modal-header everyday-modal-title">
                <h5 class="modal-title" id="everydaySignModalLabel"></h5>
                <button type="button" class="close close-every-sign" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body row d-flex justify-content-center">
                <div class="col-1 pr-0" v-for="item in everyDaysign" :key="item.id">
                  <div class="sign-box">
                    <h5>{{ item.title }}</h5>
                    <img :src="item.img_url" alt="">
                  </div>
                  <div class="signbox-footer">
                      <span>{{ item.day }}</span>
                    </div>
                </div>
              </div>
              <div class="modal-body row d-flex justify-content-center">
                <div class="col-1 pr-0" v-for="item in everyDaysign" :key="item.id">
                  <div class="sign-box">
                    <h5>{{ item.title }}</h5>
                    <img :src="item.img_url" alt="">
                  </div>
                  <div class="signbox-footer">
                      <span>{{ item.day }}</span>
                    </div>
                </div>
              </div>
              <div class="modal-body row d-flex justify-content-center">
                <div class="col-1 pr-0" v-for="item in everyDaysign" :key="item.id">
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
          </div>
      </div>
    </div>
</template>
<script>
// import carousel from 'vue-owl-carousel'
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
import Tribeloudly from '../../components/Tribeloudly.vue'
export default {
  components: {
    // carousel
    swiper,
    swiperSlide,
    Tribeloudly
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
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
      images: [
        'https://images.unsplash.com/photo-1493094614670-f6784185cde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80',
        'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80',
        'https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
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
        },
        {
          day: '第八天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 11
        },
        {
          day: '第九天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 12
        },
        {
          day: '第十天',
          title: '抽獎券',
          img_url: require('@/assets/image/icon/lotteryticket.svg'),
          id: 13
        }
      ],
      missionCard: [
        {
          title: '完善個人資料',
          missionContent: '完成個人資料100%，獲得',
          prize: '抽獎券 x 1',
          schedule: 80,
          id: 1
        },
        {
          title: '完善個人資料',
          missionContent: '完成個人資料100%，獲得',
          prize: '抽獎券 x 1',
          schedule: 80,
          id: 2
        },
        {
          title: '完善個人資料',
          missionContent: '完成個人資料100%，獲得',
          prize: '抽獎券 x 1',
          schedule: 80,
          id: 3
        },
        {
          title: '每日發文',
          missionContent: '每天發一篇文章持續30天，獲得',
          prize: '抽獎券 x 1',
          schedule: '已發文28天',
          id: 4
        },
        {
          title: '每日發文',
          missionContent: '每天發一篇文章持續30天，獲得',
          prize: '抽獎券 x 1',
          schedule: '已發文28天',
          id: 5
        },
        {
          title: '每日發文',
          missionContent: '每天發一篇文章持續30天，獲得',
          prize: '抽獎券 x 1',
          schedule: '已發文28天',
          id: 6
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
    prev () {
      this.$refs.mySwiper.swiper.slidePrev()
    },
    next () {
      this.$refs.mySwiper.swiper.slideNext()
    }
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
    // width: 100%;
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
  }
</style>
