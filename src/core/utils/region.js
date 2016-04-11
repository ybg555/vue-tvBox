/**
 * Created by huangchong on 15/12/10.
 */
var http = require("../http/http.js");
var noop = function(){return arguments;}
import {eventTypes} from "../constants/appConstants";

/*
 服务端返回TRegion -> [{
 regionId	int	 	是	地址id
 regionCode String 是 地址编码：格式：遵循国家行政区划代码规范，精确到街道级别，9位字符
 parentId	int	 	是	上级地址id
 level	int	 	是	层级
 regionName	String	 	是	地址名称，最大50个字符
 shortName	String	 	是	地址简称
 zipCode	String	 	否	邮政编码，格式：6位数字
 regionPinyin	String	 	是	地址拼音，格式：字母小写，字与字之间以下划线拼接，如广州市（guang_zhou_shi）
 lng	double	 	否	经度
 lat	double	 	否	纬度
 sort	int	50	否	顺序(范围0到255)
 isHot	boolean	false	是	是否为热点地区
 }]
 */

/**
 * 带缓存的地区数据
 * @constructor
 */
var Region = function(){
  this.hasCommunityCitys = [];
  this.hasCommunityCitysWithLikeKey = {};

  this.init = function(){
    //this.getHasCommunityCitys();
    return this;
  };

  /**
   * 兼容的promise写法
   * @param likeKey
   * @returns {Promise}
     */
  this.getHasCommunityCitysPromise = function(likeKey){
    var _self = this;
    return new Promise(function (resolve, reject) {
      likeKey ?
        _self.getHasCommunityCitys(likeKey, function(res){ resolve(res); }) :
        _self.getHasCommunityCitys(function(res){ resolve(res); })
    });
  }



  /**
   * 获取有小区的城市
   *
   * usage:
   * getHasCommunityCitys("xxx", func(res){...})
   * 或 getHasCommunityCitys(function(res){...})
   *
   * @param likeKey 可选
   * @param callback 回调函数
   * @returns {*}
   */
  this.getHasCommunityCitys = function(){
    // ;
    var _self = this,
      likeKey,
      callback,
      _arg = Array.prototype.slice.apply(arguments),
      _optionObj = {},
      _onlyCallback = _arg.length <= 1; // 如果只有回调函数

    // init params
    if(_onlyCallback){
      callback = _arg[0];
    }else{
      likeKey = _arg[0];
      callback = _arg[1];
      _optionObj = {likeKey:likeKey}
    }

    // do
    if(!_onlyCallback && _self.hasCommunityCitysWithLikeKey[likeKey]){
      // 如果模糊查询有缓存
      callback(_self.hasCommunityCitysWithLikeKey[likeKey]);
    }else if(_onlyCallback && _self.hasCommunityCitys.length){
      // 如果有缓存
      callback(_self.hasCommunityCitys);
    }else{
      if(!likeKey){
        _optionObj.likeKey = ''
      }
      // 如果没缓存
      http.request('api/region/iRegionService/getHasCommunityCitys', _optionObj)
        .then(function (res) {
          // ;
          if(_onlyCallback){
            _self.hasCommunityCitys = res
          }else{
            _self.hasCommunityCitysWithLikeKey[likeKey] = res;
          }
          callback && callback(res);
        })
    }

  }
};

exports = module.exports = new Region().init();


