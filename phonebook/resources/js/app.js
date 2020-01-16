/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// use from vue router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// use the header file by this way
let Myheader = require('./components/Myheader.vue').default;
// use the footer file by this way
let Myfooter = require('./components/Myfooter.vue').default;

// use the Home file by this way
let Home = require('./components/Home.vue').default;
// use the About file by this way
let About = require('./components/About.vue').default;


// switching routes
const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]

const router = new VueRouter({

   // mode: 'history', // to remove hash sign
    routes // short for `routes: routes`
  })
    


// add the components one by one 
// app is come form div tag ,where this is is used 
const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter}
   
});
