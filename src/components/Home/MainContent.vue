<template>
  <section class="w-f-md">
    <section class="hbox stretch bg-black dker">
      <!-- side content -->
      <aside class="col-sm-5 no-padder" id="sidebar">
        <section class="vbox animated fadeInUp">
          <section class="scrollable">
            <div class="m-t-n-xxs item pos-rlt">
              <div class="top text-right">
                <span class="musicbar animate bg-success bg-empty inline m-r-lg m-t" style="width:25px;height:30px"> <span class="bar1 a3 lter"></span> <span class="bar2 a5 lt"></span> <span class="bar3 a1 bg"></span> <span class="bar4 a4 dk"></span> <span class="bar5 a2 dker"></span> </span>
              </div>
              <div class="bottom gd bg-info wrapper-lg">
                <span class="pull-right text-sm">101,400 <br />Followers</span>
                <span class="h2 font-thin">Soph Ashe</span>
              </div>
              <!--大图-->
              <img class="img-full" src="../../../static/images/MUSIC4.jpg"  alt="..." />
            </div>
            <ul class="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto">
              <!--播放列表-->
              <!--<li class="list-group-item" v-for="(item, index) in CurrentMusicList">-->
                <!--<div class="pull-right m-l">-->
                  <!--&lt;!&ndash;<a href="#" class="m-r-sm"><i class="icon-cloud-download"></i></a>&ndash;&gt;-->
                  <!--&lt;!&ndash;<a href="#" class="m-r-sm"><i class="icon-plus"></i></a>&ndash;&gt;-->
                  <!--<a href="#"><i class="icon-close"></i></a>-->
                <!--</div> <a href="#" class="jp-play-me m-r-sm pull-left"> <i class="icon-control-play text"></i> <i class="icon-control-pause text-active"></i> </a>-->
                <!--<div class="clear text-ellipsis">-->
                  <!--<span> {{ item.musicName }}</span>-->
                  <!--<span class="text-muted"> &#45;&#45; 04:35</span>-->
                <!--</div> -->
              <!--</li>-->


            </ul>
          </section>
        </section>
      </aside>
      <!-- / side content -->
      <!--<section class="col-sm-4 no-padder bg">-->
        <!--<section class="vbox">-->
          <!--<section class="scrollable hover">-->
            <!--<ul class="list-group list-group-lg no-bg auto m-b-none m-t-n-xxs">-->
              <!--&lt;!&ndash;第三方播放列表&ndash;&gt;-->
              <!--<li class="list-group-item clearfix"> <a href="#" class="jp-play-me pull-right m-t-sm m-l text-md"> <i class="icon-control-play text"></i> <i class="icon-control-pause text-active"></i> </a> <a href="#" class="pull-left thumb-sm m-r"> <img src="../../../static/images/m0.jpg" alt="..." /> </a> <a class="clear" href="#"> <span class="block text-ellipsis">Little Town</span> <small class="text-muted">by Soph Ashe</small> </a> </li>-->
              <!--<li class="list-group-item clearfix"> <a href="#" class="jp-play-me pull-right m-t-sm m-l text-md"> <i class="icon-control-play text"></i> <i class="icon-control-pause text-active"></i> </a> <a href="#" class="pull-left thumb-sm m-r"> <img src="../../../static/images/a1.png" alt="..." /> </a> <a class="clear" href="#"> <span class="block text-ellipsis">Get lacinia odio sem nec elit</span> <small class="text-muted">by Filex</small> </a> </li>-->

            <!--</ul>-->
          <!--</section>-->
        <!--</section>-->
      <!--</section>-->
      <!--<section class="col-sm-3 no-padder lt">-->
        <!--<section class="vbox">-->
          <!--<section class="scrollable hover">-->
            <!--<div class="m-t-n-xxs">-->
              <!--&lt;!&ndash;-广告图片&ndash;&gt;-->
              <!--<div class="item pos-rlt">-->
                <!--<a href="#" class="item-overlay active opacity wrapper-md font-xs"> <span class="block h3 font-bold text-info">Find</span> <span class="text-muted">Search the music you like</span> <span class="bottom wrapper-md block">- <i class="icon-arrow-right i-lg pull-right"></i></span> </a>-->
                <!--<a href="#"> <img class="img-full" src="../../../static/images/m40.jpg"  alt="..." /> </a>-->
              <!--</div>-->

            <!--</div>-->
          <!--</section>-->
        <!--</section>-->
      <!--</section>-->
    </section>
    <!-- 模态框（Modal）-->
    <LoginView></LoginView>
  </section>
</template>

<script>
  import * as type from '../../config/mutation-types'
  import {mapActions , mapGetters } from 'vuex'
   import LoginView from '../Login/LoginContent'
    export default {
        name: "main-content",
        components:{
         LoginView
        },
      computed: {
        ...mapGetters(
          {
            CurrentTerminalId:type.Account_GetCurrentTerminalId,
            CurrentMusicList:type.Music_GetMusicList
          }
        )
      },
    }
</script>

<style scoped>

</style>
