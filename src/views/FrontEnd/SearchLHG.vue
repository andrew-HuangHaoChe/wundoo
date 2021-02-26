<template>
  <div>
    <div class="container custom-container-width mt-11">
      <div class="search-result mx-0 mb-3">
        <p class="mb-0">搜尋結果: 獵場關鍵字 <span class="sea-key-word">爬山</span></p>
      </div>
      <div class="search-result-card">
        <div class="row">
          <div class="col-sm-6 col-lg-4 hg-card px-3" v-for="item in 9" :key="item.id">
            <div class="d-flex align-items-start flex-column hg-card-content search_art_img">
              <div class="mb-auto">
                <span class="search-art-card-tag">推薦</span>
              </div>
            </div>
            <div class="searchart_title_block">
              <p class="searchart_title">第一次體驗自由潛水！到底值不值得呢？體驗潛水需要注意的事項有哪... </p>
              <p class="searchart_sub_title">從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道這錢花下去到底值不值得。 我自己的水性很好，在海裡拍照，吸一口氣 ...</p>
            </div>
            <div class="art_des_block">
              <div class="row">
                <div class="col-12 col-lg-12 col-xl-6 card-margin">
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
                <div class="col-12 col-lg-12 col-xl-6 card-margin">
                  <div class="d-flex align-items-end justify-content-start justify-content-xl-end h-100">
                    <button class="btn btn-mainRed px-5">繼續閱讀</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Pagenation class="my-5"/>
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
