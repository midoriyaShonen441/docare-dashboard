import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import SafetyDashboradView from "../views/SafetyDashboradView.vue";
import StaffPage from "../views/StaffPage.vue";
import SensorDetector from "../views/SensorDetector.vue";
import User from "../views/User.vue";
import UserInfo from "../views/UserInfo.vue";
import UserChart from "../views/UserChart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "SafetyDashboradView",
      component: SafetyDashboradView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/staff",
      name: "StaffPage",
      component: StaffPage,
    },
    {
      path: "/sensordetection",
      name: "SensorDetector",
      component: SensorDetector,
    },
    {
      path: "/user",
      name: "User",
      component: User,
    },
    {
      path: "/userInfo",
      name: "UserInfo",
      component: UserInfo,
    },
    {
      path: "/userChart",
      name: "UserChart",
      component: UserChart,
    },
  ],
});

export default router;
