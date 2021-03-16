<template>
  <div>
    <div class="travel-header d-flex align-items-end">
      <div class="container custom-container-width">
        <div class="row mx-0">
          <div class="col-6 col-lg-3 travel-laoya">
            <img src="../../assets/image/travel/travel_laoya.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container custom-container-width">
      <Tribeloudly/>
      <!--橘色選單-->
      <div class="travel-nav">
        <div class="py-2">
          <div class="row travel_nav_bar mx-0">
            <div class="col-md-12 col-lg-12 col-xl-2 d-flex align-items-center artsort_btn">
              <img class="mr-2" src="../../assets/image/travel/icon/icon_filter.svg" alt="">
              <p class="mb-0 text-white">文章排序</p>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-7 d-flex align-items-center art_categories">
              <ul class="list-unstyled d-flex justify-content-between flex-wrap mb-0 travel_navoption h-100">
                <div class="d-flex align-items-center flex-wrap">
                  <li><a class="navoption_a">旅遊</a></li>
                  <li><a class="navoption_a">美食</a></li>
                  <li><a class="navoption_a">時尚</a></li>
                  <li><a class="navoption_a">健康</a></li>
                  <li><a class="navoption_a">影視</a></li>
                  <li><a class="navoption_a">運動</a></li>
                  <li><a class="navoption_a">數位3C</a></li>
                  <li class="hg-menu-art">
                    <a class="navoption_a">藝文</a>
                    <ul class="list-unstyled">
                      <li class="navoption_sub_li"><a class="navoption_sub_a">圖文創造</a></li>
                      <li class="navoption_sub_li"><a class="navoption_sub_a">散文小說</a></li>
                    </ul>
                  </li>
                  <li><a class="navoption_a">政經</a></li>
                  <li><a class="navoption_a">學習</a></li>
                  <li><a class="navoption_a">其他</a></li>
                </div>
              </ul>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-3 d-flex align-items-center justify-content-xl-end">
              <div class="d-flex hg-nav-search">
                <input type="text" placeholder="搜尋獵場關鍵字">
                <img src="../../assets/image/icon/ic_search.svg" alt="" class="hg-search-icon">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--橘色選單End-->
      <!--同好獵場字卡區塊-->
      <div class="discus">
        <div class="row mx-0">
          <div class="col-lg-12 px-0 mb-3">
            <div class="col-lg-3 px-0">
              <select class="form-control">
                <option>討論熱度(由高至低)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-0 mb-3 pb-3 border-bottom" v-for="art in travelArticle" :key="art.id">
        <div class="col-xl-12">
          <div class="row d-flex">
            <div class="col-12 col-lg-12 col-xl-3  p-0 mgmt-table-block travel_art_block">
              <img :src="art.artImg" alt="" class="mgmt-table-img travel_art_img">
              <span class="travel_art_tags">{{ art.recommand }}</span>
            </div>
            <div class="col-12 col-lg-12 col-xl-9 d-flex justify-content-between flex-column">
              <div class="mgmt-table-text">
                <h6>{{ art.title }}</h6>
                <p>
                  {{ art.decription }}
                  <router-link to="/article">更多</router-link>
                </p>
              </div>
                <div class="mgmt-info">
                  <ul class="list-unstyled mb-0 row">
                    <li class="d-flex align-items-center pr-4 pb-1"><img class="pr-1" src="../../assets/image/icon/thermometer.svg" alt="">討論熱度: 431343</li>
                    <li class="d-flex align-items-center pr-4 pb-1"><img class="pr-1" src="../../assets/image/icon/hunter.svg" alt="">管理獵人: 喵喵Candy</li>
                    <li class="d-flex align-items-center pr-4 pb-1"><img class="pr-1" src="../../assets/image/icon/clock.svg" alt="">成立時間: 2020/06/06</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!--同好獵場字卡區塊End-->
      <Pagenation class="my-5"/>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
import Tribeloudly from '../../components/Tribeloudly.vue'
export default {
  components: {
    Pagenation,
    Tribeloudly
  },
  data () {
    return {
      travelArticle: [
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '獵場公告',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          recommand: '推薦',
          postTime: '06/01 14:30',
          poster: '@brian',
          num: 1,
          id: 9
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '部落規定',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/tribal_rules.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          recommand: '推薦',
          postTime: '06/08 18:30',
          poster: '@andrew',
          num: 2,
          id: 10
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '熱門話題',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/hot_topic.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 55,
          recommand: '推薦',
          postTime: '07/08 6:30',
          poster: '@jack',
          num: 3,
          id: 11
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 56,
          recommand: '推薦',
          postTime: '07/09 14:50',
          poster: '@mia',
          num: 4,
          id: 12
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          recommand: '推薦',
          postTime: '07/10 9:30',
          poster: '@jackson',
          num: 5,
          id: 13
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 60,
          recommand: '推薦',
          postTime: '07/31 8:30',
          poster: '@kai',
          num: 6,
          id: 14
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 23,
          recommand: '推薦',
          postTime: '08/03 13:30',
          poster: '@vivi',
          num: 7,
          id: 15
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          recommand: '推薦',
          postTime: '08/08 14:30',
          poster: '@marry',
          num: 8,
          id: 16
        },
        {
          title: '爬山涉水獵場都市叢林獵場都市叢林獵場...',
          decription: '最近多是假日去微風廣場，行經八德路時總會看到一排小店，其中有一家日本料理特別吸引amy的目光，但常看它大門是拉下來的，以為還沒開幕，就這樣過就這樣過西門町美食｜貳拾陸巷Somebody Cafe 一場突如其來的大雨，打亂了我們原先...',
          categories: '在地活動',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 90,
          recommand: '推薦',
          postTime: '08/21 1:30',
          poster: '@joanna',
          num: 9,
          id: 17
        }
      ]
    }
  }
}
</script>
