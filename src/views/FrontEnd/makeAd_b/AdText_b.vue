<template>
  <div>
    <div class="choosefun d-flex flex-column">
      <div></div>
      <div class="row">
        <div class="col">
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
</style>
