<template>
  <div class="article_bg">
    <div class="article_header pt-9">
      <ul class="container custom-container-width d-flex list-unstyled article_list">
        <li class="turn_back_list">回列表</li>
        <li><img src="../../assets/image/icon/chat.svg" alt=""/>只看我留言</li>
        <li><img src="../../assets/image/icon/lozenge.svg" alt=""/>只看作者</li>
        <li><img src="../../assets/image/icon/tag.svg" alt=""/>收藏</li>
        <li><img src="../../assets/image/icon/link.svg" alt=""/>分享</li>
        <li><img src="../../assets/image/icon/report.svg" alt=""/>舉報</li>
        <li><img src="../../assets/image/icon/like.svg" alt=""/>讚</li>
      </ul>
    </div>
    <div class="article_badge mb-5">
      <ul class="container custom-container-width d-flex list-unstyled mb-0">
        <li class="pr-2">
          <a class="d-flex align-items-center memberbadge" href="#">
            <img class="pr-2" src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png" alt=""/>同好獵場 /
          </a>
        </li>
        <li class="pr-2">
          <a class="d-flex align-items-center memberbadge" href="#">獵場名稱 /</a>
        </li>
        <li class="pr-2">
          <a class="d-flex align-items-center memberbadge membdg-active" href="#">文章標題</a>
        </li>
      </ul>
    </div>
    <div class="article_content container custom-container-width">
      <div class="row">
        <div class="poster_inf col-lg-2 d-flex flex-column align-items-center">
          <userava/>
          <p class="mb-0 poster_name">神劍闖江湖粗乃玩</p>
          <span class="poster_id">@weqrqrrtregdg</span>
          <div class="d-flex flex-column justify-content-start">
            <div class="d-flex align-items-center article_crown">
              <img src="../../assets/image/icon/ic_vip皇冠.svg" alt="" class="article_lv">
              <span>VIP會員</span>
            </div>
            <div class="d-flex align-items-center mb-3 article_level">
              <img src="../../assets/image/badge/Lv20.png" alt="" class="article_lv">
              <span>Lv.55 老鷹</span>
            </div>
            <div class="article_tags">
              <span class="author_tags"><img src="../../assets/image/icon/author_article.png" alt="">作者</span>
            </div>
          </div>
        </div>
        <div class="col-lg-10 poster_inf">
          <div class="leave_message">
            <h2 class="leave_message_title">美麗的微風廣場日本料理店(文章標題)</h2>
            <p class="mb-3">
              最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先搭乘以為還沒開......
              <a href="#">閱讀更多</a>
            </p>
            <div class="row article_img">
              <div class="col-6 pr-1">
                <img src="../../assets/image/huntground_lk/article_post.png" alt="">
              </div>
              <div class="col-6 pl-1">
                <img src="../../assets/image/huntground_lk/article_post.png" alt="">
              </div>
            </div>
            <ul class="d-flex list-unstyled align-items-center">
              <li class="d-flex align-items-center mr-3"><img src="../../assets/image/icon/like.svg" alt="">223141則讚</li>
              <li class="d-flex align-items-center mr-3"><img src="../../assets/image/icon/message_count.svg" alt="">36則留言</li>
              <li class="d-flex align-items-center mr-3"><img src="../../assets/image/icon/share.svg" alt="">2則分享</li>
            </ul>
            <div class="article_press_btn mb-3">
              <ul class="d-flex list-unstyled row mb-0 py-3">
                <li class="col-4 d-flex align-items-center justify-content-center"><a @click.prevent="filterBtn" :class="{'active': isActive}" class="d-flex" href="#"><img class="pr-2" src="../../assets/image/icon/unlike.svg" alt="">給溫度</a></li>
                <li class="col-4 d-flex align-items-center justify-content-center"><a class="d-flex" href="#"><img class="pr-2" src="../../assets/image/icon/message_count.svg" alt="">留言</a></li>
                <li class="col-4 d-flex align-items-center justify-content-center"><a class="d-flex" href="#"><img class="pr-2" src="../../assets/image/icon/share.svg" alt="">分享</a></li>
              </ul>
            </div>
            <div class="article_message row mx-0 mb-4">
              <div class="poster_inf d-flex justify-content-center col-3 col-md-2 col-lg-1">
                <userava/>
              </div>
              <div class="poster_inf message_input_block col-9 col-md-10 col-lg-11 d-flex align-items-center">
                <input type="text" class="message_input w-100" placeholder="留言...">
                <a href="#" class="up_img_btn"><img src="../../assets/image/icon/up_img.png" alt=""></a>
                <a href="#" class="submit_btn"><img src="../../assets/image/icon/submit_btn.png" alt=""></a>
              </div>
            </div>
            <div class="row mx-0">
              <div class="poster_inf d-flex justify-content-center col-3 col-md-2 col-lg-1">
                <userava/>
              </div>
              <div class="poster_inf message_input_block col-9 col-md-10 col-lg-11 mb-2">
                <div class="article_res mb-2">
                  <h5>無言薯條貓貓</h5>
                  <p>中和這帶的小吃美食很多 這間【中和廟口碳烤】雖然附近沒有較近的捷運 但附近都有機車停車格 騎機車過來買是最方便的 中和廟口碳烤｜中和廣福路廟</p>
                  <img src="../../assets/image/huntground_lk/article_res_img_fir.png" alt="">
                </div>
                <!--時間、回覆、舉報-->
                <ul class="d-flex list-unstyled col-12 res_mes_btn">
                  <li class="pr-3 d-flex align-items-center">1天前</li>
                  <li class="pr-3 d-flex align-items-center"><a class="d-flex align-items-center" href="#"><img src="../../assets/image/icon/message_count.svg" alt="">回覆</a></li>
                  <li class="pr-3 d-flex align-items-center"><a class="d-flex align-items-center" href="#"><img src="../../assets/image/icon/report.svg" alt="">舉報</a></li>
                </ul>
              </div>
              <!--子留言區塊Start-->
              <div class="article_response row mx-0">
                <!--留言人頭像-->
                <div class="poster_inf d-flex justify-content-center col-3 col-md-2 col-lg-1">
                  <userava/>
                </div>
                <!--留言+圖片-->
                <div class="poster_inf message_input_block col-9 col-md-10 col-lg-11 justify-content-center mb-2">
                  <div class="article_res mb-2">
                    <h5>無言薯條貓貓</h5>
                    <p>中和這帶的小吃美食很多 這間【中和廟口碳烤】雖然附近沒有較近的捷運 但附近都有機車停車格 騎機車過來買是最方便的 中和廟口碳烤｜中和廣福路廟</p>
                    <div class="row">
                      <div class="col-6 col-md-3 px-0 res_img pr-1">
                        <img src="https://images.unsplash.com/photo-1507449863419-a3aa39ac22d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
                      </div>
                      <div class="col-6 col-md-3 px-0 res_img">
                        <img src="https://images.unsplash.com/photo-1613589524461-42663d531d5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
                      </div>
                    </div>
                  </div>
                  <!--時間、回覆、舉報-->
                  <ul class="d-flex list-unstyled col-12 res_mes_btn">
                    <li class="pr-3 d-flex align-items-center">1天前</li>
                    <li class="pr-3 d-flex align-items-center"><a class="d-flex align-items-center" href="#"><img src="../../assets/image/icon/message_count.svg" alt="">回覆</a></li>
                    <li class="pr-3 d-flex align-items-center"><a class="d-flex align-items-center" href="#"><img src="../../assets/image/icon/report.svg" alt="">舉報</a></li>
                  </ul>
                  <div class="article_response row mx-0 mb-3">
                    <!--留言人頭像-->
                    <div class="poster_inf d-flex justify-content-center col-3 col-md-2 col-lg-1">
                      <userava/>
                    </div>
                    <!--留言+圖片-->
                    <div class="grand-message poster_inf message_input_block col-9 col-md-10 col-lg-11 justify-content-center mb-2">
                      <div class="article_res mb-2">
                        <h5>無言薯條貓貓</h5>
                        <p>中和這帶的小吃美食很多 這間【中和廟口碳烤】雖然附近沒有較近的捷運 但附近都有機車停車格 騎機車過來買是最方便的 中和廟口碳烤｜中和廣福路廟</p>
                      </div>
                        <!--時間、回覆、舉報-->
                      <ul class="d-flex list-unstyled col-12 res_mes_btn">
                        <li class="pr-3 d-flex align-items-center">1天前</li>
                        <li class="pr-3 d-flex align-items-center"><a class="d-flex align-items-center" href="#"><img src="../../assets/image/icon/message_count.svg" alt="">回覆</a></li>
                        <li class="pr-3 d-flex align-items-center"><a class="d-flex align-items-center" href="#"><img src="../../assets/image/icon/report.svg" alt="">舉報</a></li>
                      </ul>
                    </div>
                    <a class="col-12 load_more_res_blue" href="#">載入更多回覆...</a>
                  </div>
                  <a class="d-flex justify-content-center col-12 load_more_res_red" href="#">載入更多留言...</a>
                </div>
              </div>
              <!--子留言區塊End-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userava from '../../components/MemberAvatar.vue'
export default {
  components: {
    userava
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
@media(max-width: 768px) {
  .poster_inf  {
    margin-bottom: 20px;
  }
}
</style>
