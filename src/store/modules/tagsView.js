import * as type from '../mutation-types'
import frameOutside from '@/router/routerList'

const tagsView = {
    state: {
        visitedViews: [],
    },
    getters: {

    },
    mutations: {
        /**
         * @class ADD_VISITED_VIEWS
         * @description 新增一个tag标签
         * @param {state} state vuex state
         * @param {Object} view
         */
        [type.ADD_VISITED_VIEWS](state, view) {
            if (state.visitedViews.some(v => v.path === view.path)) return
            let tag = frameOutside.find(t => t.name === view.name)
            if (!tag && view.name) {
                state.visitedViews.push(view)
                this.commit('UPDATE_DB',
                    {
                        key: 'visitedViews',
                        value: state.visitedViews
                    },
                    { root: true })
            }
        },
        /**
         * @class DEL_VISITED_VIEWS
         * @description 删除一个tag标签
         * @param {state} state vuex state
         * @param {Object} view
         */
        [type.DEL_VISITED_VIEWS](state, view) {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews.splice(i, 1)
                    break
                }
            }
            // console.log(view
            this.commit('UPDATE_DB',
                {
                    key: 'visitedViews',
                    value: state.visitedViews
                },
                { root: true })
        },
        /**
         * @class DEL_OTHERS_VIEWS
         * @description 删除除当前标签以外的其他标签
         * @param {state} state vuex state
         * @param {Object} view
         */
        [type.DEL_OTHERS_VIEWS](state, view) {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews = state.visitedViews.slice(i, i + 1)
                    break
                }
            }
            this.commit('UPDATE_DB',
                {
                    key: 'visitedViews',
                    value: state.visitedViews
                },
                { root: true })
        },
        /**
         * @class DEL_ALL_VIEWS
         * @description 关闭全部tag标签
         * @param {state} state vuex state
         * @param {Object} view
         */
        [type.DEL_ALL_VIEWS](state) {
            state.visitedViews = []
            this.commit('UPDATE_DB',
                {
                    key: 'visitedViews',
                    value: []
                },
                { root: true })
        }
    },
    actions: {
        addVisitedViews({ commit }, view) {
            commit('ADD_VISITED_VIEWS', view)
        },
        delVisitedViews({ commit, state }, view) {
            return new Promise((resolve) => {
                commit('DEL_VISITED_VIEWS', view)
                resolve([...state.visitedViews])
            })
        },
        delOthersViews({ commit, state }, view) {
            commit('DEL_OTHERS_VIEWS', view)
        },
        delAllViews({ commit, state }) {
            return new Promise((resolve) => {
                commit('DEL_ALL_VIEWS')
                resolve([...state.visitedViews])
            })
        }
    }
}

export default tagsView
