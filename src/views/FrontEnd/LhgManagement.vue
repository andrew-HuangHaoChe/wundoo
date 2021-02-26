<template>
  <div>
    <div class="lhgmana-header">
      <div class="container custom-container-width d-flex justify-content-between">
        <div class="row w-100 m-0">
          <div class="d-flex align-items-center col-md-12 col-lg-6 mb-1">
          <p class="mb-0 lhgmana-title d-flex flex-wrap align-items-center"><img src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png" class="pr-2" alt=""> 同好獵場 /<span class="lhgmana-sec-title">爬山涉水獵場都市叢林獵場都市叢林獵場爬山</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="lhgmana-header-secblock d-flex align-items-start text-white mb-3">
      <div class="container custom-container-width">
        <div class="row">
          <div class="col-12 d-flex mb-auto lhgmana-wanna-post col-md-12 col-lg-12 justify-content-md-start justify-content-lg-end">
            <a class="btn btn-yellowBtn text-white" data-toggle="modal" data-target="#signUphgModal"><img class="pr-1" src="../../assets/image/icon/ic_hunt_ground_people.svg" alt="">申請加入獵場</a>
            <router-link class="btn btn-mainRed d-flex align-items-center ml-3" to="/iwannaPost"><img src="../../assets/image/icon/postIcon.svg" alt=""> 我要發文</router-link>
          </div>
          <div class="col-12 col-lg-9 d-flex align-items-end lhg-mgmt-banner-block">
            <h2>爬山涉水獵場都市叢林獵場都市叢林獵場爬山(限制至多28個字)</h2>
          </div>
          <div class="col-12 col-lg-3 d-flex align-items-center align-items-md-center align-items-lg-end justify-content-start justify-content-md-start justify-content-lg-end lhgmana-setting">
            <router-link style="height:39px;" class="btn btn-whiteBtn d-flex align-items-center" to="/hgsetting"><img src="../../assets/image/huntground_lk/hg_icon/ic_set.svg" alt="獵場設定" class="pr-1"> 獵場設定</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container custom-container-width">
      <Tribeloudly/>
      <div class="rules-mgmt mb-3">
        <button class="btn btn-rulesBtn" data-toggle="modal" data-target="#official-rules-Modal">官方規則</button>
        <router-link to="/membermgmt"  class="btn btn-mbmgmtBtn">成員管理</router-link>
      </div>
      <div class="mgmt-info mb-3">
        <ul class="list-unstyled mb-0 row">
          <li class="d-flex align-items-center pr-4 pb-1 col-12 col-md-6 col-lg-3 col-xl-2 pl-0"><img class="pr-1" src="../../assets/image/icon/ic_hunt_ground_people.svg" alt="">獵場人數: 1032K</li>
          <li class="d-flex align-items-center pr-4 pb-1 col-12 col-md-6 col-lg-3 col-xl-2 pl-0"><img class="pr-1" src="../../assets/image/icon/thermometer.svg" alt="">討論熱度: 431343</li>
          <li class="d-flex align-items-center pr-4 pb-1 col-12 col-md-6 col-lg-3 col-xl-2 pl-0"><img class="pr-1" src="../../assets/image/icon/hunter.svg" alt="">管理獵人: 喵喵Candy</li>
          <li class="d-flex align-items-center pr-4 pb-1 col-12 col-md-6 col-lg-3 col-xl-2 pl-0"><img class="pr-1" src="../../assets/image/icon/clock.svg" alt="">成立時間: 2020/06/06</li>
        </ul>
      </div>
      <!--獵場文章-->
      <div>
        <div class="row m-0 mgmt-title-block">
          <div class="col-md-2 col-lg-3 col-xl-2 mgmt-art-title">
            <h5>類別</h5>
          </div>
          <div class="col-md-5 col-lg-3 col-xl-6 mgmt-art-title">
            <h5>話題</h5>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 mgmt-art-title">
            <h5>發布時間</h5>
          </div>
          <div class="col-md-2 col-lg-3 col-xl-2 mgmt-art-title">
            <h5>留言數</h5>
          </div>
        </div>
        <div class="row m-0 announcement_margin" v-for="(art,index) in arts" :key="art.id" :class="{ 'mgmt-active':index%2 !== 1 }">
          <div class="col-2 col-md-2 col-lg-3 col-xl-2 d-flex flex-column align-items-sm-center align-items-md-center justify-content-center categories-block">
            <div class="d-flex align-items-center justify-content-center lhg_temp_like_block">
              <div class="d-flex flex-column align-items-center temp_like_block">
                <img class="temp_like" :src="art.like" alt="">
                <span>{{ art.like_count }}</span>
              </div>
              <div class="d-flex flex-column align-items-center lhglike-sec-block">
                <img v-if="art.imgUrl !== ''" :src="art.imgUrl" alt="" class="categories-icon">{{ art.categories }}
              </div>
            </div>
          </div>
          <div class="col-10 col-md-5 col-lg-3 col-xl-6">
            <div class="row d-flex align-items-center">
              <div class="col-3 col-lg-12 col-xl-3 mgmt-table-block">
                <img :src="art.artImg" alt="" class="mgmt-table-img">
              </div>
              <div class="col-12 col-lg-12 col-xl-9">
                <div class="mgmt-table-text">
                  <div class="d-flex align-items-center mgmt-sec-table">
                    <span>{{ art.categories }}</span>
                    <i class="fas fa-ellipsis-v"></i>
                  </div>
                  <router-link to="/article"><h6>{{ art.title }}</h6></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 col-md-3 col-lg-3 col-xl-2 d-flex justify-content-sm-start justify-content-md-center align-items-center lhg_mgmt_user">
            <div class="d-flex align-items-center flex-column mr-2">
              <div>
                <div class="avatar">
                  <img src="../../assets/image/account/badge_yellow.svg" alt="" />
                </div>
              </div>
              <p class="mb-0">Lv.99</p>
            </div>
            <div class="d-flex flex-column align-items-center">
              <p class="mb-0 friend_inf_title">神劍闖江湖乃喵</p>
              <span class="poster_time">2021.01.18 19:52</span>
            </div>
          </div>
          <div class="col-4 col-md-2 col-lg-3 col-xl-2 d-flex justify-content-end justify-content-md-center align-items-center mgmt-poster-block">
            <div class="d-flex align-items-center">
              <i class="far fa-comment-dots mr-1"></i>
              <p class="comment_count mb-0 mr-3">9999</p>
              <a class="lhgdrop" @:click.native="isshowdrop">
                <i class="fas fa-ellipsis-v" style="cursor: pointer; font-size: 24px;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Pagenation class="lhgmgmt_pagenation my-5"></Pagenation>
    <!--獵場文章 End-->
    </div>
    <!--申請加入獵場modal Start-->
      <div class="modal fade signUphgModal" id="signUphgModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header d-flex flex-column justify-content-center border-bottom-0">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 class="modal-title w-100 d-flex justify-content-center">申請加入獵場</h5>
              <span class="w-100 d-flex justify-content-center signmd-sub-title">申請後代表你已經同意此版規則，並已經詳細閱讀過。</span>
            </div>
            <div class="modal-body d-flex flex-column justify-content">
              <label for="signhgTextarea">請問您已經閱讀過版規了嗎?</label>
              <textarea class="form-control" id="signhgTextarea" rows="3"></textarea>
            </div>
            <div class="modal-footer d-flex justify-content-between">
              <button type="button" class="btn btn-outline-greyBtn" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-brilliantRed">申請</button>
            </div>
          </div>
        </div>
      </div>
    <!--申請加入獵場modal End-->
    <!--官方規則modal Start-->
      <div class="modal fade signUphgModal" id="official-rules-Modal" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header d-flex flex-column justify-content-center border-bottom-0">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 class="modal-title w-100 d-flex justify-content-center">官方規則</h5>
            </div>
            <div class="modal-body d-flex flex-column justify-content">
              <p><span>☘</span>請多尊重自己和他人，人生在世場外叭叭走，基本的道德、修養、禮儀還是要有的，不講道理不顧道德是會理虧的，所以請不要亂謾罵或惡意造謠，破壞場外該有善良和諧喔~</p>
              <p><span>☘</span>圖片、影片張貼不得過於裸露、煽情、血腥恐怖等等，皆歸屬於限制級範圍，而且場外休憩區，是被站方列為12+輔導級的，請大家要常謹記喔~</p>
              <p><span>☘</span>文章子版請盡量分類正確，尤其是『創作天地』『技藝知識』這是比較專業領域的，希望大家一起守護和多尊重</p>
              <p><span>☘</span>轉貼文章請盡量附上來源，也請不要隨意竄改造成誤導視聽，以免引起誤會紛爭</p>
              <p><span>☘</span>發文/回文請盡量不要留太多空白、或連續貼很多圖片，這會造成閱讀/讀取困難的</p>
              <p><span>☘</span>本版只單純討論，不支援人肉搜尋、揪團留言等等情事，如有此情況一律嚴懲</p>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="button" class="btn btn-brilliantRed" data-dismiss="modal">我了解了</button>
            </div>
          </div>
        </div>
      </div>
    <!--官方規則modal End-->
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
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
import Tribeloudly from '../../components/Tribeloudly.vue'
import $ from 'jquery'
export default {
  components: {
    Pagenation,
    Tribeloudly
  },
  data () {
    return {
      booleantest: false,
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
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 73
        },
        {
          title: '山涉叢林爬水獵場',
          profession: '喵喵Candysweet獵人',
          number_of_people: 2334,
          category: '推薦',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 74
        }
      ],
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
      arts: [
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '獵場公告',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          like: require('@/assets/image/icon/red_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '06/01 14:30',
          poster: '@brian',
          num: 1,
          tribe: 'ocen',
          tribe_badge_img: require('@/assets/image/account/badge_blue.svg'),
          id: 9
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '部落規定',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/tribal_rules.png'),
          like: require('@/assets/image/icon/red_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '06/08 18:30',
          poster: '@andrew',
          num: 2,
          tribe: 'ocen',
          tribe_badge_img: require('@/assets/image/account/badge_blue.svg'),
          id: 10
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '熱門話題',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/hot_topic.png'),
          like: require('@/assets/image/icon/oran_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 55,
          postTime: '07/08 6:30',
          poster: '@jack',
          num: 3,
          tribe: 'mountain',
          tribe_badge_img: require('@/assets/image/account/badge_yellow.svg'),
          id: 11
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          like: require('@/assets/image/icon/oran_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 56,
          postTime: '07/09 14:50',
          poster: '@mia',
          num: 4,
          tribe: 'mountain',
          tribe_badge_img: require('@/assets/image/account/badge_yellow.svg'),
          id: 12
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          like: require('@/assets/image/icon/grey_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '07/10 9:30',
          poster: '@jackson',
          num: 5,
          tribe: 'land',
          tribe_badge_img: require('@/assets/image/account/badge_red.svg'),
          id: 13
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          like: require('@/assets/image/icon/grey_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 60,
          postTime: '07/31 8:30',
          poster: '@kai',
          num: 6,
          tribe: 'land',
          tribe_badge_img: require('@/assets/image/account/badge_red.svg'),
          id: 14
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          like: require('@/assets/image/icon/red_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 23,
          postTime: '08/03 13:30',
          poster: '@vivi',
          num: 7,
          tribe: 'ocen',
          tribe_badge_img: require('@/assets/image/account/badge_blue.svg'),
          id: 15
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          like: require('@/assets/image/icon/oran_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '08/08 14:30',
          poster: '@marry',
          num: 8,
          tribe: 'land',
          tribe_badge_img: require('@/assets/image/account/badge_red.svg'),
          id: 16
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          like: require('@/assets/image/icon/grey_temp.svg'),
          like_count: 999,
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 90,
          postTime: '08/21 1:30',
          poster: '@joanna',
          num: 9,
          tribe: 'mountain',
          tribe_badge_img: require('@/assets/image/account/badge_yellow.svg'),
          id: 17
        }
      ],
      filter: 'ocen'
    }
  },
  methods: {
    isshowdrop () {
      if (this.booleantest === false) {
        this.booleantest = true
      }
    },
    submitldly () {
      $('#iwanttoloudlyCenter').modal('hide')
    }
  },
  computed: {
    // filtertribe: function () {
    //   if (this.arts.tribe === 'ocen') {
    //     return this.arts.filter(function (item) {
    //       return item.arts === 'ocen'
    //     })
    //   } else if (this.arts.tribe === 'land') {
    //       return item.arts === 'ocen'
    //   } else if (this.arts.tribe === 'mountain') {

    //   }
    // }
  }
}
</script>
