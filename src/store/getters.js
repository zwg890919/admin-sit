const getters = {
    // 系统设置类数据
    isFullScreen: state => state.systemConfig.isFullScreen,
    currentApp: state => state.systemConfig.currentApp,
    asideCollapse: state => state.systemConfig.asideCollapse,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
}
export default getters
