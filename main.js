import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import request from './utils/request.js'
import store from './store/index.js'
import io from 'commons/js/weapp.socket.io.js'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$store =store
Vue.prototype.$request =request
Vue.prototype.socket= io('http://localhost:8888')


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
