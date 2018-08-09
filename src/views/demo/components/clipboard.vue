<template>
    <jyc-container betterScroll>
        <template slot="header">剪切板</template>
        <div class="pd-20">
            <el-row :gutter="10">
                <el-col :span="24">
                    <el-alert title="实现依赖clipboard-polyfill" type="success" description='详细地址：https://github.com/lgarron/clipboard-polyfill' :closable="false" show-icon class="mb-20">
                    </el-alert>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="text" ></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button class="ml-15" @click="copyText()">点击复制进剪贴板</el-button>
                </el-col>
                <el-col :span="12">
                    <el-input type="textarea" placeholder="在这里检测你的剪切板数据"></el-input>
                </el-col>
            </el-row>
        </div>
    </jyc-container>
</template>

<script>
    import clipboard from 'clipboard-polyfill'
    export default {
        data() {
            return {
                text: 'clipboard Test'
            }
        },
        methods: {
            copyText() {
                clipboard.writeText(this.text)
            }
        }
    }
</script>
