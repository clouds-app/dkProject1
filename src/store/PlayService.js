/**
 * Created by Andy.Huang on 2016/12/25 0025.
 */
//import * as def from '../config/def'
import axios from 'axios'
import * as type from '../config/mutation-types'
import baseUrl from '../config/env'

export default {
  state: {
    IsLogin:false,
    currentPageNo:1,
    currentTerminalId:'',
    playList: {},
    userInfo:{
      shopIp : '',
      shopCode: '',
      shopName : '',
      shopActivateCode : '',
    }
  },
  getters: {
    [type.Account_IsLogin]:state => state.IsLogin,
    [type.Account_UserInfo]:state => state.userInfo,
    [type.Music_GetPageNo]:state => state.currentPageNo,
    [type.Music_GetMusicList]:state => state.playList,
    [type.Account_GetCurrentTerminalId]:state => state.currentTerminalId
  },
  mutations: {
    //登录状态
    [type.Account_IsLogin](state,data){
      state.IsLogin =data;
    },
    //用户信息
    [type.Account_UserInfo](state,data){
      state.userInfo =data;
    },
    //歌曲分页信息
    [type.Account_IsLogin](state,data){
      state.currentPageNo =data;
    },
    //歌曲列表
    [type.Music_GetMusicList](state,data){
      state.playList =data;
    },
    //终端ID
    [type.Account_GetCurrentTerminalId](state,data){
      state.currentTerminalId =data;
    },
  },
  actions:{
    [type.Music_GetMusicList]({commit, state},payload){
      console.log("正在执行查询当前终端计划..");
      // const pageNo =1;
      // const pageSize =300;
      axios.post(baseUrl+'/mobinf/terminalAction!getPlanMusicList.do?id='+state.currentTerminalId+'&pageNo='+payload.pageNo+'&pageSize='+payload.pageSize
      ).then(function (response) {
        //debugger
        if(response.data.result==="0")
        {
          // console.log("查询终端计划成功，终端ID 为 "+state.currentTerminalId+" -歌曲计划为 : "+JSON.stringify(response.data.info.infoList));
          commit(type.Music_GetMusicList,response.data.info.infoList);

        }

      }).catch(function (error) {
        //debugger
        console.log("查询终端计划失败:"+error);
      });
    },
    [type.Account_UserInfo]({commit, state},payload){
      commit(type.Account_UserInfo,payload);
      console.log("保存用户信息成功..");
    },
    [type.Account_GetCurrentTerminalId]({commit, state,dispatch},payload){
      //注册账号
      console.log("开始注册账号..");
      axios.post(baseUrl+'/mobinf/terminalAction!addTerminal.do?ip='+payload.ip+'&code='+payload.code+'&name='+payload.name+'&activateCode='+payload.activateCode
      ).then(function (response) {
        //debugger
        if(response.data.result==="0")
        {
          console.log("登录注册成功,终端Id为 : "+response.data.info);
          commit(type.Account_GetCurrentTerminalId,response.data.info);
          commit(type.Account_IsLogin,true);
          console.log("开始调用当前终端计划..");
          let queryParam={
            pageNo :1,
            pageSize :300
          }
          // debugger
          dispatch(type.Music_GetMusicList,queryParam);
          console.log("登录成功，开始保存用户信息..");
          let accountInfo={
            shopIp : payload.ip,
            shopCode: payload.code,
            shopName : payload.name,
            shopActivateCode : payload.activateCode,
          }
          dispatch(type.Account_UserInfo,accountInfo);
          console.info("用户信息-店铺ip-为.."+accountInfo.shopIp);
          console.info("用户信息-店铺编码-为.."+accountInfo.shopCode);
          console.info("用户信息-店铺名称-为.."+accountInfo.shopName);
          console.info("用户信息-店铺激活码-为.."+accountInfo.shopActivateCode);
        }

      }).catch(function (error) {
        //debugger
        console.error("登录注册失败:"+error);
      });
    }
  }
}
