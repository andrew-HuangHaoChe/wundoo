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
            <a class="nav-link" :class="{'active': visibility =='already'}" @click="visibility ='already'">已儲值方案</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{'active': visibility =='buyad'}" @click="visibility ='buyad'">購買方案</a>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <div class="stepOne pt-5 pb-3">
    <!--步驟B Start-->
    <div class="">
      <p class="pb-3 mb-0 choseTemp text-center">B. 上傳廣告代表圖</p>
      <div class="chooseC">
        <div class="py-4 b-upAdblock">
          <img class="mb-2" src="../../assets/image/huntground_lk/ad08.png" alt="">
          <p>版型2：400x280px</p>
          <div class="b-btnGroup">
            <div class="d-flex mb-3">
              <button class="btn ad_btn_whiteBtn mr-auto">選擇檔案</button>
              <button class="btn btn-brilliantRed">刪除圖片</button>
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
          </div>
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
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="taipei"><label class="mb-0" for="taipei">台北</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="newtaipei"><label class="mb-0" for="newtaipei">新北</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="yilan"><label class="mb-0" for="yilan">基隆</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="hualien"><label class="mb-0" for="hualien">桃園</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="taitung"><label class="mb-0" for="taitung">新竹</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="greenisland"><label class="mb-0" for="greenisland">苗栗</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="penghu"><label class="mb-0" for="penghu">台中</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="pingtung"><label class="mb-0" for="pingtung">彰化</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="chiayi"><label class="mb-0" for="chiayi">南投</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="kaohsiung"><label class="mb-0" for="kaohsiung">雲林</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="tainan"><label class="mb-0" for="tainan">嘉義</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="hsinchu"><label class="mb-0" for="hsinchu">台南</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="nantou"><label class="mb-0" for="nantou">高雄</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="changhua"><label class="mb-0" for="changhua">屏東</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="kinmen"><label class="mb-0" for="kinmen">宜蘭</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="Hualien"><label class="mb-0" for="Hualien">花蓮</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="Taitung"><label class="mb-0" for="Taitung">台東</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="Penghu"><label class="mb-0" for="Penghu">澎湖</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="jinmen"><label class="mb-0" for="jinmen">金門</label></div>
            <div class="col-4 col-md-2 col-lg-1 d-flex justify-content-center align-items-center mb-2"><input class="mr-2" type="checkbox" id="madzou"><label class="mb-0" for="madzou">馬祖</label></div>
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
export default {
  data () {
    return {
      visibility: 'already'
    }
  },
  watch: {
    visibility: function () {
      if (this.visibility === 'already') {
        this.$router.push('/adstep')
      }
      if (this.visibility === 'buyad') {
        this.$router.push('/adstep/adstep_two')
      }
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
</style>
