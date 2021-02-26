<template>
  <div>
    <div class="container custom-container-width mt-11">
      <div class="my-3">
          <ul class="d-flex list-unstyled mb-0">
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge" href="#">
                <img class="pr-2" src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png" alt=""/>同好獵場 /
              </a>
            </li>
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge" href="#">獵場名稱 /</a>
            </li>
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge" href="#">版主群 /</a>
            </li>
            <li class="pr-2">
              <a class="d-flex align-items-center memberbadge membdg-active" href="#">舉報管理</a>
            </li>
          </ul>
      </div>
      <div class="mem-mgmt-nav mb-3">
        <div class="row d-flex align-items-center">
          <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-center">
            <div class="member-search w-100">
              <input class="w-100" type="text" placeholder="搜尋成員">
              <a href="#"><img src="../../assets/image/icon/ic_search.svg" alt="" class="member-search-icon"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="member-list-title mb-3">
        <h5>舉報管理</h5>
      </div>
      <div class="member-list">
        <div class="row mgmt-title-block">
          <div class="col-2 col-md-12 col-lg-4 col-xl-4 mgmt-art-title">
            <h5>被舉報成員 頭像 / 名字 / ID /等級</h5>
          </div>
          <div class="col-2 col-md-12 col-lg-3 col-xl-3 mgmt-art-title">
            <h5>時間</h5>
          </div>
          <div class="col-2 col-md-12 col-lg-3 col-xl-3 mgmt-art-title">
            <h5>舉報成員 頭像 / 名字 / ID</h5>
          </div>
          <div class="col-2 col-md-12 col-lg-2 col-xl-2 mgmt-art-title">
            <h5>動作</h5>
          </div>
        </div>
        <div class="row" v-for="(member, index) in members" :key="member.id" :class="{ 'mgmt-active':index%2 !== 1 }">
          <div class="col-7 col-md-7 col-lg-4 d-flex align-items-center member-avatar-block member-border-bottom">
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
            <div class="member-title pl-4 d-flex flex-column">
              <h6 class="mb-0">{{ member.name }}</h6>
              <span>{{ member.poster }}</span>
              <span>Lv: {{ member.lv }}</span>
            </div>
          </div>
          <div class="col-5 col-md-5 col-lg-3 d-flex justify-content-start justify-content-md-start justify-content-lg-center align-items-center member-join-time member-border-bottom">
            <span>
              {{ member.joinTime }}
            </span>
          </div>
          <div class="col-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-start justify-content-lg-center align-items-center member-join-time member-border-bottom repoter-block">
            <p class="mb-0">舉報者:</p>
            <div class="d-flex flex-column">
              <span>
                {{ member.repoter }}
              </span>
              <span>
                {{ member.repoterId }}
              </span>
            </div>
          </div>
          <div class="col-6 col-md-5 col-lg-2 member-authority member-border-bottom">
            <ul class="d-flex justify-content-center align-items-center h-100 list-unstyled" v-if="member.categories !=='獵場管理人員'">
              <li>
                <a class="d-flex align-items-center" href="#" data-toggle="modal" data-target="#check-Modal">查看原因</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Pagenation class="my-5"></Pagenation>
    </div>
    <!--查看原因modal-->
    <div class="modal fade" id="check-Modal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title w-100 text-center">查看舉報原因</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="px-5">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">查看舉報原因</label>
                <textarea class="form-control bg-white" id="mute-reason" rows="3" readonly="readonly">經常惡意毀謗、騷擾眾多成員</textarea>
              </div>
            </form>
          </div>
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
      members: [
        {
          id: 1,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 2,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 3,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 4,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 5,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 6,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 7,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 8,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 9,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 10,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 11,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 12,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        },
        {
          id: 13,
          categories: '一般成員',
          memberImg: 'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          categoryImg: require('@/assets/image/account/badge_yellow.png'),
          managerImg: '',
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '高山',
          repoter: '白帥帥貓',
          repoterId: '@repotercat'
        }
      ]
    }
  }
}
</script>
