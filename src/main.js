/*
 * @Description:
 * @Autor: clb
 * @Date: 2021-07-23 15:09:40
 * @LastEditors: clb
 * @LastEditTime: 2021-07-23 16:33:09
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import './style/main.less'
import * as PIXI from 'pixi.js'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: require('./VueI18n/zh').lang,
    en: require('./VueI18n/en').lang
  }
})
new Vue({
  router,
  store,
  i18n,
  PIXI,
  render: h => h(App)
}).$mount('#app')
