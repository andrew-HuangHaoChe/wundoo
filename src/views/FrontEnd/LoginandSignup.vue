<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5 sign_step_one">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0">註冊：3.填寫個人資料</p>
        </div>
        <div class="step_scroll">
          <ul class="d-flex list-unstyled justify-content-between sign_progress">
            <li>1<span class="step_text_content">選擇部落</span></li>
            <li>2<span class="step_text_content">選擇在地獵場</span></li>
            <li class="active">3<span class="step_text_content">填寫基本資料</span></li>
          </ul>
        </div>
        <div class="upload-img d-flex align-items-center">
          <div class="row sign-sec-block">
            <div class="col-md-3 col-sm-3 col-lg-2">
              <h4 class="d-block p-2">上傳頭像</h4>
              <button class="d-block btn btn-brilliantRed">選擇檔案</button>
            </div>
            <div class="col-md-9 col-sm-9 col-lg-10 upload-avatar d-flex justify-content-start">
              <img src="../../assets/image/images/default-pic.png" alt="">
            </div>
          </div>
        </div>
        <div class="sign-up-form">
          <form>
            <span class="have_to"><span>*</span>為必填項目</span>
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6">
                <label for="name1"><span class="have_to"><span>*</span></span>真實姓名</label>
                <input type="text" class="form-control signup-form-control" id="name1" placeholder="請填寫全名">
                <label for="smName"><span class="have_to"><span>*</span></span>顯示的暱稱</label>
                <input type="text" class="form-control signup-form-control" id="smName" placeholder="神箭闖江湖乃第一貓" maxlength="10">
                <label for="upphone"><span class="have_to"><span>*</span></span>手機號碼</label>
                <input type="tel" class="form-control signup-form-control" id="upphone" placeholder="0912-123-123">
                <label for="upbirth"><span class="have_to"><span>*</span></span>生日</label>
                <input type="date" class="form-control signup-form-control" id="upbirth">
                <label for="upId">身分證字號</label>
                <input type="mail" class="form-control signup-form-control" id="upId" placeholder="A123456789">
              </div>
              <div class="col-12 col-sm-12 col-md-6">
                <div class="form-controll">
                  <label for="local-hunt-option"><span class="have_to"><span>*</span></span>所在地</label>
                  <div class="row">
                    <div class="col-6">
                      <select id="local-hunt-option" class="form-control signup-form-control">
                        <option selected>縣市</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <select id="local-hunt-option" class="form-control signup-form-control">
                        <option selected>鄉鎮市區</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                </div>
                <label for="inputUpEmail"><span class="have_to"><span>*</span></span>Email(將此做為Email帳號)</label>
                <input type="mail" class="form-control signup-form-control" id="inputUpEmail" placeholder="Hello@gmail.com">
                <label for="upPassword"><span class="have_to"><span>*</span></span>密碼</label>
                <input type="password" class="form-control signup-form-control" id="upPassword" placeholder="請輸入6-8位數英文與數字" maxlength="8">
                <label for="checkpassWord"><span class="have_to"><span>*</span></span>確認密碼</label>
                <input type="password" class="form-control signup-form-control" id="checkpassWord" placeholder="請輸入6-8位數英文與數字" maxlength="8">
              </div>
            </div>
            <div class="accept-check d-flex justify-content-center">
              <div class="d-flex align-items-center form-control-lg custom-checkbox">
                <input type="checkbox" class="d-flex align-items-center mr-2" id="customCheck2">
                <label class="signup-check mb-0" for="customCheck2">我已閱讀並同意遵守wundoo的<a href="#">服務條款</a></label>
              </div>
            </div>
            <div class="thr_step_block">
              <router-link to="/signUpsteptwo" class="btn ad_btn_whiteBtn next_step_btn px-5">上一步</router-link>
              <button class="btn btn-mainRed next_step_btn px-5" @click.prevent="showCatFun()">註冊</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="resuccess" v-if="showCat">
      <img src="../../assets/image/images/animation/am_welcome.svg" alt="">
    </div>
    <div class="modal fade" id="lotteryModal" tabindex="-1" role="dialog" aria-labelledby="lotteryModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="z-index: 999;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center" style="padding-top: 0; margin-top: -30px;">
            <h5 class="modal-title" id="lotteryModalLabel">註冊成功</h5>
            <p class="mb-0">歡迎加入溫度部落！試試手氣送您<strong>見面禮</strong></p>
            <div class="lottery-nine-block">
              <FlipLucky/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import FlipLucky from '../../components/Lottery.vue'
export default {
  components: {
    FlipLucky
  },
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
    },
    showCatFun () {
      const vm = this
      vm.showCat = true
      setTimeout(function () {
        vm.showCat = false
        $('#lotteryModal').modal('show')
      }, 3000)
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
.modal-body {
  h5 {
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.6px;
    color: #000000;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.6px;
    color: #000000;
  }
}
.lottery-nine-block {
  width: 370px;
  margin: 0 auto;
  @media(max-width: 576px) {
    width: 280px;
  }
}

input[type="checkbox"]{
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  box-sizing: content-box ;
  width: 24px;
  height: 24px;
  border-width: 0;
  transition: all .3s linear;
  border: 1px solid #ccc;
  @media(max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
}
input[type="checkbox"]:checked{
  background-color: #E2273A;
  content: "\2713";
  border: 1px solid #E2273A;
}
input[type="checkbox"]:checked:after{
  color: #fff;
  font-size: 22px;
  content: "\2713";
  margin: 0 auto;
  padding-left: 5px;
  position: absolute;
  top: -4px;
  @media(max-width: 1024px) {
    font-size: 14px;
    padding-left: 4px;
  }
}
input[type="checkbox"]:focus{
  outline: 0 none;
  box-shadow: none;
}
</style>
