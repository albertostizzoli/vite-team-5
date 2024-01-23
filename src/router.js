import { createRouter, createWebHistory } from "vue-router";

import Apphome from "./pages/Apphome.vue";
import AppCharacters from "./pages/AppCharacters.vue";
import AppTypes from "./pages/AppTypes.vue";
import AppItems from "./pages/AppItems.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Apphome,
    },
    {
      path: "/characters",
      name: "characters",
      component: AppCharacters,
    },
    {
      path: "/types",
      name: "types",
      component: AppTypes,
    },
    {
      path: "/items",
      name: "items",
      component: AppItems,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
