<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0">我要發日記</p>
        </div>
        <form>
          <div class="form-group">
            <label for="inputTitle">文章標題</label>
            <input type="text" class="form-control" id="inputTitle" placeholder="請輸入文章標題名稱">
          </div>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </form>
        <div class="d-flex justify-content-center py-5"><button class="btn btn-mainRed px-5">發文</button></div>
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
  }
}
</script>
