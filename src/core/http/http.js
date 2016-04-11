/**
 * Created by ppf on 12/2/15.
 */

var thriftUtils = require('./thrift/thriftUtils.js'),
    ajax = require('./ajax/ajax.js'),
    cookie = require('../utils/cookie.js'),
    globalSuccessCallback,globalErrorCallback,globalBeforeRequestCallback;


module.exports = {
  /**
   *
   * @param api 地址
   * @param paramsObj 请求参数
   * @param config  当前请求的配置
   * @returns {*}
   */
  request : function(api,paramsObj,config){

    var defaultConfig = {
      mode : "thrift"
    },config = Object.assign(defaultConfig,config);

    var p,args = Array.prototype.slice.call(arguments,0);
    args[2] = config;
    globalBeforeRequestCallback && globalBeforeRequestCallback.apply(this,args);
    if(config['mode'] === 'thrift'){
      p = thriftUtils.request.apply(thriftUtils,args);
    }else{
      p = ajax.request.apply(ajax,args);
    }
    return p.then(globalSuccessCallback,globalErrorCallback);
  },

  /**
   * 添加全局处理函数
   * @param cb
   */
    //todo:当前只能添加一个全局处理函数,or使用时间系统
  addGlobalSuccessCallback : function(cb){
    globalSuccessCallback = cb;
  },

  addGlobalErrorCallback : function(cb){
    globalErrorCallback = cb;
  },

  addGlobalBeforeRequestCallback : function(cb){
    globalBeforeRequestCallback = cb;
  },
  /**
   * 上传接口
   * @param api
   * @param paramsObj
   * @param config
   * @returns {Promise}
   */
  //todo:重写，不要关联业务
  upload : function(api,paramsObj,config){
    var t_token = cookie.getCookie('t-token');
    paramsObj.append('token',t_token);
    paramsObj.append('loginType','1');

    var httpRequest = new XMLHttpRequest();

    /*x-client-channel:0
    x-client-hardware:0
    x-client-id:bNfmBx-1450081137124
    x-client-os:web
    x-client-os-version:0
    x-client-type:wechat
    x-client-version-code:0
    x-client-version-name:0*/

    httpRequest.open("POST", api);
    httpRequest.setRequestHeader('x-client-channel',"0");
    httpRequest.setRequestHeader('x-client-hardware',"0");
    httpRequest.setRequestHeader('x-client-id',thriftUtils.getClientId());
    httpRequest.setRequestHeader('x-client-os',"web");
    httpRequest.setRequestHeader('x-client-os-version',"0");
    httpRequest.setRequestHeader('x-client-type',"pc");
    httpRequest.setRequestHeader('x-client-version-code',"0");
    httpRequest.setRequestHeader('x-client-version-name',"0");

    var promise = new Promise(function (resolve, reject) {

        httpRequest.onreadystatechange = function () {
          //成功上传
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            var res;
            if (httpRequest.responseType === "json") {
              res = JSON.parse(httpRequest.responseText);
            } else {
              res = JSON.parse(httpRequest.responseText);
            }
            //判断200
            if (httpRequest.status == 200) {
              resolve(res);
              //self._onSuccessFunc(self._handleResponse(httpRequest));
            } else {
              //默认非200为报错
              reject(res);
              //self._onErrorFunc(self._handleResponse(httpRequest));
            }
          }
        };
        httpRequest.send(paramsObj);
      });

    return promise.then(globalSuccessCallback,globalErrorCallback);
  }


}
