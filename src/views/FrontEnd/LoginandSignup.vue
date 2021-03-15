<template>
  <div>
    <div class="wanna-post-bg pb-8">
      <div class="container custom-container-width wanna-post-content">
        <div class="d-flex align-items-end mb-3 pt-5 sign_step_one">
          <span class="signup-title-bar il-custom-bar"></span>
          <p class="signup-title mb-0 pt-0">註冊：3.填寫個人資料</p>
        </div>
        <div class="step_scroll">
          <ul class="d-flex list-unstyled justify-content-between sign_progress">
            <li>1<span class="step_text_content">選擇部落</span></li>
            <li>2<span class="step_text_content">選擇在地獵場</span></li>
            <li class="active">3<span class="step_text_content">填寫基本資料</span></li>
          </ul>
        </div>
        <div class="upload-img d-flex align-items-center">
          <div class="row sign-sec-block">
            <div class="col-lg-12 upload-avatar d-flex justify-content-start">
              <ImageCropper v-on:imgUrl="cropurl"/>
              <!-- <img src="../../assets/image/images/default-pic.png" alt=""> -->
            </div>
          </div>
        </div>
        <div class="sign-up-form">
          <form>
            <span class="have_to"><span>*</span>為必填項目</span>
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6">
                <label for="name1"><span class="have_to"><span>*</span></span>真實姓名</label>
                <input type="text" class="form-control signup-form-control" id="name1" placeholder="請填寫全名" maxlength="10" v-model="name">
                <label for="smName"><span class="have_to"><span>*</span></span>顯示的暱稱</label>
                <input type="text" class="form-control signup-form-control" id="smName" placeholder="神箭闖江湖乃第一貓" maxlength="10" v-model="nickname">
                <label for="upphone"><span class="have_to"><span>*</span></span>手機號碼</label>
                <input type="tel" class="form-control signup-form-control" id="upphone" placeholder="0912-123-123" maxlength="10" v-model="phone">
                <div class="d-flex flex-column mb-3 birth-block">
                  <label for="upbirth"><span class="have_to"><span>*</span></span>生日</label>
                  <DatePicker class="d-flex w-100" v-model="date" :model-config="modelConfig">
                    <template v-slot="{ inputValue, togglePopover }">
                      <div class="d-flex items-center w-100">
                        <button
                          class="choosedate-btn p-2"
                          @click.prevent="togglePopover({ placement: 'auto-start' })"
                          ref="pickdate"
                        >
                        <i class="fas fa-calendar-week"></i>
                        </button>
                        <input
                          :value="inputValue"
                          class="dateinput bg-white text-gray-700 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                          readonly
                          @click="datepick"
                        />
                      </div>
                    </template>
                  </DatePicker>
                </div>
                <div>
                  <label for="upId">身分證字號</label>
                  <input type="text" class="form-control signup-form-control" id="upId" placeholder="A123456789" v-model="id">
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6">
                <div class="form-controll">
                  <label for="local-hunt-option"><span class="have_to"><span>*</span></span>所在地</label>
                  <div class="row">
                    <div class="col-6">
                      <select id="local-hunt-option" class="form-control signup-form-control" @change="countiesChange" v-model="selectedCounties">
                        <option value="">縣市</option>
                        <option v-for="items in hgData" :key="items.index" :value="items">{{ items }}</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <select id="local-hunt-option" class="form-control signup-form-control" v-model="selectedtown">
                        <option value="">鄉鎮市區</option>
                        <option v-for="items in townlist" :key="items.index" :value="items.name">{{ items.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <label for="inputUpEmail"><span class="have_to"><span>*</span></span>Email(將此做為Email帳號)</label>
                <input type="mail" class="form-control signup-form-control" id="inputUpEmail" placeholder="Hello@gmail.com" maxlength="30" v-model="email">
                <label for="upPassword"><span class="have_to"><span>*</span></span>密碼</label>
                <input type="password" class="form-control signup-form-control" id="upPassword" placeholder="請輸入6-8位數英文與數字" maxlength="8" v-model="password">
                <label for="checkpassWord"><span class="have_to"><span>*</span></span>確認密碼</label>
                <input type="password" class="form-control signup-form-control" id="checkpassWord" placeholder="請輸入6-8位數英文與數字" maxlength="8" v-model="confirmpass">
              </div>
            </div>
            <div class="accept-check d-flex justify-content-center">
              <div class="d-flex align-items-center pb-3 custom-checkbox">
                <input type="checkbox" class="agreechecked d-flex align-items-center mr-2" id="customCheck2" v-model="agree">
                <label class="signup-check mb-0" for="customCheck2">我已閱讀並同意遵守wundoo的<a href="#">服務條款</a></label>
              </div>
            </div>
            <div class="thr_step_block">
              <router-link to="/signUpsteptwo" class="btn ad_btn_whiteBtn next_step_btn">上一步</router-link>
              <button class="btn btn-mainRed next_step_btn" @click.prevent="showCatFun()">註冊</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="resuccess" v-if="showCat">
      <img src="../../assets/image/images/animation/am_welcome.svg" alt="">
    </div>
    <div class="modal fade" id="lotteryModal" tabindex="-1" role="dialog" aria-labelledby="lotteryModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="z-index: 999;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center" style="padding-top: 0; margin-top: -30px;">
            <h5 class="modal-title" id="lotteryModalLabel">註冊成功</h5>
            <p class="mb-0">歡迎加入溫度部落！試試手氣送您<strong>見面禮</strong></p>
            <div class="lottery-nine-block">
              <NewLottery @winthelott="updatelotteryStatus" @lottCount="updateCount"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="z-index: 999;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center" style="padding-top: 0; margin-top: -30px;">
            <div class="lottery-nine-block d-flex flex-column align-items-center">
              <div>
                <h5>恭喜獲得部落見面禮</h5>
                <p>獲得部落見面禮: <span></span></p>
                <p>快去「會員中心」查看</p>
                <p>分享您的喜氣，讓您再抽一次</p>
              </div>
              <img src="../../assets/image/images/signup/bighunt.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="failModal" tabindex="-1" role="dialog" aria-labelledby="failModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="z-index: 999;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center" style="padding-top: 0; margin-top: -30px;">
            <div class="lottery-nine-block d-flex flex-column align-items-center">
              <h5>哎呀不是這個寶箱</h5>
              <p>有沒有洗手啊...到底！！</p>
              <p>開運提示：肥皂洗手60秒比較容易中獎</p>
              <img src="../../assets/image/images/signup/sad.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import NewLottery from '../../components/NewLott.vue'
// import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import ImageCropper from '../../components/ImageCropper.vue'
export default {
  components: {
    NewLottery,
    // Calendar,
    DatePicker,
    ImageCropper
  },
  data () {
    return {
      lotteryStatus: false,
      lotteryCount: 0,
      upImg: '',
      date: new Date(),
      agree: false,
      showCat: false,
      name: '',
      nickname: '',
      phone: '',
      id: '',
      counties: '',
      township: '',
      email: '',
      password: '',
      confirmpass: '',
      hgData: [],
      cityData: [],
      townlist: {},
      selectedCounties: '',
      selectedtown: '',
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD' // Uses 'iso' if missing
      }
    }
  },
  methods: {
    showCatFun () {
      const vm = this
      const formData = new FormData()
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const tribe = localStorage.getItem('tribe') // 部落
      const clubeMain = localStorage.getItem('clube_main') // 所在地獵場
      const clueHobby = localStorage.getItem('clue_hobby') // 感興趣獵場
      formData.append('tribe', tribe)
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('password_confirm', this.confirmpass)
      formData.append('login_type', '')
      formData.append('username', this.name)
      formData.append('nickname', this.nickname)
      formData.append('gender', '')
      formData.append('city', this.selectedCounties)
      formData.append('dist', this.selectedtown)
      formData.append('mobile', this.phone)
      formData.append('birthday', this.date)
      formData.append('club_main', clubeMain)
      formData.append('clue_hobby', clueHobby)
      formData.append('avatar', this.upImg)
      if (vm.date === '') {
        alert('請填寫生日!')
        return false
      }
      if (vm.agree === false) {
        alert('請勾選已閱讀服務條款!')
        return false
      }
      if (vm.name === '') {
        alert('姓名尚未填寫!')
        return false
      }
      if (vm.nickname === '') {
        alert('暱稱尚未填寫!')
        return false
      }
      if (vm.phone === '') {
        alert('手機尚未填寫!')
        return false
      }
      if (vm.selectedCounties === '' || vm.selectedtown === '') {
        alert('請選擇居住地!')
        return false
      }
      if (vm.email === '') {
        alert('email尚未填寫!')
        return false
      }
      if (vm.password === '') {
        alert('密碼尚未填寫!')
        return false
      }
      if (vm.confirmpass === '') {
        alert('確認密碼尚未填寫!')
        return false
      }
      if (vm.password !== vm.confirmpass) {
        alert('請檢查密碼與確認密碼是否相符!')
        return false
      }
      vm.$http.post('/apipath/api/register', formData, config).then((response) => {
        console.log(response)
        if (response.data.status === false) {
          alert(response.data.msg + '!')
          return false
        } else {
          vm.showCat = true
          setTimeout(function () {
            vm.showCat = false
            $('#lotteryModal').modal('show')
          }, 3000)
        }
      })
    },
    datepick () {
      this.$refs.pickdate.click()
    },
    countiesChange () {
      const vm = this
      const arrone = this.cityData
      vm.selectedtown = ''
      for (let i = 0; i < arrone.length; i++) {
        if (vm.selectedCounties === arrone[i].name) {
          vm.townlist = arrone[i].dist
        }
      }
    },
    imgupload (e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      var vm = this
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        vm.upImg = this.result
      }
      $('#cropModal').modal('show')
    },
    cropurl (data) {
      this.upImg = data
    },
    updatelotteryStatus (val) {
      this.lotteryStatus = val
    },
    updateCount (count) {
      this.lotteryCount = count
    }
  },
  created () {
    const vm = this
    vm.$http.get('/apipath/api/get_citydata').then((response) => {
      const hgData = response.data.data
      vm.cityData = hgData
      for (let i = 0; i < hgData.length; i++) {
        vm.hgData.push(hgData[i].name)
      }
    })
  },
  watch: {
    lotteryStatus: function () {
      const vm = this
      console.log(vm.lotteryStatus)
      if (vm.lotteryCount === 1 && vm.lotteryStatus === true) {
        $('#successModal').modal('show')
      } else if (vm.lotteryCount === 2 && vm.lotteryStatus === true) {
        $('#successModal').modal('show')
      } else if (vm.lotteryCount === 3) {
        $('#successModal').modal('show')
      }
    },
    lotteryCount: function () {
      const vm = this
      if (vm.lotteryCount === 1 && vm.lotteryStatus === false) {
        $('#failModal').modal('show')
      } else if (vm.lotteryCount === 2 && vm.lotteryStatus === false) {
        $('#failModal').modal('show')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.resuccess{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  z-index: 999999;
  top: 0;
}
.resuccess{
  img{
    position: fixed;
    width: 100%;
    height: 100%;
    left: calc(0%);
  }
}
.modal-body {
  h5 {
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 0.6px;
    color: #000000;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.6px;
    color: #000000;
  }
}
.lottery-nine-block {
  width: 370px;
  margin: 0 auto;
  @media(max-width: 576px) {
    width: 280px;
  }
  div {
    h5 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
}

.agreechecked[type="checkbox"]{
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  box-sizing: content-box ;
  width: 24px;
  height: 24px;
  border-width: 0;
  transition: all .3s linear;
  border: 1px solid #ccc;
  @media(max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
}
.agreechecked[type="checkbox"]:checked{
  background-color: #E2273A;
  content: "\2713";
  border: 1px solid #E2273A;
}
.agreechecked[type="checkbox"]:checked:after{
  color: #fff;
  font-size: 22px;
  content: "\2713";
  margin: 0 auto;
  padding-left: 5px;
  position: absolute;
  top: -4px;
  @media(max-width: 1024px) {
    font-size: 14px;
    padding-left: 4px;
    top: 0;
  }
}
.agreechecked[type="checkbox"]:focus{
  outline: 0 none;
  box-shadow: none;
}

</style>
