<template>
  <div>
    <div class="adstep custom-container-width container mb-3 mt-11">
      <ul class="d-flex list-unstyled justify-content-between flex-wrap">
        <div class="d-flex py-2">
          <span class="step_count step_active">1</span><li class="d-flex align-items-center pl-4 step-text step-text_active">選擇方案</li>
        </div>
        <div class="d-flex py-2">
          <span class="step_count">2</span><li class="d-flex align-items-center pl-4 step-text">店家資訊及優惠券設定</li>
        </div>
        <div class="d-flex py-2">
          <span class="step_count">3</span><li class="d-flex align-items-center pl-4 step-text">廣告代表圖製作</li>
        </div>
      </ul>
      <div class="countpay d-flex justify-content-center">
        <p class="price_count mb-0">費用總計<span class="text-mainRed">$6000</span></p>
      </div>
    </div>
    <div class="stepOne">
      <div class="custom-container-width container pt-3">
        <div class="stepOneTitle d-flex justify-content-center mb-3">
          <span class="left-bar mr-3"></span><p class="d-flex align-items-center mb-0">步驟1 - 選擇方案</p>
        </div>
        <p class="choseTemp text-center">A. 選擇版型</p>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" :class="{'active': purchasePlan =='buyad'}" @click="purchasePlan ='buyad'">選擇方案</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{'active': purchasePlan =='already'}" @click="purchasePlan ='already'">已預購方案</a>
          </li>
        </ul>
      </div>
    </div>
    <!--選擇方案start-->
    <div class="custom-container-width container pt-5" v-show="purchasePlan === 'buyad'">
      <div class="choosetemplate">
        <ul class="flex-container longhand row mb-3">
          <div class="col-12 col-md-3 col-lg-2">
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center mb-2">
                <p class="mb-0">
                  <input type="radio" id="board1" name="radio-group" @click="edittype='one'">
                  <label for="board1">版型1</label>
                </p>
              </div>
              <select class="custom-select mb-2" id="inputGroupSelect01">
                <option selected>請選擇方案</option>
                <option value="1">A方案 500元起</option>
                <option value="2">B方案 600元起</option>
                <option value="3">C方案 700元起</option>
              </select>
              <div class="occ-img-block mb-3">
                <img class="w-100" src="../../assets/image/huntground_lk/ad_1.png" alt="">
                <div class="occ-icon-text">
                  <img src="../../assets/image/icon/image_up.svg" alt="版型預覽圖">
                  <p class="">廣告版型1</p>
                  <p class="mb-0 up-size text-center">上傳尺寸: 200x300px,<br>實際呈現範圍為180x280px</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center mb-2">
                <p class="mb-0">
                  <input type="radio" id="board2" name="radio-group" @click="edittype='two'">
                  <label for="board2">版型2</label>
                </p>
              </div>
              <select class="custom-select mb-2" id="inputGroupSelect01">
                <option selected>請選擇方案</option>
                <option value="1">A方案 500元起</option>
                <option value="2">B方案 600元起</option>
                <option value="3">C方案 700元起</option>
              </select>
              <div class="occ-img-block mb-3">
                <img class="w-100" src="../../assets/image/huntground_lk/ad_2.png" alt="">
                <div class="occ-icon-text">
                  <img src="../../assets/image/icon/image_up.svg" alt="版型預覽圖">
                  <p class="md-0">廣告版型2</p>
                  <p class="mb-0 up-size">上傳尺寸: 420x300px,實際呈現範圍為400x280px</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-6">
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center mb-2">
                <p class="mb-0">
                  <input type="radio" id="board3" name="radio-group" @click="edittype='three'">
                  <label for="board3">版型3</label>
                </p>
              </div>
              <select class="custom-select mb-2" id="inputGroupSelect01">
                <option selected>請選擇方案</option>
                <option value="1">A方案 500元起</option>
                <option value="2">B方案 600元起</option>
                <option value="3">C方案 700元起</option>
              </select>
              <div class="occ-img-block mb-3">
                <img class="w-100" src="../../assets/image/huntground_lk/ad_3.png" alt="">
                <div class="occ-icon-text">
                  <img src="../../assets/image/icon/image_up.svg" alt="版型預覽圖">
                  <p class="md-0">廣告版型3</p>
                  <p class="mb-0 up-size">上傳尺寸: 640x300px,實際呈現範圍為620x280px </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-12">
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center mb-2">
                <p class="mb-0">
                  <input type="radio" id="board4" name="radio-group" @click="edittype='four'">
                  <label for="board4">版型4</label>
                </p>
              </div>
              <select class="custom-select mb-2" id="inputGroupSelect01">
                <option selected>請選擇方案</option>
                <option value="1">A方案 500元起</option>
                <option value="2">B方案 600元起</option>
                <option value="3">C方案 700元起</option>
              </select>
              <div class="occ-img-block mb-3">
                <img class="w-100 occ-fourth-img" src="../../assets/image/huntground_lk/ad_4.png" alt="">
                <div class="occ-icon-text">
                  <img src="../../assets/image/icon/image_up.svg" alt="版型預覽圖">
                  <p class="md-0">廣告版型4</p>
                  <p class="mb-0 up-size">上傳尺寸: 1300x300px,實際呈現範圍為1280x280px</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <div class="project-intro-block">
          <h2>方案介紹</h2>
          <div class="row">
            <div class="col-12 col-md-3">
              <h5>買2送1</h5>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <h5>買3送2</h5>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <h5>買6送6</h5>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <h5>D方案</h5>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
          </div>
          <div class="litile-prize-block">
            <p class="mb-0">步驟1-A. 費用小計<span>$500</span></p>
          </div>
        </div>
      </div>
    </div>
    <!--選擇方案end-->
    <!--已預購方案start-->
    <div class="custom-container-width container pt-3" v-show="purchasePlan === 'already'">
      <div class="choosetemplate">
        <div class="project-intro-block">
          <div class="pb-3">
            <div class="d-flex align-items-center">
              <h2 class="mb-0 mr-2">方案介紹</h2>
              <span>※需2年內投放完畢，一旦刊登就須連載。</span>
            </div>
          <p class="mb-2">例如：買3送2為5次，若每次為7天方案，一旦投放就需7(天)x5(次)=連載35(天)</p>
          </div>
          <div class="row">
            <div class="col-12 col-md-4">
              <p class="mb-0">
                <input type="radio" id="test1" name="radio-group" checked>
                <label for="test1">買2送1 - 版型1</label>
              </p>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <p class="mb-0">
                <input type="radio" id="test2" name="radio-group">
                <label for="test2">買3送2 - 版型1</label>
              </p>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <p class="mb-0">
                <input type="radio" id="test3" name="radio-group">
                <label for="test3">買6送6 - 版型1</label>
              </p>
              <div class="d-flex flex-column">
                <p>獎勵回饋:<span>抽獎券x100張</span></p>
                <p>刊登時間:<span>7日</span></p>
                <p>預計刊登日:<span>2020/8/31 - 2020/9/6</span></p>
              </div>
            </div>
          </div>
          <div class="litile-prize-block">
            <p class="mb-0">步驟1-A. 費用小計<span>0</span></p>
          </div>
        </div>
      </div>
    </div>
    <!--已預購方案end-->
    <div class="stepOne pt-5 pb-3">
    <!--步驟B Start-->
    <div class="">
      <p class="pb-3 mb-0 choseTemp text-center">B. 上傳廣告代表圖</p>
      <ul class="nav nav-tabs custom-container-width container">
        <li class="nav-item">
          <a class="nav-link" :class="{'active': makeadOption =='uploadImgMode'}" @click="makeadOption ='uploadImgMode'">上傳圖檔</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active': makeadOption =='textEdit'}" @click="makeadOption ='textEdit'">文字編輯</a>
        </li>
      </ul>
      <div class="chooseC makingad-block">
        <div class="py-4 uploadImgBlock" v-if="makeadOption == 'uploadImgMode'">
          <div class="onetype d-flex justify-content-center align-items-center mb-3" v-if="edittype === 'one'"></div>
          <div class="twotype d-flex justify-content-center align-items-center mb-3" v-if="edittype === 'two'"></div>
          <div class="threetype d-flex justify-content-center align-items-center mb-3" v-if="edittype === 'three'"></div>
          <div class="fourtype d-flex justify-content-center align-items-center mb-3" v-if="edittype === 'four'"></div>
          <form class="b-btnGroup">
            <div class="d-flex mb-3">
              <button class="btn ad_btn_whiteBtn mr-auto">選擇檔案</button>
              <button class="btn btn-brilliantRed">刪除圖片</button>
              <!-- <ImageCropper src="/S__37322806.jpg"/> -->
            </div>
            <div class="d-flex">
              <a class="mr-auto d-flex align-items-center cut-img">
                <img class="mr-1" src="../../assets/image/huntground_lk/cut-img.svg" alt="">裁切圖片
              </a>
              <a class="previewWeb">
                <img class="mr-1" src="../../assets/image/huntground_lk/icon_view.svg" alt="">
                預覽網頁
              </a>
            </div>
          </form>
        </div>
        <div class="py-4" v-if="makeadOption == 'textEdit'">
          <div class="onetype d-flex justify-content-center align-items-center" v-if="edittype === 'one'" :style="{ background: adcolor }">
            <textarea class="adcolor-textarea" placeholder="請在此輸入文字" maxlength="20"></textarea>
          </div>
          <div class="twotype d-flex justify-content-center align-items-center" v-if="edittype === 'two'" :style="{ background: adcolor }">
            <textarea class="adcolor-textarea textarea-size-sec" placeholder="請在此輸入文字" maxlength="28"></textarea>
          </div>
          <div class="threetype d-flex justify-content-center align-items-center" v-if="edittype === 'three'" :style="{ background: adcolor }">
            <textarea class="adcolor-textarea textarea-size-thir" placeholder="請在此輸入文字" maxlength="36"></textarea>
          </div>
          <div class="fourtype d-flex justify-content-center align-items-center" v-if="edittype === 'four'" :style="{ background: adcolor }">
            <textarea class="adcolor-textarea textarea-size-four" placeholder="請在此輸入文字" maxlength="40"></textarea>
          </div>
          <div class="color-picker pt-3">
            <ul class="d-flex list-unstyled">
              <li class="orange" @click="changeColor('#FFA843')"></li>
              <li class="pink" @click="changeColor('#FF8080')"></li>
              <li class="blue" @click="changeColor('linear-gradient(180deg, #66E6FF 0%, #0080FF 100%)')"></li>
              <li class="purpink" @click="changeColor('linear-gradient(180deg, #D580FF 0%, #FF4D6A 100%)')"></li>
              <li class="green" @click="changeColor('linear-gradient(180deg, #65FFFF 0%, #009966 100%)')"></li>
              <li class="purple" @click="changeColor('#7E6CD9')"></li>
              <div style="display: none">{{ adcolor }}</div><!--要搞懂資料響應式原理後面再來修掉-->
            </ul>
          </div>
          <!-- <p>版型2：400x280px</p> -->
        </div>
      </div>
    </div>
    <!--步驟B End-->
    <!--步驟C Start-->
    <div class="">
      <p class="pb-3 mb-0 choseTemp text-center">C. 選擇曝光獵場</p>
      <div class="chooseC">
        <div class="d-flex flex-column table_content">
            <div class="d-flex flex-column align-items-center justify-content-center flex-md-row mb-3">
              <h5 class="mb-0 mr-3">您選的方案可曝光 1 個獵場</h5>
              <span class="exp_add_money">*多加一個曝光獵場，加價費用 $500元</span>
            </div>
          <div class="row">
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="taipei"><label class="mb-0" for="taipei">台北</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="newtaipei"><label class="mb-0" for="newtaipei">新北</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="yilan"><label class="mb-0" for="yilan">基隆</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="hualien"><label class="mb-0" for="hualien">桃園</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="taitung"><label class="mb-0" for="taitung">新竹</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="greenisland"><label class="mb-0" for="greenisland">苗栗</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="penghu"><label class="mb-0" for="penghu">台中</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="pingtung"><label class="mb-0" for="pingtung">彰化</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="chiayi"><label class="mb-0" for="chiayi">南投</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="kaohsiung"><label class="mb-0" for="kaohsiung">雲林</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="tainan"><label class="mb-0" for="tainan">嘉義</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="hsinchu"><label class="mb-0" for="hsinchu">台南</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="nantou"><label class="mb-0" for="nantou">高雄</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="changhua"><label class="mb-0" for="changhua">屏東</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="kinmen"><label class="mb-0" for="kinmen">宜蘭</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="Hualien"><label class="mb-0" for="Hualien">花蓮</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="Taitung"><label class="mb-0" for="Taitung">台東</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="Penghu"><label class="mb-0" for="Penghu">澎湖</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="jinmen"><label class="mb-0" for="jinmen">金門</label></div>
            <div class="col-4 col-md-2 col-lg-2 col-xl-3 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="madzou"><label class="mb-0" for="madzou">馬祖</label></div>
          </div>
        </div>
        <div class="choose_c_footer">
          <div class="price_count">步驟1-C. 費用小計<span>$2,500</span></div>
        </div>
      </div>
    </div>
    <!--步驟C End-->
    <!--步驟D Start-->
    <div class="">
      <p class="pb-3 mb-0 choseTemp text-center">D. 廣告加值</p>
      <div class="ad-block-style">
        <div class="d-flex flex-column table_content px-0">
          <div class="row add_value">
            <div class="col-12 col-md-6">
              <div class="form-group d-flex align-items-center flex-column">
                <label for="add_time">廣告時間加值</label>
                <select class="form-control" style="width: 100%;">
                  <option>加長刊登時間7日  +$1000</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group d-flex align-items-center flex-column">
                <label for="add_time">廣告排序加值</label>
                <select class="form-control" style="width: 100%;">
                  <option>排序位置前10  +$2000</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="choose_c_footer">
          <div class="price_count">步驟1-D. 費用小計<span>$3,000</span></div>
        </div>
      </div>
    </div>
    <!--步驟D End-->
    <div class="nextStepBtn">
      <div class="row d-flex align-items-center">
        <div class="col-6 col-md-4">
          <a class="btn ad_btn_whiteBtn mr-2 btn_padding" href="#">上一步</a>
          <a class="btn btn-greyBtn btn_padding" href="#">暫存</a>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center price_count-bottom">
          <div class="price_count">步驟1-D. 費用小計<span>$3,000</span></div>
        </div>
        <div class="col-6 col-md-4">
          <div class="d-flex justify-content-end align-items-center">
            <router-link to="/adstepTwo" class="btn btn-brilliantRed btn_padding">下一步</router-link>
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-lg-center align-items-center price_count-md-bottom">
          <div class="price_count">步驟1-D. 費用小計<span>$3,000</span></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
