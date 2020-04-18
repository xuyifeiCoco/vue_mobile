const indexRouter = [{
    name: 'IndexPage',
    path: '/index',
    component: () => import('./index.vue'),
    meta: {
        title: '首页',
        keepAlive: true
    },
},

]

export default indexRouter