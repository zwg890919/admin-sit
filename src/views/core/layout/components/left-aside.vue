<template>
    <el-scrollbar class="scrollbar-wrapper">
        <el-menu mode="vertical" :show-timeout="200" :collapse="asideCollapse" ref="menu" :default-active="currentView.title" >
            <template v-for="item in currentApp">
                <router-link v-if="item.children === undefined" :key="item.title" :to="`${item.path}`">
                    <el-menu-item :index="item.title">
                        <i :class="`fa fa-${item.icon || 'file-o'}`"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </router-link>

                <el-submenu v-else :index="item.title||item.path" :key="item.title">
                    <template slot="title">
                        <i :class="`fa fa-${item.icon || 'file-o'}`"></i>
                        <span slot="title">{{item.title}}</span>
                    </template>
                    <template>
                        <router-link v-for="subItem in item.children" :key="subItem.title" :to="`${subItem.path}`">
                            <el-menu-item :index="subItem.title">
                                <i :class="`fa fa-${subItem.icon || 'file-o'}`"></i>
                                <span>{{subItem.title}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
        <div v-if="currentApp.length === 0 && !asideCollapse" class="empty-aside">
            暂无菜单
        </div>
    </el-scrollbar>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'currentApp',
                'asideCollapse'
            ]),
            currentView(){
                return this.$route.meta || {}
            }
        },
        methods: {
        }
    }
</script>
