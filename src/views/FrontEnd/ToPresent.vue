<template>
  <div>
    <div class="container custom-container-width wanna-post-content">
      <div class="d-flex align-items-end mb-4 pt-4">
        <span class="signup-title-bar il-custom-bar"></span>
        <p class="signup-title mb-0 pt-0">贈送好友禮物</p>
      </div>
      <h5 class="choose_gift">1. 選擇要贈送的禮物</h5>
      <div style="margin-bottom: 70px;" class="row w-100">
        <div class="col-12 col-md-6 col-lg-2 mb-3" v-for="(items, index) in persentlist" :key="items.id" @click="selectgift(index)">
          <div>
            <div class="gift_card card-border" :class="{ selected: index === activeItem}">
              <img src="../../assets/image/sidebar/gift_img.png" alt="">
              <p class="gift_count mb-0">x<span>{{ items.quantity }}</span></p>
            </div>
            <div class="gift_text_content">
              <p class="mb-2 gift_title">{{ items.commodity_name }} x {{ items.quantity }}</p>
              <div class="d-flex flex-column align-items-center justify-content-center">
                  <div class="d-flex align-items-center mb-2">
                    <img class="integralcoin mr-1" src="../../assets/image/member/icon/integral_icon.png" alt="">
                    <span class="integral_text">積分 {{ items.integral }}</span>
                  </div>
                  <p class="bonus_text mb-2">額外獎勵:抽獎券x{{ items.lottery_ticket }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 class="choose_gift">2. 選擇要贈送的好友</h5>
      <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 80px;">
        <div class="row w-100">
          <div class="col-12 col-md-6 col-lg-2 mb-3" v-for="(item, index) in friendlist" :key="item.id" @click="selectfriends(index)">
            <div class="d-flex justify-content-center align-items-center selectfriend_default" :class="{ selectfriend: index === activeFriends}">
              <div class="box">
                <img :src="item.imgUrl" alt="">
                <img class="boxbadge" :src="item.badge" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center" style="margin-bottom: 80px;">
        <button class="btn btn-greyBtn bg-white mr-3 px-5">取消</button>
        <button class="btn btn-mainRed px-5">贈送</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      giftchooser: false,
      friendschooser: false,
      visbillty: 'all',
      activeItem: -1,
      activeFriends: -1,
      persentlist: [
        {
          imgUrl: require('@/assets/image/sidebar/gift_img.png'),
          quantity: 10,
          commodity_name: '部落大聲公',
          commodity_count: 8,
          category: 'loudly',
          integral: 500,
          lottery_ticket: 2,
          id: 11501
        },
        {
          imgUrl: require('@/assets/image/sidebar/gift_img.png'),
          quantity: 8,
          commodity_name: '部落獵槍',
          commodity_count: 5,
          category: 'gun',
          integral: 300,
          lottery_ticket: 5,
          id: 11502
        },
        {
          imgUrl: require('@/assets/image/sidebar/gift_img.png'),
          quantity: 10,
          commodity_name: '部落頭飾',
          commodity_count: 15,
          category: 'head',
          integral: 150,
          lottery_ticket: 8,
          id: 11503
        }
      ],
      friendlist: [
        {
          imgUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80',
          badge: require('@/assets/image/account/badge_blue.svg'),
          id: 11504
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80',
          badge: require('@/assets/image/account/badge_red.svg'),
          id: 11505
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80',
          badge: require('@/assets/image/account/badge_yellow.svg'),
          id: 11506
        }
      ]
    }
  },
  methods: {
    selectgift: function (idx) {
      this.activeItem = idx
    },
    selectfriends: function (idx) {
      this.activeFriends = idx
    }
  }
}
</script>
<style lang="scss" scoped>
.gift_card {
  position: relative;
  padding: 10px;
  border: 1px solid #AAAAAA;
  border-radius: 10px;
  width: 150px;
  height: 150px;
}
.gift_count {
  background: #AA1A29;
  width: 40px;
  height: 40px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.gift_title {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
}
.gift_sub_title {
  font-size: 14px;
  line-height: 20px;
  color: #8B8B8B;
}
.gift_text_content {
  width: 150px;
  text-align: center;
}
.integralcoin {
    width: 20px;
    height: 20px;
}
.btn-give {
    background: #357ECD;
    border-radius: 5px;
    color: #FFFFFF;
}
.integral_text {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #333333;
}
.bonus_text {
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #333333;
}
.mustupdate {
  font-size: 18px;
  line-height: 26px;
  color: #434343;
}
.modal-header {
  border-bottom: 0;
}
.modal-body {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.choose_gift {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  color: #000000;
}

.box {
  position: relative;
  width: 100px;
  height: 100px;
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 2px solid #2B79BA;
  }
  .boxbadge {
    width: 30px;
    height: 30px;
    border: none;
  }
}
.boxbadge {
  position: absolute;
  right: 0;
  bottom: 0;
}
.card-border {
  border: 2px solid transparent;
}
.selected {
  border: 2px solid #E2273A;
}
.selectfriend {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.selectfriend_default {
  width: 110px;
  height: 110px;
}
</style>
