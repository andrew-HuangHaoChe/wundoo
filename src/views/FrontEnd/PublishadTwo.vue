<template>
  <div>
    <div class="adstep custom-container-width container mb-3 mt-11">
      <ul class="d-flex list-unstyled justify-content-between flex-wrap">
        <div class="d-flex py-2">
          <span class="step_count step_finished">1</span><li class="d-flex align-items-center pl-4 step-text step_finished_text">選擇方案</li>
        </div>
        <div class="d-flex py-2">
          <span class="step_count step_active">2</span><li class="d-flex align-items-center pl-4 step-text step-text_active">店家資訊及優惠券設定</li>
        </div>
        <div class="d-flex py-2">
          <span class="step_count">3</span><li class="d-flex align-items-center pl-4 step-text">廣告代表圖製作</li>
        </div>
      </ul>
      <div class="countpay d-flex justify-content-center">
        <p class="mb-0">費用總計 <span class="text-mainRed">$6000</span></p>
      </div>
    </div>
    <div class="stepOne">
      <div class="publish-container-width container pt-3">
        <div class="stepOneTitle d-flex mb-3">
          <span class="left-bar mr-3"></span>
          <p class="d-flex align-items-center mb-0">步驟2 - 店家資訊及優惠券設定</p>
        </div>
        <h4 class="pb-3 mb-0 choseTemp text-center">A. 廣告標題、類型</h4>
      </div>
      <div class="step_white_bg d-flex align-items-center">
        <div class="publish-container-width container">
          <div class="row add_value">
            <div class="col-6">
                <input type="text" class="form-control" id="sellTitle" placeholder="請輸入廣告標題(限制30字以內)">
            </div>
            <div class="col-6">
              <select class="custom-select" id="">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="step_white_bg"> -->
      <h4 class="pt-5 pb-3 mb-0 choseTemp text-center">Ｂ. 店家資訊</h4>
      <div class="step_white_bg">
        <div class="publish-container-width container store-location-block">
          <h5 class="mb-3">店家位置</h5>
          <div class="custom-control custom-radio d-flex align-items-center pl-0 mb-3">
            <input class="mr-2" type="radio" id="chain-store-radio" name="store-radio">
            <label class="mb-0 store-label mr-1" for="chain-store-radio">連鎖店</label>
            <div class="question-block">
              <i class="far fa-question-circle"></i>
              <div class="store-bubble-text">
                <p class="mb-0">擁有一間店家以上就選連鎖店</p>
              </div>
            </div>
          </div>
          <div class="custom-control custom-radio d-flex flex-wrap align-items-center pl-0 mb-3">
            <input class="mr-2 mb-2" type="radio" id="one-store-radio" name="store-radio">
            <label class="mb-0 store-label" for="one-store-radio">單店</label>
            <div class="address-select d-flex">
              <select class="custom-select mr-3" name="counties" id="counties-select">
                <option value="">請選擇縣市</option>
                <option value="taipei">台北市</option>
                <option value="newtaipei">新北市</option>
              </select>
              <select class="custom-select" name="township" id="township-select">
                <option value="">請選擇區域</option>
                <option value="daang">大安區</option>
                <option value="chunshan">中山區</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group d-flex flex-column">
                <label for="store-name">店家名稱</label>
                <input class="form-control" type="text" name="store-name" placeholder="請輸入店名">
              </div>
            </div>
            <div class="col-6">
              <div class="form-group d-flex flex-column">
                <label for="store-time">營業時間</label>
                <input class="form-control" type="text" name="store-time" placeholder="周一公休">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group d-flex flex-column">
                <label for="store-time">店家網站或粉絲頁</label>
                <input class="form-control" type="text" name="store-time" placeholder="www.yourpage.com">
              </div>
            </div>
          </div>
          <h5>店家介紹</h5>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" height="500px"></ckeditor>
        </div>
      </div>
      <!-- </div> -->
      <h4 class="pt-5 pb-3 mb-0 choseTemp text-center">C.是否發放優惠券？</h4>
      <div class="p-3 bg-white w-100">
        <div class="publish-container-width container">
          <div class="row mx-0 d-flex justify-content-between">
            <div class="col-12 col-md-6">
              <div class="d-flex flex-wrap mb-2">
                <p class="mb-0 mr-3">是否發送優惠券?</p>
                <div class="form-check d-flex align-items-center mr-3">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                  <label class="form-check-label pl-1" for="exampleRadios1">
                    是
                  </label>
                </div>
                <div class="form-check d-flex align-items-center">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                  <label class="form-check-label pl-1" for="exampleRadios2">
                    否
                  </label>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="d-flex flex-wrap align-items-center justify-content-start justify-content-md-end mb-2">
                <p class="mb-0 mr-1">每次點擊贈送優惠券數量</p>
                <div class="sendlottery-input">
                  <input type="text" id="number" value="0"/>
                  <i class="fas fa-chevron-up lottplus" type="button" @click="plusValue()"></i>
                  <i class="fas fa-chevron-down lottminus" type="button" @click="minusValue()"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column">
            <p class="discount_num text-center">(50/100)<span>*優惠券數量需與平台發送抽獎券數量相同</span></p>
            <div class="discount_block d-flex flex-row">
              <div class="discount_title d-flex flex-row w-100">
                <div class="col-3 col-md-1 bg-dark text-white able">啟用</div>
                <div class="col-9 col-md-11 bg-dark text-white able-setting">優惠券設定</div>
              </div>
            </div>
            <div class="discount_card d-flex flex-row">
              <div class="col-3 col-md-1 d-flex justify-content-center align-items-center">
                <div class="form-check d-flex align-items-center mr-3">
                  <input class="form-check-input" type="checkbox" name="activecheckbox" id="activelottfir" value="activelottfir">
                  <label class="form-check-label pl-1" for="activelottfir">
                  </label>
                </div>
              </div>
              <div class="col-9 col-md-11">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="d-flex my-3">
                      <p class="dis_title">使用期限:</p>
                      <div>
                        <div class="d-flex align-items-center lottery-time mb-2">
                          <span>從</span><input type="text" class="form-control" placeholder="開始日期">
                        </div>
                        <div class="d-flex align-items-center lottery-time">
                          <span>到</span><input type="text" class="form-control" placeholder="結束日期">
                        </div>
                      </div>
                    </div>
                    <div class="d-flex my-3 align-items-center">
                      <label for="disCount" class="form-label dis_title">數量:</label>
                      <input type="text" class="form-control" id="disCount">/100
                    </div>
                    <div class="lottery-img">
                    </div>
                    <!-- <div class="d-flex my-3 flex-column align-items-start">
                      <p class="mb-0">內容(請選擇上傳照片 or 純文字輸入)</p>
                      <div class="dis_btn_group my-3">
                        <button class="mr-3" :class="{ upBtnActive: isbtnActive }" @click="toggleAdvance('upimage')">上傳照片</button>
                        <button :class="{ upBtnActive: notactive }" @click="toggleAdvance('uptext')">純文字輸入</button>
                      </div>
                    </div> -->
                  </div>
                  <div class="col-12 col-md-6 my-3">
                    <ckeditor class="ad-make-coupon" :editor="editor" v-model="editorData" :config="editorConfig" height="500px"></ckeditor>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="discount_card d-flex flex-row">
              <div class="col-1 d-flex justify-content-center align-items-center"><input type="checkbox"></div>
              <div class="col-11">
                <div class="row">
                  <div class="col-6">
                    <div class="d-flex my-3">
                      <label for="disTitle" class="form-label dis_title">標題:</label>
                      <input type="text" class="form-control" id="disTitle" placeholder="標題最多6個字">
                    </div>
                    <div class="d-flex my-3 align-items-center">
                      <label for="disCount" class="form-label dis_title">數量:</label>
                      <input type="text" class="form-control" id="disCount">/100
                    </div>
                    <div class="d-flex my-3 flex-column align-items-start">
                      <p class="mb-0">內容(請選擇上傳照片 or 純文字輸入)</p>
                      <div class="dis_btn_group my-3">
                        <button class="mr-3" :class="{ upBtnActive: isbtnActive }" @click="toggleAdvance('upimage')">上傳照片</button>
                        <button :class="{ upBtnActive: notactive }" @click="toggleAdvance('uptext')">純文字輸入</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 my-3 upImgBorder">
                    <a href="#" @click.prevent="upload()">
                      <img src="../../assets/image/icon/uploadimg.svg" alt="上傳圖片">
                      <p class="mb-0">點擊上傳照片</p>
                    </a>
                      <input type="file" style="display: none;" class="upinput">
                  </div>
                </div>
              </div>
            </div> -->
            <div class="discount_card d-flex flex-row">
              <div class="col-3 col-md-1 d-flex justify-content-center align-items-center">
                <div class="form-check d-flex align-items-center mr-3">
                  <input class="form-check-input" type="checkbox" name="activecheckbox" id="activelottfir" value="activelottfir">
                  <label class="form-check-label pl-1" for="activelottfir">
                  </label>
                </div>
              </div>
              <div class="col-9 col-md-11">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="d-flex my-3">
                      <p class="dis_title">使用期限:</p>
                      <div>
                        <div class="d-flex align-items-center lottery-time mb-2">
                          <span>從</span><input type="text" class="form-control" placeholder="開始日期">
                        </div>
                        <div class="d-flex align-items-center lottery-time">
                          <span>到</span><input type="text" class="form-control" placeholder="結束日期">
                        </div>
                      </div>
                    </div>
                    <div class="d-flex my-3 align-items-center">
                      <label for="disCount" class="form-label dis_title">數量:</label>
                      <input type="text" class="form-control" id="disCount">/100
                    </div>
                    <div class="lottery-img">
                    </div>
                  </div>
                  <div class="col-12 col-md-6 my-3">
                    <ckeditor class="ad-make-coupon" :editor="editor" v-model="editorData" :config="editorConfig" height="500px"></ckeditor>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nextStepBtn publish-container-width container">
      <div class="row" style="padding: 0;">
        <div class="col-6">
          <router-link to="/adstep" class="btn ad_btn_whiteBtn mr-2 btn_padding">上一步</router-link>
          <a class="btn btn-greyBtn btn_padding" href="#">暫存</a>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <router-link to="/adstepThree" class="btn btn-brilliantRed btn_padding">下一步</router-link>
        </div>
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
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
      // The configuration of the editor.
        height: {
          type: String,
          default: '200px'
        }
      },
      isbtnActive: false,
      notactive: false
    }
  },
  methods: {
    toggleAdvance (data) {
      if (data === 'upimage') {
        this.notactive = false
        this.isbtnActive = true
      } else if (data === 'uptext') {
        this.notactive = true
        this.isbtnActive = false
      }
    },
    plusValue () {
      let value = parseInt(document.getElementById('number').value, 10)
      value = isNaN(value) ? 0 : value
      value++
      document.getElementById('number').value = value
    },
    minusValue () {
      let value = parseInt(document.getElementById('number').value, 10)
      value = isNaN(value) ? 0 : value
      value--
      document.getElementById('number').value = value
    },
    upload () {
    }
  }
}
</script>
<style lang="scss" scoped>
.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
  background-image: url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.ck-editor__editable{
  height: 200px !important;
}
// .ck {
//   .ck-content{
//     min-height:250px !important;
//     @media(max-width: 576px) {
//       min-height:150px !important;
//     }
//   }
// }

