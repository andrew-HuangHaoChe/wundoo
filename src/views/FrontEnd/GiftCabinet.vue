<template>
  <div>
    <div class="container custom-container-width wanna-post-content">
      <div class="d-flex align-items-end mb-3 pt-5">
        <span class="signup-title-bar il-custom-bar"></span>
        <p class="signup-title mb-0 pt-0">我的禮物櫃</p>
      </div>
      <h5>我收到的禮物</h5>
      <div style="margin-bottom: 70px;" class="row">
        <div class="col-12 col-md-6 col-lg-2 mb-3" v-for="items in 2" :key="items.index">
          <div>
            <div class="gift_card">
              <img src="../../assets/image/sidebar/gift_img.png" alt="">
              <p class="gift_count mb-0">x<span>10</span></p>
            </div>
            <div class="gift_text_content">
              <p class="mb-0 gift_title">部落大聲公 x10</p>
              <span class="gift_sub_title">2020/06/08 14:30</span>
            </div>
          </div>
        </div>
      </div>
      <h5>送出去的禮物</h5>
      <div style="margin-bottom: 70px;" class="row">
        <div class="col-12 col-md-6 col-lg-2 mb-3" v-for="give in 3" :key="give.index">
          <div>
            <div class="gift_card">
              <img src="../../assets/image/sidebar/gift_img.png" alt="">
              <p class="gift_count mb-0">x<span>10</span></p>
            </div>
            <div class="gift_text_content">
              <p class="mb-0 gift_title">部落大聲公 x10</p>
              <span class="gift_sub_title">2020/06/08 14:30</span>
            </div>
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
</style>
