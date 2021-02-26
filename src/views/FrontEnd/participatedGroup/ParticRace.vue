<template>
  <div>
    <div class="row m-0 mgmt-title-block" style="background: #000000;">
      <div class="col-md-4 col-lg-2 col-xl-2 mgmt-art-title">
        <h5>時間</h5>
      </div>
      <div class="col-md-8 col-lg-10 col-xl-10 mgmt-art-title">
        <h5>抽獎活動名稱</h5>
      </div>
    </div>
    <div class="row m-0 border-bottom" v-for="part in particData" :key="part.id">
      <div class="col-md-4 col-lg-2 col-xl-2 d-flex flex-column align-items-sm-start align-items-md-center justify-content-center categories-block py-3">
        {{ part.act_time }}
      </div>
      <div class="col-md-8 col-lg-10 col-xl-10">
        <div class="d-flex align-items-center justify-content-center h-100 w-100 py-3">
          <p class="mb-0 text-center">
            {{ part.act }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      particData: [
        {
          id: 1,
          act: '溫度部落競賽',
          act_time: '2020/08/01'
        },
        {
          id: 2,
          act: '溫度部落競賽',
          act_time: '2020/08/01'
        },
        {
          id: 3,
          act: '溫度部落競賽',
          act_time: '2020/08/01'
        },
        {
          id: 4,
          act: '溫度部落競賽',
          act_time: '2020/08/01'
        }
      ]
    }
  }
}
</script>
