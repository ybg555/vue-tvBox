import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'

// install router
Vue.use(Router);

// register filters globally
//Vue.filter('fromNow', fromNow)
//Vue.filter('domain', domain)

//var app = require('./core/application.js');
//var thriftConfig = require('./thriftConfig.js');
//var globalConfig = require('./config.js');
//app.setConfig('thrift',thriftConfig);
//app.setConfig('global',globalConfig);

// routing
var router = new Router();

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user/:id': {
    component: UserView
  },
  '/item/:id': {
    component: ItemView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0);
  //跳转前判断，可终止等操作；
});

router.redirect({
  '*': '/news/1'
})

router.start(App, '#app')
