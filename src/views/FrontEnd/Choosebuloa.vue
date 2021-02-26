<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5 sign_step_one">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0">註冊：1.選擇您想居住的部落</p>
        </div>
        <div class="step_scroll">
          <ul class="d-flex list-unstyled justify-content-between sign_progress">
            <li class="active">1<span class="step_text_content">選擇部落</span></li>
            <li>2<span class="step_text_content">選擇在地獵場</span></li>
            <li>3<span class="step_text_content">填寫基本資料</span></li>
          </ul>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="choose_tribe_block mb-3">
            <div class="d-flex flex-column align-items-center">
              <span class="have_to"><span>*</span>為必填項目</span>
              <p class="tribe_option_text"><span>*</span> 選擇您的部落(確定後將無法更改)</p>
              <p class="remarks_text">備註說明文字位置備註說明文字位置備註說明文字<br>位置獎勵內容位置獎勵內容位置獎勵內容位置</p>
            </div>
            <div class="choose-tribe">
              <div class="d-flex justify-content-center choose-tribe-img">
                <ul class="d-flex list-unstyled">
                  <li class="mountaintribe" @click="Mountain" :class="{ chBorMoun: isMountain }"><img  src="../../assets/image/images/signup/mountaintribe.png" alt=""></li>
                  <li class="landtribe" @click="land" :class="{ chBorland: isLand }"><img src="../../assets/image/images/signup/landtribe.png" alt=""></li>
                  <li  class="ocentribe" @click="ocen" :class="{ chBorocen: isocen }" ><img src="../../assets/image/images/signup/ocentribe.png" alt=""></li>
                </ul>
              </div>
            </div>
            <div class="step_block">
              <router-link to="/signUpsteptwo" class="btn btn-mainRed next_step_btn px-5">下一步</router-link>
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
