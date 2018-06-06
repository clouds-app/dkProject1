<template>
  <footer class="footer bg-success dker">

    <div id="jp_container_N">

      <div class="jp-type-playlist">
        <div id="jplayer_N" class="jp-jplayer hide"></div>
        <div class="jp-gui">
          <div class="jp-video-play hide">
            <a class="jp-video-play-icon">play</a>
          </div>
          <div class="jp-interface">
            <div class="jp-controls">
              <div>
                <a class="jp-previous"><i class="icon-control-rewind i-lg"></i></a>
              </div>
              <div>
                <a class="jp-play"><i class="icon-control-play i-2x"></i></a>
                <a class="jp-pause hid"><i class="icon-control-pause i-2x"></i></a>
              </div>
              <div>
                <a class="jp-next"><i class="icon-control-forward i-lg"></i></a>
              </div>
              <div class="hide">
                <a class="jp-stop"><i class="fa fa-stop"></i></a>
              </div>
              <div>
                <a class="" data-toggle="dropdown" data-target="#playlist"><i class="icon-list"></i></a>
              </div>
              <div class="jp-progress hidden-xs">
                <div class="jp-seek-bar dk">
                  <div class="jp-play-bar bg">
                  </div>
                  <div class="jp-title text-lt">
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="hidden-xs hidden-sm jp-current-time text-xs text-muted"></div>
              <div class="hidden-xs hidden-sm jp-duration text-xs text-muted"></div>
              <div class="hidden-xs hidden-sm">
                <a class="jp-mute" title="mute"><i class="icon-volume-2"></i></a>
                <a class="jp-unmute hid" title="unmute"><i class="icon-volume-off"></i></a>
              </div>
              <div class="hidden-xs hidden-sm jp-volume">
                <div class="jp-volume-bar dk">
                  <div class="jp-volume-bar-value lter"></div>
                </div>
              </div>
              <div>
                <a class="jp-shuffle" title="shuffle"><i class="icon-shuffle text-muted"></i></a>
                <a class="jp-shuffle-off hid" title="shuffle off"><i class="icon-shuffle text-lt"></i></a>
              </div>
              <div>
                <a class="jp-repeat" title="repeat"><i class="icon-loop text-muted"></i></a>
                <a class="jp-repeat-off hid" title="repeat off"><i class="icon-loop text-lt"></i></a>
              </div>
              <div class="hide">
                <a class="jp-full-screen" title="full screen"><i class="fa fa-expand"></i></a>
                <a class="jp-restore-screen" title="restore screen"><i class="fa fa-compress text-lt"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="jp-playlist dropup" id="playlist">
          <ul class="dropdown-menu aside-xl dker">
            <!-- The method Playlist.displayPlaylist() uses this unordered list -->
            <li class="list-group-item"></li>
          </ul>
        </div>
        <div class="jp-no-solution hide">
          <span>Update Required</span> To play the media you will need to either update your browser to a recent version or update your
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
  import Vue from 'vue';

  import * as type from '../../config/mutation-types'
  import  * as mtype from  '../../config/messages-type'
  import  bus from '../../service/event'
  import {mapActions , mapGetters } from 'vuex'

  export default {
    name: "music-player-view",
    props: ['remote'],
    data: function () {
      return {
        musicListArray:[
          {
            // title:"Lentement",
            // artist:"Miaow",
            // mp3: "http://flatfull.com/themes/assets/musics/Miaow-03-Lentement.mp3",
            //poster: "images/m0.jpg"
          }
        ],
        cssSelector : { jPlayer: "#jplayer_N", cssSelectorAncestor: "#jp_container_N" },
        options :  {
          playlistOptions: {
            enableRemoveControls: true,
            autoPlay: true
          },
          swfPath: "js/jPlayer",
          supplied: "webmv, ogv, m4v, oga, mp3",
          smoothPlayBar: true,
          keyEnabled: true,
          audioFullScreen: false
        },
        myPlaylist : null
      }
    },
    components:{

    },
    computed: {
      ...mapGetters(
        {
          CurrentTerminalId:type.Account_GetCurrentTerminalId,
          CurrentMusicList:type.Music_GetMusicList
        }
      )
    },
    watch:{
      CurrentTerminalId:function() //此处无效了，只有当前页面一次性变动 会触发次函数
      {
        console.log("播放页面，监控数据，登录成功，终端ID 为："+this.CurrentTerminalId);
      },
      CurrentMusicList:function () {
        console.log("查询终端计划成功， -歌曲列表为 : "+JSON.stringify(this.CurrentMusicList));
        //  let DataListJson =JSON.stringify(this.CurrentMusicList);
        let DataListJson =this.CurrentMusicList;
        if(DataListJson.length>0)
        {
          this.musicListArray =[];
          // debugger

          for(var i=0;i<DataListJson.length;i++){
            let dataItem={
              title:DataListJson[i].musicName,
              artist:DataListJson[i].musicSing,
              mp3: decodeURIComponent(DataListJson[i].musicUrl)
              // poster: "images/m0.jpg"
            }
            if(DataListJson[i].musicUrl.indexOf("mp3") != -1)
            {
              this.musicListArray.push(dataItem)
            }

          }
          console.log("插入播放列表成功， -歌曲列表为 : "+ this.musicListArray);
        }

        // this.$nextTick(function () {  // 等待下一次更新完成后执行业务处理代码。
        //    this.initPlayingData();
        // })
        this.myPlaylist.setPlaylist(this.musicListArray);
      }

    },
    created: function () {

    },
    mounted: function () {          // 挂在完成后的生命周期钩子注册。
      this.$nextTick(function () {  // 等待下一次更新完成后执行业务处理代码。
        this.initPlayingData();
      })
    },
    methods: {
      initPlayingData: function () {
        debugger
        // var myPlaylist = new jPlayerPlaylist({
        //   jPlayer: "#jplayer_N",
        //   cssSelectorAncestor: "#jp_container_N"
        // },
        //   this.musicListArray,
        //   {
        //   playlistOptions: {
        //     enableRemoveControls: true,
        //     autoPlay: true
        //   },
        //   swfPath: "js/jPlayer",
        //   supplied: "webmv, ogv, m4v, oga, mp3",
        //   smoothPlayBar: true,
        //   keyEnabled: true,
        //   audioFullScreen: false
        // });
        this.myPlaylist = new jPlayerPlaylist(this.cssSelector, this.musicListArray, this.options);
        $(document).on($.jPlayer.event.pause, this.myPlaylist.cssSelector.jPlayer,  function(){
          $('.musicbar').removeClass('animate');
          $('.jp-play-me').removeClass('active');
          $('.jp-play-me').parent('li').removeClass('active');
        });

        $(document).on($.jPlayer.event.play, this.myPlaylist.cssSelector.jPlayer,  function(){
          $('.musicbar').addClass('animate');
        });

        $(document).on('click', '.jp-play-me', function(e){
          e && e.preventDefault();
          var $this = $(e.target);
          if (!$this.is('a')) $this = $this.closest('a');

          $('.jp-play-me').not($this).removeClass('active');
          $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

          $this.toggleClass('active');
          $this.parent('li').toggleClass('active');
          if( !$this.hasClass('active') ){
            this.myPlaylist.pause();
          }else{
            var i = Math.floor(Math.random() * (1 + 7 - 1));
            this.myPlaylist.play(i);
          }

        });

      },

    },

  }
</script>

<style scoped>

</style>
