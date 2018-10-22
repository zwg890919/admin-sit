import menus from '@/menu'
import * as type from '../mutation-types'

const systemConfig = {
    state: {
        //全屏
        isFullScreen: false,
        //当前功能应用
        currentApp: menus[0],
        // 侧边栏收缩
        asideCollapse: false,
        themeActive:'default',
    },
    mutations: {
        [type.TOOGLE_FULLSCREEN](state, isFullScreen) {
            state.isFullScreen = isFullScreen
        },
        [type.SET_CURRENTAPP](state, currentApp) {
            state.currentApp = currentApp
            this.commit('UPDATE_DB', {
                key: 'currentApp',
                value: currentApp,
            }, { root: true })
        },
        [type.TOOGLE_ASIDE](state, asideCollapse) {
            state.asideCollapse = asideCollapse;
            this.commit('UPDATE_DB', {
                key: 'asideCollapse',
                value: asideCollapse,
            }, { root: true })
        },
        [type.SET_THEME](state, theme){
            state.themeActive = theme;
            document.body.className = `theme-${state.themeActive}`
            this.commit('UPDATE_DB', {
                key: 'themeActive',
                value: theme,
            }, { root: true })
        }
    },
    actions: {
        LOGINSUCCESSLOAD({ commit, state }) {
            commit('DBTOVUEX', {
                key: 'asideCollapse',
                defaultValue: false,
            }, { root: true })
            commit('DBTOVUEX', {
                key: 'themeActive',
                defaultValue: 'default',
            }, { root: true })
            commit('DBTOVUEX', {
                key: 'currentApp',
                defaultValue: menus[0],
            }, { root: true })
            commit('DBTOVUEX', {
                key: 'visitedViews',
                defaultValue: [],
                moduleName:'tagsView'
            }, { root: true })
            commit('SET_THEME',state.themeActive)
        }
    }
}

export default systemConfig
