<template>
    <el-tooltip effect="dark" :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
        <el-button class="btn-text can-hover header-fullscreen" type="text" @click="fullScreenToogle">
            <i v-if="isFullScreen" class="fa fa-compress" aria-hidden="true"></i>
            <i v-else class="fa fa-arrows-alt" aria-hidden="true"></i>
        </el-button>
    </el-tooltip>
</template>
<script>
    import screenfull from 'screenfull'
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['isFullScreen'])
        },
        methods: {
            ...mapMutations(['TOOGLE_FULLSCREEN']),
            fullScreenToogle() {
                if (!screenfull.enabled) {
                    this.$message({
                        message: 'you browser can not work',
                        type: 'warning'
                    })
                    return false
                }
                this.TOOGLE_FULLSCREEN(!this.isFullScreen)
                screenfull.toggle()
            },
        }
    }
</script>
<style lang="scss">
</style>
