<template>
  <div>
    <div class="container custom-container-width wanna-post-content">
      <div class="d-flex justify-content-center" style="padding-top: 30px; padding-bottom: 30px;">
        <img src="../../assets/image/shop/gift_shop_title_img.png" alt="">
      </div>
      <div class="d-flex justify-content-center" style="margin-bottom: 20px;">
        <div class="row mx-0">
          <div class="col-lg-6 mb-3">
            <select class="form-control">
              <option>討論熱度(由高至低)</option>
            </select>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="mgmt-search w-100">
              <input class="w-100" type="text" placeholder="搜尋商品關鍵字">
              <a href="#"><img src="../../assets/image/icon/ic_search.svg" alt="" class="mgmt-search-icon"></a>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-bottom: 70px;" class="row">
        <div class="col-12 col-md-6 col-lg-2 mb-3" v-for="items in 4" :key="items.index">
          <div>
            <div class="gift_card">
              <img src="../../assets/image/sidebar/gift_img.png" alt="">
              <p class="gift_count mb-0">x<span>10</span></p>
            </div>
            <div class="gift_text_content">
              <p class="mb-2 gift_title">部落大聲公 x10</p>
              <div class="d-flex flex-column align-items-center justify-content-center">
                  <div class="d-flex align-items-center mb-2">
                    <img class="integralcoin mr-1" src="../../assets/image/member/icon/integral_icon.png" alt="">
                    <span class="integral_text">積分 500</span>
                  </div>
                  <p class="bonus_text mb-2">額外獎勵:抽獎券x3</p>
                  <div class="d-flex justify-content-between w-100">
                      <button class="btn btn-mainRed px-3" data-toggle="modal" data-target="#buyModal">購買</button>
                      <router-link to="/topresent" class="btn btn-give px-3">贈送</router-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 80px;">
        <img src="../../assets/image/shop/happylaoya.png" alt="">
        <p class="mb-0 mustupdate">我們將盡快上架其他商品</p>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="buyModal" tabindex="-1" role="dialog" aria-labelledby="buyModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5 class="modal-title text-center mb-3" id="buyModalLabel">確定是否購買</h5>
            <div>
              <div class="gift_card">
                <img src="../../assets/image/sidebar/gift_img.png" alt="">
                <p class="gift_count mb-0">x<span>10</span></p>
              </div>
              <div class="gift_text_content">
                <p class="mb-2 gift_title">部落大聲公 x10</p>
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <div class="d-flex align-items-center mb-2">
                      <img class="integralcoin mr-1" src="../../assets/image/member/icon/integral_icon.png" alt="">
                      <span class="integral_text">積分 500</span>
                    </div>
                    <p class="bonus_text mb-2">額外獎勵:抽獎券x3</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-greyBtn px-5" data-dismiss="modal" style="background: #FFFFFF;">取消</button>
            <button type="button" class="btn btn-mainRed px-5">購買</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gift_card {
  position: relative;
  padding: 10px;
  border: 1px solid #AAAAAA;
  border-radius: 10px;
  width: 150px;
  height: 150px;
}
.gift_count {
  background: #AA1A29;
  width: 40px;
  height: 40px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.gift_title {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
}
.gift_sub_title {
  font-size: 14px;
  line-height: 20px;
  color: #8B8B8B;
}
.gift_text_content {
  width: 150px;
  text-align: center;
}
.integralcoin {
    width: 20px;
    height: 20px;
}
.btn-give {
    background: #357ECD;
    border-radius: 5px;
    color: #FFFFFF;
}
.integral_text {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #333333;
}
.bonus_text {
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #333333;
}
.mustupdate {
  font-size: 18px;
  line-height: 26px;
  color: #434343;
}
.modal-header {
  border-bottom: 0;
}
.modal-body {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
