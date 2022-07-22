import { createRouter, createWebHistory } from "vue-router";
import Amlsingletxn from "../views/Amlsingletxn.vue";
import Amlbatchwallet from "../views/Amlbatchwallet.vue";
import Amlsinglewallet from "../views/Amlsinglewallet.vue";
import Landing from "../views/Landing.vue";
import NProgress from "nprogress";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";
import store from "../store/store";
import AnalyticShow from "../views/AnalyticShow.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    props: true,
  },
  {
    path: "/aml/txn/single",
    name: "aml-single",
    component: Amlsingletxn,
    props: true,
  },
  {
    path: "/aml/wallet/single",
    name: "aml-wallet",
    component: Amlsinglewallet,
    props: true,
  },
  {
    path: "/aml/wallet/batch",
    name: "aml-wallet-batch",
    component: Amlbatchwallet,
    props: true,
  },
  {
    path: "/aml/analysis/:id",
    name: "analysis-show",
    component: AnalyticShow,
    props: true,
    async beforeEnter(routeTo, routeFrom, next) {
      await store
        .dispatch("aml/fetchWalletAnalysis", routeTo.params.id)
        .then((analysis) => {
          routeTo.params.analysis = analysis;
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({ name: "404", params: { resource: "analysis" } });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "404", params: { resource: "page" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
