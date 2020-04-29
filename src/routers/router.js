
import Vue from 'vue'
import Router from 'vue-router';
import indexRouter from '@/view/index/index_router'



Vue.use(Router);

const routes = [
  { path: '/', redirect: '/index' },
  ...indexRouter,
  {
    name: '404',
    path: '/404',
    component: () => import('./views/404.vue'),
    meta: {
      title: '未找到'
    },
  },
  { path: '*', redirect: '/404' }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes, linkActiveClass: 'active' });
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title || '';
  if (title) {
    document.title = title;
  }
  // let userInfor = getUserInfor()
  // if(userInfor.token){
  //   next()
  // }else{
  //   if((to.path==='/index' && to.query.index == 3) || to.path === '/login'){
  //     next()
  //   }else{
  //     Toast('请您先进行登录')
  //     next({
  //       path:'/login',
  //     })
  //   }
  // }
  next();
});

export {
  router
};
