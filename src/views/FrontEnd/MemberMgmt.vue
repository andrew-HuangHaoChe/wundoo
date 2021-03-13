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
              <a class="d-flex align-items-center memberbadge membdg-active" href="#">成員管理</a>
            </li>
          </ul>
      </div>
      <div class="mem-mgmt-nav mb-2">
        <div class="row d-flex align-items-center">
          <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-center mgmt-md-margin">
            <div class="member-search w-100">
              <input class="w-100" type="text" placeholder="搜尋成員">
              <a href="#"><img src="../../assets/image/icon/ic_search.svg" alt="" class="member-search-icon"></a>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-sm-start justify-content-md-center mgmt-md-margin">
            <router-link to="/reviewNewMember" class="d-flex">
              <img class="pr-1" src="../../assets/image/huntground_lk/hg_icon/review.png" alt="審核新成員">
              <p class="mb-0">審核新成員</p>
            </router-link>
          </div>
          <div class="col-12 col-md-4 col-lg-2 d-flex justify-content-sm-start justify-content-md-center">
            <router-link to="/reportmgmt">舉報管理</router-link>
          </div>
        </div>
      </div>
      <div class="member-list-title mb-2">
        <h5 class="mb-0">成員列表</h5>
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
            <p class="mb-0"
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
          <div class="col-12 col-md-12 col-lg-3 member-authority member-border-bottom">
            <ul class="d-flex justify-content-between justify-content-md-start justify-content-lg-between align-items-center h-100 list-unstyled" v-if="member.categories !=='獵場管理人員'">
              <li><a class="d-flex align-items-center" href="#" data-toggle="modal" data-target="#mute-Modal"><img src="../../assets/image/huntground_lk/hg_icon/mute.svg" alt=""> 禁言</a></li>
              <li v-if="member.categories ==='獵場守衛'"><a href="#">取消守衛</a></li>
              <li v-if="member.categories ==='一般成員'"><a href="#">成為守衛</a></li>
              <li><a href="#" data-toggle="modal" data-target="#kick-member-Modal">踢除成員</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Pagenation class="my-5"></Pagenation>
    </div>
    <!--踢除成員modal Start-->
    <div class="modal fade signUphgModal" id="kick-member-Modal" tabindex="-1">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column justify-content-center border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title w-100 d-flex justify-content-center">確定要踢出成員?</h5>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <p>踢出成員後他將不在獵場裡</p>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-outline-greyBtn" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-brilliantRed">確定</button>
          </div>
        </div>
      </div>
    </div>
    <!--踢除成員modal End-->
    <!--禁言modal Start-->
    <div class="modal fade signUphgModal" id="mute-Modal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column justify-content-center border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title w-100 d-flex justify-content-center">確定要禁言?</h5>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <div class="form-group muteSelect">
              <select class="form-control" id="muteSelect">
                <option class="mute-default" value="" disabled selected hidden>禁言天數選擇(1、3、7)</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group mute-reason">
              <label for="mute-reason">禁言原因</label>
              <textarea class="form-control" id="mute-reason" rows="3" placeholder="請填寫禁言原因(10字以上)"></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-outline-greyBtn" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-brilliantRed">確定</button>
          </div>
        </div>
      </div>
    </div>
    <!--禁言modal End-->
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
          categories: '獵場管理人員',
          memberImg: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          categoryImg: require('@/assets/image/account/badge_red.png'),
          managerImg: require('@/assets/image/huntground_lk/hg_icon/mgmt_ann.png'),
          name: '神箭闖江湖',
          poster: '@andrew',
          lv: 55 + '老鷹',
          joinTime: '2020/02/11 12:00',
          tribe: '陸地'
        },
        {
          id: 2,
          categories: '獵場守衛',
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
          categories: '獵場守衛',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
          categories: '一般成員',
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
