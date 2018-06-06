//服务请求类

export default class api {
  // constructor
  constructor() {
    this.baseUrl='http://www.zhunit.com/';
  }
  // Getter
  // get area() {
  //   return this.calcArea()
  // }
  // Method
  // calcArea() {
  //   return this.height * this.width;
  // }


  //注册或登录
 static login(szIP, szMac, szShopName, szActivationCode)
  {
    debugger
      $http.post(this.baseUrl, {
      params: {
        szIP: szIP,
        szMac:szMac,
        szShopName:szShopName,
        szActivationCode:szActivationCode,
      }
    }).then(function (response) {
      debugger
        console.log(response);
      }).catch(function (error) {
        debugger
        console.log(error);
      });
  }


}
