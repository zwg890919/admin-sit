// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import buildConfig from '../config/index'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// normalize css
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
// Vue2Filters
import Vue2Filters from 'vue2-filters'

//权限验证
import './permission'

//图表插件v-charts
import VCharts from 'v-charts'

//公共组件
import '@/components'

import store from '@/store'
import menus from '@/menu'

Vue.config.productionTip = false
Vue.prototype.$assetsPublicPath = process.env.NODE_ENV === 'development' ? buildConfig.dev.assetsPublicPath : buildConfig.build.assetsPublicPath


Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });
Vue.use(Vue2Filters)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    watch: {
        // 监听路由 控制侧边栏显示
        '$route.matched'(val) {
            // 根据当前路由顶级链接匹配菜单数据 获取菜单索引
            const currentApp = menus.filter(menu => menu.path === val[0].path)

            // const currentIndex = menus.findIndex(menu => menu.path === val[0].path)
            // console.log(currentApp,currentIndex)
            this.$store.commit('SET_CURRENTAPP', currentApp.length > 0 ? currentApp[0].children : [])
        }
    },
    mounted() {
        this.$store.dispatch('LOGINSUCCESSLOAD')
    },
    template: '<App/>'
})
