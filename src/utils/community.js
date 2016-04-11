
/**
 * Created by huangchong on 15/12/10.
 */
var http = require("../http/http.js");
var noop = function(){return arguments;};
var _ = require('underscore');

/**
 * 用于管理小区选项和缓存选项
 * @constructor
 */
var Community = function(){
  this.communities = [];  // 缓存所有小区
  this.communitiesGroupByCity = {}; // 按城市缓存小区
  this.communitiesGroupByProvince = {}; // 按省份缓存小区

  this.init = function(){
    //this.getHasCommunityCitys();
    return this;
  };

  /* 获取小区 */
  /* conditionMap :
    {
     communityName String 否	小区名称
     isDelete	String	 	否	启用状态（0：禁用；1：启用）
     province String	 	否	省id
     city	String	 	否	市id
    }
  * */
  this.getCommunities = function(/* conditionMap [, callback] */){
    var _self = this,
      conditionMap,
      callback,
      _arg = Array.prototype.slice.apply(arguments),
      _optionObj = {
        conditionMap:{},  // 启用状态（0：禁用；1：启用）
        currentPage:0,
        pageSize:999
      },
      _onlyCallback = _arg.length <= 1; // 如果只有回调函数


    // init params
    if(_onlyCallback){
      callback = _arg[0];
      _optionObj.conditionMap.isDelete = '1';
    }else{
      conditionMap = _arg[0];
      callback = _arg[1];
      _optionObj.conditionMap = _.defaults(conditionMap,{isDelete:'1'});
    }

    // use cache
    if(_onlyCallback && _self.communities){
      callback(_self.communities);
    }else if(!_onlyCallback && conditionMap.city && _self.communitiesGroupByCity[conditionMap.city]){
      callback(_self.communitiesGroupByCity[conditionMap.city]);
    }else if(!_onlyCallback && conditionMap.province && _self.communitiesGroupByProvince[conditionMap.province]){
      callback(_self.communitiesGroupByProvince[conditionMap.province]);
    }

    // get from serve
    else{
      //// ;
      http.request('api/community/iCommunityService/queryCommunityListAndCount',_optionObj)
        .then(function(res){
          //// ;
          // save cache
          if(_onlyCallback){
            _self.communities = res.dataList;
          }else if(conditionMap.city){
            _self.communitiesGroupByCity[conditionMap.city] = res.dataList;
          }else if(conditionMap.province){
            _self.communitiesGroupByProvince[conditionMap.province] = res.dataList;
          }
          callback(res.dataList);
        })
    }
  };

  // 获取所有小区
  this.getAllCommunities = function(callback){
    callback = callback || noop;
    if(this.communities.length){
      callback(this.communities);
    }else{
      this.getCommunities(callback);
    }
  };

  // 通过cityId获取该城市下所有小区 - 将要废弃,改promise接口
  this.getCommunitiesByCityId = function(cityId, callback){
    callback = callback || noop;
    this.getCommunities({city:''+cityId}, callback);
  };

  // 通过cityId获取该城市下所有小区 Promise
  this.getCommunitiesByCityIdPromise = function(cityId){
    var _self = this;
    return new Promise(function (resolve, reject) {
      _self.getCommunitiesByCityId(cityId, function(res){
        resolve(res);
      })
    })
  }

  // 通过省id获取小区列表 - 将要废弃,改promise接口
  this.getCommunitiesByProvinceId = function(provinceId, callback){
    callback = callback || noop;
    this.getCommunities({province:''+provinceId}, callback);
  };

  // 通过省id获取小区列表 Promise
  this.getCommunitiesByProvinceIdPromise = function(provinceId){
    var _self = this;
    return new Promise(function (resolve, reject) {
      _self.getCommunities({province:''+provinceId},  function(res){
        resolve(res);
      })
    })
  };

  // 通过启用状态 获取启用列表- 将要废弃,改promise接口
  this.getCommunitiesByIsDelete = function(provinceId, callback){
    callback = callback || noop;
    this.getCommunities({province:''+provinceId}, callback);
  };

  // 通过省id获取小区列表 Promise
  this.getCommunitiesByIsDeletePromise = function(provinceId){
    var _self = this;
    return new Promise(function (resolve, reject) {
      _self.getCommunities({province:''+provinceId},  function(res){
        resolve(res);
      })
    })
  }

  // 通过小区名 获取小区列表- 将要废弃,改promise接口
  this.getCommunitiesByCommunityName = function(communityName, callback){
    callback = callback || noop;
    this.getCommunities({communityName:''+communityName}, callback);
  };

  this.getCommunitiesByCommunityNamePromise = function(communityName){
    var _self = this;
    return new Promise(function (resolve, reject) {
      _self.getCommunities({communityName:''+communityName},  function(res){
        resolve(res);
      })
    })
  }

};

exports = module.exports = new Community().init();


