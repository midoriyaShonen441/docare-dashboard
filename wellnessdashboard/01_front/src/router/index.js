import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import Dashboard from '../views/Dashboard.vue';
import DashboardPatiend from '../views/DashboardPatiend.vue';
import DashboardReport from '../views/DashboardReport.vue';
import DashnoardStaff from '../views/DashboardStaff.vue';
import DashboardPatiendConfig from '../views/DashboardPatiendConfig.vue';

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
      component: Dashboard
    },
    {
      path: '/patiend',
      name: 'patiend',
      component: DashboardPatiend
    },
    {
      path: '/report',
      name: 'report',
      component: DashboardReport
    },
    {
      path: '/staff',
      name: 'staff',
      component: DashnoardStaff
    },
    {
      path: '/patiendconfig',
      name: 'patiendconfig',
      component: DashboardPatiendConfig
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
