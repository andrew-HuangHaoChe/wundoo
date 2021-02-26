import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  // mode:'history', 用來搭配後端的路由模式
  base: process.env.NODE_ENV === 'production' ? '/temperature/' : '/',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: '首頁',
      component: () => import('../views/FrontEnd/HomePage.vue')
    },
    {
      path: '/mainpage',
      name: '共用元件頁面',
      component: () => import('../views/FrontEnd/MainPage.vue'),
      children: [
        {
          path: '/signUp',
          name: '登入註冊頁',
          component: () => import('../views/FrontEnd/Choosebuloa.vue')
        },
        {
          path: '/signUpsteptwo',
          name: '選擇獵場頁',
          component: () => import('../views/FrontEnd/ChooseHg.vue')
        },
        {
          path: '/signUpinfo',
          name: '個人資料頁',
          component: () => import('../views/FrontEnd/LoginandSignup.vue')
        },
        {
          path: '/repassWord',
          name: '修改密碼頁',
          component: () => import('../views/FrontEnd/RepassWord.vue')
        },
        {
          path: '/missionpage',
          name: '任務頁',
          component: () => import('../views/FrontEnd/MissionPage.vue')
        },
        {
          path: '/huntground',
          name: '同好獵場',
          component: () => import('../views/FrontEnd/LikeHuntGround.vue')
        },
        {
          path: '/announcement',
          name: '公告總攬',
          component: () => import('../views/FrontEnd/Announcement.vue')
        },
        {
          path: '/localhuntground',
          name: '在地獵場和廣告',
          component: () => import('../views/FrontEnd/LocalhgAdpage.vue')
        },
        {
          path: '/lookAd',
          name: '看廣告抽大獎',
          component: () => import('../views/FrontEnd/LkadWin.vue')
        },
        {
          path: '/personnelAd',
          name: '人事廣告',
          component: () => import('../views/FrontEnd/PersonnelAd.vue')
        },
        {
          path: '/localadSelect',
          name: '刊登功能選擇',
          component: () => import('../views/FrontEnd/LocalAdSelect.vue')
        },
        {
          path: '/adstep',
          name: '刊登廣告方案',
          component: () => import('../views/FrontEnd/Publishad.vue'),
          children: [
            {
              path: '',
              name: '刊登廣告方案',
              component: () => import('../views/FrontEnd/AdstepOne.vue')
            },
            {
              path: 'adstep_two',
              name: '刊登廣告方案',
              component: () => import('../views/FrontEnd/AdstepTwo.vue')
            }
          ]
        },
        {
          path: '/adstepTwo',
          name: '刊登廣告方案步驟二',
          component: () => import('../views/FrontEnd/PublishadTwo.vue')
        },
        {
          path: '/adstepThree',
          name: '刊登廣告方案步驟三',
          component: () => import('../views/FrontEnd/PublishadThree.vue'),
          children: [
            {
              path: '',
              name: '步驟三直接上傳圖片',
              component: () => import('../views/FrontEnd/PublishadThreeOne.vue')
            },
            {
              path: 'adOnlinemade',
              name: '步驟三線上製作',
              component: () => import('../views/FrontEnd/PublishadThreeTwo.vue'),
              children: [
                {
                  path: '',
                  component: () => import('../views/FrontEnd/AdStepthirOne.vue')
                },
                {
                  path: 'thirStepTwo',
                  component: () => import('../views/FrontEnd/AdStepthirTwo.vue')
                },
                {
                  path: 'adBimg',
                  component: () => import('../views/FrontEnd/makeAd_b/Adimg_b.vue')
                },
                {
                  path: 'adBtext',
                  component: () => import('../views/FrontEnd/makeAd_b/AdText_b.vue')
                }
              ]
            }
          ]
        },
        {
          path: '/adstepFour',
          name: '刊登廣告方案步驟四',
          component: () => import('../views/FrontEnd/PublishadFour.vue')
        },
        {
          path: '/searchartLHG',
          name: '同好獵場文章搜尋結果',
          component: () => import('../views/FrontEnd/SearchLHG.vue')
        },
        {
          path: '/lhgManagement',
          name: '同好獵場管理頁',
          component: () => import('../views/FrontEnd/LhgManagement.vue')
        },
        {
          path: '/article',
          name: '文章頁',
          component: () => import('../views/FrontEnd/ArticleContent.vue')
        },
        {
          path: '/hgsetting',
          name: '獵場設定',
          component: () => import('../views/FrontEnd/Hgsetting.vue')
        },
        {
          path: '/membermgmt',
          name: '成員管理',
          component: () => import('../views/FrontEnd/MemberMgmt.vue')
        },
        {
          path: '/reviewNewMember',
          name: '審核新成員',
          component: () => import('../views/FrontEnd/ReviewNewMember.vue')
        },
        {
          path: '/reportmgmt',
          name: '舉報管理',
          component: () => import('../views/FrontEnd/ReportMgmt.vue')
        },
        {
          path: '/iwannaPost',
          name: '我要發文頁',
          component: () => import('../views/FrontEnd/IwanttoPost.vue')
        },
        {
          path: '/buildNewHg',
          name: '建立新獵場',
          component: () => import('../views/FrontEnd/BuildNewHg.vue')
        },
        {
          path: '/iwantloudly',
          name: '我要大聲說',
          component: () => import('../views/FrontEnd/IwantLoudly.vue')
        },
        {
          path: '/searchart',
          name: '文章搜尋結果',
          component: () => import('../views/FrontEnd/NavbarSearchArt.vue')
        },
        {
          path: '/notice',
          name: '消息通知',
          component: () => import('../views/FrontEnd/Notice.vue')
        },
        {
          path: '/winMustpay',
          name: '中獎總是要還頁面',
          component: () => import('../views/FrontEnd/WinMustPay.vue')
        },
        {
          path: '/harvestSeason',
          name: '豐收祭',
          component: () => import('../views/FrontEnd/HarvestSeason.vue')
        },
        {
          path: '/overTheYears',
          name: '歷年抽獎活動',
          component: () => import('../views/FrontEnd/DrawOverTheYears.vue')
        },
        {
          path: '/arena',
          name: '競技場頁',
          component: () => import('../views/FrontEnd/Arena.vue')
        },
        {
          path: '/membercenter',
          name: '會員中心',
          component: () => import('../views/FrontEnd/MemberCenter/MemberHp.vue'),
          children: [
            {
              path: '/',
              name: '獵人資訊頁',
              component: () => import('../views/FrontEnd/MemberCenter/MemberInf.vue')
            },
            {
              path: '/memberdiary',
              name: '獵人日記',
              component: () => import('../views/FrontEnd/MemberCenter/MemberArticle.vue')
            },
            {
              path: '/ptphuntground',
              name: '獵場資訊頁',
              component: () => import('../views/FrontEnd/MemberCenter/MemberHgInfo.vue')
            }
          ]
        },
        {
          path: '/travelhunting',
          name: '旅行打獵趣',
          component: () => import('../views/FrontEnd/LetTravelHunting.vue')
        },
        {
          path: '/winningpost',
          name: '中獎發文頁',
          component: () => import('../views/FrontEnd/WinningArtPost.vue')
        },
        {
          path: '/tempeveryday',
          name: '每日溫度活動頁',
          component: () => import('../views/FrontEnd/TempeveryDay.vue')
        },
        {
          path: '/tempeverydapost',
          name: '每日溫度發文頁',
          component: () => import('../views/FrontEnd/EverytempPost.vue')
        },
        {
          path: '/postdiary',
          name: '我要發日記頁',
          component: () => import('../views/FrontEnd/WannapostDiary.vue')
        },
        {
          path: '/giftCab',
          name: '禮物櫃頁',
          component: () => import('../views/FrontEnd/GiftCabinet.vue')
        },
        {
          path: '/giftshop',
          name: '部落商店頁',
          component: () => import('../views/FrontEnd/GiftShop.vue')
        },
        {
          path: '/giveGift',
          name: '部落送禮頁',
          component: () => import('../views/FrontEnd/GiftShop.vue')
        },
        {
          path: '/topresent',
          name: '送禮頁',
          component: () => import('../views/FrontEnd/ToPresent.vue')
        },
        {
          path: '/tradingRecord',
          name: '交易紀錄頁',
          component: () => import('../views/FrontEnd/TradingRe.vue')
        },
        {
          path: '/myadmgmt',
          name: '我的廣告頁',
          component: () => import('../views/FrontEnd/MyAdmangment.vue')
        },
        {
          path: '/myticket',
          name: '我的票券頁',
          component: () => import('../views/FrontEnd/Myticket.vue')
        },
        {
          path: '/favArticles',
          name: '收藏文章頁',
          component: () => import('../views/FrontEnd/FavoriteArticles.vue')
        },
        {
          path: '/wundoolottery',
          name: '抽獎類電商頁面',
          component: () => import('../views/FrontEnd/WundooLottery.vue')
        },
        {
          path: '/participated',
          name: '曾參與的活動頁面',
          component: () => import('../views/FrontEnd/participatedGroup/Participated.vue'),
          children: [
            {
              path: '/',
              name: '曾參與的抽獎頁面',
              component: () => import('../views/FrontEnd/participatedGroup/Particlottery.vue')
            },
            {
              path: '/particRace',
              name: '競賽頁面',
              component: () => import('../views/FrontEnd/participatedGroup/ParticRace.vue')
            },
            {
              path: '/particMission',
              name: '任務頁面',
              component: () => import('../views/FrontEnd/participatedGroup/Particmission.vue')
            }
          ]
        }
      ]
    }
  ]
})
