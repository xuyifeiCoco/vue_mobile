const indexRouter = [
  //   {
  //     name: "IndexPage",
  //     path: "/index",
  //     component: () => import("./index.vue"),
  //     meta: {
  //       title: "首页",
  //       keepAlive: true,
  //     },
  //   },
  {
    name: "quanjing",
    path: "/quanjing",
    component: () => import("../quanJing/QuanJing.vue"),
    meta: {
      title: "全景",
      keepAlive: true,
    },
  },
];

export default indexRouter;
