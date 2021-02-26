<template>
  <div class="bg-white">
    <div class="container custom-container-width pt-12">
      <div class="signup-title d-flex">
      <span class="signup-title-bar"></span>
        我的廣告
      </div>
    </div>
    <div class="nt-message mt-4 mb-5">
      <div class="container custom-container-width pb-4">
        <div class="">
          <div>
            <div class="row m-0 mgmt-title-block" style="background: #000000;">
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title">
                <h5>時間</h5>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-6 mgmt-art-title">
                <h5>廣告標題</h5>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-1 mgmt-art-title p-2">
                <h5>金額</h5>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-1 mgmt-art-title p-2">
                <h5>狀態</h5>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title">
                <h5>編輯</h5>
              </div>
            </div>
            <div class="row m-0 border-bottom" v-for="art in arts" :key="art.id">
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex flex-column align-items-sm-start align-items-md-center justify-content-center categories-block py-3">
                {{ art.postTime }}
              </div>
              <div class="col-md-2 col-lg-3 col-xl-6">
                <div class="d-flex align-items-center justify-content-center h-100 w-100 py-3">
                  <p class="mb-0">
                    {{ art.categories }}
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-1">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p class="mb-0">{{ art.price }}</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-1">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p v-if="art.status == '已付款'" :class="{ 'alreadyPaid':ispay }" class="mb-0">【{{ art.status }}】</p>
                  <p v-if="art.status == '未付款'" :class="{ 'unpaid':unpay }" class="mb-0">【{{ art.status }}】</p>
                  <p v-if="art.status == '編輯中'" :class="{ 'edit':edit }" class="mb-0">【{{ art.status }}】</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <div v-if="art.status == '已付款'" class="d-flex">
                    <div class="d-flex align-items-center mr-4">
                      <i class="fas fa-pen mr-1"></i>
                      <p class="mb-0">編輯</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="fas fa-trash mr-1"></i>
                      <p class="mb-0">刪除</p>
                    </div>
                  </div>
                  <div v-if="art.status == '未付款'" class="d-flex">
                    <div class="d-flex align-items-center mr-4">
                      <i class="fas fa-pen mr-1"></i>
                      <p class="mb-0">編輯</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <img src="../../assets/image/member/icon/donotenter.svg" alt="">
                      <p class="mb-0">下架</p>
                    </div>
                  </div>
                  <div v-if="art.status == '編輯中'" class="d-flex">
                    <div class="d-flex align-items-center mr-4">
                      <i class="fas fa-pen mr-1"></i>
                      <p class="mb-0">編輯</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="fas fa-trash mr-1"></i>
                      <p class="mb-0">刪除</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <Pagenation class="py-4"></Pagenation> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Pagenation from '../../components/Pagination.vue'
export default {
//   components: {
//     Pagenation
//   },
  data () {
    return {
      ispay: true,
      unpay: true,
      edit: true,
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
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '贈送',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '2020/08/01',
          poster: '@brian',
          num: -1000,
          price: '-6,300',
          status: '已付款',
          id: 9
        },
        {
          coin: '信用卡',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '廣告',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/tribal_rules.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '2020/08/01',
          poster: '@andrew',
          num: -1500,
          price: '-6,300',
          status: '未付款',
          id: 10
        },
        {
          coin: '貝殼幣',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '贈送',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/hot_topic.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 55,
          postTime: '2020/08/01',
          poster: '@jack',
          num: -200,
          price: '-6,300',
          status: '已付款',
          id: 11
        },
        {
          coin: '信用卡',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '廣告',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 56,
          postTime: '2020/08/01',
          poster: '@mia',
          num: -250,
          price: '-6,300',
          status: '編輯中',
          id: 12
        },
        {
          coin: '抽獎券',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '獎勵',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '2020/08/01',
          poster: '@jackson',
          num: '1張',
          price: '-6,300',
          status: '編輯中',
          id: 13
        },
        {
          coin: '抽獎券',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '獎勵',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 60,
          postTime: '2020/08/01',
          poster: '@kai',
          num: '1張',
          price: '-6,300',
          status: '未付款',
          id: 14
        },
        {
          coin: '信用卡',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '廣告',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 23,
          postTime: '2020/08/01',
          poster: '@vivi',
          num: -350,
          price: '-6,300',
          status: '編輯中',
          id: 15
        },
        {
          coin: '抽獎券',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '獎勵',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '2020/08/01',
          poster: '@marry',
          num: '1張',
          price: '-6,300',
          status: '已付款',
          id: 16
        },
        {
          coin: '貝殼幣',
          decription: '新店開幕！現在加入會員享優惠折扣100元！數量有限！',
          categories: '贈送',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 90,
          postTime: '2020/08/01',
          poster: '@joanna',
          num: -2500,
          price: '-6,300',
          status: '編輯中',
          id: 17
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.edit {
    color: #357ECD;
}
.unpaid {
    color: #E2273A;
}
.alreadyPaid {
    color: #209F71;
}
</style>
