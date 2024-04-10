import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";

import Favorites from "./pages/Favorites.vue";
import Main from "./pages/Main.vue";
import Home from "./pages/Home.vue";
import Authorization from "./pages/Authorization.vue";
import Registration from "./pages/Registration.vue";
import Profile from "./pages/Profile.vue";

const app = createApp(App);

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/shop", name: "Home", component: Home },
  { path: "/favorites", name: "Favorites", component: Favorites },
  { path: "/authorization", name: "Authorization", component: Authorization },
  { path: "/registration", name: "Registration", component: Registration },
  { path: "/profile", name: "Profile", component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.use(autoAnimatePlugin);

app.mount("#app");
