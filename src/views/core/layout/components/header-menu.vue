<template>
    <el-menu mode="horizontal" @select="handleSelect" class="header-menu">
        <template v-for="(menu, menuIndex) in menus">
            <el-menu-item :index="String(menuIndex)" :key="menuIndex">
                <i :class="`fa fa-${menu.icon || 'file-o'}`"></i>
                <span slot="title">{{menu.title}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script>
    import menus from '@/menu'
    import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                menus
            }
        },
        methods: {
            ...mapMutations(['SET_CURRENTAPP']),
            handleSelect(index) {
                const currentApp = menus[index];
                if(!currentApp.children){
                    this.$router.push(currentApp.path)
                }
                this.SET_CURRENTAPP(menus[index].children || [])
            }
        }
    }
</script>
