/**
 * Created by ppf on 12/29/15.
 */



var http = require('./http/http.js');
var configCenter = require('./configCenter.js');

/**
 * 创建一个resource对象
 *
 * url 链接
 * cache 缓存
 * mockUrl mock数据的链接
 * mockValid 强制mock开关， 默认下不设置，一般情况下判断全局的mockValid
 * requestTransform 输入转换
 * responseTransform 输出转换
 * request function 请求函数，用于复合接口
 *
 *
 * @param config
 */
function createResource(config){
  var defaultConfig = {
    url : void 0,
    cache : false,
    mockUrl : void 0,
    mockValid : void 0,
    request : void 0,
    requestTransform : void 0,
    responseTransform : void 0
  }

  config = Object.assign(defaultConfig,config);
  //'api/hub/iMessageService/getMessagesByQueryParam'

  //缓存对象，key为params的序列化
  var cacheObj = {};

  if(!(config['url'] || config['request'])){
    throw new Error("请传入请求url或request函数");
  }



  var requestFunc = function(params){
    var paramsKey;
    //请求转换
    params = config.requestTransform ? config.requestTransform.call(this,params) : params;

    if(config['cache']){
      paramsKey = typeof params === "object" && params !== null ? JSON.stringify(params) : "";
    }

    //存在缓存，输出缓存数据
    if(cacheObj[paramsKey]){
      return new Promise(function(resolve){
        resolve(cacheObj[paramsKey]);
      })
    }else{

      var responseHandler = function(data){
        //输出转换
        data = config.responseTransform ? config.responseTransform.call(this,data) : data;
        //记录缓存
        if(config['cache']){
          cacheObj[paramsKey] = data;
        }
        return data;
      }.bind(this);

      //mock数据
      if((configCenter.get('global',"mockValid") && config.mockValid !== false) || config.mockValid === true){
        return  http.request( configCenter.get('global',"requestRoot") + (config.mockUrl || config.url)
          ,params , {
          method : "get",
          mode : 'ajax'
        }).then(responseHandler);
      }else{
        if(typeof config['request'] === "function"){
          return  config['request'].apply(this,[params]).then(responseHandler);
        }else{
          params = params ? params : {};
          var httpDebug = configCenter.get('global',"httpDebug");
          if(httpDebug === true){
            console.log(config.url + " request : " + JSON.stringify(params));
          }
          return http.request(config.url,params,{}).then(function(data){
            if(httpDebug === true){
              console.log(config.url + " response : " + JSON.stringify(data));
            }
            return data;
          }).then(responseHandler);
        }
      }
    }
  }

  requestFunc.clearCache = function(){
    cacheObj = {};
  }
  return requestFunc;
}



module.exports = {
  createResource : createResource
}
