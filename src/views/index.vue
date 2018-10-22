<template>
    <el-card shadow="never">
        <el-switch v-model="isLong" active-text="长内容" inactive-text="短内容">
        </el-switch>
        <div :style="{height:isLong?'7000px':'200px'}"></div>
    </el-card>
</template>
<script>
    export default {
        data() {
            return {
                isLong: false
            }
        }
    }
</script>
