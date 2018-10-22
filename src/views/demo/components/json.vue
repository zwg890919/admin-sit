<template>
    <el-card shadow="never">
        <el-row>
            <el-col :span="8">
                <el-input type="textarea" autosize v-model="val"></el-input>
            </el-col>
            <el-col :span="10" :offset="2">
                <vue-json-pretty :data="jsonData" show-length>
                </vue-json-pretty>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
    import VueJsonPretty from 'vue-json-pretty'
    export default {
        data() {
            return {
                val: '',
                data: {
                    status: 200,
                    error: "",
                    datas: [
                        { news_id: 51184, title: "iPhone X Review", source: "Netease phone" },
                        { news_id: 51183, title: "Traffic paradise", source: "Netease smart" },
                        { news_id: 51182, title: "Teslamask's American Business Relations", source: "AI Finance", members: ["Daniel, Mike, John"] }
                    ]
                }
            }
        },
        created() {
            this.val = JSON.stringify(this.data)
        },
        computed: {
            jsonData() {
                try {
                    return JSON.parse(this.val)
                } catch (err) {
                    return this.data
                }
            }
        },
        components: {
            VueJsonPretty
        }
    }
</script>
