
var configCenter = require('./configCenter.js');
var constantCenter = require('./constantCenter.js');
var http,router,resource,Dispatcher;

var dataMap = {}

module.exports = {
  getDispatcher : function(){
    if(!Dispatcher){
      Dispatcher = require('./Dispatcher.js');
    }
    return Dispatcher;
  },
  createResource : function(){
    if(!resource){
      resource = require('./resource.js')
    }
    return resource.createResource.apply(resource,arguments);
  },
  /**
   * 设置配置，并且开启一个getXxxConf 接口
   * @param type
   * @param obj 配置对象
   */
  setConfig : function(type,obj){
    configCenter.set.apply(configCenter,arguments);

    this['get' +type[0].toUpperCase() + type.slice(1) +'Conf'] = function(type,key){
      return this.getConfig(type,key);
    }.bind(this,type);
  },
  /**
   * 获取配置参数
   * @param type 形如config文件夹的文件名
   * @param key
   */
  getConfig : function(){
    return configCenter.get.apply(configCenter,arguments);
  },

  /**
   * 设置常量
   */
  setConstant : function(){
    return constantCenter.set.apply(configCenter,arguments);
  },

  /**
   * 获取常量
   */
  getConstant : function(){
    return constantCenter.get.apply(configCenter,arguments);
  },

  getConstantObj : function(){
    return constantCenter.getConstantObj.apply(configCenter,arguments);
  },
  /**
   * 设置全局数据,不建议使用
   * @param key
   * @param val
   */
  setData : function(key,val){
    dataMap[key] = val;
  },
  /**
   * 获取数据
   * @param key
   * @returns {*}
   */
  getData : function(key){
    return dataMap[key];
  },
  getRouter : function(){
    if(!router){
      router = require('./router.js');
    }
    return router;
  },
  getHttp : function(){
    if(!http){
      http = require('./http/http.js');
    }
    return http;
  }
}
