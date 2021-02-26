<template>
  <div>
    <div class="container custom-container-width pt-12 favarticle-block">
      <div class="signup-title d-flex">
      <span class="signup-title-bar"></span>
        收藏的文章
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="favart-block">
            <div class="row mb-3">
              <div class="col-10 col-lg-6">
                <div class="d-flex">
                  <div class="ava-block" :style="{ 'background-image': 'url(' + img.userA + ')'}">
                    <img class="ava-cate" src="../../assets/image/account/badge_yellow.svg" alt="">
                  </div>
                  <div class="ml-2">
                    <p class="mb-0 level_text">Lv.99</p>
                    <p class="mb-0 collected-text">神劍闖江湖粗乃玩</p>
                  </div>
                </div>
              </div>
              <div class="col-1 col-lg-6">
                <div class="d-flex flex-column align-items-end justify-content-center h-100 collected-block">
                  <div class="drop" :class="{'open' : dropDowns.ranking.open}">
                    <i @click="dropcollected('ranking')" class="fas fa-ellipsis-h"></i>
                    <ul class="collected-dropdown-menu list-unstyled">
                      <li class="dropdown-menu__item d-flex flex-column justify-content-center">
                        <a class="dropdown-menu__link" href="#"><img src="../../assets/image/icon/link.svg" alt="">分享</a>
                        <a class="dropdown-menu__link" href="#"><img src="../../assets/image/icon/cancel-tag.svg" alt="">取消收藏</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12 col-xl-3">
                <div class="favart-img">
                  <img src="https://images.unsplash.com/photo-1599513494225-ff6e1ddc790c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-12 col-xl-9">
                <div>
                  <h2 class="hunter_diray_title">美麗的微風廣場日本料理店(文章標題)</h2>
                  <p class="mb-3 hunter_diray_content">
                    最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光,其中有一家日本料理特別吸引amy的目光
                    <a href="#">...更多</a>
                  </p>
                  <ul class="d-flex list-unstyled align-items-center flex-wrap">
                    <li class="d-flex align-items-center mr-3">
                      <img src="../../assets/image/icon/like.svg" alt="" />223141則讚
                    </li>
                    <li class="d-flex align-items-center mr-3">
                      <img src="../../assets/image/icon/message_count.svg" alt="" />36則留言
                    </li>
                    <li class="d-flex align-items-center mr-3">
                      <img src="../../assets/image/icon/share.svg" alt="" />2則分享
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="favart-block">
            <div class="row mb-3">
              <div class="col-10 col-lg-6">
                <div class="d-flex">
                  <div class="ava-block" :style="{ 'background-image': 'url(' + img.userA + ')'}">
                    <img class="ava-cate" src="../../assets/image/account/badge_yellow.svg" alt="">
                  </div>
                  <div class="ml-2">
                    <p class="mb-0 level_text">Lv.99</p>
                    <p class="mb-0 collected-text">神劍闖江湖粗乃玩</p>
                  </div>
                </div>
              </div>
              <div class="col-1 col-lg-6">
                <div class="d-flex flex-column align-items-end justify-content-center h-100 collected-block">
                  <div class="drop" :class="{'open' : dropDowns.oth.open}">
                    <i @click="dropcollected('oth')" class="fas fa-ellipsis-h"></i>
                    <ul class="collected-dropdown-menu list-unstyled">
                      <li class="dropdown-menu__item d-flex flex-column justify-content-center">
                        <a class="dropdown-menu__link" href="#"><img src="../../assets/image/icon/link.svg" alt="">分享</a>
                        <a class="dropdown-menu__link" href="#"><img src="../../assets/image/icon/cancel-tag.svg" alt="">取消收藏</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12 col-xl-3">
                <div class="favart-img">
                  <img src="https://images.unsplash.com/photo-1599513494225-ff6e1ddc790c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-12 col-xl-9">
                <div>
                  <h2 class="hunter_diray_title">美麗的微風廣場日本料理店(文章標題)</h2>
                  <p class="mb-3 hunter_diray_content">
                    最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光,其中有一家日本料理特別吸引amy的目光
                    <a href="#">...更多</a>
                  </p>
                  <ul class="d-flex list-unstyled align-items-center flex-wrap">
                    <li class="d-flex align-items-center mr-3">
                      <img src="../../assets/image/icon/like.svg" alt="" />223141則讚
                    </li>
                    <li class="d-flex align-items-center mr-3">
                      <img src="../../assets/image/icon/message_count.svg" alt="" />36則留言
                    </li>
                    <li class="d-flex align-items-center mr-3">
                      <img src="../../assets/image/icon/share.svg" alt="" />2則分享
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagenation class="mb-5"/>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  },
  data () {
    return {
      dropDowns: {
        ranking: {
          open: false
        },
        oth: {
          open: false
        }
      },
      img: {
        userA: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        userB: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        userC: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      }
    }
  },
  methods: {
    dropcollected: function (dropdownName) {
      this.dropDowns[dropdownName].open = !this.dropDowns[dropdownName].open
    },
    close: function () {
      for (var dd in this.dropDowns) {
        this.dropDowns[dd].open = false
      }
    }
  },
  mounted: function () {
    var self = this
    window.addEventListener('click', function (e) {
      if (!e.target.parentNode.classList.contains('drop')) {
        self.close()
      }
      // console.log('ok')
    }, false)
  }
}
</script>
