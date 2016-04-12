
var Thrift = require('./Thrift.js');

var cookie = require('../../utils/cookie.js');
//var configCenter = require('../../configCenter.js');
var globalConfig = require("../../../config.js");
var thriftConfig = require("../../../thriftConfig.js");


module.exports = {
    _getRandomString: function(len){
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
      var maxPos = $chars.length;
      var pwd = '';
      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },

    getClientId: function(len){
      len = len ? len : 6;
      var clientid = cookie.getCookie('x-client-id');
      if(clientid){

      }else{
        clientid = this._getRandomString(len) + '-' + new Date().getTime();
        cookie.setCookie('x-client-id', clientid);
      }
      return clientid
    },


    token : function(token){
      var t_token = token;
      if(token || token == null){
        cookie.setCookie('t-token', token);
      }
      else if(typeof token == 'undefined'){
        t_token = cookie.getCookie('t-token');
      }
      return t_token;
    },


    createThriftClient : function(url, clientClass, thriftobj){
      if(typeof thriftobj == 'undefined'){
        thriftobj = {
          'x-client-id': this.getClientId(6),
          'x-client-type': 'pc'
        }
      }
      var transport = new Thrift.Transport(url, thriftobj);
      var protocol  = new Thrift.Protocol(transport);
      return new clientClass(protocol);
    },

  /**
   * 创建一个thrift请求
   * @param method
   * @param data
   * @returns   Promise
   */
    request : function(url,data) {
      var thriftRequest = this;
      //var globalConfig = configCenter.get('global');
      //var thriftConfig = configCenter.get('thrift');

      if (thriftConfig[url]) {
        var configObj = thriftConfig[url];

        //webpack context 设置
        var req = require.context("./thriftClientClass", true, /^\.\/.*\.js/);

        var jsFileSrc = configObj['jsPath'].replace('thriftClientClass', ".");

        //请求url  root:port/[module]/[method]
        var requestRoot = configObj['requestRoot'] ? configObj['requestRoot'] : globalConfig['requestRoot'],
          methodName = configObj['methodName'],
          clientClass = req(jsFileSrc); //or 异步加载

        clientClass = clientClass[configObj['clientClass']];

        var clientObj = thriftRequest.createThriftClient(
          requestRoot + (requestRoot.lastIndexOf('/') === requestRoot.length - 1 ? "" : "/")
          + url

          /*requestRoot +(requestRoot.lastIndexOf('/') === requestRoot.length -1 ? "" : "/")
           + controllerName + '/' + methodName */, clientClass);

        var resolveFuc, rejectFuc, promise = new Promise(function (resolve, reject) {
          resolveFuc = resolve;
          rejectFuc = reject;
        });

        var paramArr = this.createParams(req,configObj,data);

        paramArr.push(function (res) {
          resolveFuc(res);
        });

        clientObj[methodName].apply(clientObj, paramArr);
        return promise;

      } else {
        throw new Error("the config of the " + url + " is not existed. ");
      }
    },
  /**
   * 构建单个参数
   * @param require
   * @param paramTypeObj
   * @param data
   * @returns {*}
   */
    createParam : function(require,paramTypeObj,data){
      var paramType = paramTypeObj['type'];
      if(paramType === "structure"){

        var structureObj = paramTypeObj['structure'],
            structureClass = require(structureObj['jsPath'].replace('thriftClientClass', "."))[structureObj['className']],
            obj = {};
        for(var i = 0,length = structureObj['params'].length;i<length;i++){
          var sParamName = structureObj['params'][i]['name'];
          obj[sParamName] = this.createParam(require,structureObj['params'][i],data[sParamName]);
        }
        return new structureClass(obj);

      }else if(paramType === "list"){
        var res = [];
        if(data instanceof Array && data.length > 0){

          for(var i=0,length = data.length;i<length;i++){
            res.push(this.createParam(require,paramTypeObj['listType'],data[i]));
          }
        }
        return res;

      }else{
        return data;
      }
    },
    /**
     * 构建多个参数
     * @param require
     * @param configObj
     * @param data
     * @returns {Array}
     */
    createParams : function(require,configObj,data){
      var paramArr = [];
      var paramTypes = configObj['params'];
      for(var i=0,length = paramTypes.length;i<length;i++){
        var paramTypeObj = paramTypes[i];
        paramArr.push(this.createParam(require,paramTypeObj,data[paramTypeObj['name']]));
      }

      return paramArr;
    }



}
