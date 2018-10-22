<template>
    <div>
        <el-tooltip effect="dark" content="模版" placement="bottom">
            <el-button class="btn-text can-hover header-fullscreen" type="text" @click="themeDialogShow">
                <i class="fa fa-diamond" aria-hidden="true"></i>
            </el-button>
        </el-tooltip>
        <el-dialog title="模版设置" :visible.sync="dialogVisible" width="500px">
            <el-radio-group v-model="themeType" >
                <el-radio label="default">默认模版</el-radio>
                <el-radio label="dark">暗色模版</el-radio>
            </el-radio-group>
        </el-dialog>
    </div>
</template>
<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                dialogVisible: false,
                // themeType: 'default'
            }
        },
        computed: {
            ...mapGetters(['themeActive']),
            themeType:{
                get(){
                    return this.themeActive || 'default'
                },
                set(val){
                    this.SET_THEME(val)
                }
            }
        },
        watch: {
            themeActive(val){
                this.themeType = val
            }
        },
        methods: {
            ...mapMutations([
                'SET_THEME'
            ]),
            themeDialogShow() {
                this.dialogVisible = true
            }
        }
    }
</script>
