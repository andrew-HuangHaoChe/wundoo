<template>
  <div>
    <div class="container custom-container-width pt-12">
      <div class="signup-title d-flex">
      <span class="signup-title-bar"></span>
        曾參與的活動
      </div>
    </div>
    <div class="partic-option-block">
      <ul class="mb-0 list-unstyled d-flex justify-content-between">
        <li :class="{ 'partic-active': participated =='lottery' }" @click="participated ='lottery'"><router-link to="/participated">抽獎</router-link></li>
        <li :class="{ 'partic-active': participated =='race' }" @click="participated ='race'"><router-link to="/particRace">競賽</router-link></li>
        <li :class="{ 'partic-active': participated =='mission' }" @click="participated ='mission'"><router-link to="/particMission">任務</router-link></li>
      </ul>
    </div>
    <div class="container custom-container-width">
      <div class="partic-serach-block mb-3">
        <h5>搜尋範圍</h5>
        <div class="input-group">
          <select class="custom-select mr-3">
            <option selected>請選擇年份</option>
            <option value="">2021</option>
            <option value="">2022</option>
          </select>
          <select class="custom-select">
            <option selected>請選擇月份</option>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
            <option value="">04</option>
            <option value="">05</option>
            <option value="">06</option>
            <option value="">07</option>
            <option value="">08</option>
            <option value="">09</option>
            <option value="">10</option>
            <option value="">11</option>
            <option value="">12</option>
          </select>
        </div>
      </div>
      <router-view></router-view>
      <Pagenation class="my-5" />
    </div>
  </div>
</template>
<script>
import Pagenation from '../../../components/Pagination.vue'
export default {
  components: {
    Pagenation
  },
  data () {
    return {
      participated: 'lottery'
    }
  }
}
</script>
