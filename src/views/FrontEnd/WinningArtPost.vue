<template>
  <div>
    <div class="wanna-post-bg">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="mb-0 post_title">我要發中獎文</p>
        </div>
        <form>
          <div class="row mx-0">
            <div class="form-group col-lg-3 px-0 mr-5">
              <label for="selecttopic">抽獎活動標題</label>
              <select class="form-control" id="selecttopic">
                <option value="" disabled selected hidden>選擇活動</option>
                <option>獵場趣聞</option>
                <option>獵場名人</option>
                <option>獵場注意怪人</option>
              </select>
            </div>
            <div class="form-group col-lg-3 px-0">
              <label for="selecttopic">中獎獎項</label>
              <select class="form-control" id="selecttopic">
                <option value="" disabled selected hidden>選擇獎項</option>
                <option>IPhone 12 Pro Max</option>
                <option>Panasonic 大容量洗衣機</option>
                <option>旅遊折價券</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputTitle">文章標題</label>
            <input type="text" class="form-control" id="inputTitle" placeholder="請輸入文章標題名稱">
          </div>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </form>
        <div class="d-flex justify-content-center py-5"><button class="btn btn-mainRed">發文</button></div>
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
