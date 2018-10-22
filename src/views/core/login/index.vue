<template>
    <div class="login-container">
        <div class="login-layer flex-center">
            <div class="login-form">
                <el-card class="box-card">
                    <h1 class="login-title">JYC Admin</h1>
                    <p class="pb-5 login-desc">上城区最具影响力的前端开发团队</p>
                    <el-form ref="loginForm" :model="formLogin" :rules="rules">
                        <el-form-item prop="username">
                            <el-input type="text" v-model="formLogin.username" placeholder="用户名">
                                <i slot="prepend" class="fa fa-user-circle-o"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="formLogin.password" placeholder="密码">
                                <i slot="prepend" class="fa fa-keyboard-o"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="code">
                            <el-input type="text" v-model="formLogin.code" placeholder="- - - -">
                                <template slot="prepend">验证码</template>
                                <template slot="append">
                                    <img class="login-code" :src="`${$assetsPublicPath}static/image/login-code.png`">
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-button @click="submit" type="primary" class="button-login">登录</el-button>
                    </el-form>
                </el-card>
            </div>
        </div>
    </div>
</template>
<script>
    import Cookies from 'js-cookie'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                formLogin: {
                    username: 'admin',
                    password: 'admin',
                    code: 'v9am'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {
            ...mapActions(['LOGINSUCCESSLOAD']),
            submit() {
                this.$refs['loginForm'].validate((valid) => {
                    if (valid) {
                        Cookies.set('admin-token', 'islogin')
                        Cookies.set('admin-uid', '10141')
                        this.LOGINSUCCESSLOAD()
                        this.$router.push('/')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    .login {
        &-container {
            position: fixed;
            height: 100%;
            width: 100%;
            background-color: #2d3a4b;
        }
        &-layer {
            position: absolute;
            height: 100%;
            width: 100%;
            &.flex-center {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: center;
                justify-content: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-direction: column;
                flex-direction: column;
            }
        }
        &-form {
            width: 350px;
            .login-title{
                text-align:center
            }
            .login-desc {
                text-align: center;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
            }
            .button-login {
                width: 100%;
            }
            .login-code {
                height: 34px;
                display: block;
                margin: 0 -20px;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
            }
        }
    }
</style>
