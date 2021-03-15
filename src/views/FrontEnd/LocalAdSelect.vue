<template>
  <div>
    <div class="sel_bg">
      <div class="container custom-container-width local-block">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <h2>請選擇廣告刊登功能</h2>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-2">
            <router-link to="/adstep" class="ad_btn_bus">營業廣告</router-link>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start mb-2">
            <router-link to="/adstep" class="ad_btn_peo">人事廣告</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sel_bg {
  background: #FFF5E8;
  background-image: url('../../assets/image/images/fixedbg-pc.png');
  background-position: center;
  background-repeat: no-repeat;
}
.local-block {
  padding-bottom: 170px;
  @media(max-width: 768px) {
    padding-bottom: 30px;
  }
}
h2 {
  margin: 170px 0 70px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  @media(max-width: 768px) {
    margin: 100px 0 30px 0;
  }
}
.ad_btn_bus, .ad_btn_peo {
  padding: 100px;
  border: none;
  background: #FFFFFF;
  border: 1px solid #B1532B;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.ad_btn_bus {
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #2BA9F0;
}
.ad_btn_peo {
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FF5C00;
}
</style>
