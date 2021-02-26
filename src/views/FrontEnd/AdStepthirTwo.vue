<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <button class="btn btn-brilliantRed btn_padding mr-3">選擇檔案</button>
      <button class="btn ad_btn_whiteBtn btn_padding mr-3">刪除照片</button>
      <span class="file_size">(檔案尺寸: 200x300px)</span>
    </div>
    <div class="d-flex flex-column">
      <img class="make_ad_upImg" src="../../assets/image/huntground_lk/make_ad_sample.png" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.del_photo_btn {
  background: #FFFFFF;
  border: 1px solid #555555;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #555555;
}
.file_size {
  color: #E2273A;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Noto Sans TC';
}
.make_ad_upImg {
  width: 50%;
  max-height: 200px;
}
</style>
