<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5 sign_step_one">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0">註冊：2.選擇您的在地獵場</p>
        </div>
        <div class="step_scroll">
          <ul class="d-flex list-unstyled justify-content-between sign_progress">
            <li>1<span class="step_text_content">選擇部落</span></li>
            <li class="active">2<span class="step_text_content">選擇在地獵場</span></li>
            <li>3<span class="step_text_content">填寫基本資料</span></li>
          </ul>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="choose_tribe_block choose_hg_block mb-3">
            <div class="d-flex flex-column align-items-center">
              <span class="have_to"><span>*</span>為必填項目</span>
              <p class="tribe_option_text"><span>*</span>在地獵場 (最多選兩個)</p>
            </div>
            <div class="input-group d-flex flex-column choosehg-select">
              <select class="w-100 custom-select mb-3" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option value="" selected>所在地</option>
                <option value="taipei">台北</option>
                <option value="taichung">台中</option>
                <option value="kaoshuang">高雄</option>
              </select>
              <select class="w-100 custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option value="" selected>選擇獵場</option>
                <option value="1">台北獵場</option>
                <option value="2">台中獵場</option>
                <option value="3">高雄獵場</option>
              </select>
            </div>
            <div class="sec_step_block">
              <router-link to="/signUp" class="btn ad_btn_whiteBtn next_step_btn mr-auto">上一步</router-link>
              <router-link to="/signUpinfo" class="btn btn-mainRed next_step_btn">下一步</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMountain: false,
      isLand: false,
      isocen: false,
      showCat: false
    }
  },
  methods: {
    Mountain () {
      const vm = this
      vm.isMountain = true
      vm.isLand = false
      vm.isocen = false
    },
    land () {
      const vm = this
      vm.isMountain = false
      vm.isLand = true
      vm.isocen = false
    },
    ocen () {
      const vm = this
      vm.isMountain = false
      vm.isLand = false
      vm.isocen = true
    }
  }
}
</script>
<style lang="scss" scoped>
.resuccess{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  z-index: 999999;
  top: 0;
}
.resuccess{
  img{
    position: fixed;
    width: 100%;
    height: 100%;
    left: calc(0%);
  }
}
</style>
