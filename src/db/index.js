import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('jyc-admin')
const db = low(adapter)

db.defaults({
    asideCollapse: [],
    appList: [],
    currentApp: [],
    currentView: [],
    visitedViews: [],
    userInfo: []
})
    .write()

export default db
