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
import * as Sentry from "@sentry/vue";
Sentry.init({
  Vue,
  dsn: "https://de0aa59e21b71e309c2e037ec7e43028@o4506386913624064.ingest.sentry.io/4506386975424512",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
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
  store,
}).$mount('#app')
