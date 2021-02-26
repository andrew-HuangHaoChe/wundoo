<template>
  <div>
    <div class="ava-block" :style="{ 'background-image': 'url(' + img.userA + ')'}">
      <img class="ava-cate" src="../assets/image/account/badge_yellow.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: ['avatar'],
  data () {
    return {
      img: {
        userA: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        userB: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        userC: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      }
    }
  }
}
</script>
