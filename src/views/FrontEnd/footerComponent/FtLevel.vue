<template>
  <div class="pt-11">
    <div class="cus-member-level custom-container-width container">
      <div class="px-6 mt-4 cus-member-level-wrap">
        <div class="row">
          <h1 class="member-main mx-auto ft-main-title mt-4">溫度部落-會員等級數據圖像</h1>
        </div>
        <div class="row cus-member-txt-wrap">
          <div class="col-12">
            <div class="level-text">
              <p>
              溫度部落-以台灣原住民元素為發想的會員站內遊戲化
              (會員在站內不論任何的動作，都有:1.點數-貝殼(亂數給)+ 2.積分-等級用
              會員積分及貝殼幣取得說明
              (一般會員每日限制2篇發文，VIP會員每日限制5篇發文，留言、討論、分享等等則無上限)
              </p>
            </div>
          </div>
        </div>
        <!-- fot table A -->
        <div class="row mb-4">
          <div style="overflow-x:auto;">
            <table>
              <thead class="table-color">
                  <th>動作</th>
                  <th>貝殼幣</th>
                  <th>部落幣</th>
                  <th>積分</th>
                  <th>抽獎券</th>
                  <th>動作條件</th>
              </thead>
              <tbody>
                  <tr>
                    <th scope="row">留言、回覆</th>
                    <td>100~999亂數</td>
                    <td>X</td>
                    <td>1</td>
                    <td>X</td>
                    <td>5個字以上(若未達就不給獎勵)</td>
                  </tr>
                  <tr>
                    <th scope="row">發文</th>
                    <td>1000~4999亂數</td>
                    <td>X</td>
                    <td>10</td>
                    <td>X</td>
                    <td>15個字以上(限2次/日)</td>
                  </tr>
                  <tr>
                    <th scope="row">參與站內每次蹭溫度</th>
                    <td>1000~4999亂數</td>
                    <td>X</td>
                    <td>10</td>
                    <td>2張小糧券</td>
                    <td>上傳提交成功(每週1主題,上限150篇輪播)</td>
                  </tr>
                  <tr>
                    <th scope="row">參與個人每日簽到</th>
                    <td>100~999亂數</td>
                    <td>X</td>
                    <td>5</td>
                    <td>如註1</td>
                    <td>簽到(可用混合獎項的方式,不一定只用抽獎券當獎勵)</td>
                  </tr>
                  <tr>
                    <th scope="row">檢舉(成功)</th>
                    <td>X</td>
                    <td>X</td>
                    <td>5</td>
                    <td>2張小糧券</td>
                    <td>發送檢舉後由網管審核</td>
                  </tr>
                  <tr>
                    <th scope="row">分享至外部網站(任務)</th>
                    <td>1000~4999亂數</td>
                    <td>X</td>
                    <td>10</td>
                    <td>5張小糧券/次</td>
                    <td>點分享功能有效分享出去外站(限3次/日)</td>
                  </tr>
                  <tr>
                    <th scope="row">獲選領袖會議</th>
                    <td>X</td>
                    <td>100</td>
                    <td>X</td>
                    <td>5張大獵券</td>
                    <td>每個月1次(由後台人工發送給指定會員)</td>
                  </tr>
                  <tr>
                    <th scope="row">購買部落商店物品</th>
                    <td>X</td>
                    <td>X</td>
                    <td>10</td>
                    <td>X</td>
                    <td>每次/每單</td>
                  </tr>
                  <tr>
                    <th scope="row">加入VIP($999元)/年</th>
                    <td>X</td>
                    <td>8000</td>
                    <td>800</td>
                    <td>30張大獵券</td>
                    <td>需依循加入VIP會員的入口儲值才算(第二階段)</td>
                  </tr>
                  <tr>
                    <th scope="row">一般儲值</th>
                    <td>X</td>
                    <td>依照儲值金額</td>
                    <td>金額10%</td>
                    <td>金額10%</td>
                    <td>需依循一般入口儲值才算(第二階段)</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="level-coin-text">
              <h5 class="level-coin">貝殼幣10萬=1張抽獎券(可轉換)</h5>
              <h5 class="level-coin">新台幣1元 換 100部落幣(不可轉換)</h5>
              <h5 class="level-coin">部落幣100 換 10萬貝殼幣 換 1張抽獎券 (不可轉換)</h5>
              <p>部落幣為站內流通貨幣,均不可換成新台幣,只能用"折抵",但是可以全額則抵,如商品需新台幣100元,可用10000部落幣全額折抵</p>
              <p>註1: 簽到以每周計，每日1張小糧券，第3天2張小糧券、第7天3張小糧券 (7天都有簽到，加贈1張大獵券 或其他獎品，讓管理後台可自設)</p>
              <p>(一)不須剛好對應日期，只需以實際上線的天數次數計，比如這周我陸續上線只有5天，可以領到第5天(含)以前的獎勵</p>
              <p>一週內簽到5天為例: D/1-1張小獵券+ D/2-1張小獵券+ D/3-2張小獵券+D/4-1張小獵券+ D/5-1張小獵券，共得: 6張小獵券</p>
              <p>(二)若VIP開放後，VIP會員的上訴獎勵(包含積分和貝殼幣的取得) ，全部加倍*2（放每日簽到UI PIC）</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <img src="../../../assets/image/ft_img/memberlevel/img_newlogin.jpg" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-4">
            <p class="member-note">會員等級說明</p>
          </div>
        </div>
        <div class="row cus-member">
          <div class="col-12 mb-3">
            <p class="member-type">等級勳章種類 共14個(Lv.0~Lv.3 新手)</p>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-bug.png" alt="">
              <h5 class="memeber-icon-name">毛毛蟲</h5>
              <p class="memeber-icon-level">Lv.4~Lv.9</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-butterfly.png" alt="">
              <h5 class="memeber-icon-name">迎風彩蝶</h5>
              <p class="memeber-icon-level">Lv.10~Lv.19</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-bird.png" alt="">
              <h5 class="memeber-icon-name">五色鳥</h5>
              <p> Lv.20~Lv.29</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-fish.png" alt="">
              <h5 class="memeber-icon-name">搖滾飛魚</h5>
              <p>Lv.30~Lv.39</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-flowerfish.png" alt="">
              <h5 class="memeber-icon-name">櫻鮭</h5>
              <p>Lv.40~Lv.49</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-mouse.png" alt="">
              <h5 class="memeber-icon-name">極限飛鼠</h5>
              <p>Lv.50~Lv.59</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-owl.png" alt="">
              <h5 class="memeber-icon-name">送子貓頭鷹</h5>
              <p>Lv.60~Lv.69</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-snake.png" alt="">
              <h5 class="memeber-icon-name">地靈百步蛇</h5>
              <p>Lv.70~Lv.79</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-bluebird.png" alt="">
              <h5 class="memeber-icon-name">戰翼藍鵲</h5>
              <p>Lv.80~Lv.89</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-monkey.png" alt="">
              <h5 class="memeber-icon-name">淘氣獼猴</h5>
              <p>Lv.90~Lv.99</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-leo.png" alt="">
              <h5 class="memeber-icon-name">凌哮雲豹</h5>
              <p>Lv.100~Lv.109</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-pig.png" alt="">
              <h5 class="memeber-icon-name">豪武山豬</h5>
              <p> Lv.110~Lv.119</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3 col-xl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-deer.png" alt="">
              <h5 class="memeber-icon-name">靈仙梅花鹿</h5>
              <p>Lv.120~Lv.129</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-4 mb-3">
            <p class="member-type">榮譽勳章 共4個</p>
          </div>
          <div class="col-md-3 col-sm-6 mb-3 pl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-eagle.png" alt="">
              <h5 class="member-honer-name">領袖勳章</h5>
              <p class="member-honer-txt">達到45級給予，獲得官網受邀領袖會議資格。</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-3 pl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-flag.png" alt="">
              <h5 class="member-honer-name">活動勳章</h5>
              <p class="member-honer-txt">參加溫度部落舉辦的活動由後台指定發送給會員，或實體線下活動時可提供序號於線上兌換。</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-3 pl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-hunter.png" alt="">
              <h5 class="member-honer-name">VIP獵人勳章</h5>
              <p class="member-honer-txt">成為VIP會員。</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 mb-3 pl-2">
            <div class="member-icon d-flex flex-column align-items-center justify-content-center">
              <img class="w-100" src="../../../assets/image/ft_img/memberlevel/level-icon-cat.png" alt="">
              <h5 class="member-honer-name">達人勳章</h5>
              <p class="member-honer-txt">達到105級可向官網申請”任意達人名稱”的勳章,例:捕魚達人、美食達人…等>。</p>
            </div>
          </div>
        </div>
        <!-- 表格 B -->
        <div class="row">
          <div style="overflow-x:auto;">
            <table>
              <thead class="table-color">
                <th>階級稱謂</th>
                <th>等級</th>
                <th>升級達成標準</th>
                <th>達成等級後的權力</th>
                <th>額外獎勵</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">新會員</th>
                  <td>0</td>
                  <td>進入官網</td>
                  <td>(新手引導流程)</td>
                  <td>貝殼10萬+抽獎券2張+5積分</td>
                </tr>
                <tr>
                  <th scope="row">新手</th>
                  <td>1</td>
                  <td>開啟新手任務<br>(加老牙管理員為好友)</td>
                  <td rowspan="3">開啟會員基本功能<br>(發文、追蹤收藏、商店)<br></td>
                  <td>貝殼10萬+抽獎券2張+10積分</td>
                </tr>
                <tr>
                  <th scope="row">新手</th>
                  <td>2</td>
                  <td>完成會員個人簡介</td>
                  <td>貝殼10萬+抽獎券2張+35積分</td>
                </tr>
                <tr>
                  <th scope="row">新手</th>
                  <td>3</td>
                  <td>發表第1篇日記</td>
                  <td>貝殼10萬+抽獎券2張+50積分</td>
                </tr>
                <tr>
                  <th scope="row">毛毛蟲</th>
                  <td>4</td>
                  <td>積分達100</td>
                  <td>獲得 毛毛蟲勳章</td>
                  <td>貝殼20萬+抽獎券3張</td>
                </tr>
                <tr>
                  <th scope="row">毛毛蟲</th>
                  <td>5</td>
                  <td>積分達200</td>
                  <td></td>
                  <td>貝殼20萬+抽獎券3張</td>
                </tr>
                <tr>
                  <th scope="row">毛毛蟲</th>
                  <td>6</td>
                  <td>積分達300</td>
                  <td>開啟 競技場 資格</td>
                  <td>貝殼20萬+抽獎券3張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">毛毛蟲</th>
                  <td>7</td>
                  <td>積分達400</td>
                  <td></td>
                  <td>貝殼20萬+抽獎券3張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">毛毛蟲</th>
                  <td>8</td>
                  <td>積分達500</td>
                  <td>開啟 豐收祭 資格</td>
                  <td>貝殼20萬+抽獎券3張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">毛毛蟲</th>
                  <td>9</td>
                  <td>積分達600</td>
                  <td></td>
                  <td>貝殼20萬+抽獎券3張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>10</td>
                  <td>積分達1000</td>
                  <td>獲得 彩蝶勳章<br>*可申請  在地獵場管理員<br>*開啟 同好獵場 功能</td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>11</td>
                  <td>積分達1100</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>12</td>
                  <td>積分達1200</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>13</td>
                  <td>積分達1300</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>14</td>
                  <td>積分達1400</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>15</td>
                  <td>積分達1500</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>16</td>
                  <td>積分達1600</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>17</td>
                  <td>積分達1700</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>18</td>
                  <td>積分達1800</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">迎風彩蝶</th>
                  <td>19</td>
                  <td>積分達1900</td>
                  <td></td>
                  <td>貝殼30萬+抽獎券5張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>20</td>
                  <td>積分達2000</td>
                  <td>獲得 五色鳥勳章</td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>21</td>
                  <td>積分達2200</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>22</td>
                  <td>積分達2400</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>23</td>
                  <td>積分達2600</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>24</td>
                  <td>積分達2800</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>25</td>
                  <td>積分達3000</td>
                  <td>獲得 更換暱稱*1次</td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>26</td>
                  <td>積分達3200</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>27</td>
                  <td>積分達3400</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>28</td>
                  <td>積分達3600</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">五色鳥</th>
                  <td>29</td>
                  <td>積分達3800</td>
                  <td></td>
                  <td>貝殼40萬+抽獎券10張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>30</td>
                  <td>積分達4000</td>
                  <td>獲得 飛魚勳章</td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>31</td>
                  <td>積分達4300</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>32</td>
                  <td>積分達4600</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>33</td>
                  <td>積分達4900</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>34</td>
                  <td>積分達5200</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>35</td>
                  <td>積分達5500</td>
                  <td>獲得 貼文置於首頁*1次</td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>36</td>
                  <td>積分達5800</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>37</td>
                  <td>積分達6100</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>38</td>
                  <td>積分達6400</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">搖滾飛魚</th>
                  <td>39</td>
                  <td>積分達6700</td>
                  <td></td>
                  <td>貝殼50萬+抽獎券15張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>40</td>
                  <td>積分達7000</td>
                  <td>獲得 櫻鮭勳章</td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>41</td>
                  <td>積分達7400</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>42</td>
                  <td>積分達7800</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>43</td>
                  <td>積分達8200</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>44</td>
                  <td>積分達8600</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>45</td>
                  <td>積分達9000</td>
                  <td>獲得 VIP 7天體驗</td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>46</td>
                  <td>積分達9400</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>47</td>
                  <td>積分達9800</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>48</td>
                  <td>積分達10200</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">櫻鮭</th>
                  <td>49</td>
                  <td>積分達10600</td>
                  <td></td>
                  <td>貝殼60萬+抽獎券20張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>50</td>
                  <td>積分達11000</td>
                  <td>獲得 飛鼠勳章</td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>51</td>
                  <td>積分達11500</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>52</td>
                  <td>積分達12000</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>53</td>
                  <td>積分達12500</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>54</td>
                  <td>積分達13000</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>55</td>
                  <td>積分達13500</td>
                  <td>獲得 VIP 7天體驗</td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>56</td>
                  <td>積分達14000</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>57</td>
                  <td>積分達14500</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>58</td>
                  <td>積分達15000</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">極限飛鼠</th>
                  <td>59</td>
                  <td>積分達15500</td>
                  <td></td>
                  <td>貝殼70萬+抽獎券30張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>60</td>
                  <td>積分達16000</td>
                  <td>獲得 貓頭鷹勳章</td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>61</td>
                  <td>積分達16600</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>62</td>
                  <td>積分達17200</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>63</td>
                  <td>積分達17800</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>64</td>
                  <td>積分達18400</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>65</td>
                  <td>積分達19000</td>
                  <td>獲得 VIP 7天體驗</td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>66</td>
                  <td>積分達19600</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>67</td>
                  <td>積分達20200</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>68</td>
                  <td>積分達20800</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">送子貓頭鷹</th>
                  <td>69</td>
                  <td>積分達21400</td>
                  <td></td>
                  <td>貝殼80萬+抽獎券40張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>70</td>
                  <td>積分達22000</td>
                  <td>獲得 百步蛇勳章</td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>71</td>
                  <td>積分達22700</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>72</td>
                  <td>積分達23400</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>73</td>
                  <td>積分達24100</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>74</td>
                  <td>積分達24800</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>75</td>
                  <td>積分達25500</td>
                  <td>獲得 VIP 7天體驗</td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>76</td>
                  <td>積分達26200</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>77</td>
                  <td>積分達26900</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>78</td>
                  <td>積分達27600</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">地靈百步蛇</th>
                  <td>79</td>
                  <td>積分達28300</td>
                  <td></td>
                  <td>貝殼100萬+抽獎券50張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>80</td>
                  <td>積分達30000</td>
                  <td>獲得 藍鵲勳章</td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>81</td>
                  <td>積分達30800</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>82</td>
                  <td>積分達31600</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>83</td>
                  <td>積分達32400</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>84</td>
                  <td>積分達33200</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>85</td>
                  <td>積分達34000</td>
                  <td>獲得 VIP 7天體驗</td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>86</td>
                  <td>積分達34800</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>87</td>
                  <td>積分達35600</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>88</td>
                  <td>積分達36400</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">戰翼藍鵲</th>
                  <td>89</td>
                  <td>積分達37200</td>
                  <td></td>
                  <td>貝殼150萬+抽獎券60張<br>+部落大聲公2個</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>90</td>
                  <td>積分達38000<br>+ 活動勳章*1個</td>
                  <td>獲得 獼猴勳章<br>+ 領袖勳章</td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>91</td>
                  <td>積分達38900</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>92</td>
                  <td>積分達39800</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>93</td>
                  <td>積分達40700</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>94</td>
                  <td>積分達41600</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>95</td>
                  <td>積分達42500</td>
                  <td>獲得 VIP 7天體驗</td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>96</td>
                  <td>積分達43400</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>97</td>
                  <td>積分達44300</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>98</td>
                  <td>積分達45200</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                <tr>
                  <th scope="row">淘氣獼猴</th>
                  <td>99</td>
                  <td>積分達46100</td>
                  <td></td>
                  <td>貝殼200萬+抽獎券70張<br>+部落大聲公2個+大獵券2張</td>
                </tr>
                 <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>100</td>
                  <td>積分達47000<br>+ 活動勳章*2個</td>
                  <td>獲得 雲豹勳章<br>達人勳章申請<br>(勳章名稱由申請人自定義)<br>標準:日記100篇+粉絲1萬</td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>101</td>
                  <td>積分達48000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>102</td>
                  <td>積分達49000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>103</td>
                  <td>積分達50000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>104</td>
                  <td>積分達51000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>105</td>
                  <td>積分達52000</td>
                  <td>可申請轉換部落*1次</td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>106</td>
                  <td>積分達53000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>107</td>
                  <td>積分達54000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>108</td>
                  <td>積分達55000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">凌哮雲豹</th>
                  <td>109</td>
                  <td>積分達56000</td>
                  <td></td>
                  <td>抽獎券100張<br>+部落大聲公2個+大獵券5張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>110</td>
                  <td>積分達58000</td>
                  <td>獲得 山豬勳章</td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>111</td>
                  <td>積分達60000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>112</td>
                  <td>積分達62000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>113</td>
                  <td>積分達64000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>114</td>
                  <td>積分達66000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>115</td>
                  <td>積分達68000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>116</td>
                  <td>積分達70000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>117</td>
                  <td>積分達72000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>118</td>
                  <td>積分達74000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">豪武山豬</th>
                  <td>119</td>
                  <td>積分達76000</td>
                  <td></td>
                  <td>抽獎券150張<br>+部落大聲公2個+大獵券10張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>120</td>
                  <td>積分達80000</td>
                  <td>獲得 梅花鹿勳章</td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>121</td>
                  <td>積分達82000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>122</td>
                  <td>積分達84000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>123</td>
                  <td>積分達86000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>124</td>
                  <td>積分達88000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>125</td>
                  <td>積分達90000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>126</td>
                  <td>積分達92000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>127</td>
                  <td>積分達94000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>128</td>
                  <td>積分達96000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">靈仙梅花鹿</th>
                  <td>129</td>
                  <td>積分達98000</td>
                  <td></td>
                  <td>抽獎券200張<br>+部落大聲公2個+大獵券15張</td>
                </tr>
                <tr>
                  <th scope="row">台灣黑熊</th>
                  <td>130</td>
                  <td>積分達100000</td>
                  <td>獲得 台灣黑熊勳章</td>
                  <td>抽獎券300張<br>+至尊會員尊榮權利</td>
                </tr>
                <tr>
                  <th scope="row">台灣黑熊</th>
                  <td>131</td>
                  <td>積分達200000</td>
                  <td></td>
                  <td>抽獎券300張<br>+至尊會員尊榮權利</td>
                </tr>
                <tr>
                  <th scope="row">台灣黑熊</th>
                  <td>132</td>
                  <td>積分達300000</td>
                  <td></td>
                  <td>抽獎券300張<br>+至尊會員尊榮權利</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 表格 C -->
        <div class="row mt-4">
          <div class="col-12">
            <p class="member-note mb-4">VIP會員權利</p>
          </div>
        </div>
        <div class="row mb-4">
          <div style="overflow-x:auto;">
            <table>
              <thead class="table-color">
                  <th></th>
                  <th>一般會員</th>
                  <th>VIP會員7天</th>
                  <th>VIP會員15天</th>
                  <th>VIP會員30天</th>
                  <th>VIP會員6個月</th>
                  <th>VIP會員1年</th>
                  <th>說明</th>
              </thead>
              <tbody>
                  <tr>
                    <th scope="row">費用</th>
                    <td>免費</td>
                    <td>序號贈送</td>
                    <td>序號贈送</td>
                    <td>序號贈送</td>
                    <td>＄599元</td>
                    <td>＄999元</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">VIP勳章</th>
                    <td>x</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>時間到消失</td>
                  </tr>
                  <tr>
                    <th scope="row">VIP專屬貼圖1組</th>
                    <td>x</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>時間到消失</td>
                  </tr>
                  <tr>
                    <th scope="row">貝殼幣</th>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>600萬</td>
                    <td>1000萬</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">抽獎券</th>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>400張</td>
                    <td>800張</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">日記每日上限</th>
                    <td>2篇</td>
                    <td>5篇</td>
                    <td>5篇</td>
                    <td>5篇</td>
                    <td>5篇</td>
                    <td>5篇</td>
                    <td>時間到恢復一般會員權益</td>
                  </tr>
                  <tr>
                    <th scope="row">每日簽到獎勵(抽獎券)</th>
                    <td>1張</td>
                    <td>加倍</td>
                    <td>加倍</td>
                    <td>加倍</td>
                    <td>加倍</td>
                    <td>加倍</td>
                    <td>時間到恢復一般會員權益</td>
                  </tr>
                  <tr>
                    <th scope="row">旅遊金</th>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>150元</td>
                    <td>300元</td>
                    <td>轉成 部落幣 提供</td>
                  </tr>
                  <tr>
                    <th scope="row">購買在地體驗免5%作業費</th>
                    <td>x</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">300元一日遊</th>
                    <td>○</td>
                    <td>保留席</td>
                    <td>保留席</td>
                    <td>保留席</td>
                    <td>保留席</td>
                    <td>保留席</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">貝殼幣加倍獲得</th>
                    <td>x</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>時間到恢復一般會員權益</td>
                  </tr>
                  <tr>
                    <th scope="row">飛鴿傳書(大聲公)</th>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>50個</td>
                    <td>100個</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">免費體驗行程抽獎</th>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>○</td>
                    <td>○</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">領袖殿堂</th>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>保留席</td>
                    <td>保留席</td>
                    <td>時間到恢復一般會員權益</td>
                  </tr>
                  <tr>
                    <th scope="row">團購分潤資格權利</th>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td>○</td>
                    <td></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
