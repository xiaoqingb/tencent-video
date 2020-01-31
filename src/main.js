import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as FaIcons from './utils/fa-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
Vue.config.productionTip = false

library.add(...Object.values(FaIcons))
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAwesomeSwiper)
// 将axios挂载到原型上面
Vue.prototype.axios = axios
// 页面滚动至顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
