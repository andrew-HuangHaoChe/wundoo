<template>
   <div class="page">
    <div class="d-flex flex-column align-items-center my-5" v-if="modalshown == false">
      <h5 class="text-center pb-2">點擊下方按鈕開始抽獎!</h5>
      <i class="fas fa-arrow-down fa-5x"></i>
    </div>
    <div class="gridcard" v-if="modalshown == true">
      <div v-for = "(item, idx) in card" :key="idx"  class="gridcard_item" :class="{back:item.isBack,move:item.isMove}" :data-idx="idx"  @click = "onClick" >
        <div>
          <div class="gridcard_front">
            <img src = "../assets/image/images/animation/treasure.svg"/>
          </div>
          <div class="gridcard_back">
            <div :class='{ "sutexture": item.award == "大獵券", "succtexture": item.award == "小米券" }' class="award">{{item.award}}</div>
          </div>
        </div>
      </div>
    </div>
    <button @click="onStart" class="on-start">開始抽獎</button>
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
  runAsync,
  data () {
    return {
      modalshown: false,
      count: 0, // 代表他點擊開始抽獎按鈕幾次
      status: 0, // 點擊寶箱計算次數
      max: 3, // 點擊次數上限
      isFlip: false,
      card: [
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎', number: 1, chunchang: false, id: 0 },
        { inlineStyle: '', isBack: false, isMove: false, award: '大獵券', number: 2, chunchang: true, id: 1 },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎', number: 3, chunchang: false, id: 2 },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎', number: 4, chunchang: false, id: 3 },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎', number: 5, chunchang: false, id: 4 },
        { inlineStyle: '', isBack: false, isMove: false, award: '小米券', number: 6, chunchang: true, id: 5 },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎', number: 7, chunchang: false, id: 6 },
        { inlineStyle: '', isBack: false, isMove: false, award: '沒中獎', number: 8, chunchang: false, id: 7 },
        { inlineStyle: '', isBack: false, isMove: false, award: '小米券', number: 9, chunchang: true, id: 8 }
      ],
      aa: []
    }
  },
  onLoad () {
  },
  onShow () {

  },
  mounted: function () {
  },
  methods: {
    compulsory () { // 第三次必中
      for (let i = 0; i < this.card.length; i++) {
        for (let j = 0; j < this.aa.length; j++) {
          if (i !== parseInt(this.aa[j].idx)) {
            if (j === this.aa.length - 1) {
              if (this.card[i].award === '大獵券') {
                this.card[i].award = '大獵券'
              } else {
                this.card[i].award = '小米券'
              }
            }
            continue
          } else {
            break
          }
          // 換獎品圖與獎品名稱  --->   將剩餘的沒中獎
        }
      }
    },
    /**
     * 洗牌过程
     * @author 小小仙
     * @date 2019/3/6
     */
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
          if (index <= 9) {
            res.number = Math.random()// 给牌生成一个随机数，用于牌的排序
            res.isMove = true
          }
        })
        // 依据牌的随机数进行排序
        this.card.sort(function (arr1, arr2) {
          var test = 0
          if (arr1.number > arr2.number) {
            test = 1
          } else {
            test = -1
          }
          return test
        })
        console.log(this.card)
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
    /**
     * 重置
     * @author 小小仙
     * @date 2019/3/6
     */
    reset () {
      this.isFlip = false
      runAsync(800).then(() => {
        this.start()
      })
    },
    /**
     * 点击开始按钮触发函数
     * @author 小小仙
     * @date 2019/3/6
     */
    onStart () {
      this.count++
      this.modalshown = !this.modalshown
      if (this.count !== 0) {
        this.reset()
      } else {
        this.start()
      }
    },
    /**
     * 点击翻牌
     * @author 小小仙
     * @date 2019/3/6
     * @param event 所点击牌的信息
     */
    onClick (event) {
      this.aa.push(event.currentTarget.dataset)
      this.status++
      if (this.status < this.max) {
        console.log(111)
      }
      if (this.status === 2) { // 使用者抽到第二詞還沒中獎時就跑compulsory這個函式讓剩下的選項都強制轉換成小米券
        this.compulsory()
      }
      const that = this
      if (!this.isFlip) return
      const idx = event.currentTarget.dataset.idx
      this.card[idx].isBack = !this.card[idx].isBack
      runAsync(1000).then(() => {
        console.log(that.card[idx].chunchang)
        // idx.showModal({
        //   title: '恭喜中' + that.card[idx].award, // 提示文字
        //   duration: 1000, // 显示时长
        //   mask: true, // 是否显示透明蒙层，防止触摸穿透，默认：false
        //   icon: 'success', // 图标，支持"success"、"loading"
        //   success: function () {
        //     that.reset()
        //   }, // 接口调用成功
        //   fail: function () {
        //     that.reset()
        //   }, // 接口调用失败的回调函数,
        //   complete: function () {
        //     that.reset()
        //   } // 接口调用结束的回调函数，
        // })
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
  color: #000;
  text-align: center;
  line-height: 115px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.gridcard .gridcard_item .gridcard_back{
  -webkit-transform: rotateY(180deg) translateZ(0);
  transform: rotateY(180deg) translateZ(0);
  background: transparent;
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

.succtexture {
  background-image: url(../assets/image/images/animation/treasure_light.svg);
  background-position: center;
  background-size: cover;
  min-height: 60px;
  background-repeat: no-repeat;
}

.sutexture {
  background-image: url(../assets/image/images/animation/treasure_light.svg);
  background-position: center;
  background-size: cover;
  min-height: 60px;
  background-repeat: no-repeat;
}

.fa-arrow-down {
  -webkit-animation: bounce 3.5s linear 0s infinite alternate;
  animation: bounce 3.5s linear 0s infinite alternate;
}

@-webkit-keyframes bounce {
  50% {
    -webkit-transform: translateY(-15px);
  }
  100% {
    -webkit-transform: translateY(0px);
  }
}
/* For firefox and others than webkit based browsers */
@keyframes bounce {
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
