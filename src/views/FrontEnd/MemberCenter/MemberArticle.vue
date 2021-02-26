<template>
  <div>
    <div class="hunter_content_block">
      <div class="container custom-container-width">
        <div class="hunter_info_block pt-3">
          <div class="hunter_info">
            <p class="mb-0">獵人日記</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9">
            <div class="leave_message pb-0">
              <div class="row diray_poster">
                <div class="col-4 col-sm-3 col-md-2 col-lg-1">
                  <div class="img_ava_block">
                    <img class="img_ava" src="../../../assets/image/member/member_photo.jpg" alt="">
                    <div class="img_badge_block">
                      <img class="img_badge" src="../../../assets/image/account/badge_red.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-8 col-sm-9 col-md-10 col-lg-11 d-flex flex-column justify-content-center">
                  <p class="mb-0 poster_article_name">神劍闖江湖粗乃玩</p>
                  <span class="post_time">2020 - 06 - 06  11:30</span>
                </div>
              </div>
              <h2 class="hunter_diray_title">美麗的微風廣場日本料理店(文章標題)</h2>
              <p class="mb-3 hunter_diray_content">
                最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody
                Cafe 一場突如其來的大雨，打亂了我們原先搭乘以為還沒開......
                <a href="#">更多</a>
              </p>
              <div class="row mx-0 mb-3">
                <div class="col-12 member_article_img">
                  <img class="w-100" src="../../../assets/image/huntground_lk/article_post.png" alt="" />
                </div>
              </div>
              <ul class="d-flex list-unstyled align-items-center flex-wrap">
                <li class="d-flex align-items-center mr-3">
                  <img src="../../../assets/image/icon/like.svg" alt="" />223141則讚
                </li>
                <li class="d-flex align-items-center mr-3">
                  <img src="../../../assets/image/icon/message_count.svg" alt="" />36則留言
                </li>
                <li class="d-flex align-items-center mr-3">
                  <img src="../../../assets/image/icon/share.svg" alt="" />2則分享
                </li>
              </ul>
              <div class="article_press_btn">
                <ul class="d-flex list-unstyled row mb-0 py-3">
                  <li class="col-4 d-flex align-items-center justify-content-center">
                    <a @click.prevent="filterBtn" :class="{ active: isActive }" class="d-flex" href="#"><img class="pr-2"
                        src="../../../assets/image/icon/unlike.svg" alt="" />讚</a>
                  </li>
                  <li class="col-4 d-flex align-items-center justify-content-center">
                    <a class="d-flex" href="#"><img class="pr-2" src="../../../assets/image/icon/message_count.svg"
                        alt="" />留言</a>
                  </li>
                  <li class="col-4 d-flex align-items-center justify-content-center">
                    <a class="d-flex" href="#"><img class="pr-2" src="../../../assets/image/icon/share.svg" alt="" />分享</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 right_classify">
            <div class="hornor_header d-flex align-items-center mb-2">
              <img class="mr-2" src="../../../assets/image/member/icon/hornor_icon.png" alt="">
              <h3 class="mb-0 mr-2">發文分類</h3>
            </div>
            <div class="post_category mb-3">
              <ul class="list-unstyled">
                <li>台北<span class="pl-2">(2)</span></li>
                <li>花蓮<span class="pl-2">(3)</span></li>
                <li>同好1<span class="pl-2">(10)</span></li>
                <li>同好2<span class="pl-2">(10)</span></li>
              </ul>
            </div>
            <div class="hornor_header d-flex align-items-center mb-2">
              <img class="mr-2" src="../../../assets/image/member/icon/hornor_icon.png" alt="">
              <h3 class="mb-0 mr-2">自定義分類</h3>
            </div>
            <div class="post_category mb-3">
              <ul class="list-unstyled">
                <li>旅遊<span class="pl-2">(10)</span></li>
                <li>美食<span class="pl-2">(22)</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9" v-for="item in 4" :key="item.index">
            <div class="leave_message pb-0">
              <div class="row diray_poster">
                <div class="col-4 col-sm-3 col-md-2 col-lg-1">
                  <div class="img_ava_block ">
                    <img class="img_ava img_ava_art" src="../../../assets/image/member/member_photo.jpg" alt="">
                    <div class="img_badge_block">
                      <img class="img_badge" src="../../../assets/image/account/badge_red.svg" alt="">
                    </div>
                  </div>
                </div>
                <div class="col-8 col-sm-9 col-md-10 col-lg-11 d-flex flex-column justify-content-center">
                  <p class="mb-0 poster_article_name">神劍闖江湖粗乃玩</p>
                  <span class="post_time">2020 - 06 - 06  11:30</span>
                </div>
              </div>
              <h2 class="hunter_diray_title">美麗的微風廣場日本料理店(文章標題)</h2>
              <p class="mb-3 hunter_diray_content">
                最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody
                Cafe 一場突如其來的大雨，打亂了我們原先搭乘以為還沒開......
                <a href="#">更多</a>
              </p>
              <div class="row mx-0 mb-3">
                <div class="col-12 member_article_img">
                  <img class="w-100" src="../../../assets/image/huntground_lk/article_post.png" alt="" />
                </div>
              </div>
              <ul class="d-flex list-unstyled align-items-center flex-wrap">
                <li class="d-flex align-items-center mr-3">
                  <img src="../../../assets/image/icon/like.svg" alt="" />223141則讚
                </li>
                <li class="d-flex align-items-center mr-3">
                  <img src="../../../assets/image/icon/message_count.svg" alt="" />36則留言
                </li>
                <li class="d-flex align-items-center mr-3">
                  <img src="../../../assets/image/icon/share.svg" alt="" />2則分享
                </li>
              </ul>
              <div class="article_press_btn">
                <ul class="d-flex list-unstyled row mb-0 py-3">
                  <li class="col-4 d-flex align-items-center justify-content-center">
                    <a @click.prevent="filterBtn" :class="{ active: isActive }" class="d-flex" href="#"><img class="pr-2"
                        src="../../../assets/image/icon/unlike.svg" alt="" />讚</a>
                  </li>
                  <li class="col-4 d-flex align-items-center justify-content-center">
                    <a class="d-flex" href="#"><img class="pr-2" src="../../../assets/image/icon/message_count.svg"
                        alt="" />留言</a>
                  </li>
                  <li class="col-4 d-flex align-items-center justify-content-center">
                    <a class="d-flex" href="#"><img class="pr-2" src="../../../assets/image/icon/share.svg" alt="" />分享</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Pagenation class="mt-2 mb-5"></Pagenation>
      </div>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    filterBtn () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
.active {
  color: #DC131A;
  filter: invert(18%) sepia(72%) saturate(3929%) hue-rotate(346deg) brightness(89%) contrast(107%);
}
</style>
