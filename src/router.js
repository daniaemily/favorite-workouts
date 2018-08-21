import Vue from 'vue'
import Router from 'vue-router'
import Character from './components/Character.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'character',
      component: Character
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})
