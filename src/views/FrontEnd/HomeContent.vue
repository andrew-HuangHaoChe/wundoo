<template>
  <div>
    <!--旅行打獵趣-->
    <div class="homo mb-3">
      <div class="container custom-container-width">
        <div class="row row-cols-1">
          <div class="col-md-12 d-flex">
            <img
              src="../../assets/image/category/Title2_Img01.svg"
              alt=""
              class="homo-title-img"
            />
            <h2 class="d-flex align-items-center home-share-title">
              旅行打獵趣
            </h2>
            <router-link to="/travelhunting" class="homo-check-all d-flex align-items-center">查看全部</router-link>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12 col-md-4 col-lg-3 homo-card-f"
            v-for="item in cardData"
            :key="item.id"
          >
            <div
              class="homo-card d-flex align-items-start flex-column"
              :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
            >
              <div class="mb-auto">
                <span class="homo-card-tag">{{ item.category }}</span>
              </div>
              <div class="hunting-ground-title">
                <h3 class="homepage-text-shadow">{{ item.title }}</h3>
              </div>
              <div
                class="d-flex w-100 justify-content-between hunt-people-block"
              >
              <div class="d-flex w-100">
                <div class="mr-auto d-flex align-items-center">
                  <p class="travel-hunt-prof mb-0 text-white homepage-text-shadow">{{ item.profession }}</p>
                  <!-- <img class="pr-1" src="../../assets/image/icon/num_of_hg.svg" alt="">
                  <span class="hunt-people-number">獵場人數: {{ item.number_of_people }}</span> -->
                </div>
              </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <!--同好獵場-->
    <div class="travel-hunting">
      <div class="container custom-container-width">
        <div class="row row-cols-1">
          <div class="col-md-12 d-flex">
            <img src="../../assets/image/category/Title3_Img01.svg" alt="" class="homo-title-img">
            <h2 class="d-flex align-items-center home-share-title">
              繁榮的同好獵場
            </h2>
            <router-link to="/huntground" class="homo-check-all d-flex align-items-center">查看全部</router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-4 col-md-3 travel-block-f" v-for="hunt in cardData" :key="hunt.id">
            <div class="d-flex travel-hunt-block">
              <div class="row">
                <div class="col-4 col-sm-5 col-md-12 col-lg-5">
                <div class="travel-image">
                  <img :src="hunt.imageUrl" alt="">
                  <span class="travel-tag">{{ hunt.category }}</span>
                </div>
                </div>
                <div class="col-8 col-sm-7 col-md-12 col-lg-7">
                  <div class="travel-textcontent">
                    <span class="travel-hunt-name mb-2">{{ hunt.title }}</span>
                    <div class="d-flex mb-2">
                      <img src="../../assets/image/icon/num_of_hg.svg" alt="" class="d-inline-block hunter"/>
                      <span class="d-flex align-items-center">獵場人數: 25813</span>
                    </div>
                    <div>
                      <router-link to="/huntground" class="btn btn-brilliantRed py-1">進入獵場</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--格線-->
    <div class="hr-img">
      <div class="container custom-container-width d-flex justify-content-center">
        <img src="../../assets/image/category/Title1_Img02.svg" alt="">
      </div>
    </div>
    <!--中獎總是要還-->
    <div class="always-pay-back">
      <div class="container custom-container-width">
        <div class="row row-cols-1">
          <div class="col-md-12 d-flex">
            <img src="../../assets/image/category/Title4_Img01.svg" alt="" class="homo-title-img">
            <h2 class="d-flex align-items-center home-share-title">
              中獎總是要還
            </h2>
            <router-link to="/winMustpay" class="homo-check-all d-flex align-items-center">查看全部</router-link>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 col-md-4 col-lg-2 mb-3" v-for="winer in winning" :key="winer.id">
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
    </div>
    <!--底部廣告-->
    <div class="advertising">
      <div class="container custom-container-width">
        <div class="row adv-img">
          <h2 class="mb-0 d-flex align-items-center">底部廣告(大型商家簽約)</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cardData: [
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
          imgUrl: 'https://images.unsplash.com/photo-1574377250314-360968d9d54a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的烤箱!這次一定要好好珍惜...',
          id: 'msg03'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '四獎/知名品牌50吋FULL-HD電視螢幕，擁有4K解析度',
          imgUrl: 'https://images.unsplash.com/photo-1592306219952-2f08be424a67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的電視!這次一定要好好珍惜...',
          id: 'msg04'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '五獎/大廠手機乙隻，屏幕下指紋辨識，搭載最新的高通S865處理器',
          imgUrl: 'https://images.unsplash.com/photo-1599382103240-5f2a57137d28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的手機!這次一定要好好珍惜...',
          id: 'msg05'
        },
        {
          title: '十萬冒險金-跟著老牙去',
          awards: '六獎/知名品牌電動機車，重新定義代步工具，附贈一年內事故意外保險',
          imgUrl: 'https://images.pexels.com/photos/2549355/pexels-photo-2549355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          winnerName: '我是帥哥一枚',
          winnerPic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          winnerText: '好開心抽中獎品，這樣就可以擁有新的機車!這次一定要好好珍惜...',
          id: 'msg06'
        }
      ]
    }
  }
}
</script>
