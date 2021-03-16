<template>
  <div>
    <footer>
      <div class="footer-content">
        <div class="container custom-container-width">
          <div class="footer-title mb-5">
            <div class="row">
              <div class="col-md-6 col-lg-3 d-flex">
                <img
                  src="../assets/image/navbar/logo.png"
                  alt=""
                  style="height: 50px;"
                />
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-center justify-content-center contact_inf"
              >
                <img src="../assets/image/footer_bg/footer_mail.svg" alt="" />
                <p class="mb-1 pl-2 text-brilliantRed">
                  service@mail.wundoo.com
                </p>
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-center justify-content-center contact_inf"
              >
                <img src="../assets/image/footer_bg/footer_phone.svg" alt="" />
                <p class="mb-1 pl-2 text-brilliantRed">(02) 2567-6769</p>
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-center justify-content-center contact_inf"
              >
                <img
                  src="../assets/image/footer_bg/footer_service.svg"
                  alt=""
                />
                <p class="mb-1 pl-2 text-brilliantRed">
                  週一至週五 10:00-17:00
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-3 col-sm-3 col-md-4 col-lg d-flex flex-column justify-content-start align-items-center footer-card"
            >
              <div>
                <h3 class="footer-title-first">
                  有<span class="footer-title-sec">溫度</span>
                </h3>
                <ul class="list-unstyled footer-a">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/wunDoo.tw/"
                      >官方日記</a
                    >
                  </li>
                  <li><a target="_blank" href="#">官方youtube</a></li>
                </ul>
              </div>
            </div>
            <div
              class="col-3 col-sm-3 col-md-4 col-lg d-flex flex-column justify-content-start align-items-center footer-card"
            >
              <div>
                <h3 class="footer-title-first">
                  看<span class="footer-title-sec">溫度</span>
                </h3>
                <ul class="list-unstyled footer-a">
                  <li>
                   <router-link to="/footerEquity">會員權益</router-link>
                  </li>
                  <li>
                    <router-link to="/footerLevel">會員等級說明</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-3 col-sm-3 col-md-4 col-lg d-flex flex-column justify-content-start align-items-center footer-card"
            >
              <div>
                <h3 class="footer-title-first">
                  找<span class="footer-title-sec">溫度</span>
                </h3>
                <ul class="list-unstyled footer-a">
                  <li>
                  <router-link to="/footerProposal">合作提案</router-link>
                  </li>
                  <li>
                  <router-link to="/footerFeedBack">意見回饋</router-link>
                  </li>
                  <li>
                  <router-link to="/footerWeb">網站平台建置</router-link>
                  </li>
                  <li>
                  <router-link to="/footerAdDesign">廣告圖片設計</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-3 col-sm-3 col-md-4 col-lg d-flex flex-column justify-content-start align-items-center footer-card"
            >
              <div>
                <h3 class="footer-title-first">
                  給<span class="footer-title-sec">溫度</span>
                </h3>
                <ul class="list-unstyled footer-a">
                  <li>
                  <router-link to="/footerFaq">常見問題</router-link>
                  </li>
                  <li>
                  <router-link to="/footerService">服務條款</router-link>
                  </li>
                  <li>
                  <router-link to="/footerPrivacy">隱私權條款</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-3 col-sm-3 col-md-4 col-lg d-flex flex-column justify-content-start align-items-center footer-card"
            >
              <div>
                <h3 class="footer-title-first">
                  送<span class="footer-title-sec">溫度</span>
                </h3>
                <ul class="list-unstyled footer-a">
                  <li>
                  <router-link to="/footerAdProject">專案廣告執行</router-link>
                  </li>
                  <li>
                  <router-link to="/footerAdProject">產品行銷服務</router-link>
                  </li>
                  <li>
                  <router-link to="/footerAdProject">平面影音廣告</router-link>
                  </li>
                  <li>
                  <router-link to="/footerAdProject">營業人事廣告</router-link>
                  </li>
                  <li>
                  <router-link to="/footerAdProject">體驗式廣告</router-link>
                  </li>
                  <li>
                  <router-link to="/footerAdStand">廣告投放規範</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-ft">
        <div class="container custom-container-width">
          <div class="row">
            <div class="col-md-12">
              <p class="footer-contact d-flex justify-content-start">
                Copyright 2020 台灣走起股份有限公司
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
