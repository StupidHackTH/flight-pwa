/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FBSignInButton from 'vue-facebook-signin-button'
import VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

/* eslint-disable no-new  '282930508874277' */

Vue.use(FBSignInButton)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
