import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/corporate",
    name: "Corporate",
    component: () =>
      import(/* webpackChunkName: "corporate" */ "../views/Corporate")
  },
  {
    path: "/private",
    name: "Private",
    component: () =>
      import(/* webpackChunkName: "private" */ "../views/Private")
  },
  {
    path: "/wedding",
    name: "Wedding",
    component: () =>
      import(/* webpackChunkName: "wedding" */ "../views/Wedding")
  },
  {
    path: "/event",
    name: "Event",
    component: () => import(/* webpackChunkName: "event" */ "../views/Event")
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import(/* webpackChunkName: "faq" */ "../views/Faq")
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: () =>
      import(/* webpackChunkName: "testimonials" */ "../views/Testimonials")
  },
  {
    path: "/details",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details")
  },
  {
    path: "/daisy",
    name: "Daisy",
    component: () => import(/* webpackChunkName: "details" */ "../views/Daisy")
  },
  {
    path: "/menu/:id",
    name: "Menu",
    component: () => import(/* webpackChunkName: "details" */ "../views/Menu")
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "navigate-active-class",
  routes
});

export default router;
