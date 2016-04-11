/**
 * Created by ppf on 4/8/16.
 */




/*
 * 1.遍历所有目录，
 *   逐个读取src/main/js
 * 2.读取某个目录的文件
 *   2.1遍历每个文件，生成每个文件的输出类，以及依赖类
 *   2.2生成import 和outport
 *
 * 3.通过httpList过滤掉没有的文件
 *   3.1输出所有 _types 文件
 *
 * 4.参数处理  好复杂的样子
 *    4.结构  2层结构
 *    {
 *       name 字段名
 *       type list,i32,i64,string,结构体等
 *       structure {
 *         params : [{name,type,isStructural,params}]
 *         jsPath
 *         className*
 *       }
 *
 *       listType 如果为list或map的时候就会存在
 *            {
 *              type list,i32,i64,string等
 *              listType 如果为list的时候就会存在
 *              structure
 *           }
 *
 *    }
 *
 *
 *
 * */



var path = require('path'),  clc = require('cli-color'),
  configFileName = "thriftConfig.js",
  configFileDir = "src",
  srcDir = path.resolve(__dirname ,"hd-thrift-idl"),
  outputDirName = "thriftClientClass",
  outputDir = path.resolve(__dirname ,'src','core','http','thrift',outputDirName ),
  fs = require('fs'),
  async = require('async'),
  mkdirp = require("mkdirp"),
  httpList = require('./thriftList.js'),
  rimraf = require('rimraf'),
  urlRoot = "api/",
  errorSubModuleName = "errorSubModule",
  testMode = false;



rimraf(outputDir, function(){

  fs.readdir(srcDir, function(err,files){
    if(err){
      throw err;
    }
    var moduleDirs = [];

    for(var i=0,length = files.length;i<length;i++){
      if(files[i].indexOf('.') === -1 && files[i].indexOf('-') >= 0){
        moduleDirs.push({
          abs : path.resolve(srcDir, files[i]),
          name : files[i]
        });
      }
    }
    readJsFiles(moduleDirs,function(e){
      if(e)
        throw e;

      createMethodParams(function(e){
        if(e)
          throw e;

        exportConfigFile();
        exportJsFile();
      });

    });
  })
})





