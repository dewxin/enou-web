// 引入依赖包
import axios from 'axios'
import {Message} from 'element-ui'
function initAxios() {


    axios.interceptors.request.use(function (config) {
        console.log("use token")
        console.log(localStorage.token)
        config.headers.token = localStorage.token;
        return config;
      }, function (error) {
        Message.error({message: '请求超时!'});
        return Promise.resolve(error);
      });

   
    //  RESPONSE 响应异常拦截
    axios.interceptors.response.use(data=> {
   
     // 第二种方式，仅对200和error状态处理
     if (data.status && data.status == 200 && data.data && data.data.code != 0) {
       Message.error({message: data.data.msg});
       return;
     }

     return data;
   }, err=> {

   //==============  错误处理  ====================
      if (err && err.response) {
           switch (err.response.status) {
               case 400: err.message = '请求错误(400)'; break;
               case 401: err.message = '未授权，请重新登录(401)'; break;
               case 403: err.message = '拒绝访问(403)'; break;
               case 404: err.message = '请求出错(404)'; break;
               case 408: err.message = '请求超时(408)'; break;
               case 500: err.message = '服务器错误(500)'; break;
               case 501: err.message = '服务未实现(501)'; break;
               case 502: err.message = '网络错误(502)'; break;
               case 503: err.message = '服务不可用(503)'; break;
               case 504: err.message = '网络超时(504)'; break;
               case 505: err.message = 'HTTP版本不受支持(505)'; break;
               default: err.message = `连接出错(${err.response.status})!`;
           }
       } else {
           err.message = '连接服务器失败!'
       }
     Message.error( {message: err.message } )
     return Promise.resolve(err);
   })
   
}

export {
    initAxios
}