import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
// import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'
import AppStyles from './style/main.scss'
import store from './store/index.js'
import Routes from './routes.js'
import App from './main.vue'

Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  store,
  framework7: {
    root: '#app',
    // material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})