// import ImageCropper from '../../components/ImageCropper.vue'
export default {
  // components: {
  //   ImageCropper
  // },
  data () {
    return {
      purchasePlan: 'buyad',
      makeadOption: 'uploadImgMode',
      edittype: 'one',
      avatar: '', // require('@/assets/image/icon/uploadimg.svg')
      adcolor: ''
    }
  },
  methods: {
    upload (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      const vm = this
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        vm.avatar = this.result
      }
    },
    changeColor (color) {
      this.adcolor = color
      console.log(color)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #DC131A;
}
.nav-link {
  color: #333333;
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
  width: 30px;
  height: 30px;
  border-width: 0;
  transition: all .3s linear;
  border: 2px solid #ccc;
  @media(max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
}
input[type="checkbox"]:checked{
  background-color: #E2273A;
  content: "\2713";
}
input[type="checkbox"]:checked:after{
  color: #fff;
  font-size: 22px;
  content: "\2713";
  margin: 0 auto;
  padding-left: 8px;
  position: absolute;
  top: -2px;
  @media(max-width: 1024px) {
    font-size: 14px;
    padding-left: 4px;
  }
}
input[type="checkbox"]:focus{
  outline: 0 none;
  box-shadow: none;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #DC131A;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #DC131A;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
.nav-item {
  cursor: pointer;
}
</style>
