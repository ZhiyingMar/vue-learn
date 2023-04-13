import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;


//全局混入的方式
Vue.mixin({
  data(){
    return{
      num:12
    }
  },
  created(){
    // console.log("main里面的created函数");
  },
  methods:{
    show(){
      this.num++;
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
