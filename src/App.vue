<template>
  <section class="vbox" id="app">
    <HeaderView></HeaderView>
    <section>
      <section class="hbox stretch">
        <NavView></NavView>
        <section id="content">
          <section class="vbox">
            <!---mainContent
            <MainContentView></MainContentView>-->
            <router-view/>
            <MusicPlayerView></MusicPlayerView>
          </section>
          <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import HeaderView from '@/components/Home/HeaderView.vue'
  import NavView from  '@/components/Home/NavView.vue'
  import MusicPlayerView from  '@/components/Home/MusicPlayerView.vue'
  export default {
    name: 'App',
    components: {
      HeaderView, NavView,MusicPlayerView
    },
    props: ['remote'],
    data: function () { return {
      showVolumeController: false,
    }},
    created: function () {


    },
    mounted: function () {          // 挂在完成后的生命周期钩子注册。
      this.$nextTick(function () {  // 等待下一次更新完成后执行业务处理代码。

      })
    },
    methods: {

    },
    computed: {
      isThisLiked: function () {
        return this.$store.getters.playData && this.$store.state.user.likedTracks.includes(
          this.$store.getters.playData.track_id || this.$store.getters.playData.single_id)
      }
    }
  }
</script>

<style>

</style>
