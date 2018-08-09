/**
 * 路由权限页（登录判断）
 */
import router from './router'
import Cookies from 'js-cookie'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

//链接白名单
const whiteList = ['/login']

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
    //加载页面跳转动画
    NProgress.start()
    //以admin-token作为是否登陆的验证
    if (Cookies.get('admin-token')) {
        //如果用户已登陆，访问登陆页则跳转到首页
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            //直接通过
            next()
        }
    } else {
        // 验证目标链接是否在白名单内
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            // 若未在白名单内链接跳转到登陆界面
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach((to) => {
    NProgress.done()
    // 需要的信息
    const app = router.app
    const { meta, name, path, params, query } = to
    app.$store.dispatch('addVisitedViews', {
        meta,
        name,
        path,
        params,
        query
    })
})
