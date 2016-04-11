/**
 * store的通用方法～～
 */


import {routeMap} from "../config";
import {validation,checkValidation,getValidationTip,isOption} from "../utils/validation";
import {actionTypes,eventTypes,pageName,inputStatus} from '../constants/appConstants';


const storeFunc = {
  /**
   * 路由改变后，更新页面解构
   * @param currentState 当前路由
   * @param pageName  store所在的页面
   * @param _obj     私有数据对象,status 默认是内页参数
   * @param store
   *
   * @deprecated
   */
  onRouteChange : (currentState,pageName,_obj,store)=>{
    if(currentState && currentState['pageName'] === pageName){
      let query = currentState.query ? currentState.query : {} ,status = "index";
      if(typeof query['status'] !== 'undefined' && query['status'] !=='index'){
        status = query['status'];
      }
      _obj['status'] = status;
      if(typeof store == 'undefined'){
        //console.dir(currentState,pageName,_obj,store);
        return;
      }
      store.emit(eventTypes.STATUS_CHANGE);
    }
  },


  /**
   * 内页是否改变
   * @param currentState
   * @param pageName
   * @param currentStatus 当前内页
   */
  onInnerPageChange : (currentState,pageName)=>{
    //console.log(routeMap);
    if(currentState && currentState['pageName'] === pageName){
      let query = currentState.query ? currentState.query : {} ,status = "index";
      if(typeof query['status'] !== 'undefined' && query['status'] !=='index'){
        status = query['status'];
      }
      return {
        valid : true,
        status : status
      }
      //_obj['status'] = status;
      //store.emit(eventTypes.STATUS_CHANGE);
    }else{
      return {
        valid : false
      }
    }
  },

  /**
   * 获取纯对象
   */
  getPureObj : function(obj){
    var res = {};
    for(var key in obj){
      res[key] = obj[key]['value']
    }
    return res;

  },

  /**
   * 创建一个Form对象,在obj的基础上进行一个model的创建
   *
   */
  createFormObj : function(obj,formKeyArr){
    var res = {};
    for(var key in obj){
      res[key] = {
        value : obj[key],
        status : inputStatus.NORMAL
      }
    }
    for(var i =0,length = formKeyArr.length;i<length;i++){
      if(!res[formKeyArr[i]]){
        res[formKeyArr[i]] = {
          value : "",
          status : inputStatus.NORMAL
        }
      }
    }
    return res;
  },

  /**
   * 创建一个Form对象,在obj的基础上进行一个model的创建
   *
   */
  createDetailObj : function(obj,formKeyArr){
    var res = {};
    for(var key in obj){
      res[key] = {
        value : obj[key],
        status : inputStatus.NORMAL
      }
    }
    for(var i =0,length = formKeyArr.length;i<length;i++){
      if(!res[formKeyArr[i]]){
        res[formKeyArr[i]] = {
          value : "",
          status : inputStatus.NORMAL
        }
      }
    }
    return res;
  },
  /**
   * 创建一个新的model对象
   * @param formKeyArr
   * @param modelConfig
   *
   */
  createNewFormObj : function(formKeyArr,modelConfig,keyName){
    if(!keyName){
      keyName = 'form';
    }
    var res = {};
    for(var i = 0 ,length = formKeyArr.length;i<length;i++){
      var key = formKeyArr[i];
      if(modelConfig[key] && modelConfig[key][keyName] && modelConfig[key][keyName]['defaultValue'] ){
        res[key] = {
          status : inputStatus.NORMAL,
          value : modelConfig[key][keyName]['defaultValue']
        }

      }else{
        res[key] = {
          status : inputStatus.NORMAL,
          value : ""
        }
      }
    }
    return res;
  },


  /**
   * input 数值修改函数
   * @param key
   * @param value
   * @param modelConfig
   * @param form form对象 {[key] : {value,status}}
   */
  onInputChange : (key,value,modelConfig,form,moduleName)=>{
    let res = storeFunc.checkInput(key,value,modelConfig,moduleName),
      valObj = form[key];
    if(!( res['value'] === valObj['value'] && res['status'] === valObj['status'] )){
      valObj['value'] = res['value'];
      valObj['status'] = res['status'];
    }

    //Store.emit(eventTypes.CHANGE);
  },


  /**
   * 验证input
   * 返回验证结果 ｛value,status｝
   * @param key
   * @param val
   * @param modelConfig
   */
  checkInput : (key,val,modelConfig,moduleName)=>{
    if(!moduleName){
      moduleName = "form";
    }
    let attrConfig = modelConfig[key];

    if(!attrConfig || !attrConfig[moduleName]){
      //do some stuff
      //throw error ?
      console.log(modelConfig,moduleName)
      throw new Error('checkInput : the config obj or form config of the key '+key+' is not existed');
      // return {
      //   value : val,
      //   status : inputStatus.NORMAL
      // }
    }
    let validation = attrConfig[moduleName]['validation'],_inputStatus = inputStatus.ERROR;
    //验证  xxx
    /*
     * 如果验证项为可选项
     *   当value为空时（空字符串，undefined,空对象，空数组），status设置为正常状态
     *   当value不为空时，执行验证
     **
     * 如果为必选项
     *   执行验证
     *
     *
     * 设置值
     *
     *
     * */

    if(isOption(validation)){
      //可选
      if(val === "" ||
        val === null ||
        typeof val === "undefined" ||
        (typeof val === 'object' && Object.keys(val).length === 0) ||
        (val instanceof Array && val.length === 0) ||
        typeof validation === "undefined" || (validation instanceof Array && validation.length === 0)
      ){
        _inputStatus = inputStatus.NORMAL;
      }else{
        let validRes = checkValidation(val, validation);
        if(validRes){
          _inputStatus = inputStatus.SUCCESS;
        }else{
          _inputStatus = inputStatus.ERROR;
        }
      }
    }else{
      //必填
      let validRes = checkValidation(val, validation);
      _inputStatus = validRes ? inputStatus.SUCCESS : inputStatus.ERROR;
    }

    return {
      value : val,
      status : _inputStatus
    }
  },

  /**
   * 获取form对应的配置对象数组 ，用于Form component的渲染
   *
   * 配置对象包括 label，type，value，tip，name，status
   * @param formKeyArr form表单对应的字段顺序
   * @param modelConfig  model配置对象
   * @param form form对象 {[key] : {value,status}}
   *
   */
  getFormConfigArr : function(formKeyArr,modelConfig,form){
    let array = [];
    for(let i=0,length = formKeyArr.length;i<length;i++) {
      let configObj = modelConfig[formKeyArr[i]];
      if(!configObj || !configObj['form']){
        console.log(modelConfig,configObj)
        throw new Error('getFormConfigArr : the configObj '+formKeyArr[i]+' is not existed');
      }
      let formObj = configObj['form'];
      let valObj = form[formKeyArr[i]],
        tip = getValidationTip(formObj['validation']);
      tip = tip ? tip : "";
      tip = formObj['tip'] ? formObj['tip'] + tip : tip;
      if(typeof valObj=='undefined'){
        //console.log('undefined:',formKeyArr[i]);
        continue;
      }
      array.push({
        label : configObj['label'],
        name : formKeyArr[i],
        value : valObj['value'],
        status : valObj['status'],
        type : formObj['type'],
        tip : tip,
        extra : formObj['extra'] ? formObj['extra'] : {}
      })
    }

    return array;
  },
  /**
   * 获取model对应的search配置对象数组 ，用于Search component的渲染
   * 如果不存在search配置，直接获取form配置
   *
   * 配置对象包括 label，type，value，name
   * @param searchKeyArr form表单对应的字段顺序
   * @param modelConfig  model配置对象
   * @param searchObj model对象 {[key] : value}
   *
   */
  getSearchConfigArr : function(searchKeyArr,modelConfig,searchObj){

    let array = [];

    for(let i=0,length = searchKeyArr.length;i<length;i++) {
      let configObj = modelConfig[searchKeyArr[i]];
      if(!configObj){
        throw new Error('getSearchConfigArr : the configObj '+ searchKeyArr[i]+' is not existed');
      }
      let searchConfig = configObj['search'];
      if(!searchConfig){
        searchConfig = configObj['form']
      }

      if(!searchConfig){
        throw new Error('getSearchConfigArr : the searchConfig '+searchKeyArr[i]+' is not existed');
      }

      array.push({
        label : configObj['label'],
        name : searchKeyArr[i],
        value : searchObj[searchKeyArr[i]],
        type : searchConfig['type'],
        extra : searchConfig['extra'] ? searchConfig['extra'] : {}
      })
    }
    return array;
  },

  /**
   * 获取列表数据数组
   * @param listData
   * @param listKeyArr
   * @param modelConfig
   * @returns {Array}
   */
  getListDataArr : function(listData,listKeyArr,modelConfig){
    var res = [];
    for(let i=0,list = listData,length = list.length;i<length;i++){
      let row = [];
      for(let j=0,jLength = listKeyArr.length;j<jLength;j++){

        if(!modelConfig[listKeyArr[j]]){
          throw new Error('getListDataArr : the configItem of the key is not existed.');
        }

        let configItem = modelConfig[listKeyArr[j]];
        //获取数据
        let value = list[i][listKeyArr[j]];

        //转换数据
        value = configItem.list && configItem.list.transform ? configItem.list.transform.call(this,value,list[i]) :
          configItem.transform ? configItem.transform.call(this,value,list[i]) :
            value;

        //预留可拓展性，因为数据不能不为单纯字符类型
        row.push({
          val : value
        });
      }
      res.push(row);
    }

    return res;
  },
  /**
   * 获取列表头部
   * @param listKeyArr
   * @param modelConfig
   * @returns {Array}
   */
  getListHeadArr : function(listKeyArr,modelConfig){
    var res = [];
    for(let i=0,length = listKeyArr.length;i<length;i++){
      let key = listKeyArr[i];
      if(!modelConfig[key] || !modelConfig[key]['label']){
        throw new Error('getListHeadArr : the label of the key '+key+' is not existed.');
      }
      res.push(modelConfig[key]['label']);
    }
    return res;
  }


}

export default storeFunc;
