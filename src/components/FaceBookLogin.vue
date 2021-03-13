<template>
  <div class="signup-buttons">
    <div id="fb-root"></div>
    <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
    </a>
  </div>
</template>
<script>
import { initFbsdk } from '../config/fb_oAuth.js'
export default {
  name: 'login_signup_social',
  mounted () {
    initFbsdk()
  },
  methods: {
    loginWithFacebook () {
      window.FB.login(response => {
        console.log('fb response', response)
      }, this.params)
    }
  }
}
</script>
<style lang="scss">
.signup-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73px;
  height: 73px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(155, 155, 155, 0.31963);
}
</style>
