import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/user/:id", component: Home },
    { path: "/about", component: About },
  ],
});
