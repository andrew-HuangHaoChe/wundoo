<template>
  <div>
    <div class="notice-bg">
      <div class="container custom-container-width">
        <div class="signup-title d-flex fix_margin">
          <span class="signup-title-bar"></span>
            個人設定
        </div>
        <div class="per-block bg-white">
          <h2>基本資料</h2>
          <div class="upload-img d-flex align-items-center">
            <div class="row sign-sec-block">
              <div class="col-md-3 col-lg-2">
                <h4 class="d-block">上傳頭像</h4>
                <button class="d-block btn btn-brilliantRed py-2 px-3">選擇檔案</button>
              </div>
              <div class="col-md-9 col-lg-10 upload-avatar d-flex justify-content-start">
                <img src="../../assets/image/images/default-pic.png" alt="">
              </div>
            </div>
          </div>
          <div class="">
            <form>
              <span class="have_to"><span>*</span>為必填項目</span>
              <div class="row mt-3">
                <div class="col-12 col-sm-12 col-md-6">
                  <label for="name1"><span class="have_to"><span>*</span></span>真實姓名</label>
                  <input type="text" class="form-control signup-form-control" id="name1" placeholder="請填寫全名">
                  <label for="smName"><span class="have_to"><span>*</span></span>顯示的暱稱</label>
                  <input type="text" class="form-control signup-form-control" id="smName" placeholder="神箭闖江湖乃第一貓" maxlength="10">
                  <label for="upphone"><span class="have_to"><span>*</span></span>手機號碼</label>
                  <input type="tel" class="form-control signup-form-control" id="upphone" placeholder="0912-123-123">
                  <div class="d-flex flex-column mb-3 birth-block">
                    <label for="upbirth"><span class="have_to"><span>*</span></span>生日</label>
                    <DatePicker class="d-flex w-100" v-model="date">
                      <template v-slot="{ inputValue, togglePopover }">
                        <div class="d-flex items-center w-100">
                          <button
                            class="choosedate-btn p-2"
                            @click.prevent="togglePopover({ placement: 'auto-start' })"
                          >
                          <i class="fas fa-calendar-week"></i>
                          </button>
                          <input
                            :value="inputValue"
                            class="dateinput bg-white text-gray-700 py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                            readonly
                          />
                        </div>
                      </template>
                    </DatePicker>
                  </div>
                  <div>
                    <label for="upId">身分證字號</label>
                    <input type="mail" class="form-control signup-form-control" id="upId" placeholder="A123456789">
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                  <div class="form-controll">
                    <label for="local-hunt-option"><span class="have_to"><span>*</span></span>所在地</label>
                    <div class="row">
                      <div class="col-6">
                        <select id="local-hunt-option" class="form-control signup-form-control">
                          <option selected>縣市</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="col-6">
                        <select id="local-hunt-option" class="form-control signup-form-control">
                          <option selected>鄉鎮市區</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <label for="inputUpEmail"><span class="have_to"><span>*</span></span>Email(將此做為Email帳號)</label>
                  <input type="mail" class="form-control signup-form-control" id="inputUpEmail" placeholder="Hello@gmail.com">
                  <label for="upPassword"><span class="have_to"><span>*</span></span>密碼</label>
                  <input type="password" class="form-control signup-form-control" id="upPassword" placeholder="請輸入6-8位數英文與數字" maxlength="8">
                  <label for="checkpassWord"><span class="have_to"><span>*</span></span>確認密碼</label>
                  <input type="password" class="form-control signup-form-control" id="checkpassWord" placeholder="請輸入6-8位數英文與數字" maxlength="8">
                </div>
              </div>
            </form>
          </div>
          <div class="row">
            <div class="col-lg-12 mb-3">
              <div class="">
                <div class="hornor_header d-flex align-items-center mb-2">
                  <h3 class="per-about-me mb-0 mr-2">關於我</h3>
                  <a class="per-about-edit">修改</a>
                </div>
                <div class="member_about_me">
                  <p>
                    我叫***，今年27歲。1997年7月我從**師範學校藝師美術專業計畫內自費畢業。由於從97年起國家不再對自費生包分配，使我與“太陽底下最光輝 的職業”失之交臂。幸好，當時河西馬廠完小師資不足，經人介紹，我在該完小擔任了一年的臨時代課教師。回想起那段時光真是既甜蜜又美好，雖然代課工資很 低，但聽著同學們圍在身旁“老師”、“老師”的叫個不停，看著那一雙雙充滿信任的眼睛，那一張張稚氣的小臉，生活中的所有不快都頓時煙消雲散了。我原想， 即使不能轉正，只要學校需要，就是當一輩子代課教師我也心甘情願。不料，1998年起國家開始清退臨時工和代課教師，接到了學校的口頭通知後，我懷著戀戀 不舍的心情，悄悄地離開了學校。
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <div class="">
                <div class="hornor_header d-flex align-items-center mb-2">
                  <h3 class="per-about-me mb-0 mr-2">興趣及喜好</h3>
                </div>
                <div class="member_about_me">
                  <div class="hobbit_tag_block d-flex flex-wrap">
                    <div class="hobbit_tag">
                      戶外打獵
                    </div>
                    <div class="hobbit_tag">
                      戶外打獵
                    </div>
                    <div class="hobbit_tag">
                      戶外打獵
                    </div>
                    <div class="hobbit_tag">
                      戶外打獵
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <div class="">
                <div class="hornor_header d-flex align-items-center mb-2">
                  <h3 class="per-about-me mb-0 mr-2">社交帳號綁定</h3>
                </div>
                <div class="d-flex flex-wrap align-items-center mb-4 soical-width">
                  <img class="mr-3" src="../../assets/image/icon/social/ic_google.svg" alt="">
                  <p class="mb-0 mr-3">google</p>
                  <span class="mb-0 mr-3">Hello@gmail.com</span>
                  <button class="btn btn-binding text-white">已綁定</button>
                </div>
                <div class="d-flex flex-wrap align-items-center mb-4 soical-width">
                  <img class="mr-3" src="../../assets/image/icon/social/ic_fb.svg" alt="">
                  <p class="mb-0 mr-3">facebook</p>
                  <span class="mb-0 mr-3">未綁定</span>
                  <button class="btn btn-brilliantRed">綁定</button>
                </div>
                <div class="d-flex flex-wrap align-items-center mb-4 soical-width">
                  <img class="mr-3" src="../../assets/image/icon/social/ic_line.svg" alt="">
                  <p class="mb-0 mr-3">line</p>
                  <span class="mb-0 mr-3">未綁定</span>
                  <button class="btn btn-brilliantRed">綁定</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container custom-container-width">
        <div class="thr_step_block py-5">
          <button class="btn ad_btn_whiteBtn next_step_btn">取消</button>
          <button class="btn btn-mainRed next_step_btn">確認修改</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  components: {
    DatePicker
  },
  data () {
    return {
      date: new Date()
    }
  }
}
</script>
