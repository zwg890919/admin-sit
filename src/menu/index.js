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
        ]
    },
])('/demo/components/')


export default [
    {
        title: '首页',
        icon: 'puzzle-piece',
        path: '/index',
        children:[]
    },
    {
        title: '功能应用',
        icon: 'puzzle-piece',
        path: '/demo/components',
        children: [
            ...demoMenus,
        ]
    },
    {
        title: '系统设置',
        icon: 'briefcase',
        path: '/index'
    },
]


