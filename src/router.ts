import {
    createWebHistory,
    createRouter,
    type RouteRecordRaw,
} from "vue-router";

import Home from "./pages/Home.vue";
import People from "./pages/People.vue";
import Planets from "./pages/Planets.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/people",
        name: "people",
        component: People,
    },
    {
        path: "/planets",
        name: "planets`",
        component: Planets,
    },
] as RouteRecordRaw[];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
