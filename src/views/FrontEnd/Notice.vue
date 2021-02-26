<template>
  <div class="notice-bg pt-11">
    <div class="container custom-container-width">
      <div class="signup-title d-flex">
      <span class="signup-title-bar"></span>
        消息通知
      </div>
    </div>
    <div class="nt-icon">
      <div class="container custom-container-width">
        <div class="nt-icon-bar w-100 bg-white">
          <ul class="d-flex flex-wrap list-unstyled mb-0">
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/all.svg" alt=""><span class="d-block text-center">全部</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/remind.svg" alt=""><span class="d-block text-center">提醒</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/Favorites.svg" alt=""><span class="d-block text-center">收藏</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/announcement.svg" alt=""><span class="d-block text-center">公告</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/activity.svg" alt=""><span class="d-block text-center">活動</span></a></li>
            <li class="mr-5 notice-btn"><a href="#" class="d-flex flex-column align-items-center"><img class="all-icon" src="../../assets/image/icon/notice/comments.svg" alt=""><span class="d-block text-center">評論</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nt-message mt-4 mb-5">
      <div class="container custom-container-width">
        <div class="nt-message-content">
          <ul class="d-flex list-unstyled nt-message-btn mb-0">
            <li class="pr-3"><a href="#">全部(14)</a></li>
            <li><a href="#">未讀(7)</a></li>
          </ul>
          <hr class="mt-0">
          <span class="pl-4 only-show-years-ago">只展示最近一年的消息</span>
          <ul class="nt-list-content mt-3 mb-0">
            <li v-for="item in message" :key="item.id" class="notice_hover" data-toggle="modal" data-target="#delmessage">
              <div class="d-flex justify-content-between">
                <h4 class="d-inline">[提醒] <p class="d-inline">{{ item.status }}</p></h4>
                <a href="#"><i class="fas fa-times"></i></a>
              </div>
              <p class="mb-0 mt-2">{{ item.statusContent }}</p>
              <span>{{ item.timeNow }}</span>
            </li>
          </ul>
        </div>
        <Pagenation class="py-5"></Pagenation>
      </div>
      <!--刪除通知modal-->
      <div class="modal fade" id="delmessage" tabindex="-1" aria-labelledby="delmessageLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <h5 id="delmessageLabel" class="w-100 text-center mb-4">確認刪除當前消息嗎?</h5>
            <p class="text-center mb-5">消息刪除後無法恢復</p>
            <div class="modal-footer justify-content-between delmessage-btn">
              <button type="button" class="btn btn-mainRed">確認</button>
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            </div>
          </div>
        </div>
      </div>
      <!--刪除通知modal end-->
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
      message: [
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
      ]
    }
  }
}
</script>
