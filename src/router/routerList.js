import layoutCon from '@/views/core/layout'

const meta = { requiresAuth: true }

const frametInside = [
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
        ])('demo-components-')
    },
    // {
    //     path: '/demo/table',
    //     name: 'demo-table',
    //     redirect: 'demo-table-index',
    //     component: layoutCon,
    //     meta: {
    //         title: '表格组件',
    //         icon: 'el-icon-tickets'
    //     },
    //     children: (pre => [
    //         { path: 'index', name: `${pre}index`, component: () => import('@/views/demo/components/index'), meta: { ...meta, title: '表哥' } },
    //     ])('demo-table-')
    // },
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
