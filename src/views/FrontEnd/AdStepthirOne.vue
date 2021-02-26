<template>
  <div>
    <div class="choosefun d-flex flex-column">
      <div></div>
      <div class="row">
        <div class="col">
          <div class="choose_bg d-flex align-items-center mb-3">
            <h5>背景顏色</h5>
            <ul class="d-flex align-items-center mb-0 bg_block list-unstyled">
              <li class="mr-2"></li>
              <li class="mr-2"></li>
              <li class="mr-2"></li>
              <li class="mr-2"></li>
              <li class="mr-2"></li>
              <li class="mr-2"></li>
            </ul>
          </div>
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </div>
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
      editorData: '',
      editorConfig: {
      // The configuration of the editor.
      }
    }
  }
}
</script>
<style lang="scss">
  .ck-content { min-height:250px !important; }
  .choose_bg {
    border: 1px solid #D4D4D4;
    padding: 7px 14px;
    h5 {
      font-family: 'Noto Sans TC';
      font-size: 16px;
      line-height: 23px;
      color: #333333;
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
  .bg_block {
    li {
      width: 20px;
      height: 20px;
      background-color: coral;
    }
  }
</style>
