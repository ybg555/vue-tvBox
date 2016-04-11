/**
 * Created by ppf on 12/29/15.
 */



var configCenter = require('./configCenter.js');
var Location = require('./Location.js');
var startValid = false;
var callbackArr = [];


//当前location和当前状态
var curLocation,
    curState;
var listenFunc = function(location){

  //获取pageName,一个path必须对应一个pageName
  var path = location.pathname,
      pageName = router.getPageNameByPath(path),
      obj = {
        state : Object.assign({}, location.state, {
          path: location.pathname,
          query: location.query,
          state: location.state,
          pageName : pageName
        }),
        lastState : curState,
        location : location,
        lastLocation : curLocation
      };


  curLocation = location;
  curState = obj['state'];


  for(var i=0,length = callbackArr.length;i<length;i++){
    callbackArr[i].apply(this,[obj]);
  }
}


var router =  {

  getCurLocation : function(){
    return curLocation;
  },
  getCurState : function(){
    return curState;
  },

  getPathByPageName : function(pageName){
    return configCenter.get('route',pageName)['path'];
  },
  getLink : function(pageName,query = {}){
    //;
    var path = this.getPathByPageName(pageName),
      queryStr = [];
    for(var key in query){
      queryStr.push(key + "=" + query[key]);
    }
    return path + (queryStr.length > 0 ? "?" + queryStr.join("&") : "");
  },
  /**
   * 跳转页面
   * @param obj{pageName,params}
   */
  goTo : function(obj){

    //console.log(_routeMap);
    var configItem = this.getRouteConfigByPageName(obj['pageName']);
    //todo:setTimeout兼容旧代码，就代码在store里面调用该函数，会导致dispatcher waitFor问题
    setTimeout(function(){
      Location.pushState(null,configItem['path'],obj['params']);
    },100);
  },


  getPageNameByPath : function(path) {
    var routeObj = configCenter.get('route'),
      pageName;
    for (var key in routeObj) {
      if (routeObj[key]['path'] === path) {
        pageName = key;
      }
    }
    return pageName;
  },

  getRouteConfigByPageName : function(pageName){
    var routeObj = configCenter.get('route',pageName);
    if(!routeObj){
      throw new Error('the route config of the pageName is not existed.');
    }
    return routeObj;
  },

  /**
   * 监听
   * @param cb
   */
  addListener : function(cb){
    callbackArr.push(cb);
  },
  removeListener : function(cb){
    for(var i=0,length = callbackArr.length;i <length;i++){
      if(callbackArr[i] === cb){
        callbackArr.splice(i,1);
      }
    }
  },
  //开始路由
  startRoute : function(){
    if(startValid){
      return false;
    }
    startValid = true;
    Location.listen(listenFunc);
    return true;
  }
}

module.exports = router;
