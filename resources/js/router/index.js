import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/Components/DefaultLayout.vue';
import Dashboard from '@/Views/Dashboard.vue';
import Surveys from '@/Views/Surveys.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', name: 'Dashboard', component: Dashboard },
      { path: '/surveys', name: 'Surveys', component: Surveys },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.debug(`to.name`, to.name);
  console.debug(`store.state.user.token`, store.state.user.token);
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({name: 'Login'});
  } else if (store.state.user.token && ['Login', 'Register'].includes(to.name)) {
    next({name: 'Dashboard'});
  } else {
    next();
  }
});

export default router;
