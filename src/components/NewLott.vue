<template>
  <div>
    <div class="row">
      <div v-for="items in 3" :key="items.index" class="col-4" @click="clickTexture">
        1
        <span style="display: none;">{{ count }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      winlottery: false,
      count: 0,
      randon: 0 // 亂數初始值
    }
  },
  methods: {
    clickTexture () {
      const vm = this
      vm.randon = Math.floor(Math.random() * 10) // 每click一次寶箱就要讓變數執行一次亂數
      vm.count++
      if (vm.randon % 3 === 0 && vm.count === 1) {
        vm.winlottery = true
        console.log(vm.randon % 3)
      } else if (vm.randon % 3 !== 0 && vm.count === 2) {
        vm.winlottery = true
        console.log(vm.randon % 3)
      } else if (vm.count === 3) {
        vm.winlottery = true
      }
    }
  }
}
</script>
