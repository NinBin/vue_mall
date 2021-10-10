import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
// const mock = false;
// if(mock){
//   require('./mock/api');
// }


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:''
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
