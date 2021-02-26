<template>
  <div>
      <div class="container custom-container-width px-0">
        <div class="searchexport">
          <div class="searchTitle d-flex">
            <h5 class="d-inline">搜尋結果:
              <p class="d-inline">文章關鍵字</p>
              <span class="d-inline">體驗潛水</span>
            </h5>
          </div>
        </div>
      </div>
      <div class="search-content">
        <div class="container custom-container-width">
          <div class="row">
            <div class="sear-card col-lg-6 py-4" v-for="item in article" :key="item.id">
              <div class="search-img-block pl-0" :style="{ backgroundImage: 'url(' + item.img_url + ')' }">
                <span>{{ item.category }}</span>
              </div>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-12 mb-2">
                    <ul class="list-unstyled search-icon mb-0 row">
                      <div class="col-12 col-md-6 col-lg-6 col-xl-4 pb-1">
                        <li class="d-flex flex-row align-items-center"><img src="../../assets/image/icon/thermometer.svg" alt=""><span>討論熱度: {{ item.discuss }}</span></li>
                      </div>
                      <div class="col-12 col-md-6 col-lg-6 col-xl-4 pb-1">
                        <li class="d-flex flex-row align-items-center"><img src="../../assets/image/icon/hunter.svg" alt=""><span>發文獵人: {{ item.postname }}</span></li>
                      </div>
                      <div class="col-12 col-md-6 col-lg-6 col-xl-4 pb-1">
                        <li class="d-flex flex-row align-items-center"><img src="../../assets/image/icon/clock.svg" alt=""><span>發布時間: {{ item.post_time }}</span></li>
                      </div>
                    </ul>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-brilliantRed countinue-read-btn">繼續閱讀</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagenation/>
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
      article: [
        {
          title: '第一次體驗潛水!到底值不值得?體驗潛水需要注意事項',
          content: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道錢下去到底值不值得，我自己的水性很好，在海裡拍照',
          discuss: '41234',
          category: '推薦',
          postname: '喵喵candy',
          post_time: '2020/06/06',
          img_url: 'https://images.unsplash.com/photo-1599719003561-fc49292c85bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 1
        },
        {
          title: '第一次體驗潛水!到底值不值得?體驗潛水需要注意事項',
          content: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道錢下去到底值不值得，我自己的水性很好，在海裡拍照',
          discuss: '41234',
          category: '推薦',
          postname: '喵喵candy',
          post_time: '2020/06/06',
          img_url: 'https://images.unsplash.com/photo-1599719003561-fc49292c85bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 2
        },
        {
          title: '第一次體驗潛水!到底值不值得?體驗潛水需要注意事項',
          content: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道錢下去到底值不值得，我自己的水性很好，在海裡拍照',
          discuss: '41234',
          category: '推薦',
          postname: '喵喵candy',
          post_time: '2020/06/06',
          img_url: 'https://images.unsplash.com/photo-1599719003561-fc49292c85bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 3
        },
        {
          title: '第一次體驗潛水!到底值不值得?體驗潛水需要注意事項',
          content: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道錢下去到底值不值得，我自己的水性很好，在海裡拍照',
          discuss: '41234',
          category: '推薦',
          postname: '喵喵candy',
          post_time: '2020/06/06',
          img_url: 'https://images.unsplash.com/photo-1599719003561-fc49292c85bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 4
        },
        {
          title: '第一次體驗潛水!到底值不值得?體驗潛水需要注意事項',
          content: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道錢下去到底值不值得，我自己的水性很好，在海裡拍照',
          discuss: '41234',
          category: '推薦',
          postname: '喵喵candy',
          post_time: '2020/06/06',
          img_url: 'https://images.unsplash.com/photo-1599719003561-fc49292c85bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 5
        },
        {
          title: '第一次體驗潛水!到底值不值得?體驗潛水需要注意事項',
          content: '從開始對自由潛水感興趣，到真正報名上課，中間大約超過半年。主要原因是我不知道錢下去到底值不值得，我自己的水性很好，在海裡拍照',
          discuss: '41234',
          category: '推薦',
          postname: '喵喵candy',
          post_time: '2020/06/06',
          img_url: 'https://images.unsplash.com/photo-1599719003561-fc49292c85bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: 6
        }
      ]
    }
  }
}
</script>
