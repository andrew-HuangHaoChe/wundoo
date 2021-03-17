<template>
  <div>
    <div class="ava-block" :style="{ 'background-image': 'url(' + img.userA + ')'}" :class="{ mountainBorder : userTribe == 1, landBorder : userTribe == 2, ocenBorder : userTribe == 3 }">
      <img v-if="userTribe == 1" class="ava-cate" src="../assets/image/account/badge_yellow.svg" alt="">
      <img v-if="userTribe == 2" class="ava-cate" src="../assets/image/account/badge_red.svg" alt="">
      <img v-if="userTribe == 3" class="ava-cate" src="../assets/image/account/badge_blue.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: ['avatar'],
  data () {
    return {
      img: {
        userA: JSON.parse(localStorage.getItem('user')).avatar,
        userB: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        userC: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      },
      userTribe: JSON.parse(localStorage.getItem('user')).tribe
    }
  }
}
</script>
