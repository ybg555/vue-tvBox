/**
 * Created by ppf on 1/6/16.
 * 常量中心，供内核获取
 *
 */


var cache = {};


module.exports = {
    /**
     * 获取配置值
     * @param type
     * @param key
     */
    get : function(type,key){
        if(!cache[type]){
            throw new Error("the constant of the " + type +" is not existed. please set the "+type+" constant");
        }

        if(!cache[type][key]){
          throw new Error("the value of the " + key +" is not existed. please set the "+type+" constant");
        }

        return cache[type][key];
    },
    /**
     * 设置conf对象
     * @param type
     * @param obj
     */
    set : function(type,obj){
        if(!type || typeof type !== "string"){
            throw new Error("please pass the type param and it must be string type.");
        }

        if(typeof obj !=="object" || obj === null){
            throw new Error("please pass the obj param and it must be object type.");
        }
        cache[type] = obj;
    },
  /**
   * 获取常量对象，不建议使用
   * @param type
   * @returns {*}
   */
    getConstantObj : function(type){
      if(!cache[type]){
        throw new Error("the constant of the " + type +" is not existed. please set the "+type+" constant");
      }
      return cache[type];
    }
}