function createMethodParams(cb){
  //1.遍历config列表

  //2.对于满足列表条件的config进行识别

  //3.读取该url对应的config文件进行识别，获取改config对应的thrift

  //4.遍历thrift，找到对应的method，获取方法对应的参数类型

  //5.如果为xxx.xxx类型，也就是结构体类型，获取该文件对应的结构体jsPath,className(输出),以及params

  //6.如果为list类型,如list<>, 生成listType对象，包括type ， structure 。。。一样的

  //test
  if(testMode){
    var testList = [];
    for(var key in configObj){
      testList.push(key);
    }
  }



  async.each(testMode ? testList : httpList,function(httpUrl,innerCb){

    var configItem = configObj[httpUrl];

    if(!configItem){
      console.log(configObj,httpUrl)
      return cb("can't find the config of the " + httpUrl);
    }

    getThriftFiles(configItem['moduleDirName'],function(err,thriftFilesArr){
      if(err){
        return innerCb(err);
      }

      //遍历thrift，找到对应的method，获取方法对应的参数类型
      //文件名就是方法名
      var serviceReg = new RegExp(configItem['fileName']+"\\s*\\{([^\\}]+)\\}");
      //console.log(thriftFilesArr.length);

      for(var i=0,length = thriftFilesArr.length;i<length;i++){
        var data = thriftFilesArr[i]['data'];
        //console.log(data)
        //去掉所有注释
        //console.log(thriftFilesArr[i]);
        if(!data){
          console.log(thriftFilesArr[i]);
        }

        //console.log(configItem['fileName']);
        data = data.replace(/(\/\*([^*]|[\r\n]|(\*+([^\*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g,'');
        var serviceBlock = serviceReg.exec(data);
        //console.log(serviceBlock)
        if(serviceBlock){
          //找到某个服务的块
          var paramsBlockReg = new RegExp(configItem['methodName'] + "\\(([^\\)]*)\\)");
          var paramsBlock = paramsBlockReg.exec(serviceBlock[1]);
          //console.log(paramsBlock);

          //找到参数块
          if(!paramsBlock){
            console.log(clc.red("can't find the "+configItem['methodName'] + " in the "+
            configItem["fileName"]+" block"));
            innerCb("can't find the "+configItem['methodName'] + " in the "+
            configItem["fileName"]+" block");
            return;
          }

          var paramsStr = paramsBlock[1];
          paramsStr = paramsStr.replace(/\s+/," ");


          //console.log(paramsStr);
          //1:string typeCodes, 2:i32 currentPage, 3:i32 pageSize
          var paramReg = /(\d+):\s*?(\w+?|\w+<[^>]+>|\w+\.\w+)\s+(\w+)(?:[,\s]*|$)/g,
            paramRes,
            paramsArr = configItem['params'] = [];

          while(paramRes = paramReg.exec(paramsStr)){
            try{
              paramsArr.push(createParam(paramRes[2].replace(/\s+/g,""),paramRes[3].replace(/\s+/g,""),configItem['moduleName'].replace(/\s+/g,""),thriftFilesArr));
            }catch(e){
              return innerCb(e);
            }
          }

        }
      }

      innerCb();
    });

  },cb);

}

function createParam(paramType,paramName,moduleName,thriftFilesArr){
  paramType = paramType.replace(/^\s+|\s+$/g,"");
  var paramObj = {
    name : paramName,
    type : paramType
  }
  //如果为xxx.xxx类型，也就是结构体类型，获取该文件对应的结构体jsPath,className(输出),以及params
  var structureType;
  if(structureType = /^(\w+)\.(\w+)$/.exec(paramType)){
    paramObj['structure'] = createStructure(structureType[1],structureType[2],moduleName,thriftFilesArr);
    paramObj['type'] = "structure";
  }else if(structureType = /^list<(.+)>$/.exec(paramType)){
    paramObj['listType'] = createParam(structureType[1],"",moduleName,thriftFilesArr);
    paramObj['type'] = "list";
  }
  return paramObj;
}


/**
 * 获取结构体对象
 * @param structureType
 * @param configItem
 * @param thriftFilesArr
 * @returns {{params: Array, jsPath: *, className: *}}
 */
function createStructure(thriftFileName,structureType,moduleName,thriftFilesArr){
  var jsPath,params=[],className;
  //获取结构体的type 和 路径
  var fileDataObj;
  for(var j = 0,jLength = dataObjArr.length;j<jLength;j++){
    if(dataObjArr[j]['moduleName'] == moduleName){
      var exportsArr = dataObjArr[j]['exportsArr'];
      for(var k=0,kLength = exportsArr.length;k<kLength;k++){
        if(exportsArr[k] === structureType){
          fileDataObj = dataObjArr[j];
          break;
        }
      }
    }
    if(fileDataObj){
      break;
    }
  }
  //找到 文件对象
  if(fileDataObj){
    jsPath = fileDataObj['jsPath']
    className = structureType;
  }else{
    throw "can't find the "+structureType + ' in the '+moduleName+' module';
  }

  //params 从当前thrift目录里面的文件获取
  for(var i=0,length = thriftFilesArr.length;i<length;i++){

    if(thriftFilesArr[i]['fileName'] === thriftFileName+".thrift"){

      //找到那个文件
      var structReg = new RegExp("struct\\s+"+structureType+"\\s*\\{([^\\}]+?)\\}");
      var structBlock = structReg.exec(thriftFilesArr[i]['data']);
      if(!structBlock){
        throw("can' t find the structBlock of " + structureType + " in the "+thriftFileName+".thrift"+" file" )
      }
      structBlock = structBlock[1].replace(/(\/\*([^*]|[\r\n]|(\*+([^\*\/]|[\r\n])))*\*+\/)|(\/\/.*)/g,'');
      var paramReg = /(\d+):\s*(.+?)\s+(\w+)(?:;|[,\s]+|$)/g,
        paramRes;

      while(paramRes = paramReg.exec(structBlock)){
        params.push(createParam(paramRes[2],paramRes[3],moduleName,thriftFilesArr));
      }
      break;
    }
  }

  return {
    params : params,
    jsPath : jsPath,
    className : className
  }
}



/**
 * key 为moduleDirName
 * value 为[]数组 object {fileName,data}
 * @type {{}}
 */
var thriftMap = {};
function getThriftFiles(moduleDirName,cb){
  if(thriftMap[moduleDirName] instanceof Array){
    cb(thriftMap[moduleDirName]);
  }else if(typeof thriftMap[moduleDirName] === "function"){
    thriftMap[moduleDirName](cb);
  }else if(typeof thriftMap[moduleDirName] === "object"){
    cb(thriftMap[moduleDirName]);
  }else{

    var cbArr = [cb];
    thriftMap[moduleDirName] = function(innerCb){
      cbArr.push(innerCb);
    }

    var absThriftDirPath = path.resolve(srcDir,moduleDirName,'src','main','thrift');

    readAllThriftFiles(absThriftDirPath,function(err,arr){
      //console.log(arr.length);
      if(err){
        thriftMap[moduleDirName] = err;
        for(var i=0,length = cbArr.length;i<length;i++){
          cbArr[i](err);
        }
        cbArr.splice(0);
        return;
      }

      thriftMap[moduleDirName] = arr;
      for(var i=0,length = cbArr.length;i<length;i++){
        cbArr[i](null,arr);
      }
      cbArr.splice(0);
    });

  }
}


/**
 * 递归加载
 * @param absThriftDirPath
 */
function readAllThriftFiles(absThriftDirPath,cb){

  //console.log(absThriftDirPath);
  fs.readdir(absThriftDirPath, function(err,files){
    if(err){
      return cb(err);
    }

    var filePaths = [],dirArr = [];
    for(var i=0,length = files.length;i<length;i++){
      if(files[i] !== "." || files[i] !== ".."){
        if(files[i].indexOf('.thrift') >= 0){
          filePaths.push(files[i]);
        }else{
          dirArr.push(files[i]);
        }
      }
    }
    //console.log(filePaths);
    //console.log(dirArr);



    async.waterfall([function(innerCb){
      if(dirArr.length > 0){
        async.map(dirArr,function(dirPath,innerCb1){
          readAllThriftFiles(path.resolve(absThriftDirPath,dirPath),innerCb1);
        },innerCb)
      }else{
        innerCb(null,[])
      }
    },function(arr,innerCb2){
      var preLoadArr = [];
      for(var i=0,length = arr.length;i<length;i++){
        preLoadArr = preLoadArr.concat(arr[i]);
      }


      if(filePaths.length > 0){

        async.map(filePaths,function(filePath,innerCb21){
          fs.readFile(path.resolve(absThriftDirPath,filePath),innerCb21);
        },function(err,res){
          if(err){
            innerCb2(err);
            return;
          }

          var arr = [];
          for(var i=0,length = res.length;i<length;i++){
            arr.push({
              fileName : filePaths[i],
              data : res[i] + ""
            });
          }

          var resArr = preLoadArr.concat(arr);
          //console.log(1);
          //console.log(resArr);

          innerCb2(null,resArr);
        });
      }else{
        //console.log(dirArr);

        //console.log(preLoadArr);
        innerCb2(null,preLoadArr.concat([]));
      }
    }],function(err,res){
        if(err){
          return cb(err);
        }
        //console.log(2);
        cb(err,res);
    })

  })


}





/**
 * 输出config文件，并且美化
 */
function exportConfigFile(){

  var configMap = {};

  if(testMode){
    configMap = configObj;
  }else{
    //生成一个file依赖文件
    for(var i=0,length = httpList.length;i<length;i++){
      configMap[httpList[i]] = configObj[httpList[i]];
    }
  }


  mkdirp(path.resolve(__dirname,configFileDir),function(){
    var configStr = "module.exports = " + JSON.stringify(configMap);
    var beautify = require('js-beautify').js_beautify;
    configStr = beautify(configStr, { indent_size: 2 });

    fs.writeFile(path.resolve(path.resolve(__dirname,configFileDir,configFileName))
      ,configStr,function(e){
        if(e)
          throw e;
        console.log("thriftClassCreator : export thrift config file.");
      });

  });
}


function findDataObj(obj){
  for(var i=0,length = dataObjArr.length;i<length;i++){
    var valid = true;
    for(var key in obj){
      if(dataObjArr[i][key] !== obj[key]){
        valid = false;
        break;
      }
    }
    if(valid){
      return dataObjArr[i];
    }
  }
  return null;
}


/**
 * 输出js列表的文件
 * 并且输出所有type文件
 *
 */
function exportJsFile(){

  var fileMap = {};

  /**
   * 输出所有type文件
   */
  for(var i=0,length = dataObjArr.length;i<length;i++){
    var dataObj = dataObjArr[i];
    if(/_types$/.test(dataObj.fileName)){
      fileMap[dataObj["moduleName"] + '_' + dataObj["fileName"]] = dataObj;
    }
  }



  //生成一个file依赖文件 httpList里面对应的是 接口名 也就是url
  for(var i=0,length = httpList.length;i<length;i++){

    var dataObj = findDataObj({
      'url' : httpList[i]
    });
    console.log(httpList[i]);

    fileMap[dataObj["moduleName"] + '_' + dataObj["fileName"]] = dataObj;
    var dependency = dataObj['dependency'];

    for(var j=0,jLength = dependency.length;j<jLength;j++){
      //找出所有依赖
      var dObj = findDataObj({
        fileName : dependency[j]['fileName'],
        moduleName : dependency[j]['moduleName']
      });
      fileMap[dObj["moduleName"] + '_' + dObj["fileName"]] = dObj;
    }



  }


  var fileList =[];
  for(var key in fileMap){
    fileList.push(key);
  }

  async.each(fileList,function(key,innerCb){
    var moduleName = fileMap[key]['moduleName'];
    var fileName = fileMap[key]['fileName'];

    mkdirp(path.resolve(outputDir,moduleName),function(err){
      if(err){
        return innerCb(err);
      }
      fs.writeFile(path.resolve(outputDir,moduleName,fileName + ".js"),fileMap[key]['data'],innerCb);
    });
  },function(err){
    if(err){
      throw err;
    }
  });
}


//获取所有js文件的路径
function readJsFiles(dirs,cb){
  if(dirs.length === 0){
    console.log('thriftClassCreator : no files!~~');
    return;
  }

  async.each(dirs, function(dirObj,innerCallback){
    var dir = dirObj['abs'];
    var jsDir = path.resolve(dir,'src','main','js');
    //console.log(jsDir);
    fs.readdir(jsDir, function(err,files){
      if(err){
        return innerCallback(err);
      }

      var filePaths = [];
      for(var i=0,length = files.length;i<length;i++){
        if(files[i] !== "." || files[i] !== ".."){
          filePaths.push( path.resolve(jsDir,files[i]));
        }
      }

      handleJsFiles(dirObj.name,filePaths,innerCallback);
    })
  }, function(err){
    if(err){
      return cb(err);
    }
    cb();
    // if any of the saves produced an error, err would equal that error
  });

}


var configObj = {};
var dataObjArr = [];


/**
 * 开始处理 某个模块目录所有js文件
 * @param dirName 目录名，如community
 * @param 文件路径数组 ，当前目录下的文件路径素组
 *
 */
function handleJsFiles(dirName,filePaths,cb){
  //console.log('filesPath : ' + JSON.stringify(filePaths));

  var moduleName = (/hd-thrift-idl-(.+)$/.exec(dirName))[1];
  //转换驼峰
  var moduleNameArr = moduleName.split('-');
  if(moduleNameArr.length > 1){
    for(var i=1,length = moduleNameArr.length;i<length;i++){
      moduleNameArr[i] = moduleNameArr[i][0].toUpperCase() + moduleNameArr[i].slice(1);
    }
    moduleName = moduleNameArr.join("");
  }

  //模块下的文件列表的依赖
  var moduleFilesDep = {};

  async.each(filePaths, function(filePath,innerCallback){
    console.log(filePath);
    var fileName = /(\w+)\.js$/.exec(filePath);
    if(!fileName){
      return;
    }

    fileName = fileName[1];

    fs.readFile(filePath, 'utf8', function(err,data){
      if (err) return innerCallback(err);
      /**
       *
       * 生成每个文件的依赖表
       * imports 是依赖于哪些对象
       * exports 是输出哪些对象
       * data是文件内容
       * {fileName : {import : [] ,export : [] , data  }
       *
       */
      var depObj = moduleFilesDep[fileName] = {
        "imports" : [],
        "exports" : [],
        "data" : data
      }

      //1.获取当前文件import
      var imports = depObj['imports'];
      var importReg = /new\s([a-zA-Z]+)\(\)/g,
        importRes;
      while(importRes = importReg.exec(data)){
        imports.push(importRes[1]);
      }

      //2.获取当前文件的export
      var exports = depObj['exports'];
      var exportsReg = /\n([^\s\.]+)\s+=\s+function\(/g,
        exportsRes;
      while(exportsRes = exportsReg.exec(data)){
        exports.push(exportsRes[1]);
      }


      innerCallback();

    });

  }, function(err,str){
    if(err){
      return cb(err);
    }


    //依赖关系处理完，开始对该目录下的文件进行config文件生成和 commonJs的引入
    var filesArr = [];
    for(var fileName in moduleFilesDep){
      filesArr.push(fileName);
    }


    async.each(filesArr,function(fileName,innerCallback){
      //console.log(moduleFilesDep);
      var data =  moduleFilesDep[fileName]['data'],
        header = "",
        footer = "";

      //处理依赖管理
      //1.Thirf依赖
      header += "var Thrift = require('../../Thrift.js');";

      //2.处理import依赖
      var reg = /new\s([a-zA-Z\d]+)\(\)/g,
        keyMap = {},
        regRes;
      while(regRes = reg.exec(data)){
        keyMap[regRes[1]] = 1;
      }
      //2.1 遍历依赖，并且找出所有的文件名
      var importsFiles = [];

      for(var importClass in keyMap){
        var importClassFound = false;
        for(var f in moduleFilesDep){
          var exports = moduleFilesDep[f]['exports'];
          for(var j=0,jLength = exports.length;j<jLength;j++){
            if(exports[j] === importClass){
              importsFiles.push({
                moduleName : moduleName,
                fileName : f,
                exportClassName : importClass
              });
              importClassFound = true;
              break;
            }
          }
          if(importClassFound){
            break;
          }
        }
      }
      //2.2在依赖文件夹去掉当前的文件名
      for(var i=0,length = importsFiles.length;i<length;i++){
        if(importsFiles[i]['fileName'] === fileName){
          importsFiles.splice(i,1);
          break;
        }
      }

      //2.3插入import
      for(var i=0,length = importsFiles.length;i<length;i++){
        header += "var "+importsFiles[i]['exportClassName']+" = require('./"+importsFiles[i]['fileName']+".js')['"+
        importsFiles[i]['exportClassName']+"'];"
      }



      //3.输出 export 类名
      var exportsArr = moduleFilesDep[fileName]['exports'],
        exportStrArr = [],defineStrs = "";
      for(var i=0,length = exportsArr.length;i<length;i++){
        exportStrArr.push( "'" + exportsArr[i] + "' : " + exportsArr[i])
        defineStrs += "var "+exportsArr[i] + " ;";
      }
      header += defineStrs;

      footer += ";module.exports = { " + exportStrArr.join(',') + " }";


      //4.生成config文件，形如
      /**
       * sso_login : {
          "moduleName": "sso",
          "methodName": "login",
          "params":["username","password"],
          "clientClass" : "ISystemSsoServiceLogin",
          "jsPath" : "../../xxxx.js"
        }
       *
       */
      var jsPath = outputDirName + "/" + moduleName + "/" + fileName + ".js";
      //4.1如果文件名是非types类型
      if(!/(.+)_types/.test(fileName)){

        var methodName;
        var url,
          params = [],
          clientClassName = "";

        //从文本内容 读取参数
        //形如prototype.send_getCommunityBuildings = function(communityId, pageSize, currentPage, callback)
        var paramsRegExp = new RegExp("([^\\s\\.]+)\\.prototype\\.send_(\\w+)\\s*=\\s*function\\s*\\((.+?)\\)"),
          paramsStrRes = paramsRegExp.exec(data);

        if(paramsStrRes){
          //console.log(paramsStrRes[1]);
          clientClassName = paramsStrRes[1];
          methodName = paramsStrRes[2];
          var paramsArr = paramsStrRes[3].split(',');
          for(var i=0,length = paramsArr.length -1 ;i<length;i++){
            params.push(paramsArr[i].replace(/\s+/g,""));
          }
        }else{
          return innerCallback('can not find the method in the '+jsPath);
        }

        //suModuleName 就是在一个模块目录里面可能存在着一个以上的子目录
        //子模块名取决于文件名 和 方法名替换掉那块  如IBillServiceGetMyMonthBillDetails ，^(\w+?)GetMyMonthBillDetails $1就是子目名
        //由于有些方法名和文件名对不上，所以这里只能提供一个强制修正体制～～

        var subModuleRes = (new RegExp("^(\\w+?)" + methodName[0].toUpperCase() + methodName.slice(1)))
          .exec(fileName);
        var subModuleError = false;

        var subModuleName;
        if(!subModuleRes){
          subModuleName = errorSubModuleName;
          subModuleError = true;
          console.log(clc.red('can not find the subModule if the moduleName is ' + moduleName + " and fileName is" +
          fileName + " and methodName is "+methodName + '. you can use the ' +
          urlRoot +  moduleName + "/" + subModuleName +"/" + methodName + ' url to find it.'));
        }else{
          subModuleName  = subModuleRes[1]
        }

        subModuleName = subModuleName[0].toLowerCase() + subModuleName.slice(1);
        url = urlRoot +  moduleName + "/" + subModuleName +"/" + methodName;
        //console.log(url);

        configObj[url] = {
          "moduleDirName" : dirName,
          "moduleName" : moduleName,
          "fileName" : fileName,
          "methodName" : methodName,
          "subModuleName" : subModuleName,
          "params" : params,
          "jsPath" : jsPath,
          "subModuleError" : subModuleError,
          "clientClass" : clientClassName
        }
      }

      data = header + data + footer;


      /**
       * {
       *  data : 文件
       *  url  urlRoot + '/' + 模块名＋'/'+ 自模块名+ '/' +方法名
       *  moduleName 目录名
       *  fileName  文件名
       *  dependency   ［{moduleName ,fileName , exportClassName }］
       * }
       *
       */
      dataObjArr.push( {
        "url" : url,
        "data" : data,
        "exportsArr" : exportsArr,//输出的
        "moduleName" : moduleName,
        "fileName" : fileName,
        "dependency" : importsFiles,
        "jsPath" : jsPath
      })

      innerCallback();


      //读取目录
      //生成目录
      /*mkdirp(path.resolve(outputDir,moduleName),function(err){
       if(err){
       return innerCallback(err);
       }
       fs.writeFile(path.resolve(outputDir,moduleName,fileName + ".js"),data,innerCallback);

       });*/



    },function(err){
      if(err){
        return cb(err);
      }
      console.log('thriftClassCreator : '+moduleName+' module finish.');
      cb();
    });

    //cb();
  });
}
