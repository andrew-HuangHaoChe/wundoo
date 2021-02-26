<template>
  <div>
    <div class="container custom-container-width mem-padding">
      <div class="member_header mb-5">
        <div class="avastar">
          <div class="member_ph_block">
            <img class="member_ph" src="../../../assets/image/member/member_photo.jpg" alt="">
            <div class="race">
              <img class="race_img" src="../../../assets/image/account/badge_red.svg" alt="">
            </div>
            <p class="member_name mb-0">神劍闖江湖粗乃玩</p>
            <span class="member_id">@weqrqrrtregdg</span>
          </div>
        </div>
      </div>
      <div class="member_function d-flex justify-content-center mb-4 flex-wrap">
        <button class="cancel_friends_btn">
          <img src="../../../assets/image/member/icon/add_friends.png" alt="">
          <div class="cancel_drop_down_block">
            <div class="cancel_drop_down d-flex align-items-end">
              <img src="../../../assets/image/member/icon/cancel_icon.png" alt=""><span>取消好友</span>
            </div>
          </div>
        </button>
        <button><img src="../../../assets/image/member/icon/stick.png" alt=""></button>
        <button><img class="mr-2" src="../../../assets/image/member/icon/message.png" alt="">發送訊息</button>
        <button><img class="mr-2" src="../../../assets/image/member/icon/hg_icon.png" alt="">邀請加入獵場</button>
      </div>
      <div class="member_category">
        <ul class="d-flex list-unstyled justify-content-between mb-0">
          <li :class="{ 'member_category_active': membertab =='hunterinf' }" @click="membertab ='hunterinf'"><router-link to="/membercenter">獵人資訊</router-link></li>
          <li :class="{ 'member_category_active': membertab =='hunterdiary' }" @click="membertab ='hunterdiary'"><router-link to="/memberdiary">獵人日記</router-link></li>
          <li :class="{ 'member_category_active': membertab =='huntground' }" @click="membertab ='huntground'"><router-link to="/ptphuntground">獵場資訊</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      membertab: 'hunterinf'
    }
  }
}
</script>
