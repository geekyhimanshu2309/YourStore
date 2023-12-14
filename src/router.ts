import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/authentication";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,_from,next) => {
  const user = getAuth(app).currentUser;
  
  if(to.meta.requiresAuth && !user){
    next({ name: 'Login'})
  }else{
    next()
  }
});

export default router;
