import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
// import Dashboard from '../views/Dashboard.vue';
// import DashboardPatiend from '../views/DashboardPatiend.vue';
// import DashboardReport from '../views/DashboardReport.vue';
// import DashnoardStaff from '../views/DashboardStaff.vue';
// import DashboardPatiendConfig from '../views/DashboardPatiendConfig.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/patiend',
      name: 'patiend',
      component: () => import('../views/DashboardPatiend.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/DashboardReport.vue')
    },
    {
      path: '/staff',
      name: 'staff',
      component: () => import('../views/DashboardStaff.vue')
    },
    {
      path: '/patiendconfig',
      name: 'patiendconfig',
      component: () => import('../views/DashboardPatiendConfig.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router
