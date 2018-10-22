<template>
    <div class="app-wrapper">
        <!-- 顶栏导航 -->
        <div class="header-container">
            <!-- logo -->
            <div class="logo-wrapper" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}">
                <img v-if="asideCollapse" :src="`${$assetsPublicPath}static/image/icon-only.png`" alt="">
                <img v-else :src="`${$assetsPublicPath}static/image/all.png`" alt="">
            </div>
            <div class="menu-wrapper" :style="{'margin-left': asideCollapse ? asideWidthCollapse : asideWidth}">
                <div class="sidebar-btn" @click="toggleAside">
                    <i class="fa fa-bars" style="font-size: 20px; padding-top: 4px;"></i>
                </div>
                <!-- 顶栏菜单 -->
                <header-menu></header-menu>
                <!-- 顶栏右侧 -->
                <div class="header-right">
                    <header-fullscreen></header-fullscreen>
                    <header-theme></header-theme>
                    <header-message></header-message>
                    <header-avatar></header-avatar>
                </div>
            </div>

        </div>
        <!-- 侧边导航栏 -->
        <div class="sidebar-container" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}">
            <left-aside></left-aside>
        </div>
        <!-- 内容主体 -->
        <div class="main-container" :style="{left: asideCollapse ? asideWidthCollapse : asideWidth}">
            <main-tags></main-tags>
            <el-scrollbar class="page-view">
                <keep-alive :include="cacheViews">
                    <router-view />
                </keep-alive>
            </el-scrollbar>
            <!-- <transition name="fade-transverse" mode="out-in"> -->

            <!-- </transition> -->
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        data() {
            return {
                asideWidth: '200px',
                asideWidthCollapse: '65px'
            }
        },
        components: {
            'header-menu': () => import('./components/header-menu'),
            'header-fullscreen': () => import('./components/header-fullscreen'),
            'header-message': () => import('./components/header-message'),
            'header-avatar': () => import('./components/header-avatar'),
            'header-theme': () => import('./components/header-theme'),
            'left-aside': () => import('./components/left-aside'),
            'main-tags': () => import('./components/main-tags.vue')
        },
        computed: {
            ...mapGetters(['asideCollapse', 'cacheViews'])
        },
        methods: {
            ...mapMutations([
                'TOOGLE_ASIDE'
            ]),
            toggleAside() {
                this.TOOGLE_ASIDE(!this.asideCollapse)
            }
        }
    }
</script>

<style lang="scss">
    // 注册主题
    @import "~@/styles/theme/reigster.scss";
</style>