input[type="radio"]{
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  box-sizing: content-box ;
  width: 20px;
  height: 20px;
  border-width: 0;
  transition: all .3s linear;
  border: 2px solid #ccc;
}
input[type="radio"]:checked{
  background-color: #E2273A;
  content: "\2713";
}
input[type="radio"]:checked:after{
  color: #fff;
  font-size: 16px;
  content: "\2713";
  margin: 0 auto;
  padding-left: 5px;
  position: absolute;
  top: -3px;
  @media(max-width: 1024px) {
    font-size: 14px;
    padding-left: 4px;
  }
}
input[type="radio"]:focus{
  outline: 0 none;
  box-shadow: none;
}
.address-select {
  width: 550px;
  margin-left: 1rem;
  @media(max-width: 576px) {
    margin-left: 0;
  }
}
#number {
  width: 70px;
  position: relative;
  border: 1px solid #8B8B8B;
  border-radius: 2px;
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
  width: 20px;
  height: 20px;
  border-width: 0;
  transition: all .3s linear;
  border: 2px solid #ccc;
}
input[type="checkbox"]:checked{
  background-color: #E2273A;
  content: "\2713";
}
input[type="checkbox"]:checked:after{
  color: #fff;
  font-size: 16px;
  content: "\2713";
  margin: 0 auto;
  padding-left: 5px;
  position: absolute;
  top: -3px;
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
