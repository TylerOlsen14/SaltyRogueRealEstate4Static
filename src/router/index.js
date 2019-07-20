import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: 'Home'
    },
    {
      path: '/about',
      name: 'About',
      component: 'About'
    },
    {
      path: '/contact',
      name: 'Contact',
      component: 'Contact'
    },
  ]
})