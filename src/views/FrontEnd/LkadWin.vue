<template>
  <div>
    <div class="container custom-container-width">
      <div class="mt-11 mb-3">
        <ul class="d-flex list-unstyled mb-0 flex-wrap">
          <li class="pr-2">
            <router-link to="/localhuntground" class="d-flex align-items-center memberbadge" href="#">
              <img class="pr-2" src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png" alt="" />在地獵場 /
            </router-link>
          </li>
          <li class="pr-2">
            <a class="d-flex align-items-center memberbadge" href="#">台北獵場 /</a>
          </li>
          <li class="pr-2">
            <router-link to="/lookAd" class="d-flex align-items-center memberbadge" href="#">看廣告抽大獎 /</router-link>
          </li>
          <li class="pr-2">
            <router-link to="/lookAd" class="d-flex align-items-center memberbadge membdg-active" href="#">工商廣告</router-link>
          </li>
        </ul>
      </div>
      <div class="adsort">
        <div class="row mb-3 mx-0">
          <div class="col-lg-6 d-flex justify-content-center sort-com-block">
            <router-link to="/lookAd" class="ad-sort-com">工商廣告</router-link>
          </div>
          <div class="col-lg-6 d-flex justify-content-center">
            <router-link to="/personnelAd" class="ad-sort-per">人事廣告</router-link>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-12 pl-0">
            <button class="btn" data-toggle="modal" data-target=".adSetting"><img src="../../assets/image/huntground_lk/hg_icon/icon_filter.png" alt=""></button>
            <div class="modal fade adSetting" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title border-bottom-0 ad_filter_title">廣告篩選</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>優惠券</p>
                    <div class="">
                      <label class="contain">未領取優惠券
                        <input type="checkbox" checked="checked">
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <h5 class="all_area">鄉鎮市區</h5>
                    <div class="row mx-0 px-2">
                      <div class="col-12">
                        <input class="form-check-input" type="checkbox" value="" id="allSelect">
                        <label class="form-check-label" for="allSelect">
                          全選
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="zhongzheng">
                        <label class="form-check-label" for="zhongzheng">
                          中正區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="beitou">
                        <label class="form-check-label" for="beitou">
                          北投區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="shilin">
                        <label class="form-check-label" for="shilin">
                          士林區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="zhongshan">
                        <label class="form-check-label" for="zhongshan">
                          中山區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="neihu">
                        <label class="form-check-label" for="neihu">
                          內湖區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                          松山區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="datong">
                        <label class="form-check-label" for="datong">
                          大同區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="xinyi">
                        <label class="form-check-label" for="xinyi">
                          信義區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="nangang">
                        <label class="form-check-label" for="nangang">
                          南港區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                          萬華區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="wanhua">
                        <label class="form-check-label" for="wanhua">
                          大安區
                        </label>
                      </div>
                      <div class="col-4 col-md-3">
                        <input class="form-check-input" type="checkbox" value="" id="wenshan">
                        <label class="form-check-label" for="wenshan">
                          文山區
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ad_block_top row mx-0">
          <div class="col-12">
            <span class="area_category">中山區</span>
            <img class="file_categoey" src="../../assets/image/huntground_lk/hg_icon/icon_image.png" alt="">
          </div>
        </div>
        <div class="ad_remain row">
          <div class="col-12 px-0 mb-3" style="margin: 0 15px;">
            <p class="mb-1 ad-block-title">618中年慶 不只10%回饋13大銀行再加碼</p>
            <span class="ad-block-sub-title">剩餘 / 500張</span>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-01">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-02">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-03">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-04">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-05">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-06">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
        </div>
        <div class="ad_remain row">
          <div class="col-6 col-md-4 col-lg-4 pb-2">
            <div class="ad-card-top-07">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-6 pb-2">
            <div class="ad-card-top-08">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-09">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <p class="ad_content_title">MARVEL 12入組特價...</p>
            <span class="ad_ticket_count">剩餘 250 / 500張</span>
            <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
          </div>
        </div>
        <div class="ad_remain row">
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-01">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-02">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-03">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-04">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-05">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-06">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
        </div>
        <div class="ad_remain row">
          <div class="col-6 col-md-4 col-lg-4 pb-2">
            <div class="ad-card-top-07">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-6 pb-2">
            <div class="ad-card-top-08">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <div class="d-flex flex-column">
              <p class="ad_content_title">MARVEL 12入組特價...</p>
              <span class="ad_ticket_count">剩餘 250 / 500張</span>
              <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-2 pb-2">
            <div class="ad-card-top-09">
              <span class="area_category">大安區</span>
              <img class="movie_icon" src="../../assets/image/huntground_lk/hg_icon/icon_movie.png" alt="">
            </div>
            <p class="ad_content_title">MARVEL 12入組特價...</p>
            <span class="ad_ticket_count">剩餘 250 / 500張</span>
            <span class="ad_ticket_count">買一送一 剩餘 20 / 100張</span>
          </div>
        </div>
        <div class="d-flex justify-content-center row wanna-post-ad-block">
          <router-link to="/localadSelect" class="btn btn-brilliantRed wanna-post-ad">我要刊登廣告</router-link>
        </div>
      </div>
      <Pagenation class="my-5"></Pagenation>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* The container */
.contain {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #E2273A;
}

/* Hide the browser's default checkbox */
.contain input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 12%;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border: 1px solid #8B8B8B;
}

/* When the checkbox is checked, add a blue background */
.contain input:checked ~ .checkmark {
  background-color: #ffffff;
  border: 1px solid #E2273A;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.contain input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.contain .checkmark:after {
  left: 7px;
  top: 3px;
  width: 8px;
  height: 13px;
  border: solid #E2273A;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
<script>
import Pagenation from '../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  },
  data () {
    return {
    }
  }
}
</script>
