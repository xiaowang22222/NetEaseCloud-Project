import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import "@/assets/main.css"
import { Icon } from '@iconify/vue2';
import store  from './store';
import 'vant/lib/index.css';
import Vant from 'vant';
import { ActionSheet } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Sticky } from 'vant';
import Howler from "howler"
import Bus from './Hub'
import audioList from "@/components/audioList/index.vue"
import routerfoot from "@/components/routerfoot/index.vue"
import audioPlay from '@/views/audioPlay/index.js';
Vue.prototype.$bus = Bus
Vue.use(Howler)
Vue.use(audioPlay)
Vue.use(Sticky);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(ActionSheet);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.component("Icon",Icon)
Vue.component("audioList",audioList)
Vue.component("routerfoot",routerfoot)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
