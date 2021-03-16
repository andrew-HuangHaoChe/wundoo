<template>
  <div class="pt-11">
    <div class="custom-container-width container cus-feed-back">
      <div class="row">
        <h1 class="mx-auto ft-main-title mt-4">合作提案</h1>
      </div>
      <div class="proposal-item proposal-red px-16 mt-4">
        <div class="row cus-proposal-item">
          <div class="col-xl-9 col-lg-7 col-md-12">
            <div class="proposal-item-txt">
              <p class="proposal-item-title">我們喜歡單打獨鬥的精彩</p>
              <p class="proposal-item-title-right">更喜歡合作共贏的輝煌</p>
              <div class="proposal-txt-info">
                <p>我們喜歡團隊合作、異業結盟、創造話題，
                <br>歡迎與我們聯繫，不管您有什麼想法，
                <br>一起聊聊吧，我們會盡快回覆您！</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-5 col-md-12">
            <div class="proposal-item-img">
              <img src="../../../assets/image/ft_img/proposal/img01.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="proposal-item proposal-blue px-16 mt-4">
        <div class="row cus-proposal-item">
          <div class="col-lg-7">
            <div class="proposal-item-img">
              <img src="../../../assets/image/ft_img/proposal/img02.png" alt="">
            </div>
          </div>
          <div class="col-lg-5">
            <div class="proposal-item-txt">
              <p class="proposal-item-title">溫度部落的遊戲化設計</p>
              <p class="proposal-item-title-right game">創造更有趣的線上體驗</p>
              <div class="proposal-txt-info">
                <p>這裡是一個充滿驚喜的地方，
                <br>擁有遊戲化社群與台灣在連結，
                <br>提供創新、獨家、愉快的線上體驗！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="proposal-item proposal-orange px-16 mt-4">
        <div class="row cus-proposal-item">
          <div class="col-xl-9 col-lg-7 col-md-12">
            <div class="proposal-item-txt">
              <p class="proposal-item-title">溫度，是一種感覺～</p>
              <p class="proposal-item-title-right">我們讓所有人都能夠感受的到！</p>
              <div class="proposal-txt-info">
                <p>把您想要的「溫度」，傳遞給每一位關鍵受眾，
                <br>我們用<span class="feel-note">溫度部落</span>當作哈利波特的魔法棒，
                <br>為您點亮台灣每個角落！</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-5 col-md-12">
            <div class="proposal-item-img">
              <img src="../../../assets/image/ft_img/proposal/img03.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row cus-768-fbform w-100 mt-4 px-20">
        <div class="feed-back-form">
          <form action="#">
            <div class="input-group">
              <div class="col-12 mb-1">
                 <label for="work-main">主題事由 : </label>
                   <select class="form-control" id="work-main">
                    <option>合作提案</option>
                    <option>網站平台建置</option>
                    <option>廣告圖片設計</option>
                    <option>吉祥物CI設計</option>
                    <option>廣告刊登</option>
                    <option>產品行銷</option>
                    <option>申請授權</option>
                    <option>其他</option>
                  </select>
              </div>
              <div class="col-12 mb-1">
                <label for="work-main-text">內容說明 :</label>
                <textarea class="form-control" id="work-main-text" rows="3"></textarea>
              </div>
              <div class="col-12 mb-1">
                <label for="company-name">公司或品牌名稱 :</label>
                <input type="text" class="form-control form-control" id="company-name">
              </div>
              <div class="col-12 mb-1">
                <label for="contact-name">聯絡人: </label>
                <input type="text" class="form-control form-control" id="contact-name">
              </div>
              <div class="col-12 mb-1">
                <label for="contact-job">職稱 :</label>
                <input type="text" class="form-control form-control" id="contact-job">
              </div>
              <div class="col-12 mb-1">
                <label for="contact-phone">聯絡電話 :</label>
                <input type="tel" class="form-control form-control" id="contact-phone">
              </div>
              <div class="col-12 mb-1">
                <label for="contact-mobile">聯絡手機 :</label>
                <input type="tel" class="form-control form-control" id="contact-mobile">
              </div>
              <div class="col-12 mb-1">
                <label for="contact-mail">E-Mail  : </label>
                <input type="email" class="form-control form-control" id="contact-mail">
              </div>
              <div class="col-12 mb-1 cus-member-view">
                <label class="member-view" for="">是否為會員 ：</label>
                <div class="custom-control custom-radio custom-control-inline" id="contact-member">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                  <label class="custom-control-label" for="customRadioInline1">是，會員暱稱</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                  <label class="custom-control-label" for="customRadioInline2">否，歡迎加入溫度部落以獲得更完善的服務</label>
                </div>
              </div>
              <div class="col-12 mb-1">
                <label for="">上傳檔案  :  圖片限制：JPG, PNG, GIF 等格式，檔案大小 4MB 以下。</label>
              </div>
              <div class="col-12 mb-2">
                <input type="file" id="file-upload" class="form-control-file">
              </div>
              <div class="col-12 mb-2">
                <input type="file" id="file-upload" class="form-control-file">
              </div>
              <div class="col-12 mb-2">
                <input type="file" id="file-upload" class="form-control-file">
              </div>
              <div class="col-12 mb-2">
                <input type="file" id="file-upload" class="form-control-file">
              </div>
              <div class="col-12 mb-2">
                <input type="file" id="file-upload" class="form-control-file">
              </div>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-4">
               <button type="submit" class="btn btn-danger">飛鴿傳書 送出</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
