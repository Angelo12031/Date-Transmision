import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/car",
    alias: "/car",
    name: "car",
    component: () => import("./components/CarList.vue"),
  },
  {
    path: "/car/:id",
    name: "car-details",
    component: () => import("./components/CarDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddCars.vue"),
},
  {
    path: "/",
    name: "Login",
    component: () => import("./components/Login.vue"),
  },
  {
    path: "/carpage",
    name: "carpage",
    component: () => import("./components/CarPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
