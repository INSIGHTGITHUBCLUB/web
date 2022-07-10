import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/",
    name: "Earth",
    component: () =>
      import(/* webpackChunkName: "Earth" */ "../views/earth/index.vue"),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Personal.vue')
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enterprise.vue')
  },
  {
    path: "/learning-analytics",
    name: "LearningAnalytics",
    component: () =>
      import(
        /* webpackChunkName: "LearningAnalytics" */ "../views/LearningAnalytics.vue"
      ),
  },
  {
    path: "/activity",
    name: "Activity",
    component: () =>
      import(
        /* webpackChunkName: "Activity" */ "../views/activity/index.vue"
      ),
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import(/* webpackChunkName: "Forum" */ "../views/forum"),
    redirect: '/forum/categories',
    children: [
      {
        path: "categories",
        name: "Categories",
        component: () =>
          import(/* webpackChunkName: "Categories" */ "../views/forum/Categories"),
      },
      {
        path: "welcome",
        name: "Welcome",
        component: () =>
          import(/* webpackChunkName: "Welcome" */ "../views/forum/Welcome"),
      },
      {
        path: "rules",
        name: "Rules",
        component: () =>
          import(/* webpackChunkName: "Rules" */ "../views/forum/Rules"),
      },
      {
        path: "self",
        name: "Self",
        component: () =>
          import(/* webpackChunkName: "Self" */ "../views/forum/Self"),
      },
      {
        path: "qa",
        name: "QA",
        component: () =>
          import(/* webpackChunkName: "QA" */ "../views/forum/QA"),
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
