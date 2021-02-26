<template>
  <div>
    <div class="article_badge mb-1 pt-11">
      <ul class="container custom-container-width d-flex list-unstyled mb-0">
        <li class="pr-2">
          <a class="d-flex align-items-center memberbadge" href="#">
            <img
              class="pr-2"
              src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png"
              alt=""
            />溫度豐收祭 /
          </a>
        </li>
        <li class="pr-2">
          <a class="d-flex align-items-center memberbadge" href="#">
            歷年抽獎活動
          </a>
        </li>
      </ul>
    </div>
    <div class="container custom-container-width">
      <div class="days_picker d-flex align-items-center justify-content-center mb-4">
        <img src="../../assets/image/harves_season/prev.png" alt="" />
        <p class="date_show mb-1 mx-3">109年07-08月</p>
        <img src="../../assets/image/harves_season/next.png" alt="" />
      </div>
      <div class="row">
        <div v-for="items in 9" :key="items.index" class="col-md-4 pb-4">
          <div class="over_card_top mb-3">
          </div>
          <div class="over_card_content">
            <h3 class="mb-3">十萬冒險金-跟著老牙一起去冒險</h3>
            <div class="d-flex align-items-center mb-2">
              <img class="pr-2" src="../../assets/image/icon/thermometer.svg" alt="">
              <p class="mb-0">109.08.08-109.08.31</p>
            </div>
            <div class="d-flex align-items-center mb-2">
              <img class="pr-2" src="../../assets/image/icon/hunter.svg" alt="">
              <p class="mb-0">參與人數：1,234,532,214</p>
            </div>
            <div class="over_card_footer">
              <button class="btn btn-brilliantRed">中獎名單</button>
            </div>
          </div>
        </div>
      </div>
      <Pagenation class="my-5"></Pagenation>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  }
}
</script>
