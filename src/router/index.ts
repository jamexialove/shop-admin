import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayoutVue from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import mediaRoutes from './modules/media'
import permissionRoutes from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayoutVue,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页' }
      },
      productRoutes,
      orderRoutes,
      mediaRoutes,
      permissionRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})
router.beforeEach(() => {
  nprogress.start() // 开始加载进度条
})
router.afterEach(() => {
  nprogress.done() // 加载进度条
})
export default router
