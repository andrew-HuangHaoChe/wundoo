<template>
  <div>
    <div class="container custom-container-width mt-11">
      <div class="my-3">
          <ul class="d-flex flex-wrap list-unstyled mb-0">
            <li class="pr-2">
              <router-link to="/huntground" class="d-flex align-items-center memberbadge">
                <img src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png" alt=""/>同好獵場 /
              </router-link>
            </li>
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge" href="#">獵場名稱 /</a>
            </li>
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge" href="#">版主群 /</a>
            </li>
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge membdg-active" href="#">審核新成員</a>
            </li>
          </ul>
      </div>
      <div class="mem-mgmt-nav mb-3">
        <div class="row d-flex align-items-center">
          <div class="col-12 col-md-5 col-lg-4 d-flex justify-content-center">
            <div class="member-search w-100">
              <input class="w-100" type="text" placeholder="搜尋成員">
              <a href="#"><img src="../../assets/image/icon/ic_search.svg" alt="" class="member-search-icon"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="member-list-title mb-3">
        <h5>審核新成員</h5>
      </div>
      <div class="member-list">
        <div class="row mgmt-title-block">
          <div class="col-2 col-md-12 col-lg-2 col-xl-2 mgmt-art-title">
            <h5>成員類型</h5>
          </div>
          <div class="col-2 col-md-12 col-lg-3 col-xl-3 mgmt-art-title">
            <h5>頭像 / 名字 / ID</h5>
          </div>
          <div class="col-2 col-md-12 col-lg-2 col-xl-2 mgmt-art-title">
            <h5>等級</h5>
          </div>
          <div class="col-2 col-md-12 col-lg-2 col-xl-2 mgmt-art-title">
            <h5>加入時間</h5>
          </div>
          <div class="col-3 col-md-12 col-lg-3 col-xl-3 mgmt-art-title">
            <h5>動作</h5>
          </div>
        </div>
        <div class="row" v-for="(member, index) in members" :key="member.id" :class="{ 'mgmt-active':index%2 !== 1 }">
          <div class="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center align-items-md-start justify-content-center align-items-lg-center p-2 member-border-bottom member-manager">
            <img v-if="member.managerImg !== ''" :src="member.managerImg" alt="" style="height: 30px; width: 30px;">
            <p class="mb-0 review-categories"
              :class="{ 'hg-guard': member.categories ==='獵場守衛',
              'hg-manager': member.categories ==='獵場管理人員',}">
              {{ member.categories }}
            </p>
          </div>
          <div class="col-12 col-md-12 col-lg-3 d-flex member-avatar-block member-border-bottom">
            <div class="member-image member-avatar">
              <img :src="member.memberImg" alt="成員頭像" :class="{
              'hg-manager': member.categories ==='獵場管理人員',
              'hg-land': member.tribe ==='陸地',
              'hg-ocen': member.tribe ==='海洋',
              'hg-mountain': member.tribe ==='高山'}">
              <div class="member-tribe">
                <img :src="member.categoryImg" alt="部落分類">
              </div>
            </div>
            <div class="member-title d-flex flex-column justify-content-center">
              <h6 class="mb-0">{{ member.name }}</h6>
              <span>{{ member.poster }}</span>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-2 d-flex justify-content-start justify-content-md-start justify-content-lg-center justify-content-lg-center align-items-center member-lv member-border-bottom">
            <span>Lv: {{ member.lv }}</span>
          </div>
          <div class="col-12 col-md-12 col-lg-2 d-flex justify-content-start justify-content-md-start justify-content-lg-center align-items-center member-join-time member-border-bottom">
            <span>
              {{ member.joinTime }}
            </span>
          </div>
          <div class="col-12 col-md-12 col-lg-3 member-authority member-border-bottom re-new-member">
            <ul class="d-flex justify-content-between justify-content-md-start justify-content-lg-center justify-content-xl-between align-items-center h-100 list-unstyled row px-2" v-if="member.categories !=='獵場管理人員'">
              <li class="pass-review"><a class="d-flex align-items-center" href="#"><img class="pr-2" src="../../assets/image/huntground_lk/hg_icon/pass.png" alt="">通過</a></li>
              <li class="not-pass-review"><a class="d-flex align-items-center" href="#"><img class="pr-2" src="../../assets/image/huntground_lk/hg_icon/notpass.png" alt="">不通過</a></li>
              <li class=""><a href="#" data-toggle="modal" data-target="#application-Modal">申請原因</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Pagenation class="my-5"></Pagenation>
    </div>
    <!--申請原因modal Start-->
    <div class="modal fade signUphgModal" id="application-Modal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column justify-content-center border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title w-100 d-flex justify-content-center">查看申請原因</h5>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <form class="apl-form">
              <div class="form-group">
                <label>請問你已經閱讀過版規了嗎?</label>
                <textarea class="form-control" rows="3" readonly="readonly">已經閱讀過</textarea>
              </div>
              <div class="form-group">
                <label>請回答獵場規則第二項</label>
                <textarea class="form-control" rows="3" readonly="readonly">大家要相親相愛</textarea>
              </div>
              <div class="form-group">
                <label>請簡短介紹自己</label>
                <textarea class="form-control" rows="3" readonly="readonly">我是貓咪粗乃玩，喜歡玩水。</textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--申請原因modal End-->
  </div>
</template>
<style lang="scss" scoped>
.pass-review, .not-pass-review{
  border: 1px solid #D8D7D6;
  border-radius: 5px;
  padding: 8px 16px;
}
.apl-form {
  width: 60%;
  textarea {
    background: white;
  }
}
.review-categories {
  border: 1px solid #DC131A;
  border-radius: 5px;
  padding: 5px 30px;
  background-color: white;
}
.re-new-member {
  li {
    @media(max-width: 768px) {
      margin: 0 10px;
    }
    @media(max-width: 576px) {
      margin: 0;
    }
  }
}
</style>
<script>
import Pagenation from '../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  },
  data () {
    return {
      members: [
        {
          id: 1,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          categoryImg: require('@/assets/image/account/badge_red.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '陸地'
        },
        {
          id: 2,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573497490701-f84eda04e280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_blue.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '海洋'
        },
        {
          id: 3,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573497490701-f84eda04e280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_blue.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '海洋'
        },
        {
          id: 4,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 5,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 6,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 7,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 8,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 9,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 10,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 11,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 12,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        },
        {
          id: 13,
          categories: '新申請',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山'
        }
      ]
    }
  }
}
</script>
