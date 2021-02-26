<template>
    <div class="bnh-bg">
      <div class="container custom-container-width">
        <div class="signup-title d-flex fix_margin">
          <span class="signup-title-bar"></span>
            申請同好獵場
        </div>
        <div class="application mb-4">
          <form>
            <h5><span class="red-start">*</span>為必填項目</h5>
            <div class="form-group">
              <label for="exampleFormControlInput1"><span class="red-start">*</span>獵場名稱</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="請輸入30字內的獵場名稱">
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">獵場說明</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="請輸入相關文字說明..."></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">獵場規則</label>
              <textarea class="form-control" :placeholder="rules" id="bnh-textarea" rows="3"></textarea>
            </div>
          </form>
        </div>
        <div class="apptext-btn pb-4">
          <p>提交申請將儘速審核，審核時程約2-3個工作天<br>請耐心等候，如有問題請聯繫我們。</p>
          <button class="btn btn-mainRed px-5">申請</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      rules: '請使用列表方式說明 ex:\n1.每天請務必簽到\n2.不遵守規則者踢出'
    }
  }
}
</script>
