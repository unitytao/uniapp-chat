import Vue from 'vue'
import App from './App'
import io from 'commons/js/weapp.socket.io.js'

Vue.config.productionTip = false
Vue.prototype.socket= io('http://192.168.0.103:8888')

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
