import Vue from "vue";
import Router from "vue-router";
import Desktop1 from "./components/Desktop1";
import UserProfile from "./components/UserProfile";
import CreateUserProfile from "./components/CreateUserProfile";
import EditUserProfile from "./components/EditUserProfile";
import Admin from "./components/Admin";
import { desktop1Data } from "./data";
import { userProfileData } from "./user_data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Desktop1,
      props: { ...desktop1Data },
    },
    {
      path: '/profile/:id',
      name: "profile",
      component: UserProfile,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/create",
      name: "create",
      component: CreateUserProfile,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditUserProfile,
    }
  ],
});
