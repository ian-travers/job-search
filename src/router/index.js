import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import JobResultsView from "@/views/JobResultsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
