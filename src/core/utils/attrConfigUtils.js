/**
 * Created by ppf on 12/31/15.
 */


/**
 * 属性配置对象，将属性配置提供一个包裹
 *
 */
class AttrConfig{

  constructor(config){
    this.config = config;
  }


  /**
   * 获取某个table的columns
   * 具体结构如
   * [{
   *  field : xxx
   *  title
   * }]
   * @param arr
   * @returns {Array}
   */
  getColumns(arr){
    var res = [],config = this.config;
    for(var i=0,length = arr.length;i<length;i++){
      res.push({
        field : arr[i],
        title : config[arr[i]]['label']
      });
    }
    return res;
  }

  /**
   * 获取某个字段的options列表
   * @param key
   * @returns {*}
   */
  getOptions(key){
    var attrObj = this.config[key];
    if(!attrObj){
      throw new Error("the attr config of the "+key+" is not existed");
    }
    var options = attrObj['options'];
    if(!options){
      throw new Error("the options of the "+key+"  is not existed");
    }
    return options;
  }

  /**
   * 获取某个字段的options对应某个值的label
   * @param key
   * @returns {*}
   */
  getOptionsLabel(key,val){
    var options = this.getOptions(key);
    for(var i=0,length = options.length;i<length;i++){
      if(val === options[i]['value']){
        return options[i]["label"];
      }
    }
    return "";
  }


}


module.exports = {
  AttrConfig : AttrConfig
}
