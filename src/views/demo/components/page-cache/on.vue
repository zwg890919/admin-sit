<template>
    <el-card shadow="never">
        <el-alert title="通过设置路由的meta中的alive设置页面是否缓存" type="success" description='在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存' :closable="false" show-icon class="mb-20"></el-alert>
        <el-input v-model="aliveData" style="width:350px;"></el-input>
    </el-card>
</template>
<script>
    export default {
        name: 'demo-components-page-cache-on',
        data() {
            return {
                aliveData: ''
            }
        }
    }
</script>
