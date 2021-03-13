<template>
  <div>
    <div class="container custom-container-width mt-11">
      <div class="search-result mx-0 mb-3">
        <p class="mb-0">搜尋結果: 獵場關鍵字 <span class="sea-key-word">爬山</span></p>
      </div>
      <div class="search-result-card">
        <div class="row">
          <div class="col-sm-6 col-lg-4 hg-card p-2" v-for="item in 9" :key="item.id">
            <div class="d-flex align-items-start flex-column hg-card-content search_art_img">
              <div class="mb-auto">
                <span class="search-art-card-tag">推薦</span>
              </div>
              <div class="hunting-ground-title">
                <h3 class="homepage-text-shadow">爬山涉水獵場都市叢林獵場</h3>
              </div>
              <div class="d-flex w-100 px-2">
                <div class="d-flex w-100 justify-content-between pb-2">
                  <div class="row w-100 mx-0">
                    <div class="col-6 col-md-12 col-lg-12 col-xl-7 px-0 d-flex justify-content-start align-items-center hg-card-bottom-block pl-1">
                      <img class="pr-1" src="../../assets/image/icon/num_of_hg.svg" alt="">
                      <span class="hg-card-people">獵場人數: 1234k</span>
                    </div>
                    <div class="col-6 col-md-12 col-lg-12 col-xl-5 px-0 d-flex justify-content-end justify-content-md-start justify-content-lg-start justify-content-xl-end pr-1">
                      <router-link to="/lhgManagement" class="btn btn-brilliantRed intohg">進入獵場</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="art_des_block">
              <!-- <div class="row">
                <div class="col-12 col-lg-12 col-xl-6">
                  <div class="search_des_list">
                    <ul class="list-unstyled">
                      <li>
                        <div class="d-flex align-items-center">
                          <img class="mr-2" src="../../assets/image/icon/thermometer.svg" alt="">
                          <p class="mb-0 mr-2">討論熱度:</p><span>414334</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <img class="mr-2" src="../../assets/image/icon/hunter.svg" alt="">
                          <p class="mb-0 mr-2">發文獵人:</p><span>喵喵candy</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <img class="mr-2" src="../../assets/image/icon/clock.svg" alt="">
                          <p class="mb-0 mr-2">發布時間:</p><span>2020/06/06</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12 col-lg-12 col-xl-6">
                  <div class="d-flex align-items-end justify-content-start justify-content-xl-end h-100">
                    <button class="btn btn-mainRed px-5">繼續閱讀</button>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagenation class="my-5 px-1"/>
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
      searchResult: [
        {
          title: '爬山涉水獵場叢林',
          profession: '喵喵Candysweet獵人',
          number_of_people: 1234,
          category: '熱門',
          article_des: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道這錢花下去到底值不值得。 我自己的水性很好，在海裡拍照，吸一口氣 ...',
          imageUrl: require('@/assets/image/images/blog/list_img02.jpg'),
          id: 1
        }
      ]
    }
  }
}
</script>
