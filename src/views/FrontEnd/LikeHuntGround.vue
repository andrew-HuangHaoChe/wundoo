<template>
  <div>
    <div class="lhg-header mb-3 d-flex align-items-end">
      <div class="container custom-container-width">
        <div class="row align-items-end justify-content-between lhg_banner">
          <div class="col-6 col-lg-3 lhg-laoya">
            <img src="../../assets/image/huntground_lk/header_laoya.png" alt="">
          </div>
          <div class="col-6 col-lg-9 d-flex justify-content-end align-items-end">
            <router-link class="btn btn-mainRed build-hg-btn" to="/buildNewHg">建立新獵場</router-link>
          </div>
        </div>
      </div>
    </div>
    <!--橘色選單-->
    <div class="container custom-container-width">
      <Tribeloudly/>
    </div>
    <div class="travel-nav like-category-nav my-3">
      <div class="container custom-container-width">
        <div class="">
          <div class="row mx-0">
            <div class="col-md-12 col-lg-12 col-xl-2 d-flex align-items-center artsort_btn" data-toggle="modal" data-target="#artsortModalCenter">
              <img class="mr-2" src="../../assets/image/travel/icon/icon_filter_orig.svg" alt="">
              <p class="mb-0">文章排序</p>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-7 d-flex align-items-center art_categories">
              <ul class="list-unstyled d-flex justify-content-between flex-wrap mb-0 travel_navoption h-100">
                <div class="d-flex align-items-center flex-wrap">
                  <li><a class="lkhg-option_a">旅遊</a></li>
                  <li><a class="lkhg-option_a">美食</a></li>
                  <li><a class="lkhg-option_a">時尚</a></li>
                  <li><a class="lkhg-option_a">健康</a></li>
                  <li><a class="lkhg-option_a">影視</a></li>
                  <li><a class="lkhg-option_a">運動</a></li>
                  <li><a class="lkhg-option_a">數位3C</a></li>
                  <li class="hg-menu-art">
                    <a class="lkhg-option_a">藝文</a>
                    <ul class="list-unstyled">
                      <li class="navoption_sub_li"><a class="navoption_sub_a">圖文創造</a></li>
                      <li class="navoption_sub_li"><a class="navoption_sub_a">散文小說</a></li>
                    </ul>
                  </li>
                  <li><a class="lkhg-option_a">政經</a></li>
                  <li><a class="lkhg-option_a">學習</a></li>
                  <li><a class="lkhg-option_a">其他</a></li>
                </div>
              </ul>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-3 d-flex align-items-center justify-content-xl-end pr-0">
              <div class="d-flex like-hg-search pr-0">
                <input type="text" placeholder="搜尋獵場關鍵字">
                <img src="../../assets/image/icon/ic_search.svg" alt="" class="hg-search-icon">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--橘色選單End-->
    <div class="container custom-container-width">
      <!--同好獵場字卡區塊-->
      <div class="discus">
        <div class="row mx-0">
            <div class="col-sm-4 col-md-4 col-lg-2 hg-card" v-for="item in cardDataPc" :key="item.id">
              <router-link to="/lhgManagement" class="text-decoration-none">
                <div class="d-flex align-items-start flex-column hg-card-content" :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }">
                  <div class="mb-auto">
                    <span class="hg-card-tag">{{ item.category }}</span>
                  </div>
                  <div class="d-flex flex-column w-100 hg-card-text-content">
                    <div class="hg-card-title pl-1">
                      <h4>{{ item.title }}</h4>
                    </div>
                    <div class="d-flex w-100">
                      <div class="d-flex w-100 justify-content-between pb-2">
                        <div class="row w-100 mx-0">
                          <div class="col-6 col-md-12 col-lg-12 col-xl-7 px-0 d-flex justify-content-start align-items-center hg-card-bottom-block pl-1">
                            <img class="pr-1" src="../../assets/image/icon/num_of_hg.svg" alt="">
                            <span class="hg-card-people">獵場人數: {{ item.number_of_people }}</span>
                          </div>
                          <div class="col-6 col-md-12 col-lg-12 col-xl-5 px-0 d-flex justify-content-end justify-content-md-start justify-content-lg-start justify-content-xl-end pr-1">
                            <router-link to="/lhgManagement" class="btn btn-brilliantRed intohg">進入獵場</router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
        </div>
      </div>
      <!--飛鴿傳書modal start-->
      <div class="modal fade" id="pigeon_modal" tabindex="-1" role="dialog" aria-labelledby="pigeon_modalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5 class="text-brilliantRed text-center pigeon_modal_title">飛鴿傳書</h5>
              <p class="sign_to_get">今日簽到即可獲得抽獎券一張！快前往簽到吧！</p>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="btn btn-brilliantRed">前往連結</button>
            </div>
          </div>
        </div>
      </div>
      <!--飛鴿傳書modal end-->
      <!-- Modal -->
      <!--文章分類modal start-->
      <div class="modal fade" id="artsortModalCenter" tabindex="-1" role="dialog" aria-labelledby="artsortModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <h5 class="art_sort_modal_title pb-0">文章排序</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group form-check">
                <div class="row">
                  <div class="col-6">
                    <div class="option_block">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label art_sort_option" for="exampleCheck1">發布時間：由新至舊</label></div>
                    </div>
                  <div class="col-6">
                    <div class="option_block">
                      <input type="checkbox" class="form-check-input" id="exampleCheck2">
                      <label class="form-check-label art_sort_option" for="exampleCheck2">討論熱度：由高至低</label></div>
                    </div>
                  <div class="col-6">
                    <div class="option_block">
                      <input type="checkbox" class="form-check-input" id="exampleCheck3">
                      <label class="form-check-label art_sort_option" for="exampleCheck3">發布時間：由舊至新</label></div>
                    </div>
                  <div class="col-6">
                    <div class="option_block">
                      <input type="checkbox" class="form-check-input" id="exampleCheck4">
                      <label class="form-check-label art_sort_option" for="exampleCheck4">討論熱度：由低至高</label></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--文章分類modal end-->
      <!--同好獵場字卡區塊End-->
      <Pagenation class="lhgmgmt_pagenation my-5" style="padding: 0 5px;"/>
    </div>
    <!--我要大聲說modal-->
    <div class="modal fade" id="iwanttoloudlyCenter" tabindex="-1" role="dialog" aria-labelledby="iwanttoloudlyCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="z-index: 99999999;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="signup-title d-flex mb-0" style="margin-top: -70px;">
              <img src="../../assets/image/huntground_lk/local_hg/wannaloudly.png" alt="">
              <div class="d-flex align-items-center">
                <span class="signup-title-bar il-custom-bar"></span>
                <p class="signup-title mb-0 pt-0">我要大聲說</p>
              </div>
            </div>
            <p class="mb-0 loudly_modal_p mb-2">我要說的話</p>
            <div class="form-group">
              <textarea class="form-control" id="ldly_textarea" rows="3" placeholder="請輸入文字內容..."></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-brilliantRed px-5" @click="submitldly" data-toggle="modal" data-target="#iwlysuccess">發布</button>
          </div>
        </div>
      </div>
    </div>
    <!--發布成功modal-->
    <div class="modal fade" id="iwlysuccess" tabindex="-1" role="dialog" aria-labelledby="iwlysuccessTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="z-index: 99999999;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex flex-column align-items-center submit_success_block" style="margin-top: -60px;">
              <h5>發布成功</h5>
              <p>已排程，將會出現在部落大聲公中。</p>
            </div>
            <div class="d-flex justify-content-center">
              <img src="../../assets/image/huntground_lk/successsubmit.png" alt="">
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-brilliantRed px-5" data-dismiss="modal" aria-label="Close">了解</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
import $ from 'jquery'
import Tribeloudly from '../../components/Tribeloudly.vue'
export default {
  components: {
    Pagenation,
    Tribeloudly
  },
  data () {
    return {
      cardDataPc: [
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 1
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 2
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 3
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 4
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 5
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 6
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 7
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 8
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 9
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 10
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 11
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 12
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 13
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 14
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 15
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 16
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 17
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 18
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 19
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 20
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 21
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 22
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 23
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 24
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 25
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 26
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 27
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 28
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 29
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 30
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 31
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 32
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 33
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 34
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 35
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 36
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 37
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 38
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 39
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 40
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 41
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 42
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 43
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 44
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 45
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 46
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 47
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 48
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 49
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 50
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 51
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 52
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 53
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 54
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 55
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 56
        },
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 57
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 58
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 59
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 60
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 61
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 62
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 63
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 64
        }
      ],
      cardDataMobile: [
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 65
        },
        {
          title: '叢林爬山涉水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1534,
          category: '熱門',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 66
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 67
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 68
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img04.jpg'),
          id: 69
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img03.jpg'),
          id: 70
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img01.jpg'),
          id: 71
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 72
        }
      ]
    }
  },
  methods: {
    submitldly () {
      $('#iwanttoloudlyCenter').modal('hide')
    }
  }
}
</script>
