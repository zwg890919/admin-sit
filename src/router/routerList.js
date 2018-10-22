import layoutCon from '@/views/core/layout'

const meta = { requiresAuth: true }

const frametInside = [
    {
        path: "*",
        redirect: "/"
    },
    {
        path: '/',
        redirect: { name: 'index' },
        component: layoutCon,
        children: [
            {
                path: 'index',
                name: 'index',
                meta: {
                    title: '首页'
                },
                component: () => import('@/views/index')
            }
        ]
    },
    {
        path: '/demo/components',
        name: 'demo-components',
        redirect: 'demo-components-index',
        component: layoutCon,
        meta: {
            title: '组件',
            icon: 'el-icon-tickets'
        },
        children: (pre => [
            { path: 'index', name: `${pre}index`, component: () => import('@/views/demo/components/index'), meta: { ...meta, title: '组件首页' } },
            { path: 'clipboard', name: `${pre}clipboard`, component: () => import('@/views/demo/components/clipboard'), meta: { ...meta, title: '剪切板' } },
            { path: 'driver', name: `${pre}driver`, component: () => import('@/views/demo/components/driver'), meta: { ...meta, title: '引导页' } },
            { path: 'quill-editor', name: `${pre}quill-editor`, component: () => import('@/views/demo/components/quill-editor'), meta: { ...meta, title: '富文本编辑器' } },
            { path: 'draggable', name: `${pre}draggable`, component: () => import('@/views/demo/components/draggable'), meta: { ...meta, title: '拖拽功能' } },
            { path: 'cookie', name: `${pre}cookie`, component: () => import('@/views/demo/components/cookie'), meta: { ...meta, title: 'Cookie读写' } },
            { path: 'search', name: `${pre}search`, component: () => import('@/views/demo/components/search'), meta: { ...meta, title: '查询组件' } },
            { path: 'json', name: `${pre}json`, component: () => import('@/views/demo/components/json'), meta: { ...meta, title: 'JSON展示' } },
            { path: 'page-cache/on', name: `${pre}page-cache-on`, component: () => import('@/views/demo/components/page-cache/on'), meta: { ...meta, title: '开启缓存', alive: true } },
            { path: 'page-cache/off', name: `${pre}page-cache-off`, component: () => import('@/views/demo/components/page-cache/off'), meta: { ...meta, title: '关闭缓存' } },
            { path: 'crud/table', name: `${pre}crud-table`, component: () => import('@/views/demo/components/crud/table'), meta: { ...meta, title: 'CRUD表格' } },
            { path: 'table/custom-table', name: `${pre}custom`, component: () => import('@/views/demo/components/table/custom'), meta: { ...meta, title: '自定义表格' } },
            { path: 'table/inline-edit-table', name: `${pre}inline-edit`, component: () => import('@/views/demo/components/table/inline-edit'), meta: { ...meta, title: '行内修改表格' } },
            { path: 'table/complex-table', name: `${pre}complex`, component: () => import('@/views/demo/components/table/custom'), meta: { ...meta, title: '综合表格' } },

        ])('demo-components-')
    },
]

const frameOutside = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/core/login')
    }
]

export default [
    ...frametInside,
    ...frameOutside
]
