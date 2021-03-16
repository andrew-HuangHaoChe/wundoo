<template>
  <div>
    <div class="d-flex justify-content-center flex-column">
      <div class="w-100 every_banner">
        <img class="w-100" src="../../assets/image/tempeveryday/nav_banner.png" alt="">
        <img class="everytemp" src="../../assets/image/tempeveryday/title.png" alt="">
      </div>
    </div>
    <div style="background: #FFF8F4; padding-bottom: 40px; padding-top: 30px;">
      <div class="container custom-container-width">
        <div class="d-flex align-items-center flex-column mb-5">
          <h5 class="d-flex align-items-center"><img class="pr-2" src="../../assets/image/tempeveryday/x_icon.png" alt="">任務說明<img class="pl-2" src="../../assets/image/tempeveryday/x_icon.png" alt=""></h5>
          <img src="../../assets/image/tempeveryday/temp_break_line.png" alt="">
        </div>
        <div class="rule_of_activity_block d-flex flex-column align-items-center">
          <div class="rule_of_activity">
            <p class="mb-1">
            【活動日期】2020.8.8 - 8.31 (滿額即結束)
            </p>
            <p class="mb-1">
              【活動辦法】每日來此活動頁面發文，即可獲取好康獎勵！(每人只能參與一次)
            </p>
            <p class="mb-1">
              【活動獎勵】每日發文成功，即可領取貝殼幣x100個。
            </p>
            <p class="mb-1">
              【活動人數】限 1000 人參與(滿額即結束)。
            </p>
            <p class="mb-1">
              【注意事項】
            </p>
            <ol class="pl-4">
              <li>
                每人每天限領取一次。
              </li>
              <li>
                每日發文完畢系統將會於24小時內發放。
              </li>
              <li>
                之後若想看曾參與的文章請至：會員中心>我的日記查看。
              </li>
              <li>
                有任何問題歡迎來信：a123@gmail.com
              </li>
            </ol>
          </div>
        </div>
        <div class="d-flex align-items-center flex-column mb-5">
          <h5 class="d-flex align-items-center"><img class="pr-2" src="../../assets/image/tempeveryday/x_icon.png" alt="">完成獎勵<img class="pl-2" src="../../assets/image/tempeveryday/x_icon.png" alt=""></h5>
          <img src="../../assets/image/tempeveryday/temp_break_line.png" alt="">
        </div>
        <div class="compelete_postart_block">
          <div class="compelete_postart px-5">
            <p class="mb-0">
              每日發文成功：
            </p>
            <p>
              獲得貝殼幣 x <span class="pr-1">100</span>個
            </p>
            <div>
              <div class="everyday_coin_block">
                <img src="../../assets/image/tempeveryday/everyday_coin_bg.png" alt="">
                <img class="everyday_coin" src="../../assets/image/tempeveryday/everyday_coin.png" alt="">
                <p>貝殼幣 x <span>100</span></p>
              </div>
            </div>
            <router-link to="/tempeverydapost" class="wana_post_btn">
              我要發文<img class="pl-2" src="../../assets/image/tempeveryday/pointinghand.svg" alt="">
            </router-link>
          </div>
        </div>
      </div>
      <div class="already">
        <div class="container custom-container-width">
          <div class="d-flex flex-column align-items-center mb-4">
            <img src="../../assets/image/tempeveryday/already_title.png" alt="">
          </div>
        </div>
        <img class="w-100 al_break_line" src="../../assets/image/tempeveryday/already_line.svg" alt="">
      </div>
      <div class="everyday_temp_artblock">
        <div class="container custom-container-width">
          <div class="row">
            <div class="col-md-4" v-for="items in 15" :key="items.index" style="padding-bottom: 30px;">
              <div class="post_card">
                <div class="d-flex mb-3">
                  <div class="poster_img">
                    <img class="poster_img_poster" src="../../assets/image/tempeveryday/poster.png" alt="">
                    <img class="poster_img_badge" src="../../assets/image/tempeveryday/badge.png" alt="">
                  </div>
                  <div class="col d-flex flex-column align-items-start">
                    <p class="mb-0 poster_name">神劍闖江湖粗乃玩</p>
                    <span class="post_time">2020-06-06 11:30</span>
                  </div>
                </div>
                <div class="every_article">
                  <p>
                    最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町···<a href="#">更多</a>
                  </p>
                  <img class="w-100" src="../../assets/image/tempeveryday/every_art_img.png" alt="">
                  <ul class="pl-0 d-flex list-unstyled good_comment">
                    <li class="">223141則讚</li>
                    <li class=""><img src="../../assets/image/tempeveryday/al_comment.png" alt="">36則留言</li>
                    <li class=""><img src="../../assets/image/tempeveryday/al_share.png" alt="">2則分享</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Pagenation class="mt-3 mb-4"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  }
}
</script>
