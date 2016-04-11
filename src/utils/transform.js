var timer = require('./timer');
var React = require('react');
var noop = function(){return arguments};
var _ = require('underscore');

// 预设值一些选项，
// 注意，第一项由于index为0，故约定应该设为'默认值','全部'等
function parseOptionsToFn(_cases){
  _cases = [].concat(_cases);
  return function(val, sourceData){
    return _cases[(val|0)] || _cases[0];
  }
}

var _options = null;

/**
 * 封装为class，为了以后修改成'选择过滤器'做准备
 * @param options
 * @constructor
 */
var Transform = function(options){
  _options = _.clone(options||{});

  this.getLabelValue = function(key){
    return this.get(key, function(arr){
      return _(arr).map(function(item, i){
        var _result;
        if(typeof item === 'string'){
          _result = {label:item, value:i}
        }else{
          _result = _.defaults(item,{label:i,value:i});
        }
        return _result;
      })
    });
  };

  this.list = function (key) {
    return _options[key] || _options;
  }

  // 添加一项
  this.addKeys= function (key, val) {
    if(!(val instanceof Array)){
      throw new Error('val must be a array');
    }
    if(_options[key] && _options[key].length > 0){
      return console.info('key [%s] already initialize.', key);
    }
    return _options[key] = val;
  }

  _(_options).each(function(item, i){
    if(item instanceof Function){
      this[i] = item;
    }else{
      this[i] = parseOptionsToFn(item);
    }
  },this);

  this.get = function(key, callback){
    return (callback||noop)(_options[key]||[]);
  }
};

exports = module.exports = new Transform({
  // yes or no
  yesOrNo: ["是","否"],
  noOrYes: ["否","是"],

  // 男 / 女
  sex: ['男','女'],

  messageType:[
    '公区报修完成提醒',
    '家人租客申请认证提醒',
    '物业账单提醒',
    '取消活动提醒',
    '发布内容违规提醒',
    '内容举报违规提醒',
    '内容违规不违规提醒',
    '发布内容被举报违规提醒 '
  ],

  // 认证用户类型
  certificatedUserType:['业主','租客','家人'],

  // 账号是否禁止
  forbidden: ['-','已禁止'],

  // 删除状态
  isDelete:['正常','用户删除','管理员删除'],

  // 违规处理
  informStatus:['正常','处理违规','处理不违规'],

  // 账号注册来源
  registerFron: ['IOS','Andriod','微信','App'],

  // 启用或禁用
  useOrNot: ['已禁用','已启用'],

  // 启用
  inUse: ['未启用','已启用'],

  // 是否完成
  wasDone: ["待受理","处理中","已完成"],

  // 表情
  expression: ['[great]','[good]','[normal]','[bad]','[sad]'],

  // 处理状态
  processingState:['全部','已反馈','未反馈'],

  // 投诉类型
  complainType:['全部','求助','建议','吐槽'],

  // 广播类型
  broadcastType: ["全部","提示","活动","通知"],

  // 发布状态
  publishState: ["全部","已发布","待发布","已结束","已撤回"],

  // 报修状态
  reportState: ["全部","待受理","处理中","已完成"],

  // 维修类型
  repairType: ['有偿维修','维保修'],

  // 维修状态
  repairState: ['全部','待受理','已受理','维修中','待评价','已完成','已取消','待支付'],

  // 是否存在值
  has: ["--"],

  // 等级
  level: ['一级','二级'],

  // 满意度
  star: ["❤️","❤❤️","❤❤❤️","❤❤❤❤️","❤❤❤❤❤️"],

  labelType:['普通标签','话题标签','照片墙活动','投票活动'],

  // 话题标签
  labelOptions:[],  // 异步获取的
  labelName: [],

  num: [0],

  // 格式时间为 yyyy-mm-dd hh:mm:ss
  fmtTime: function(val){
    return timer.getDateTime(parseInt(val));
  },

  // 转头像
  avatar: function(val){
    return (
      <img width="80" src={val}/>
    )
  },

  photos: function(val){
    var photos = [].concat(val);
    return _(photos).map(function(item, i){
      return <img width="100" src={item} alt={item} key={"photo-"+i} />
    })
  },

  // 隐藏号码
  hidePhone: function(val){
    val = (''+val).trim();
    return val.slice(0,3)+"****"+val.slice(7,13);
  },

  get: function(key){
    //return this[key"],;
  },

  textDanger: function (val, danger) {
    return danger?<span className="text-danger">{val}</span>:val;
  },

  limitSize: function(val, size){
    var _str = "";
    var _size = size || 20;
    if(val.length > _size){
      _str = <span title={val}>{val.slice(0,20)}</span>;
    }else{
      _str = val;
    }
    return _str;
  },

  comma:function(val){
    if(val instanceof Array){
      return val.join(",");
    }else{
      return val||"";
    }
  }
});
