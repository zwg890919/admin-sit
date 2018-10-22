<template>
    <el-card shadow="never">
            <el-alert title="实现依赖driverJS" type="success" description='详细地址：https://github.com/kamranahmedse/driver.js' :closable="false" show-icon class="mb-20">
            </el-alert>
            <el-button type="primary" class="showDriver" @click.prevent.stop="showDriver">引导功能</el-button>
    </el-card>
</template>

<script>
    import * as Driver from 'driver.js' // import driver.js
    import 'driver.js/dist/driver.min.css' // import driver.js css
    export default {
        data() {
            return {
                driver: null
            }
        },
        mounted() {
            this.driver = new Driver({
                animate: true,                    // Whether to animate or not
                opacity: 0.75,                    // Background opacity (0 means only popovers and without overlay)
                padding: 0,                      // Distance of element from around the edges
                allowClose: true,                 // Whether the click on overlay should close or not
                overlayClickNext: false,          // Whether the click on overlay should move next
                doneBtnText: '结束',              // Text on the final button
                closeBtnText: '关闭',            // Text on the close button for this step
                stageBackground: '#ffffff',       // Background color for the staged behind highlighted element
                nextBtnText: '下一个',              // Next button text for this step
                prevBtnText: '上一个',
            })
        },
        methods: {
            showDriver() {
                this.driver.defineSteps([{
                    element: '.sidebar-btn',
                    popover: {
                        title: '侧边栏按钮',
                        description: '控制侧边栏是否缩进',
                        position: 'bottom'
                    }
                }, {
                    element: '.header-menu',
                    popover: {
                        title: '顶部导航',
                        description: '顶部应用级别菜单导航',
                        position: 'bottom'
                    }
                }, {
                    element: '.header-fullscreen',
                    popover: {
                        title: '顶部功能栏',
                        description: '包括消息通知、全屏切换、修改密码与账户注销等功能',
                        position: 'left'
                    }
                }, {
                    element: '.header-message',
                    popover: {
                        title: '顶部功能栏',
                        description: '包括消息通知、全屏切换、修改密码与账户注销等功能',
                        position: 'left'
                    }
                }, {
                    element: '.header-avatar',
                    popover: {
                        title: '顶部功能栏',
                        description: '包括消息通知、全屏切换、修改密码与账户注销等功能',
                        position: 'left'
                    }
                }, {
                    element: '.tags-nav',
                    popover: {
                        title: '缓存标签栏',
                        description: '已打开页面的缓存列表',
                        position: 'bottom'
                    }
                }])
                this.driver.start()
            }
        }
    }
</script>
