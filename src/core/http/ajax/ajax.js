/**
 * Created by ppf on 1/6/16.
 */


module.exports = {
    request : function(api,paramsObj,config){
        var httpRequest = new XMLHttpRequest();
        httpRequest.open(config['method'] ? config['method'] : 'post', api);
        var promise = new Promise(function (resolve, reject) {

            httpRequest.onreadystatechange = function () {
                //成功上传
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    var res;
                    if (httpRequest.responseType === "json") {
                        res = JSON.parse(httpRequest.responseText);
                    } else {
                        res = JSON.parse(httpRequest.responseText);
                    }
                    //判断200
                    if (httpRequest.status == 200) {
                        resolve(res);
                        //self._onSuccessFunc(self._handleResponse(httpRequest));
                    } else {
                        //默认非200为报错
                        reject(res);
                        //self._onErrorFunc(self._handleResponse(httpRequest));
                    }
                }
            };
            httpRequest.send(paramsObj);
        });
        return promise;
    }
}

