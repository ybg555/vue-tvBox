

const validationTip = {
  REQUIRE: "必填",
  MINLENGTH: "%LENGTH%个字以上",
  MAXLENGTH: "%LENGTH%个字以内",
  INTEGER : '整数',
  EMAIL: "输入email",
  PASSWORD : "输入不少于6位的密码，且密码必须包含A-Z或a-z和0-1.",
  CIRFIRPASSWORD : "密码必须一致",
  POSITIVENUMBER : '请输入大于等于0的数字',
  POSITIVENUMBERINTEGERANDZERO : '请输入大于等于0的整数',
  POSITIVENUMBERINTEGER : '请输入大于等于1的整数',
  TIME : '请输入XX:XX的时间格式，如12:00',
  DATE : '请输入正确日期格式，如2015-12-3',
  PHONE : '请输入正确的手机号码',
  MONEY : "请输入正确的金钱格式",
  URL : "请输入正确的地址格式,如http://xxx.xxx.xxx"
};


const validation = {
  //必存在
  "require": function () {
    return {
      priority : 99,
      isRequired : true,
      tip: validationTip.REQUIRE,
      validate: function (val) {
        function validateObj(obj){
          if(obj instanceof Array && obj.length > 0){
            return true;
          }
          var i = 0;
          for(var key in obj){
            if(i > 0){
              return true;
            }
            i++;
          }
          if(i > 0){
            return true;
          }
        }

        if (typeof val !== 'undefined' ) {
          if(typeof val == 'object' && validateObj(val)){
            return true;
          }else if(!/^\s*$/.test(val) ){
            return true;
          }
        }
      }
    }
  },
  'integer' : function(){
    return {
      tip: validationTip.INTEGER,
      validate: function (val) {
        if(parseInt(val) + '' === val ){
          return true;
        }else{
          return false;
        }
      }
    }
  },

  "positiveNumber" : function(){
    return {
      tip: validationTip.POSITIVENUMBER,
      validate: function (val) {
        if (typeof val === 'number' ||( typeof val === 'string' && /(^0$)|(^[1-9]\d*$)/.test(val) )) {
          return true;
        }
      }
    }
  },
  "url" : function(){
    return {
      tip : validationTip.URL,
      validate : function(val){
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(val)
      }
    }

  },

  "positiveIntegerWithZero" : function(){
    return {
      tip: validationTip.POSITIVENUMBERINTEGERANDZERO,
      validate: function (val) {
        val  = val + '';
        if ( /^[1-9]\d*$/.test(val) || val === "0" ) {
          return true;
        }
      }
    }
  },

  "positiveInteger" : function(){
    return {
      tip: validationTip.POSITIVENUMBERINTEGER,
      validate: function (val) {
        val  = val + '';
        if ( /^[1-9]\d*$/.test(val) ) {
          return true;
        }
      }
    }
  },

  "minLength": function (length) {
    return {
      tip: validationTip.MINLENGTH.replace('%LENGTH%', length),
      validate: function (val) {
        if ((val+"").length >= length) {
          return true;
        }
      }
    }
  },
  "maxLength" : function(length){
    return {
      tip: validationTip.MAXLENGTH.replace('%LENGTH%', length),
      validate: function (val) {
        if (!val || (val+"").length <= length) {
          return true;
        }
      }
    }
  },
  "email": function () {
    return {
      tip: validationTip.EMAIL,
      validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },
  "password" : function(){
    return {
      tip : validationTip.PASSWORD,
      //validate : /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/
      validate : /^(?=.*[a-zA-Z\d])[A-Za-z\d]{6,}$/

    }
  },

  "phone" : function(){
    return {
      tip : validationTip.PHONE,
      //validate : /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/
      validate : /^1\d{10}$/

    }
  },

  "time" : function(){
    return {
      tip : validationTip.TIME,
      validate : function(val){
        var res;
        if(res = /^(\d{2}):(\d{2})$/.exec(val)){
          if( parseInt(res[1])>=24 || parseInt(res[2]>= 60)){
            return false;
          }
          return true;

        }
        return false;

      }
    }
  },
  "money" : function(){
    return {
      tip : validationTip.MONEY,
      validate : function(val){

        if(/^\d{1,12}(?:\.\d{1,2})?$/.exec(val)){
          return true;
        }
        return false;

      }
    }
  },

  // TODO ,需要实现格式验证，如 yyyy-MM-dd
  "date": function(){
    return {
      tip : validationTip.DATE,
      validate : function(val){
        ////
        if(/\d/g.test(new Date(val))){
          return true;
        }
        return false;
      }
    }
  },

  "dateRange" : function(){
    return {
      tip : "",
      validate : function(val){

        return !!(val && val.startDate && val.endDate && parseInt(val.startDate/1000)
        < parseInt(val.endDate/1000));
      }
    }
  }

};
/**
 * 验证函数
 * require的优先级为最高
 * 如果为异步验证，返回一个promise
 *
 * @param val
 * @param validation validation可以为数组或对象
 * @param selfObj 就是当validation为函数时，指向this
 * @returns {*}
 */

const checkValidation = function (val, validation,selfObj) {

  if(isOption(validation) && (val === "" || typeof val === "undefined" || val === null) ){
    return true;
  }else {
    return checkAll.apply(null,arguments)
  }

}

const checkAll = function(val, validation,selfObj){
  if(validation instanceof Array){
    //按优先级排序
    validation.sort(function(v1,v2){
      v1.priority = v1.priority ? v1.priority : 0;
      v2.priority = v2.priority ? v2.priority : 0;
      return v2.priority - v1.priority;
    });

    //return promise
    //遍历每个函数，如果返回一个promise，那么中断，返回一个新的promise
    //当前面那个promise返回一个值的时候，如果为false，name返回在先前那个promise里面返回false
    //如果返回true，继续下个validation
    //// ;

    var res = (function(){

      for(var i= 0,length = validation.length;i<length;i++){
        var validationRes = checkAll(val,validation[i],selfObj);
        if(!validationRes){
          return false;
        }else if(typeof validationRes === "object" && validationRes.then){
          return new Promise(function(resolve,reject){

            validationRes.then(function(valid){

              //验证成功
              if(valid){
                //剩余的也验证了
                if(i >= length -1){
                  return resolve(valid);
                }
                var residualValidates = checkAll(val,validation.slice(i+1),selfObj);
                if(typeof residualValidates === "object" && residualValidates.then){
                  return residualValidates.then(resolve,reject);
                }else{
                  return resolve(residualValidates);
                }
              }
              //false情形
              return resolve(valid);
            },reject);

          });

        }
      }
      return true;
    })();


    return res;



  }else if(typeof validation == "object"){

    if (typeof validation['validate'] === "function") {
      return validation['validate'].call(selfObj,val);
    }else if(validation['validate'] instanceof RegExp){
      return validation['validate'].test(val);
    }

  }else{
    throw new Error("checkAll : validation must be an array")
  }

}




/**
 * 获取验证的提示
 * @param validation
 * @param customizeTip 定制的tip 可通过$1定制位置
 * @returns {*}
 */
const getValidationTip = function (validation,customizeTip) {
  var tip;
  if(validation instanceof Array){
    //按优先级排序
    validation.sort(function(v1,v2){
      v1.priority = v1.priority ? v1.priority : 0;
      v2.priority = v2.priority ? v2.priority : 0;
      return v2.priority - v1.priority;
    });
    var res = [];
    for(var i=0,length = validation.length;i<length;i++){
      if(validation[i].tip){
        res.push(validation[i].tip);
      }
    }
    tip = res.join(',');
  }else if(typeof validation == "object"){
    tip = validation.tip ? validation.tip : '';
  }else{
    tip = ""
    //throw new Error("checkValidation : validation must be an array")
  }
  if(customizeTip){
    if(customizeTip.indexOf('$1') >=0 ){
      tip = customizeTip.replace('$1',tip);
    }else{
      tip = customizeTip; /*+ tip*/
    }

  }
  return tip;
}


/**
 * 是否可选项
 * @param validation
 * @returns {boolean}
 */
const isOption = function(validation){
  let res = true;
  if(validation instanceof Array){
    for(let i=0,length = validation.length;i<length;i++){
      if(validation[i]['isRequired']){
        res = false;
        break;
      }
    }
  }else if(typeof validation === "object"){
    if(validation['isRequired']){
      res = false;
    }
  }
  return res;

};


export default {
  validationTip : validationTip,
  //这个命名。。。
  validation : validation,
  checkValidation : checkValidation,
  getValidationTip : getValidationTip,
  isOption : isOption
}
