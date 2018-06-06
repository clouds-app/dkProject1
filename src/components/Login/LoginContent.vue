<template>
  <div class="modal fade" id="modal-form">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body wrapper-lg">
          <div class="row">
            <div class="col-sm-6 b-r">
              <h3 class="m-t-none m-b">登录/注册</h3>
              <p>{{CurrentTerminalId}}</p>
              <form role="form">
                <div class="form-group">
                  <label>名称</label>
                  <input type="text" class="form-control" v-model="loginForm.name" placeholder="店铺名称或编码" />
                </div>
                <div class="form-group">
                  <label>激活码</label>
                  <input type="text" class="form-control" v-model="loginForm.activateCode" placeholder="激活码" />
                </div>
                <div class="checkbox m-t-lg">
                  <button type="button" @click="login" class="btn btn-sm btn-success pull-right text-uc m-t-n-xs"><strong>确认</strong></button>
                  <label> <input type="checkbox" /> 记住我 </label>
                  <button id="btn_closeLoginView" type="button" class="btn btn-default hidden" data-dismiss="modal">关闭</button>
                </div>
              </form>
            </div>
            <div class="col-sm-6">
              <h4>Not a member?</h4>
              <p>You can create an account <a href="#" class="text-info">here</a></p>
              <p>OR</p>
              <a href="#" class="btn btn-primary btn-block m-b-sm"><i class="fa fa-facebook pull-left"></i>Sign in with Facebook</a>
              <a href="#" class="btn btn-info btn-block m-b-sm"><i class="fa fa-twitter pull-left"></i>Sign in with Twitter</a>
              <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google-plus pull-left"></i>Sign in with Google+</a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
  //import api from '../../service/api'
  //import {mapMutations, mapState} from 'vuex'
  // code: '61a8babe3aaba8c58f801a13451be781',
  //   name : '1121',
  //   activateCode : 'f593b80124c4bfca'
  import  bus from '../../service/event'
  import * as type from '../../config/mutation-types'
  import {mapActions , mapGetters } from 'vuex'
  import  * as mtype from  '../../config/messages-type'
  export default {
    name: "login-content",
    data() {
      return {
        loginForm:{
          ip : '172.16.144.204',
          code: '61a8babe3aaba8c58f801a13451be781',
          name : '1121',
          activateCode : 'f593b80124c4bfca'
        },
        IsLogin:false
      }
    },
    computed: {
      ...mapGetters(
        {
          CurrentTerminalId:type.Account_GetCurrentTerminalId,
          AccountInfo:type.Account_UserInfo,
          //CurrentMusicList:type.Music_GetMusicList
        }
      )
    },
    watch:{
      CurrentTerminalId()
      {
        this.IsLogin=true; //登录成功
        console.log("监控数据，登录成功，终端ID 为："+this.CurrentTerminalId);
        //触发关闭登录窗口的事件
        // this.CloseLoginView();
        //发送登录成功消息到主窗口
        //sendMessageToMusicPlayerView();
      },
      AccountInfo()
      {
        //debugger
        console.log("店铺信息 开始赋值...");
        this.loginForm.name =this.AccountInfo.shopName;
        this.loginForm.activateCode =this.AccountInfo.shopActivateCode;

      }

    },
    methods:{
      ...mapActions({
          //将 `this.SetCurrentTerminalId()` 映射为 `this.$store.dispatch('Account_GetCurrentTerminalId')`
          GetCurrentTerminalId: type.Account_GetCurrentTerminalId
        }
      ),
      async login()
      {
        await  this.GetCurrentTerminalId(this.loginForm);
      },
      CloseLoginView(){
        document.getElementById("btn_closeLoginView").click();
      },
      // sendMessageToMusicPlayerView()
      // {
      //   bus.$emit(mtype.Login_IsLogin,this.IsLogin)
      // }
    }
  }
</script>

<style scoped>

</style>
