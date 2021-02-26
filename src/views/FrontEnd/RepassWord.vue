<template>
  <div>
      <div class="rest-container">
          <div class="container reset-password-container rest-content">
            <div class="signup-title d-flex">
              <span class="signup-title-bar"></span>
                重設密碼
            </div>
            <form>
              <div class="form-group repass-word">
                <label for="reEmail">輸入與您帳號關聯的電子郵件，我們會透過電子郵件向您寄送重設密碼的連結。</label>
                <input class="form-control"  id="reEmail" type="email" placeholder="請輸入電子郵件">
              </div>
            </form>
            <div class="reset-btn">
              <button class="btn btn-brilliantRed">發送重設連結</button>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
