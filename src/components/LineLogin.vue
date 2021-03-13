<template>
  <img
    :src="buttonStatus"
    @click="$emit('click')"
  />
  <!-- @mouseover="hoverEvent()"
  @mousedown="pressEvent()"
  @mouseup="hoverEvent()"
  @mouseleave="initEvent()" -->
</template>
<script>
export default {
  data () {
    return {
      buttonStatus: require('../assets/image/icon/social/ic_line.svg')
    }
  },
  methods: {
    hoverEvent () {
      this.buttonStatus = require('../assets/image/linelogin/btn_login_hover.png')
    },
    initEvent () {
      this.buttonStatus = require('../assets/image/linelogin/btn_login_base.png')
    },
    pressEvent () {
      this.buttonStatus = require('../assets/image/linelogin/btn_login_press.png')
    }
  }
}
</script>
