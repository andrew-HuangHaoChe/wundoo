<template>
  <div class="page">
    <div class="gridcard">
      <div v-for = "(item, idx) in card" :key="idx"  class="gridcard_item" :class="{back:item.isBack,move:item.isMove}" :data-idx="idx"  @click = "onClick" >
        <div>
          <div class="gridcard_front">
            <img src="../assets/image/images/animation/treasure.svg">
          </div>
          <div class="gridcard_back">
            <div class="award">{{item.award}}</div>
          </div>
        </div>
      </div>
    </div>
    <button @click="onStart" class="on-start">點此開始抽獎!</button>
  </div>
</template>
<script>
function runAsync (time) {
  return new Promise(function (resolve, reject) {
    const timer = setTimeout(function () {
      resolve()
      clearTimeout(timer)
    }, time)
  })
}
export default {
  data () {
    return {
      count: 0,
      isFlip: false,
      card: [
        { inlineStyle: '', isBack: false, isMove: false, award: '部落見面禮' },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎!' },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎!' },
        { inlineStyle: '', isBack: false, isMove: false, award: '部落見面禮' },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎!' },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎!' },
        { inlineStyle: '', isBack: false, isMove: false, award: '部落見面禮' },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎!' },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎!' }
      ]
    }
  },
  methods: {
    start () {
      runAsync(100).then(() => {
        // 1-3张牌翻转至奖品面
        this.card.forEach((res, index) => {
          if (index < 3) {
            res.isBack = true
          }
        })
        return runAsync(200)
      }).then(() => {
        // 4-6张牌翻转至奖品面
        this.card.forEach((res, index) => {
          if (index > 2 && index < 6) {
            res.isBack = true
          }
        })
        return runAsync(200)
      }).then(() => {
        // 7-9张牌翻转至奖品面
        this.card.forEach((res, index) => {
          if (index > 5 && index <= 8) {
            res.isBack = true
          }
        })
        return runAsync(800)
      }).then(() => {
        // 所有牌翻转回背面
        this.card.forEach((res, index) => {
          if (index < 9) {
            res.isBack = false
          }
        })
        return runAsync(400)
      }).then(() => {
        // 所有牌合在一摞
        this.card.forEach((res, index) => {
          if (index < 9) {
            res.number = Math.random() // 给牌生成一个随机数，用于牌的排序
            res.isMove = true
          }
        })
        // 依据牌的随机数进行排序
        this.card.sort(function (arr1, arr2) {
          return arr1.number > arr2.number
        })
        return runAsync(500)
      }).then(() => {
        // 分发随机排序后的牌
        this.card.forEach((res, index) => {
          if (index < 9) {
            res.isMove = false
          }
        })
        this.isFlip = true
      })
    },
    // 重置
    reset () {
      this.isFlip = false
      runAsync(800).then(() => {
        this.start()
      })
    },
    // 點擊觸發函數
    onStart () {
      this.count++
      if (this.count !== 0) {
        this.reset()
      } else {
        this.start()
      }
    },
    // 點擊翻牌
    onClick (event) {
      const that = this
      if (!this.isFlip) return
      const idx = event.currentTarget.dataset.idx
      this.card[idx].isBack = !this.card[idx].isBack
      runAsync(1000).then(() => {
        idx.showModal({
          title: '恭喜中' + that.card[idx].award, // 提示文字
          duration: 1000, // 显示时长
          mask: true, // 是否显示透明蒙层，防止触摸穿透，默认：false
          icon: 'success', // 图标，支持"success"、"loading"
          success: function () {
            that.reset()
          }, // 接口调用成功
          fail: function () {
            that.reset()
          }, // 接口调用失败的回调函数,
          complete: function () {
            that.reset()
          } // 接口调用结束的回调函数，
        })
      })
    }
  }
}
</script>
<style lang="scss">
.gridcard{
  margin: 0 10px;
  position: relative;
  height: 355px;
}
/*perspective: 400px;*/
.gridcard_item{
  position: absolute;
  width: 115px;
  height: 115px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  @media(max-width: 576px) {
    width: 100px;
    height: 100px;
  }
}
/*    -webkit-transform: translate3d(120px, 102rpx, 0);
    transform: translate3d(120px, 102rpx, 0);*/
