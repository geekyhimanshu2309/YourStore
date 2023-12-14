import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/authentication";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  getAuth(app);
//   const userStore = useUserStore(); //TODO: to be used later
});

export default router;
