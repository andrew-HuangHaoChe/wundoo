<template>
  <div>
    <div class="checkmore-block">
      <div class="checkmore-top">
        <img class="mb-2" src="../assets/image/harves_season/checkmore.svg" alt="">
        <p class="mb-0">更多抽獎活動</p>
      </div>
      <router-link class="checkmore-bottom" to="/harvestSeason">
        <p class="mb-0 mr-2">前往查看</p>
        <i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .checkmore-block {
    z-index: 1049; // 配合modal 1050 層數
    position: fixed;
    top: 13%;
    right: 13%;
    @media(max-width:576px) {
      top: 13%;
      right: 4%;
    }
  }
  .checkmore-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color:rgba(0,0,0,0.5);
    border-radius: 5px 5px 0 0;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .checkmore-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #DC131A;
    transition: all .3s;
    border-radius: 0px 0px 5px 5px;
    padding: 10px;
    &:hover {
      text-decoration: none;
      color: #fff;
      background: #bd1319;
    }
  }
</style>
