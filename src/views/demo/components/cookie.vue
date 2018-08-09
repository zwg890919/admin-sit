<template>
    <jyc-container>
        <template slot="header">
            Cookie读写功能
        </template>
        <div class="pd-20">
            <el-alert title="实现依赖js-cookie" type="success" description='详细地址：https://github.com/js-cookie/js-cookie' :closable="false" show-icon class="mb-20">
            </el-alert>
            <h3 class="mt-15 mb-15">js-Cookie基本用法（读取删）</h3>
            <el-button @click="setCookie('userName')">设置demo-userName为normal</el-button>
            <el-button @click="getCookie('userName')">获取demo-userName的值</el-button>
            <el-button @click="removeCookie('userName')">删除demo-userName的值</el-button>
            <h3 class="mt-15 mb-15">js-Cookie设置有效时间</h3>
            <el-button @click="setCookie('userpwd')">设置demo-userpwd为1234</el-button>
            <el-button @click="getCookie('userpwd')">获取demo-userpwd的值</el-button>
            <el-button @click="removeCookie('userpwd')">删除demo-pwd的值</el-button>
            <h3 class="mt-15 mb-15">js-Cookie设置json对象</h3>
            <el-button @click="setCookie('json')">设置demo-json为对象</el-button>
            <el-button @click="getJsonCookie">获取demo-json的值</el-button>
            <el-button @click="removeCookie('json')">删除demo-json的值</el-button>
            <h3 class="mt-15 mb-15">获取全部cookie</h3>
            <el-button @click="getAllCookie">获取全部Cookie</el-button>
            <el-button @click="getAllJson">获取转换后的全部Cookie</el-button>
        </div>
    </jyc-container>
</template>
<script>
    import Cookies from 'js-cookie'
    export default {
        data() {
            return {

            }
        },
        methods: {
            setCookie(type) {
                if (type === 'userName') {
                    Cookies.set('demo-userName', 'normal');
                } else if(type === 'userpwd') {
                    Cookies.set('demo-userpwd', '123', { expires: 1 });
                } else{
                    Cookies.set('demo-json', { foo : 'bar'});
                }

                this.$message({
                    message: 'cookie设置成功',
                    type: 'success'
                });
            },
            getJsonCookie(){
                const cookieValue = Cookies.getJSON(`demo-json`)
                this.$message({
                    message: 'cookie读取成功，请在控制才查看打印信息',
                    type: 'success'
                });
                console.log(`读取cookie中demo-json的值为`, cookieValue)
            },
            getAllCookie(){
                this.$message({
                    message: '全部cookie读取成功，请在控制才查看打印信息',
                    type: 'success'
                });
                console.log(`读取cookie的值为`, Cookies.get())
            },
            getAllJson(){
                this.$message({
                    message: '全部cookie读取成功，请在控制才查看打印信息',
                    type: 'success'
                });
                console.log(`读取JSONcookie的值为`, Cookies.getJSON())
            },
            getCookie(type) {
                const cookieValue = Cookies.get(`demo-${type}`)
                this.$message({
                    message: 'cookie读取成功，请在控制才查看打印信息',
                    type: 'success'
                });
                console.log(`读取cookie中demo-${type}的值为  ${cookieValue}`)
            },
            removeCookie(type) {
                Cookies.remove(`demo-${type}`)
                this.$message({
                    message: '删除成功',
                    type: 'warning'
                });
            }
        }
    }
</script>

