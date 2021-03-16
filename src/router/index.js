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
      component: () => import('../views/FrontEnd/HomePage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/mainpage',
      name: '共用元件頁面',
      component: () => import('../views/FrontEnd/MainPage.vue'),
      children: [
        {
          path: '/redirectLogin',
          name: '重新導回註冊頁',
          component: () => import('../views/FrontEnd/RedirectLogin.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/signUp',
          name: '登入註冊頁',
          component: () => import('../views/FrontEnd/Choosebuloa.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/signUpsteptwo',
          name: '選擇獵場頁',
          component: () => import('../views/FrontEnd/ChooseHg.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/signUpinfo',
          name: '填寫個人資料頁',
          component: () => import('../views/FrontEnd/LoginandSignup.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/repassWord', // 跑版
          name: '重設密碼頁',
          component: () => import('../views/FrontEnd/RepassWord.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/missionpage',
          name: '任務頁',
          component: () => import('../views/FrontEnd/MissionPage.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/huntground',
          name: '同好獵場',
          component: () => import('../views/FrontEnd/LikeHuntGround.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/announcement',
          name: '公告總攬',
          component: () => import('../views/FrontEnd/Announcement.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/localhuntground',
          name: '在地獵場和廣告',
          component: () => import('../views/FrontEnd/LocalhgAdpage.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/lookAd',
          name: '看廣告抽大獎',
          component: () => import('../views/FrontEnd/LkadWin.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/personnelAd',
          name: '人事廣告',
          component: () => import('../views/FrontEnd/PersonnelAd.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/localadSelect',
          name: '刊登功能選擇',
          component: () => import('../views/FrontEnd/LocalAdSelect.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/adstep',
          name: '刊登廣告方案',
          component: () => import('../views/FrontEnd/Publishad.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/adstepTwo',
          name: '刊登廣告方案步驟二',
          component: () => import('../views/FrontEnd/PublishadTwo.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/adstepThree',
          name: '刊登廣告方案步驟三',
          component: () => import('../views/FrontEnd/PublishadThree.vue'),
<<<<<<< HEAD
          meta: { requiresAuth: true }
=======
          children: [
            {
              path: '',
              name: '步驟三直接上傳圖片',
              component: () => import('../views/FrontEnd/PublishadThreeOne.vue')
            },
            {
              path: 'adOnlinemade',
              name: '步驟三線上製作',
              component: () =>
                import('../views/FrontEnd/PublishadThreeTwo.vue'),
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
                  component: () =>
                    import('../views/FrontEnd/makeAd_b/Adimg_b.vue')
                },
                {
                  path: 'adBtext',
                  component: () =>
                    import('../views/FrontEnd/makeAd_b/AdText_b.vue')
                }
              ]
            }
          ]
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
        },
        {
          path: '/adstepFour',
          name: '刊登廣告方案步驟四',
          component: () => import('../views/FrontEnd/PublishadFour.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/searchartLHG',
          name: '同好獵場文章搜尋結果',
          component: () => import('../views/FrontEnd/SearchLHG.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/lhgManagement',
          name: '同好獵場管理頁',
          component: () => import('../views/FrontEnd/LhgManagement.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/article',
          name: '文章頁',
          component: () => import('../views/FrontEnd/ArticleContent.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/hgsetting',
          name: '獵場設定',
          component: () => import('../views/FrontEnd/Hgsetting.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/membermgmt',
          name: '成員管理',
          component: () => import('../views/FrontEnd/MemberMgmt.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/reviewNewMember',
          name: '審核新成員',
          component: () => import('../views/FrontEnd/ReviewNewMember.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/reportmgmt',
          name: '舉報管理',
          component: () => import('../views/FrontEnd/ReportMgmt.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/iwannaPost',
          name: '我要發文頁',
          component: () => import('../views/FrontEnd/IwanttoPost.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/buildNewHg',
          name: '建立新獵場',
          component: () => import('../views/FrontEnd/BuildNewHg.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/iwantloudly',
          name: '我要大聲說',
          component: () => import('../views/FrontEnd/IwantLoudly.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/searchart', // 跑版；全站
          name: '文章搜尋結果',
          component: () => import('../views/FrontEnd/NavbarSearchArt.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/notice',
          name: '消息通知',
          component: () => import('../views/FrontEnd/Notice.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/winMustpay',
          name: '中獎總是要還頁面',
          component: () => import('../views/FrontEnd/WinMustPay.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/harvestSeason',
          name: '豐收祭',
          component: () => import('../views/FrontEnd/HarvestSeason.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/overTheYears',
          name: '歷年抽獎活動',
          component: () => import('../views/FrontEnd/DrawOverTheYears.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/arena',
          name: '競技場頁',
          component: () => import('../views/FrontEnd/Arena.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/membercenter',
          name: '會員中心',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          component: () => import('../views/FrontEnd/MemberCenter/MemberHp.vue'),
          meta: { requiresAuth: true },
=======
          component: () =>
            import('../views/FrontEnd/MemberCenter/MemberHp.vue'),
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
          component: () =>
            import('../views/FrontEnd/MemberCenter/MemberHp.vue'),
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
          component: () =>
            import('../views/FrontEnd/MemberCenter/MemberHp.vue'),
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
          children: [
            {
              path: '/',
              name: '獵人資訊頁',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              component: () => import('../views/FrontEnd/MemberCenter/MemberInf.vue'),
              meta: { requiresAuth: true }
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberInf.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberInf.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberInf.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
            },
            {
              path: '/memberdiary',
              name: '獵人日記',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              component: () => import('../views/FrontEnd/MemberCenter/MemberArticle.vue'),
              meta: { requiresAuth: true }
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberArticle.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberArticle.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberArticle.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
            },
            {
              path: '/ptphuntground',
              name: '獵場資訊頁',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              component: () => import('../views/FrontEnd/MemberCenter/MemberHgInfo.vue'),
              meta: { requiresAuth: true }
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberHgInfo.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberHgInfo.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/MemberCenter/MemberHgInfo.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
            }
          ]
        },
        {
          path: '/travelhunting', // 樣式修改  熱門文章
          name: '旅行打獵趣',
          component: () => import('../views/FrontEnd/LetTravelHunting.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/winningpost',
          name: '中獎發文頁',
          component: () => import('../views/FrontEnd/WinningArtPost.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/tempeveryday',
          name: '每日溫度活動頁',
          component: () => import('../views/FrontEnd/TempeveryDay.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/tempeverydapost',
          name: '每日溫度發文頁',
          component: () => import('../views/FrontEnd/EverytempPost.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/postdiary',
          name: '我要發日記頁',
          component: () => import('../views/FrontEnd/WannapostDiary.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/giftCab',
          name: '禮物櫃頁',
          component: () => import('../views/FrontEnd/GiftCabinet.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/giftshop',
          name: '部落商店頁',
          component: () => import('../views/FrontEnd/GiftShop.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/giveGift',
          name: '部落送禮頁',
          component: () => import('../views/FrontEnd/GiftShop.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/topresent',
          name: '送禮頁',
          component: () => import('../views/FrontEnd/ToPresent.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/tradingRecord',
          name: '交易紀錄頁',
          component: () => import('../views/FrontEnd/TradingRe.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/myadmgmt',
          name: '我的廣告頁',
          component: () => import('../views/FrontEnd/MyAdmangment.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/myticket',
          name: '我的票券頁',
          component: () => import('../views/FrontEnd/Myticket.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/favArticles',
          name: '收藏文章頁',
          component: () => import('../views/FrontEnd/FavoriteArticles.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/wundoolottery',
          name: '抽獎類電商頁面',
          component: () => import('../views/FrontEnd/WundooLottery.vue'),
          meta: { requiresAuth: false }
        },
        {
          path: '/participated',
          name: '曾參與的活動頁面',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          component: () => import('../views/FrontEnd/participatedGroup/Participated.vue'),
          meta: { requiresAuth: true },
=======
          component: () =>
            import('../views/FrontEnd/participatedGroup/Participated.vue'),
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
          component: () =>
            import('../views/FrontEnd/participatedGroup/Participated.vue'),
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
          component: () =>
            import('../views/FrontEnd/participatedGroup/Participated.vue'),
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
          children: [
            {
              path: '/',
              name: '曾參與的抽獎頁面',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              component: () => import('../views/FrontEnd/participatedGroup/Particlottery.vue'),
              meta: { requiresAuth: true }
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/Particlottery.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/Particlottery.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/Particlottery.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
            },
            {
              path: '/particRace',
              name: '競賽頁面',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              component: () => import('../views/FrontEnd/participatedGroup/ParticRace.vue'),
              meta: { requiresAuth: true }
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/ParticRace.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/ParticRace.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/ParticRace.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
            },
            {
              path: '/particMission',
              name: '任務頁面',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              component: () => import('../views/FrontEnd/participatedGroup/Particmission.vue'),
              meta: { requiresAuth: true }
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/Particmission.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/Particmission.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
              component: () =>
                import('../views/FrontEnd/participatedGroup/Particmission.vue')
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
            }
          ]
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          path: '/personalSetting',
          name: '個人資料',
          component: () => import('../views/FrontEnd/PersonalSetting.vue'),
          meta: { requiresAuth: true }
=======
=======
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
          path: '/footerLevel',
          name: '會員等級',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtLevel.vue')
        },
        {
          path: '/footerFaq',
          name: '常見問題',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtFaq.vue')
        },
        {
          path: '/footerService',
          name: '服務條款',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtService.vue')
        },
        {
          path: '/footerPrivacy',
          name: '隱私權條款',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtPrivacy.vue')
        },
        {
          path: '/footerPrivacy',
          name: '隱私權條款',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtPrivacy.vue')
        },
        {
          path: '/footerEquity',
          name: '會員權益',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtEquity.vue')
        },
        {
          path: '/footerAdStand',
          name: '會員權益',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtAdStand.vue')
        },
        {
          path: '/footerFeedBack',
          name: '意見回饋',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtFeedBack.vue')
        },
        {
          path: '/footerProposal',
          name: '合作提案',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtProposal.vue')
        },
        {
          path: '/footerAdDesign',
          name: '廣告圖片設計',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtAdDesign.vue')
        },
        {
          path: '/footerAdProject',
          name: '五個專案廣告',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtAdProject.vue')
        },
        {
          path: '/footerWeb',
          name: '網站平台建置',
          component: () =>
            import('../views/FrontEnd/footerComponent/FtWeb.vue')
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
=======
>>>>>>> 34bf6e9630423e1935fb9c94740f46d7707378d6
        }
      ]
    }
  ]
})
