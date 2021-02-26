<template>
  <div>
    <div class="choose-temp d-flex flex-column">
      <div class="publish-container-width container d-flex align-items-center mb-3">
        <button class="btn btn-brilliantRed" data-toggle="modal" data-target="#layoutModal">選擇圖文版型</button>
        <!-- 版型選擇Modal -->
        <div class="modal fade" id="layoutModal" tabindex="-1" role="dialog" aria-labelledby="layoutModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="d-flex justify-content-between border-bottom-0">
                <h5 class="modal-title text-center d-flex align-items-center justify-content-center w-100" id="layoutModalLabel">
                  選擇圖文版型
                </h5>
              </div>
              <div class="modal-body row">
                <div class="form-check col-12 col-md-6 col-lg-4">
                  <div class="d-flex align-items-center">
                    <input class="form-check-input modal-check-input" type="radio" name="chooseRadios" id="chooseA" value="option1">
                    <label class="form-check-label modal-choose" for="chooseA">
                      版型1-1
                    </label>
                  </div>
                  <div class="choose">
                    <span class="a_btn">A</span>
                  </div>
                </div>
                <div class="form-check col-12 col-md-6 col-lg-4">
                  <div class="d-flex align-items-center">
                    <input class="form-check-input modal-check-input" type="radio" name="chooseRadios" id="chooseB" value="option2">
                    <label class="form-check-label modal-choose" for="chooseB">
                      版型1-2
                    </label>
                  </div>
                  <div class="choose2 d-flex flex-column">
                    <div class="a_block">
                      <span class="a_btn">A</span>
                    </div>
                    <div class="b_block">
                      <span class="b_btn">B</span>
                    </div>
                  </div>
                </div>
                <div class="form-check col-12 col-md-6 col-lg-4">
                  <div class="d-flex align-items-center">
                    <input class="form-check-input modal-check-input" type="radio" name="chooseRadios" id="chooseC" value="option3">
                    <label class="form-check-label modal-choose" for="chooseC">
                      版型1-3
                    </label>
                  </div>
                  <div class="choose2 d-flex flex-column">
                    <div class="a_block">
                      <span class="a_btn">A</span>
                    </div>
                    <div class="b_block dash_3">
                      <span class="b_btn">B</span>
                    </div>
                    <div class="c_block">
                      <span class="c_btn">C</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary confirm">確認</button>
              </div>
            </div>
          </div>
        </div>
        <span class="pl-3">已選擇：版型1-3</span>
      </div>
      <div class="publish-container-width container flex-column">
        <p class="pb-3 mb-0 choseTemp">B. 店家資訊</p>
        <div class="chooseC">
          <div class="d-flex flex-column table_content">
            <div class="row">
              <div class="col-2 py-2">
                <span class="program_a">A</span>
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col d-flex flex-row">
                    <div class="form-check mr-4 mb-3">
                      <input class="form-check-input" v-model="selected" value="thirStepOne" type="radio" name="upText" id="upTextstOne">
                      <label class="form-check-label" for="upTextstOne">
                        純文字
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" v-model="selected" value="thirStepTwo" type="radio" name="upImg" id="upImgstTwo">
                      <label class="form-check-label" for="upImgstTwo">
                        圖片
                      </label>
                    </div>
                  </div>
                </div>
                <router-view></router-view>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-2 py-2">
                <span class="program_a">A</span>
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col d-flex flex-row">
                    <div class="form-check mr-4 mb-3">
                      <input class="form-check-input" v-model="selected_b" value="thirBone" type="radio" name="upText" id="upTextstOne">
                      <label class="form-check-label" for="upTextstOne">
                        純文字
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" v-model="selected_b" value="thirBtwo" type="radio" name="upImg" id="upImgstTwo">
                      <label class="form-check-label" for="upImgstTwo">
                        圖片
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: 'thirStepOne',
      selected_b: 'thirBone'
    }
  },
  watch: {
    selected: function () {
      if (this.selected === 'thirStepOne') {
        this.$router.push('/adstepThree/adOnlinemade/')
      }
      if (this.selected === 'thirStepTwo') {
        this.$router.push('/adstepThree/adOnlinemade/thirStepTwo')
      }
    },
    selected_b: function () {
      if (this.selected_b === 'thirBone') {
        this.$router.push('/adstepThree/adOnlinemade/adBimg')
      }
      if (this.selected_b === 'thirBtwo') {
        this.$router.push('/adstepThree/adOnlinemade/adBtext')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cancel {
  background: #DCDCDC;
  border: 1px solid #8F8F8F;
  box-sizing: border-box;
  border-radius: 5px;
  color: #5E5E5E;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  font-family: 'Noto Sans TC';
  padding: 5px 30px;
}
.confirm {
  background: #689ACA;
  border-radius: 5px;
  font-family: 'Noto Sans TC';
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  padding: 5px 30px;
}
.choose {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EAEAEA;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  min-height: 300px;
}
.choose2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #EAEAEA;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  min-height: 300px;
  .a_block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    border-bottom: 2px dashed red;
  }
  .b_block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
  }
  .dash_3 { // 第三版型B區塊有噓線
    border-bottom: 2px dashed red;
  }
  .c_block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
  }
  .a_btn, .b_btn, .c_btn{
    width: 40%;
    height: 40px;
    text-align: center;
  }
}
.a_btn {
  background: #E2273A;
  border-radius: 5px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  padding: 6px 34px;
}
.b_btn {
  background:#357ECD;
  border-radius: 5px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  padding: 6px 34px;
}
.c_btn {
  background:#FFA93D;
  border-radius: 5px;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
  padding: 6px 34px;
}
.modal-check-input {
  left: 40%;
}
.modal-choose {
  display: flex;
  justify-content: center;
  width: 100%;
}
.program_a {
  background: #E2273A;
  border-radius: 5px;
  font-family: 'Noto Sans TC';
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #FFFFFF;
  padding: 6px 34px;
  margin-top: 10p;
}
</style>
