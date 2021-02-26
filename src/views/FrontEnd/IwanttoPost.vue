<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0 mr-2">我要發文</p>
          <div class="post_position">
            <p class="mb-0">發文位置: 同好獵場 / <span>(獵場主題名稱)</span></p>
          </div>
        </div>
        <form action="" enctype="multipart/form-data" method="post">
          <div class="form-group col-lg-3 px-0">
            <label for="selecttopic">話題類型</label>
            <select class="form-control" id="selecttopic">
              <option value="" disabled selected hidden>請選擇話題類型</option>
              <option>獵場趣聞</option>
              <option>獵場名人</option>
              <option>獵場注意怪人</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputTitle">文章標題</label>
            <input type="text" class="form-control" id="inputTitle" placeholder="請輸入文章標題名稱">
          </div>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
          <div class="mt-3">
            <label for="UploadImg" class="btn postUpimg">
              <img class="mr-1" src="../../assets/image/icon/upload.svg" alt="">新增圖片
            </label>
            <input type="file" ref="files" name="wantpostUpimg" class="form-control-file" id="UploadImg" @change="upImg()">
          </div>
        </form>
        <div class="d-flex justify-content-center py-5"><button class="btn btn-brilliantRed px-5">發文</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-vue'
export default {
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
  data () {
    return {
      editor: ClassicEditor,
      editorData: '文字輸入於此',
      editorConfig: {
      // The configuration of the editor.
      }
    }
  },
  methods: {
    upImg () {
      console.log(this)
      const upFile = this.$refs.files.files[0]
      console.log(upFile)
      const formData = new FormData()
      formData.append('wantpostUpimg', upFile)
    //   const url = api // 到時要開api放這
    //   this.$http.post(url, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   }).then((response) => {
    //     console.log(response.data)
    //   })
    // }
    }
  }
}
</script>
