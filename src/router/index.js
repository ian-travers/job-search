import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import JobResultsView from "@/views/JobResultsView";
import JobView from "@/views/JobView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
