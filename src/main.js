import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as FaIcons from './utils/fa-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

library.add(...Object.values(FaIcons))
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAwesomeSwiper)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
