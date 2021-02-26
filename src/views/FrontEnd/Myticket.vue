<template>
  <div class="bg-white">
    <div class="container custom-container-width pt-12">
      <div class="signup-title d-flex">
      <span class="signup-title-bar"></span>
        我的票券
      </div>
      <div class="d-flex">
        <input class="mr-2" type="checkbox" id="showticket"><label class="mb-0" for="showticket">只展示最近一年票券</label>
      </div>
    </div>
    <div class="nt-message mt-4 mb-5">
      <div class="container custom-container-width">
        <div class="">
          <div>
            <div class="row m-0 mgmt-title-block" style="background: #000000;">
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title">
                <h5>領取時間</h5>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-2 mgmt-art-title">
                <h5>使用期限</h5>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-6 mgmt-art-title p-2">
                <h5>票券名稱</h5>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mgmt-art-title p-2">
                <h5>數量</h5>
              </div>
            </div>
            <div class="row m-0 border-bottom" v-for="art in arts" :key="art.id">
              <div class="col-md-2 col-lg-2 col-xl-2 d-flex flex-column align-items-sm-start align-items-md-center justify-content-center categories-block py-3">
                {{ art.postTime }}
              </div>
              <div class="col-md-2 col-lg-3 col-xl-2">
                <div class="d-flex align-items-center justify-content-center h-100 w-100 py-3">
                  <p class="mb-0 text-center">
                    {{ art.periodofuse }}<br>截止
                  </p>
                </div>
              </div>
              <div class="col-md-2 col-lg-3 col-xl-6">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p class="mb-0">{{ art.tickname }}</p>
                </div>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2">
                <div class="d-flex w-100 h-100 justify-content-center align-items-center py-3">
                  <p class="mb-0">{{ art.num }}</p>
                </div>
              </div>
            </div>
          </div>
          <Pagenation class="my-5"></Pagenation>
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
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '2020/08/01',
          poster: '@brian',
          num: 1,
          price: '-6,300',
          status: '已付款',
          id: 9
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/tribal_rules.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '2020/08/01',
          poster: '@andrew',
          num: 1,
          price: '-6,300',
          status: '未付款',
          id: 10
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: require('@/assets/image/huntground_lk/hg_icon/hot_topic.png'),
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 55,
          postTime: '2020/08/01',
          poster: '@jack',
          num: 1,
          price: '-6,300',
          status: '已付款',
          id: 11
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 56,
          postTime: '2020/08/01',
          poster: '@mia',
          num: 1,
          price: '-6,300',
          status: '編輯中',
          id: 12
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 30,
          postTime: '2020/08/01',
          poster: '@jackson',
          num: 1,
          price: '-6,300',
          status: '編輯中',
          id: 13
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 60,
          postTime: '2020/08/01',
          poster: '@kai',
          num: 1,
          price: '-6,300',
          status: '未付款',
          id: 14
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 23,
          postTime: '2020/08/01',
          poster: '@vivi',
          num: 1,
          price: '-6,300',
          status: '編輯中',
          id: 15
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 80,
          postTime: '2020/08/01',
          poster: '@marry',
          num: 1,
          price: '-6,300',
          status: '已付款',
          id: 16
        },
        {
          tickname: '買一送一優惠折價券',
          periodofuse: '2020/08/30',
          imgUrl: '',
          artImg: 'https://images.unsplash.com/photo-1604542031651-5337d8914e58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          temp: 90,
          postTime: '2020/08/01',
          poster: '@joanna',
          num: 1,
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

input[type="checkbox"]{
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  box-sizing: content-box ;
  width: 20px;
  height: 20px;
  border-width: 0;
  transition: all .3s linear;
  border: 2px solid #ccc;
  @media(max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
}
input[type="checkbox"]:checked{
  background-color: #E2273A;
  content: "\2713";
}
input[type="checkbox"]:checked:after{
  color: #fff;
  font-size: 18px;
  content: "\2713";
  margin: 0 auto;
  padding-left: 4px;
  position: absolute;
  top: -4px;
  @media(max-width: 1024px) {
    font-size: 14px;
    padding-left: 4px;
  }
}
input[type="checkbox"]:focus{
  outline: 0 none;
  box-shadow: none;
}
</style>
