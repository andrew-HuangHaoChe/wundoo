<template>
  <div class="notice-bg">
    <div class="container custom-container-width pt-12">
      <div class="signup-title d-flex">
      <span class="signup-title-bar"></span>
        交易紀錄
      </div>
    </div>
    <div class="nt-icon">
      <div class="container custom-container-width">
        <div class="nt-icon-bar w-100 bg-white">
          <ul class="d-flex flex-wrap list-unstyled mb-0">
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/all.svg" alt=""><span class="d-block text-center">全部類別</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/remind.svg" alt=""><span class="d-block text-center">送禮</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/Favorites.svg" alt=""><span class="d-block text-center">廣告</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/announcement.svg" alt=""><span class="d-block text-center">獎勵</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nt-message mt-4 mb-5">
      <div class="container custom-container-width pb-4">
        <div class="nt-message-content">
          <h5>搜尋範圍</h5>
          <div class="row mb-3">
            <div class="col-2">
              <select class="custom-select">
                <option selected>請選擇年分</option>
                <option value="1">2019</option>
                <option value="2">2020</option>
                <option value="3">2021</option>
              </select>
            </div>
            <div class="col-2">
              <select class="custom-select">
                <option selected>請選擇月份</option>
                <option value="jan">01</option>
                <option value="feb">02</option>
                <option value="mar">03</option>
                <option value="apr">04</option>
                <option value="may">05</option>
                <option value="jun">06</option>
                <option value="jul">07</option>
                <option value="aug">08</option>
                <option value="sep">09</option>
                <option value="oct">10</option>
                <option value="nov">11</option>
                <option value="dec">12</option>
              </select>
            </div>
          </div>
          <div>
            <div class="row m-0 mgmt-title-block" style="background: #000000;">
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title">
                <h5>時間</h5>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-2 mgmt-art-title">
                <h5>類別</h5>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-4 mgmt-art-title">
                <h5>交易項目</h5>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title">
                <h5>幣種</h5>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title">
                <h5>數量</h5>
              </div>
            </div>
            <div class="row m-0 border-bottom" v-for="art in arts" :key="art.id">
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex flex-column align-items-sm-start align-items-md-center justify-content-center categories-block py-3">
                {{ art.postTime }}
              </div>
              <div class="col-md-2 col-lg-3 col-xl-2">
                <div class="d-flex align-items-center justify-content-center h-100 w-100 py-3">
                  <p class="mb-0">
                    {{ art.categories }}
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-4">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p class="mb-0">{{ art.decription }}</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p class="mb-0">{{ art.coin }}</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p class="mb-0">
                    {{ art.num }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Pagenation class="py-4"></Pagenation>
        </div>
      </div>
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
      transRecord: [
        {
          category: '全部',
          status: '您的廣告尚未付款!',
          statusContent: '待完成付款後，廣告方可排程上架',
          timeNow: '8月22號',
          id: 1
        },
        {
          category: '未讀',
          status: '您的廣告已付款!',
          statusContent: '今天已完成付款，將盡速幫您排程上架',
          timeNow: '8月22號',
          id: 2
        },
        {
          category: '全部',
          status: '您的廣告尚未付款!',
          statusContent: '待完成付款後，廣告方可排程上架',
          timeNow: '8月22號',
          id: 3
        },
        {
          category: '未讀',
          status: '您的廣告已付款!',
          statusContent: '今天已完成付款，將盡速幫您排程上架',
          timeNow: '8月22號',
          id: 4
        },
        {
          category: '全部',
          status: '您的廣告尚未付款!',
          statusContent: '待完成付款後，廣告方可排程上架',
          timeNow: '8月22號',
          id: 5
        },
        {
          category: '未讀',
          status: '您的廣告已付款!',
          statusContent: '今天已完成付款，將盡速幫您排程上架',
          timeNow: '8月22號',
          id: 6
        }
      ],
      arts: [
        {
          coin: '貝殼幣',
          decription: '贈送好友VIP會員資格x7天',
          categories: '贈送',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '2020/08/01',
          poster: '@brian',
          num: -1000,
          id: 9
        },
        {
          coin: '信用卡',
          decription: '購買在地廣告A方案',
          categories: '廣告',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/tribal_rules.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '2020/08/01',
          poster: '@andrew',
          num: -1500,
          id: 10
        },
        {
          coin: '貝殼幣',
          decription: '贈送好友VIP會員資格x7天',
          categories: '贈送',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/hot_topic.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 55,
          postTime: '2020/08/01',
          poster: '@jack',
          num: -200,
          id: 11
        },
        {
          coin: '信用卡',
          decription: '購買在地廣告A方案',
          categories: '廣告',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 56,
          postTime: '2020/08/01',
          poster: '@mia',
          num: -250,
          id: 12
        },
        {
          coin: '抽獎券',
          decription: '領取廣告優惠券',
          categories: '獎勵',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '2020/08/01',
          poster: '@jackson',
          num: '1張',
          id: 13
        },
        {
          coin: '抽獎券',
          decription: '領取廣告優惠券',
          categories: '獎勵',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 60,
          postTime: '2020/08/01',
          poster: '@kai',
          num: '1張',
          id: 14
        },
        {
          coin: '信用卡',
          decription: '購買在地廣告A方案',
          categories: '廣告',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 23,
          postTime: '2020/08/01',
          poster: '@vivi',
          num: -350,
          id: 15
        },
        {
          coin: '抽獎券',
          decription: '領取廣告優惠券',
          categories: '獎勵',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '2020/08/01',
          poster: '@marry',
          num: '1張',
          id: 16
        },
        {
          coin: '貝殼幣',
          decription: '贈送好友VIP會員資格x7天',
          categories: '贈送',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 90,
          postTime: '2020/08/01',
          poster: '@joanna',
          num: -2500,
          id: 17
        }
      ]
    }
  }
}
</script>
