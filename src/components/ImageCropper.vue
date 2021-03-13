<template>
  <div>
    <!-- 遮罩层 -->
    <div class="modal fade" id="cropperModal" tabindex="-1" role="dialog" aria-labelledby="cropperModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close cropperModalclose" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container d-flex justify-content-center">
              <div class="img-container">
                <img id="image" :src="url" alt="Picture">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-brilliantRed" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-brilliantRed" @click="crop">確定</button>
          </div>
        </div>
      </div>
    </div>
    <div id="demo">
      <div>
        <div class="mr-3">
          <input ref="clickupload" type="file" id="change" accept="image" @change="change" style="display: none;">
          <label for="change"></label>
          <button class="btn btn-brilliantRed" @click="$refs.clickupload.click()">選擇檔案</button>
        </div>
        <div v-if="headerImage === ''" class="defaultpic"><img src="../assets/image/images/default-pic.png" alt=""></div>
        <div v-if="headerImage !== ''" class="show">
          <div class="picture" :style="'backgroundImage:url('+headerImage+')'">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cropper from 'cropperjs'
import $ from 'jquery'
export default {
  components: {
  },
  data () {
    return {
      headerImage: '',
      picValue: '',
      cropper: '',
      croppable: false,
      panel: false,
      url: ''
    }
  },
  mounted () {
    // 初始化这个裁剪框
    var self = this
    var image = document.getElementById('image')
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      background: false,
      zoomable: true,
      cropBoxResizable: true,
      responsive: true,
      minContainerWidth: 400,
      minContainerHeight: 400,
      minCropBoxWidth: 271,
      minCropBoxHeight: 271,
      ready: function () {
        self.croppable = true
      }
    })
  },
  methods: {
    getObjectURL (file) {
      var url = null
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    },
    change (e) {
      $('#cropperModal').modal('show')
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      // this.panel = true
      this.picValue = files[0]
      this.url = this.getObjectURL(this.picValue)
      // 每次替换图片要重新得到新的url
      if (this.cropper) {
        this.cropper.replace(this.url)
      }
      // this.panel = true
    },
    crop () {
      // this.panel = false
      var croppedCanvas
      var roundedCanvas
      if (!this.croppable) {
        return
      }
      // Crop
      croppedCanvas = this.cropper.getCroppedCanvas()
      console.log(this.cropper)
      // Round
      roundedCanvas = this.getRoundedCanvas(croppedCanvas)
      this.headerImage = roundedCanvas.toDataURL()
      this.postImg()
      this.$emit('imgUrl', this.headerImage)
      $('#cropperModal').modal('hide')
    },
    getRoundedCanvas (sourceCanvas) {
      var canvas = document.createElement('canvas')
      var context = canvas.getContext('2d')
      var width = sourceCanvas.width
      var height = sourceCanvas.height
      canvas.width = width
      canvas.height = height
      context.imageSmoothingEnabled = true
      context.drawImage(sourceCanvas, 0, 0, width, height)
      context.globalCompositeOperation = 'destination-in'
      context.beginPath()
      context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true)
      context.fill()
      return canvas
    },
    postImg () {
      // 这边写图片的上传
    }
  }
}
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #demo {
    div:first-child {
      display: flex;
      align-items: center;
    }
  }
  #demo .show {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    border: 3px solid #e8c57c;
  }

  #demo .picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .defaultpic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    img {
      width: 150px;
      height: 150px;
    }
  }

  #demo .container {
    z-index: 99;
    position: fixed;
    padding-top: 60px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(116, 109, 109);
  }

  #demo #image {
    max-width: 100%;
  }
  .cropperModalclose {
    color: #000 !important;
    background: #fff !important;
  }
</style>
