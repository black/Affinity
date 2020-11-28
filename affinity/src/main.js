import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD:affinity/src/main.js
=======
import "@/firebase/fire"
>>>>>>> parent of 43a83b0... started stlying with tailwindcss:src/main.js

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')