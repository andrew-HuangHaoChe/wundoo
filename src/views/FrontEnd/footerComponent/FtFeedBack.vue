<template>
  <div class="pt-11">
    <div class="custom-container-width container cus-feed-back">
      <div class="row">
        <h1 class="mx-auto cus-feed-back-top ft-main-title mt-4 mb-4"><i class="feed-back-file fas fa-file-invoice"></i>意見回饋</h1>
      </div>
      <div class="row ft">
        <div class="feed-back px-20">
          <div class="feed-back-article mb-4">
            <p>只要常見問題區找不到您要的資料，就可以在這邊反映給客服人員。※請詳細填寫您的問題及截圖，客服人員在收到您的問題之後，會用最快的速度解決您的問題喔!! ※處理時間：約1-3個工作天內。</p>
          </div>
        </div>
      </div>
      <div class="row cus-768-fbform w-100 mt-2 px-20">
        <div class="feed-back-form">
          <form action="#">
            <div class="input-group">
              <div class="col-12 mb-1">
                <label for="user-account">會員編號 : </label>
                <input type="text" class="form-control form-control" id="user-account">
              </div>
              <div class="col-12 mb-1">
                <label for="user-account-nick">會員暱稱 : </label>
                <input type="text" class="form-control form-control" id="user-account-nick">
              </div>
              <div class="col-12 mb-1">
                <label for="user-que-title">問題主題 : </label>
                <input type="text" class="form-control form-control" id="user-que-title">
              </div>
              <div class="col-12 mb-1">
                <label for="user-que-text">問題內容 : </label>
                <textarea class="form-control" id="user-que-text" rows="3"></textarea>
              </div>
              <div class="col-12 mb-1">
                <label for="user-account-phone">電話 : </label>
                <input type="tel" class="form-control form-control" id="user-account-phone">
              </div>
              <div class="col-12 mb-1">
                <label for="user-account-mail">E-Mail  : </label>
                <input type="email" class="form-control form-control" id="user-account-mail">
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
