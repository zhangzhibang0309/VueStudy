import Vue from 'vue'
import Router from 'vue-router'
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

// 懒加载的实现
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
Vue.use(Router) // 只要是个插件 都得安装一下

const routes = [
  {
    path: '',
    redirect: '/home' // 这是修改默认路径，重定向到Home
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage,
      },
    ]
  }, {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  }, {
    path: '/user/:name',
    component: User,
    meta: {
      title: '用户'
    },
  }, {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new Router({
  routes, // 这里必须是routes
  mode: 'history', // 将url的hash形式改为history，这样就是不会显示#，
  linkActiveClass: 'active',
})

// 前置守卫（guard）
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('+++++');
  next()
})

// 后置钩子（hook）
router.afterEach((to ,from) => {
  console.log('-----');
})

export default router