.gridcard .gridcard_item image{
  display: block;
  width: 100%;
  height: 100%;
}
.gridcard .gridcard_item .gridcard_front,.gridcard .gridcard_item .gridcard_back{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 115px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.gridcard .gridcard_item .gridcard_back{
  -webkit-transform: rotateY(180deg) translateZ(0);
  transform: rotateY(180deg) translateZ(0);
  background: #1E9FD9;
}
.award {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
  position: absolute;
  left:0;
  right:0;
  top:0;
}
.on-start{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  margin: 10px auto;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background-color: #DC131A;
  color: #fff;
  border: none;
}
.on-start::after{
  border: none;
}
.gridcard .back{
  -webkit-transform: perspective(1000px) rotateY(-180deg) translateZ(0);
  transform: perspective(1000px) rotateY(-180deg) translateZ(0);
}
.gridcard .gridcard_item.move{
  z-index: 3;
  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}
.gridcard .gridcard_item:nth-child(1){
  top: 0;
  left: 0;
  @media(max-width: 576px) {
    left: -30px;
  }
  @media(max-width: 375px) {
    left: -40px;
  }
}
.gridcard .gridcard_item:nth-child(1).move{
  -webkit-transform: translate3d(120px,120px,0);
  transform: translate3d(120px,120px,0);
}
.gridcard .gridcard_item:nth-child(2){
  top: 0;
  left: 120px;
  @media(max-width: 576px) {
    left: 90px;
  }
  @media(max-width: 375px) {
    left: 80px;
  }
}
.gridcard .gridcard_item:nth-child(2).move{
  -webkit-transform: translate3d(0,120px,0);
  transform: translate3d(0,120px,0);
}
.gridcard .gridcard_item:nth-child(3){
  top: 0;
  left: 240px;
  @media(max-width: 576px) {
    left: 210px;
  }
  @media(max-width: 375px) {
    left: 200px;
  }
}
.gridcard .gridcard_item:nth-child(3).move{
  -webkit-transform: translate3d(-120px,120px,0);
  transform: translate3d(-120px,120px,0);
}
.gridcard .gridcard_item:nth-child(4){
  top: 120px;
  left: 0;
  @media(max-width: 576px) {
    left: -30px;
  }
  @media(max-width: 375px) {
    left: -40px;
  }
}
.gridcard .gridcard_item:nth-child(4).move{
  -webkit-transform: translate3d(120px,0,0);
  transform: translate3d(120px,0,0);
}
.gridcard .gridcard_item:nth-child(5){
  top: 120px;
  left: 120px;
  @media(max-width: 576px) {
    left: 90px;
  }
  @media(max-width: 375px) {
    left: 80px;
  }
}
.gridcard .gridcard_item:nth-child(6){
  top: 120px;
  left: 240px;
  @media(max-width: 576px) {
    left: 210px;
  }
  @media(max-width: 375px) {
    left: 200px;
  }
}
.gridcard .gridcard_item:nth-child(6).move{
  -webkit-transform: translate3d(-120px, 0,0);
  transform: translate3d(-120px, 0,0);
}
.gridcard .gridcard_item:nth-child(7){
  top: 240px;
  left: 0;
  @media(max-width: 576px) {
    left: -30px;
  }
  @media(max-width: 375px) {
    left: -40px;
  }
}
.gridcard .gridcard_item:nth-child(7).move{
  -webkit-transform: translate3d(120px,-120px,0);
  transform: translate3d(120px,-120px,0);
}
.gridcard .gridcard_item:nth-child(8){
  top: 240px;
  left: 120px;
  @media(max-width: 576px) {
    left: 90px;
  }
  @media(max-width: 375px) {
    left: 80px;
  }
}
.gridcard .gridcard_item:nth-child(8).move{
  -webkit-transform: translate3d(0,-120px,0);
  transform: translate3d(0,-120px,0);
}
.gridcard .gridcard_item:nth-child(9){
  top: 240px;
  left: 240px;
  @media(max-width: 576px) {
    left: 210px;
  }
  @media(max-width: 375px) {
    left: 200px;
  }
}
.gridcard .gridcard_item:nth-child(9).move{
  -webkit-transform: translate3d(-120px,-120px,0);
  transform: translate3d(-120px,-120px,0);
}
</style>
