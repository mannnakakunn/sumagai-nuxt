<template>

  <div id="app">
    <html lang="ja">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>携帯料金シミュレータ | 携帯料金総研</title>
    <!-- もしくはCDN経由で読み込み -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">  
    <!-- <link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css"> -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- SEO -->
    <meta name="keywords" content="携帯料金,携帯料金シミュレータ,携帯料金比較,節約,携帯料金節約,携帯料金シミュレーション,一括比較,一括検索" xml:lang="ja" lang="ja">

    <!-- SNSシェア関連 -->
    <meta property="og:title" content="携帯料金シミュレータ2021byスマ買い">
    <meta property="og:description" content="各社の料金をあなたの利用スタイルから一括シミュレーション">
    <meta name="description" content="各社の料金をあなたの利用スタイルから一括シミュレーション">
    <meta property="og:site_name" content="携帯料金シミュレータ2021byスマ買い">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://sumagai.netlify.app">
    <meta property="og:image" content="img/favicon/favicon.ico" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">

    <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/vnd.microsoft.icon">
    <link rel="icon" href="img/favicon/favicon.ico" type="image/vnd.microsoft.icon">
    <div class="hero-head">

<!-- b-navbarを適用 -->
      <template>
        <div class="wrapper-class px-6 py-2" style="border-bottom:solid 1px grey">
          <b-navbar class="py-1 px-5 my-0 is-size-4">
              <template #brand>
                  <b-navbar-item tag="router-link" :to="{ path: '/' }">
                      <span style="font-size:2.5rem; font-weight:600;" class="has-text-black">📱 携帯料金</span><span style="font-size:2.5rem; font-weight:200;" class="has-text-black">総研</span>
                  </b-navbar-item>
              </template>

              <template #start>
              <router-link class="navbar-item" active-class="link--active" exact to="/">
                  <b-navbar-item >
                  <div class="icon-text">
                    <!-- <span class="icon">
                      <i class="fas fa-home" style=""></i>
                    </span> -->
                    <strong><span class="">📰 ニュース</span>
                    </strong>
                  </div>
                  </b-navbar-item>
              </router-link>

              <router-link class="navbar-item" active-class="link--active" exact to="/mobile">
                <b-navbar-item href="#">
                  <b-tooltip label="あなたの利用方法に合わせて携帯料金を各社横断して一括比較！" position="is-bottom">
                    <div class="icon-text">
                      <!-- <span class="icon">
                        <i class="fas fa-mobile-alt" style=""></i>
                      </span> -->
                      <strong><span class="">⚖️ 各社横断版 料金シミュレータ</span>
                      </strong>
                    </div>
                  </b-tooltip>
                </b-navbar-item>
              </router-link>
              </template>

              <template #end>

              <div class="buttons m-0 is-hidden-mobile" >
                <b-button class="my-0 mx-2 p-2" size="" style="background-color:#1877f2; border:none;">
                  <ShareNetwork
                      network="facebook"
                      url="https://sumagai.netlify.app/"
                      title="携帯料金シミュレータ2021 by スマ買い"
                      description="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      quote="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      hashtags="携帯料金,携帯料金比較,携帯料金シミュレーション,スマ買い"
                    >
                    <span style="color:white">
                    <i class="fab fah fa-lg fa-facebook pr-2"></i>
                    <span class="has-text-weight-bold">Facebook</span>
                    </span>
                  </ShareNetwork>
                </b-button>

                <b-button class="my-0 mx-2 p-2" size="" style="background-color:#1da1f2; border:none;">
                  <ShareNetwork
                      network="twitter"
                      key="twitter"
                      url="https://sumagai.netlify.app/mobile"
                      title="携帯料金シミュレータ2021 by スマ買い"
                      description="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      quote="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      hashtags="携帯料金,携帯料金比較,携帯料金シミュレーション,スマ買い"
                    >
                    <span style="color:white">
                    <i class="fab fah fa-lg fa-twitter pr-2"></i>
                    <span class="has-text-weight-bold">twitter</span>
                    </span>
                  </ShareNetwork>
                </b-button>

                <b-button class="my-0 p-2" size="" style="background-color:#00c300; border:none;">
                  <ShareNetwork
                      network="line"
                      key="line"
                      url="https://sumagai.netlify.app/mobile"
                      title="携帯料金シミュレータ2021 by スマ買い"
                      description="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      quote="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      hashtags="携帯料金,携帯料金比較,携帯料金シミュレーション,スマ買い"
                    >
                    <span style="color:white">
                    <i class="fab fah fa-lg fa-line pr-2"></i>
                    <span class="has-text-weight-bold">Line</span>
                    </span>
                  </ShareNetwork>
                </b-button>

                <b-button class="my-0 p-2" size="" style="background-color:#ef4056; border:none;">
                  <ShareNetwork
                      network="pocket"
                      key="pocket"
                      url="https://sumagai.netlify.app/mobile"
                      title="携帯料金シミュレータ2021 by スマ買い"
                      description="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      quote="主要キャリア各社の携帯料金をランキング形式で検索比較できるニュータイプの携帯料金シミュレータ"
                      hashtags="携帯料金,携帯料金比較,携帯料金シミュレーション,スマ買い"
                    >
                    <span style="color:white">
                    <i class="fab fah fa-lg fa-get-pocket pr-2"></i>
                    <span class="has-text-weight-bold">Pocket</span>
                    </span>
                  </ShareNetwork>
                </b-button>
              </div>

              </template>
          </b-navbar>
        </div>
      </template>

      <transition
        name="fade"
        mode="out-in"
      >
        <router-view></router-view>    
      </transition>
    <!-- <HelloWorld></HelloWorld> -->
    </div>
    
    </html>
  </div>
</template>

<style scoped>

@import "../node_modules/bulma/bulma.sass";

  #app{   
    font-family: 'Noto Sans JP', sans-serif;
  }
  [v-cloak] {
    display: none;
  }
  .carousel-arrow i::before{
        background-color:rgba(0,0,0,.5);
        color: white;
  }    
  
  .link--active{
    color: #7a57d5 ;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ;
  }
</style>