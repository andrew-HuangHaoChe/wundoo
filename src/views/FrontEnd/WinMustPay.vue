<template>
  <div>
    <div class="mustpay_header d-flex align-items-end text-white">
      <div class="container custom-container-width">
        <div class="row">
          <div class="col-lg-12 local-laoya">
            <img src="../../assets/image/huntground_lk/mustpay_wood.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="container custom-container-width">
      <Tribeloudly/>
      <!-- 格線 End-->
      <!--搜尋獵場文章-->
      <div class="mgmt-search-select">
        <form class="form-row d-flex align-items-center">
          <div class="form-group col-md-6 col-lg-3 col-xl-3">
            <select class="form-control" id="sumbitTime">
              <option value="" disabled selected hidden>獎項類別篩選</option>
              <option>家電</option>
              <option>食品</option>
              <option>3C</option>
              <option>旅遊</option>
            </select>
          </div>
          <div class="form-group d-flex col-md-6 col-lg-3 col-xl-3 mb-3">
            <div class="mgmt-search w-100">
              <input class="w-100" type="text" placeholder="搜尋獎項關鍵字">
              <a href="#"><img src="../../assets/image/icon/ic_search.svg" alt="" class="mgmt-search-icon"></a>
            </div>
          </div>
          <div class="form-group col-md-6 col-lg-3">
              <router-link to="/winningpost" class="btn btn-mainRed">我要發體驗文</router-link>
          </div>
        </form>
      </div>
      <div class="win_card">
          <div class="row mt-3">
          <div class="col-12 col-md-4 col-lg-3 mb-3" v-for="winer in winning" :key="winer.id">
            <div class="bowtie d-flex justify-content-center"><img src="../../assets/image/list/images/bow.svg" alt=""></div>
            <div class="winning-card">
              <div class="winning-card-title">
                <h4>{{ winer.title }}</h4>
              </div>
              <div class="winng-card-content">
                <p class="winer-award">{{ winer.awards }}</p>
                <div class="winer-img-block">
                  <img :src="winer.imgUrl" alt="" class="prize-image">
                </div>
                <div>
                  <div class="d-flex justify-content-between">
                    <h5 class="winner-name">{{ winer.winnerName }}</h5>
                    <div class="winner-pic">
                      <div class="head-sticker">
                        <img :src="winer.winnerPic" alt="" class="head-sticker-img">
                        <img src="../../assets/image/account/badge_red.svg" alt="" class="winner-badge">
                      </div>
                    </div>
                  </div>
                  <div class="winner-text">
                    {{ winer.winnerText }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagenation class="my-5"></Pagenation>
    <!--獵場文章 End-->
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
          title: '系統公告: 今日簽到即可獲得抽獎券一張，快前往簽到吧!'
        },
        {
          id: 2,
          title: '系統公告: 今日完成獵場創建，即可獲得虛擬寶物一個!'
        },
        {
          id: 3,
          title: '系統公告: 每日固定9~10點發送最新消息推播!'
        },
        {
          id: 4,
          title: '系統公告: 新冠肺炎疫情延燒，呼籲會員們勤洗手!'
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
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
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
          postTime: '08/21 1:30',
          poster: '@joanna',
          num: 9,
          id: 17
        }
      ],
      winning: [
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '一獎/大容量知名品牌冰箱，急速製冷讓您擁有妙用的食材冷藏庫',
          imgUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的冰箱!這次一定要好好珍惜...',
          id: 'msg01'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '二獎/switch遊戲機，附贈遊戲片任選兩片，趕快入手最新的遊戲掌機吧',
          imgUrl: 'https://images.unsplash.com/photo-1576083984411-40e2d77d6b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的遊戲機!這次一定要好好珍惜...',
          id: 'msg02'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '三獎/大容量知名品牌烤箱，擁有發酵、上下均火烘烤等多種功能',
          imgUrl: 'https://images.unsplash.com/photo-1521732292260-b73d63a37f5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的烤箱!這次一定要好好珍惜...',
          id: 'msg03'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '四獎/知名品牌50吋FULL-HD電視螢幕，擁有4K解析度',
          imgUrl: 'https://images.unsplash.com/photo-1575387873801-3ffec9e2839d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的電視!這次一定要好好珍惜...',
          id: 'msg04'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '五獎/大廠手機乙隻，屏幕下指紋辨識，搭載最新的高通S865處理器',
          imgUrl: 'https://images.unsplash.com/photo-1587212559341-1fe6a88023b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的手機!這次一定要好好珍惜...',
          id: 'msg05'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '六獎/知名品牌電動機車，重新定義代步工具，附贈一年內事故意外保險',
          imgUrl: 'https://images.unsplash.com/photo-1585573139865-fcc0aff09b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的機車!這次一定要好好珍惜...',
          id: 'msg06'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '一獎/大容量知名品牌冰箱，急速製冷讓您擁有妙用的食材冷藏庫',
          imgUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的冰箱!這次一定要好好珍惜...',
          id: 'msg07'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '二獎/switch遊戲機，附贈遊戲片任選兩片，趕快入手最新的遊戲掌機吧',
          imgUrl: 'https://images.unsplash.com/photo-1576083984411-40e2d77d6b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的遊戲機!這次一定要好好珍惜...',
          id: 'msg08'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '三獎/大容量知名品牌烤箱，擁有發酵、上下均火烘烤等多種功能',
          imgUrl: 'https://images.unsplash.com/photo-1521732292260-b73d63a37f5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的烤箱!這次一定要好好珍惜...',
          id: 'msg09'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '四獎/知名品牌50吋FULL-HD電視螢幕，擁有4K解析度',
          imgUrl: 'https://images.unsplash.com/photo-1575387873801-3ffec9e2839d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的電視!這次一定要好好珍惜...',
          id: 'msg10'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '五獎/大廠手機乙隻，屏幕下指紋辨識，搭載最新的高通S865處理器',
          imgUrl: 'https://images.unsplash.com/photo-1587212559341-1fe6a88023b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的手機!這次一定要好好珍惜...',
          id: 'msg11'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '六獎/知名品牌電動機車，重新定義代步工具，附贈一年內事故意外保險',
          imgUrl: 'https://images.unsplash.com/photo-1585573139865-fcc0aff09b88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的機車!這次一定要好好珍惜...',
          id: 'msg12'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '一獎/大容量知名品牌冰箱，急速製冷讓您擁有妙用的食材冷藏庫',
          imgUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的冰箱!這次一定要好好珍惜...',
          id: 'msg13'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '二獎/switch遊戲機，附贈遊戲片任選兩片，趕快入手最新的遊戲掌機吧',
          imgUrl: 'https://images.unsplash.com/photo-1576083984411-40e2d77d6b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的遊戲機!這次一定要好好珍惜...',
          id: 'msg14'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '三獎/大容量知名品牌烤箱，擁有發酵、上下均火烘烤等多種功能',
          imgUrl: 'https://images.unsplash.com/photo-1521732292260-b73d63a37f5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的烤箱!這次一定要好好珍惜...',
          id: 'msg15'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '四獎/知名品牌50吋FULL-HD電視螢幕，擁有4K解析度',
          imgUrl: 'https://images.unsplash.com/photo-1575387873801-3ffec9e2839d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的電視!這次一定要好好珍惜...',
          id: 'msg16'
        }
      ]
    }
  }
}
</script>
