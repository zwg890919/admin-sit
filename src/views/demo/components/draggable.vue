<template>
    <jyc-container>
        <template slot="header">
            拖拽指令
        </template>
        <div class="pd-20">
            <el-alert title="elementDialog拖拽指令" type="success" description='为ElementUI的Dialog组件实现的拖拽指令功能 只针对Dialog使用' :closable="false" show-icon class="mb-20"></el-alert>
            <el-button @click="dialogVisible = true">点击弹窗</el-button>
        </div>
        <el-dialog title="拖拽头部" v-drag-dialog :visible.sync="dialogVisible" width="30%" >
            <span>拖拽弹窗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </jyc-container>
</template>

<script>
    import dragDialog from '@/directive/dragDialog'
    export default {
        directives: {
            dragDialog
        },
        data() {
            return {
                dialogVisible: false,
            }
        },
    }
</script>
