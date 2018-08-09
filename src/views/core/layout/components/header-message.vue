<template>
    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
        <el-button class="btn-text can-hover header-message" type="text">
            <el-badge :is-dot="message>0" class="item">
                <i class="fa fa-bell" style="font-size:16px"></i>
            </el-badge>
        </el-button>
    </el-tooltip>
</template>
<script>
    export default {
        data() {
            return {
                message: 10
            }
        }
    }
</script>

