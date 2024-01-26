import { createRouter, createWebHistory } from "vue-router";

import Apphome from "./pages/Apphome.vue";
import AppCharacters from "./pages/AppCharacters.vue";
import AppTypes from "./pages/AppTypes.vue";
import AppItems from "./pages/AppItems.vue";
import ShowCharacter from "./pages/ShowCharacter.vue";
import ShowItem from "./pages/ShowItem.vue";
import ShowType from "./pages/ShowType.vue";
import NotFound from "./pages/NotFound.vue";
import BattleArena from "./pages/BattleArena.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/characters/:id",
      name: "show-character",
      component: ShowCharacter,
    },
    {
      path: "/items/:id",
      name: "show-item",
      component: ShowItem,
    },
    {
      path: "/types/:id",
      name: "show-types",
      component: ShowType,
    },
    {
      path: "/arena",
      name: "arena",
      component: BattleArena,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
