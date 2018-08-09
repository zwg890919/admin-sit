import db from '@/db'
import Cookies from 'js-cookie'
import * as type from './mutation-types'

const mutations = {
    /**
     * @class UPDATE_DB
     * @description 更新数据库
     * @param {Boolean} key 数据库表头
     */
    [type.UPDATE_DB](state, { key, value }) {
        const row = db.get(key).find({ 'admin-uid': Cookies.get('admin-uid') })
        if (row.value()) {
            row.assign({ value }).write()
        } else {
            db.get(key).push({
                'admin-uid': Cookies.get('admin-uid'),
                value
            }).write()
        }
    },
    /**
     * @class DBTOVUEX
     * @description 从数据库更新Vuex 需要admin-uid
     * @param {vuex state} state vuex state
     * @param {Object} param1 key and default value
     */
    [type.DBTOVUEX](state, { key, defaultValue, moduleName = 'systemConfig' }, rootState) {
        const row = db.get(key).find({ 'admin-uid': Cookies.get('admin-uid') }).value()
        this.state[moduleName][key] = row ? row.value : defaultValue
    },
}
export default mutations

