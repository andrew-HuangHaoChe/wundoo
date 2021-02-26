<template>
  <div>
    <div class="container custom-container-width persoonel_all_block">
      <div class="mt-11 mb-3">
        <ul class="d-flex list-unstyled mb-0 flex-wrap">
          <li class="pr-2">
            <router-link to="/localhuntground" class="d-flex align-items-center memberbadge" href="#">
              <img class="pr-2" src="../../assets/image/huntground_lk/hg_icon/lhgmana_icon.png" alt="" />在地獵場 /
            </router-link>
          </li>
          <li class="pr-2">
            <a class="d-flex align-items-center memberbadge" href="#">台北獵場 /</a>
          </li>
          <li class="pr-2">
            <router-link to="/lookAd" class="d-flex align-items-center memberbadge" href="#">看廣告抽大獎 /</router-link>
          </li>
          <li class="pr-2">
            <router-link to="/personnelAd" class="d-flex align-items-center memberbadge membdg-active" href="#">人事廣告</router-link>
          </li>
        </ul>
      </div>
      <div class="adsort">
        <div class="row mb-4 mx-0">
          <div class="col-lg-6 d-flex justify-content-center">
            <router-link to="/lookAd" class="ad-sort-per">工商廣告</router-link>
          </div>
          <div class="col-lg-6 d-flex justify-content-center sort-com-block">
            <router-link to="/personnelAd" class="ad-sort-com">人事廣告</router-link>
          </div>
        </div>
        <div class="row mx-0 mb-3">
          <div class="col-md-12" v-for="item in topad" :key="item.id">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
        </div>
        <div class="row mx-0 mb-3">
          <div class="col-md-2 mb-3" v-for="item in moread" :key="item.id">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-4" v-for="item in moread_bot" :key="'A' + item.id" v-show="item.id == 'img08'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-6 px-0" v-for="item in moread_bot" :key="'B' + item.id" v-show="item.id == 'img09'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-2" v-for="item in moread_bot" :key="'C' + item.id" v-show="item.id == 'img10'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
        </div>
        <div class="row mx-0 mb-3">
          <div class="col-md-2 mb-3" v-for="item in moread" :key="item.id">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-4" v-for="item in moread_bot" :key="'A' + item.id" v-show="item.id == 'img08'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-6 px-0" v-for="item in moread_bot" :key="'B' + item.id" v-show="item.id == 'img09'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-2" v-for="item in moread_bot" :key="'C' + item.id" v-show="item.id == 'img10'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
        </div>
        <div class="row mx-0 mb-3">
          <div class="col-md-2 mb-3" v-for="item in moread" :key="item.id">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-4" v-for="item in moread_bot" :key="'A' + item.id" v-show="item.id == 'img08'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-6 px-0" v-for="item in moread_bot" :key="'B' + item.id" v-show="item.id == 'img09'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-2" v-for="item in moread_bot" :key="'C' + item.id" v-show="item.id == 'img10'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
        </div>
        <div class="row mx-0 mb-5">
          <div class="col-md-2 mb-3" v-for="item in moread" :key="item.id">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-4" v-for="item in moread_bot" :key="'A' + item.id" v-show="item.id == 'img08'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-6 px-0" v-for="item in moread_bot" :key="'B' + item.id" v-show="item.id == 'img09'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
          <div class="col-md-2" v-for="item in moread_bot" :key="'C' + item.id" v-show="item.id == 'img10'">
            <img class="w-100" :src="item.img_url" alt="">
          </div>
        </div>
        <div class="mb-5 px-3 d-flex justify-content-center">
          <router-link to="/localadSelect" class="btn btn-brilliantRed wanna-post-ad">我要刊登廣告</router-link>
        </div>
      </div>
      <Pagenation class="my-5 px-3"></Pagenation>
    </div>
  </div>
</template>
<script>
import Pagenation from '../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  },
  data () {
    return {
      topad: [
        {
          img_url: require('@/assets/image/huntground_lk/ad11.png'),
          id: 1
        }
      ],
      moread: [
        {
          img_url: require('@/assets/image/huntground_lk/ad12.png'),
          id: 2
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad13.png'),
          id: 3
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad14.png'),
          id: 4
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad15.png'),
          id: 5
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad16.png'),
          id: 6
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad17.png'),
          id: 7
        }
      ],
      moread_bot: [
        {
          img_url: require('@/assets/image/huntground_lk/ad18.png'),
          id: 'img08'
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad19.png'),
          id: 'img09'
        },
        {
          img_url: require('@/assets/image/huntground_lk/ad20.png'),
          id: 'img10'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  height: 100%;
}
</style>
