import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const TeamsView = () => import("@/views/TeamsView.vue");
const JobResultsView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
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
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
