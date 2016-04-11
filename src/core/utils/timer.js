var timer = {
  getDateTime : function(str){
    str = str || new Date();
    return timer.getDate(str) + ' ' + timer.getTime(str);
  },
  getDate: function(str){
    var date = new Date(str||new Date());
    return date.getFullYear() + '-' +( date.getMonth()+1) + '-' + date.getDate();
  },
  getTime: function(str){
    var date = new Date(str||new Date());
    return date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
  }
};

exports = module.exports = timer;
