<template>
  <div>
    <div class="row">
      <div v-for="items in 9" :key="items.index" class="col-4 d-flex flex-column align-items-center p-4" @click="clickTexture" style="cursor: pointer;">
        <img src="../assets/image/images/animation/treasure.svg" alt="">
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
      vm.$emit('lottCount', vm.count)
      if (vm.randon % 3 === 0 && vm.count === 1) {
        vm.winlottery = true
        vm.$emit('winthelott', vm.winlottery)
      } else if (vm.randon % 3 !== 0 && vm.count === 2) {
        vm.winlottery = true
        vm.$emit('winthelott', vm.winlottery)
      } else if (vm.count === 3) {
        vm.winlottery = true
        vm.$emit('winthelott', vm.winlottery)
      }
    }
  }
}
</script>
