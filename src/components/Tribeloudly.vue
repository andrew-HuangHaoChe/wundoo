<template>
  <div>
    <div class="hg-loudly mb-3">
      <div class="row">
        <div class="col-lg-2 loudly-img-block">
          <img src="../assets/image/huntground_lk/lhg_loudly.png" alt="">
        </div>
        <div class="col-lg-10">
          <div class="hg-announcement">
            <div class="d-flex justify-content-between align-items-center p-2 pl-0 flip" v-for="anct in Announcement" :key="anct.id">
              <div class="d-flex">
                <a data-toggle="modal" data-target="#pigeon_modal" class="mb-0 pigeon_link">
                  <span class="pigeon_mail">飛鴿傳書:</span>
                  {{ anct.title }}
                </a>
              </div>
              <div>
                <span>
                  11:30
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-12 pt-3 pl-0">
            <div class="row flip-content">
              <div class="col-lg-7 col-md-12 pb-3 lhg-avatar">
                <div class="d-flex justify-content-start align-items-center avatar-flip" v-for="avatar in avatars" :key="avatar.id">
                  <div>
                    <div class="cardAvatar">
                      <img src="../assets/image/account/badge_red.svg" alt=""/>
                    </div>
                  </div>
                  <div class="ml-3 level-block">
                    <span class="level_text">Lv.99</span><span class="user_name mr-2">帥貓cat粗乃玩</span><span>給大家:</span>
                    <p class="mb-0 lhg-des">我是北部粽派，因為北部粽的米比較硬!喜歡口感偏硬的，打亂我們原先的部...</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 flex-column d-flex align-items-lg-end align-items-md-start justify-content-center pr-0">
                <span class="d-block">昨天11:02</span>
                <div>
                  <button class="hg-want" data-toggle="modal" data-target="#iwanttoloudlyCenter">我要大聲說</button>
                  <router-link to="/announcement" class="pl-3 hg-check-all">查看全部</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--飛鴿傳書modal start-->
    <div class="modal fade" id="pigeon_modal" tabindex="-1" role="dialog" aria-labelledby="pigeon_modalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="text-brilliantRed text-center pigeon_modal_title">飛鴿傳書</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="sign_to_get">今日簽到即可獲得抽獎券一張！快前往簽到吧！</p>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-brilliantRed">前往連結</button>
          </div>
        </div>
      </div>
    </div>
    <!--飛鴿傳書modal end-->
  </div>
</template>
<script>
export default {
  data () {
    return {
      Announcement: [
        {
          id: 1,
          title: '今日簽到即可獲得抽獎券一張，快前往簽到吧!'
        },
        {
          id: 2,
          title: '今日完成獵場創建，即可獲得虛擬寶物一個!'
        },
        {
          id: 3,
          title: '每日固定9~10點發送最新消息推播!'
        },
        {
          id: 4,
          title: '新冠肺炎疫情延燒，呼籲會員們勤洗手!'
        }
      ],
      avatars: [
        {
          name: '貓貓candy粗乃完',
          description: '我是北部粽派，因為北部粽的米比較硬!喜歡口感偏硬的，打亂我們原先的部...',
          id: 5
        },
        {
          name: '狗狗hotdog粗乃玩',
          description: '我是南部粽派，因為南部粽的米比較軟爛!喜歡口感偏軟的，打亂我們原先的部...',
          id: 6
        },
        {
          name: '鴨鴨ducky粗乃完',
          description: '我是兩種都愛吃，因為南北一家親，硬的軟的通通都是我喜歡的食感...',
          id: 7
        },
        {
          name: '熊熊bear粗乃完',
          description: '我是兩種都愛吃，因為南北一家親，硬的軟的通通都是我喜歡的食感...',
          id: 8
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-header {
  position: relative;
  h5 {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
