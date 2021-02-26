<template>
  <div>
    <div class="mt-11">
      <div class="container custom-container-width">
        <Tribeloudly/>
        <div class="all_ann px-2">
          <div class="row">
            <div class="col-lg-12 pb-3">
              <div class="d-flex justify-content-start align-items-center ann_content" v-for="avatar in avatars" :key="avatar.id">
                <div class="row w-100">
                  <div class="col-12 col-md-6 d-flex align-items-center">
                    <div>
                      <div class="ann_Avatar">
                        <img src="../../assets/image/account/badge_red.svg" alt=""/>
                      </div>
                    </div>
                    <div class="ml-3 lhg-for-everyone">
                      <span class="level_text">Lv.99</span><span class="user_name mr-2">帥貓cat粗乃玩</span><span>給大家:</span>
                      <!-- <a class="pr-2">{{ avatar.name }}</a><span>給大家:</span> -->
                      <div class="aca_des">
                        <p class="mb-0 lhg-des">{{ avatar.description }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 poster_announce_time">
                    <p>昨天18:45</p>
                    <router-link to="/">回覆</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagenation class="lhgmgmt_pagenation my-5"></Pagenation>
      </div>
    </div>
    <!--飛鴿傳書modal start-->
    <div class="modal fade" id="pigeon_modal" tabindex="-1" role="dialog" aria-labelledby="pigeon_modalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5 class="text-brilliantRed text-center pigeon_modal_title">飛鴿傳書</h5>
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
import Pagenation from '../../components/Pagination.vue'
import Tribeloudly from '../../components/Tribeloudly.vue'
export default {
  components: {
    Pagenation,
    Tribeloudly
  },
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
