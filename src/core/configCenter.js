/**
 * Created by ppf on 1/6/16.
 * 配置中心，供内核获取
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
            throw new Error("the config of the " + type +" is not existed. please set the "+type+" conf");
        }
        return typeof key === "undefined" ? cache[type] : cache[type][key];
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


    }
}
