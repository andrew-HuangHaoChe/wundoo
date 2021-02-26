<template>
  <div style="background: #FFF8F4; z-index:-2;">
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0">每日溫度發文</p>
        </div>
        <p class="mb-3">活動主題：北部粽南部粽到底誰好吃？</p>
        <form>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </form>
        <div class="d-flex justify-content-between py-5">
          <button class="btn cancel-btn px-5">取消</button>
          <button class="btn btn-mainRed px-5" @click="showSuccess = !showSuccess">發文</button>
        </div>
      </div>
    </div>
    <div class="postsuccess" v-if="showSuccess">
      <div class="post_success_text">
        <p class="post_success_title mb-0">發文成功</p>
        <p class="post_sub_title mb-0">獲得貝殼幣 x <span>100</span></p>
        <p class="mb-0 post_sub_content">(系統將於24小時內發放)</p>
        <p class="mb-0 post_sub_content">積分累積：13000</p>
      </div>
      <img class="coin" src="../../assets/image/tempeveryday/everyday_coin.png" alt="">
      <div class="star star1 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star1.png" alt="">
      </div>
      <div class="star star2 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star2.png" alt="">
      </div>
      <div class="star star3 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star3.png" alt="">
      </div>
      <div class="star star4 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star4.png" alt="">
      </div>
      <div class="star star5 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star5.png" alt="">
      </div>
      <div class="star star6 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star6.png" alt="">
      </div>
      <div class="star star7 animate-flicker">
        <img src="../../assets/image/tempeveryday/star/star1.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-vue'
export default {
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
  data () {
    return {
      showSuccess: false,
      editor: ClassicEditor,
      editorData: '文字輸入於此',
      editorConfig: {
      // The configuration of the editor.
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.postsuccess{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  z-index: 999999;
  top: 0;
}
.postsuccess{
  .coin{
    position: fixed;
    width: 100px;
    height: 100px;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
  }
  .star1 {
    position: fixed;
    left: calc(50.5% - 50px);
    top: calc(47% - 50px);
  }
  .star2 {
    position: fixed;
    left: calc(49% - 50px);
    top: calc(50% - 50px);
  }
  .star3 {
    position: fixed;
    left: calc(56% - 50px);
    top: calc(50% - 50px);
  }
  .star4 {
    position: fixed;
    left: calc(50% - 50px);
    top: calc(58% - 50px);
  }
  .star5 {
    position: fixed;
    left: calc(55% - 50px);
    top: calc(48% - 50px);
  }
  .star6 {
    position: fixed;
    left: calc(56% - 50px);
    top: calc(55% - 50px);
  }
  .star7 {
    position: fixed;
    left: calc(55% - 50px);
    top: calc(58% - 50px);
  }
}
@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}

.animate-flicker {
  -webkit-animation: flickerAnimation 3s infinite;
  -moz-animation: flickerAnimation 3s infinite;
  -o-animation: flickerAnimation 3s infinite;
  animation: flickerAnimation 3s infinite;
}
.post_success_text {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
