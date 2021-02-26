<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width">
        <div class="signup-title d-flex pt-12">
          <span class="signup-title-bar"></span>
            獵場設定
        </div>
        <div>
          <h6 class="basic_data">基本資料</h6>
        </div>
        <div>
          <form action="" class="hgsetting-form-top">
            <div class="form-group mb-3">
              <p class="up-img-title">上傳獵場封面照</p>
              <label for="hgSettingUploadImg" class="upImgtext mb-0">選擇檔案</label>
              <input type="file" class="form-control-file" id="hgSettingUploadImg">
            </div>
            <div class="form-group mb-3">
              <label for="hgName" class="hgName">獵場名稱<span>(限30個字以內)</span></label>
              <input type="text" class="form-control" id="hgName" placeholder="請輸入獵場名稱">
            </div>
            <div class="form-group mb-3">
              <label for="hgRules">獵場規則</label>
              <textarea class="form-control" id="hgRules" rows="3" placeholder="請輸入相關文字說明..."></textarea>
            </div>
            <div class="form-group">
              <label for="hgName" class="hgName">獵場是否公開<span>(公開申請加入不需審核、私密需管理員審核後才可留言)</span></label>
              <select class="form-control">
                <option>私密</option>
              </select>
            </div>
          </form>
          <form action="" class="hgsetting-form-bot">
            <div class="form-group mb-4">
              <label for="ques1" class="ques1">審核問題1</label>
              <input type="text" class="form-control" id="ques1" placeholder="請問您已經閱讀過版規了嗎？">
            </div>
            <div class="form-group mb-4">
              <label for="ques2" class="ques2">審核問題2</label>
              <input type="text" class="form-control" id="ques2" placeholder="請輸入審核問題(若沒有則空白)">
            </div>
            <div class="form-group mb-4">
              <label for="ques3" class="ques3">審核問題3</label>
              <input type="text" class="form-control" id="ques3" placeholder="請輸入審核問題(若沒有則空白)">
            </div>
          </form>
        </div>
        <div class="hg-setting-btn py-5">
          <div class="d-flex justify-content-between">
            <button class="btn cancelBtn px-5">取消</button>
            <button class="btn btn-brilliantRed px-5">儲存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
