<template>
    <el-dropdown class="mr-15">
        <el-button class="btn-text can-hover header-avatar" type="text">你好 管理员</el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logOff">注销登陆</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    // 插件
    import Cookies from 'js-cookie'

    export default {
        computed: {
        },
        methods: {

            logOff() {
                this.$confirm('注销此账户吗?', '注销', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    // 删除cookie
                    Cookies.remove('admin-token')
                    Cookies.remove('admin-uuid')
                    // 跳转路由
                    this.$router.push({
                        name: 'login'
                    })
                }).catch(() => {
                    // 取消了注销
                })
            }
        }
    }
</script>
