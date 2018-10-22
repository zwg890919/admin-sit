const demoMenus = (pre => [
    {
        title: '基础',
        icon: 'cube',
        children: [
            { path: `${pre}index`, title: '组件首页' },
            { path: `${pre}clipboard`, title: '剪切板' },
            { path: `${pre}driver`, title: '引导页' },
            { path: `${pre}draggable`, title: '拖拽功能' },
            { path: `${pre}quill-editor`, title: '富文本编辑器' },
            { path: `${pre}cookie`, title: 'Cookie读写' },
            { path: `${pre}search`, title: '查询组件' },
            { path: `${pre}json`, title: 'JSON展示' },
        ]
    },
    {
        title: '页面缓存',
        icon: 'cube',
        children: [
            { path: `${pre}page-cache/on`, title: '开启缓存' },
            { path: `${pre}page-cache/off`, title: '关闭缓存' },
        ]
    },
    {
        title: 'CRUD',
        icon: 'cube',
        path: `${pre}crud/table`,
        title: 'CRUD表格',
    }
])('/demo/components/')

const tablesMenu = (pre => [
    {
        title: '表格',
        icon: 'cube',
        children: [
            { path: `${pre}custom-table`, title: '自定义表格' },
            { path: `${pre}inline-edit-table`, title: '行内修改' },
            { path: `${pre}complex-table`, title: '综合表格' },
        ]
    },
])('/demo/components/table/')

export default [
    {
        title: '首页',
        icon: 'puzzle-piece',
        path: '/index',
        children: []
    },
    {
        title: '功能应用',
        icon: 'puzzle-piece',
        path: '/demo/components',
        children: [
            ...demoMenus,
            ...tablesMenu
        ]
    },
    // {
    //     title: '系统设置',
    //     icon: 'briefcase',
    //     path: '/index'
    // },
]


