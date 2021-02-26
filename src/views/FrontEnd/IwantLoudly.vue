<template>
  <div class="bnh-bg">
    <div class="container custom-container-width">
      <div class="signup-title d-flex mb-3 fix_margin">
        <img src="../../assets/image/huntground_lk/wanttosay.png" alt="">
        <div class="d-flex align-items-end">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0">我要大聲說</p>
        </div>
      </div>
      <div class="iwl-content mb-5">
        <form>
          <div class="form-group">
              <label for="exampleFormControlTextarea1">我要說的話</label>
              <textarea class="form-control" placeholder="請輸入文字內容" rows="3"></textarea>
            </div>
        </form>
      </div>
      <div class="iwl-btn">
        <button class="btn btn-mainRed" data-toggle="modal" data-target="#successSubmit">發布</button>
      </div>
    </div>
    <!--發布成功modal-->
    <!-- Modal -->
    <div class="modal fade" id="successSubmit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title w-100 d-flex justify-content-center" id="exampleModalLabel">發布成功</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <p>已排程，將會出現在部落大聲公中。</p>
            <img class="successsubmit" src="../../assets/image/huntground_lk/successsubmit.png" alt="">
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-mainRed px-5" data-dismiss="modal">了解</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
