import { createRouter, createWebHistory } from "vue-router";
import HompageView from "@/views/HompageView.vue";
import InscriptionView from "@/views/InscriptionView.vue";
import ConnexionView from "@/views/ConnexionView.vue";
import DetContactsView from "@/views/DetContactsView.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HompageView,
  },
  {
    path: "/inscription",
    name: "inscription",
    component: InscriptionView,
  },
  {
    path: "/connexion",
    name: "connexion",
    component: ConnexionView,
  },
  {
    path: "/details",
    name: "details",
    component: DetContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
