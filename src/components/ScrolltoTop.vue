<template>
  <div>
    <div class="scroll-to-top-btn" @click="scrollToTop">
      <img src="../assets/image/scrolltop.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    scrollToTop () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll-to-top-btn {
  position: fixed;
  right: 12%;
  bottom: 5%;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
