<template>
    <div class="wrapper-option">
        <el-form ref="form" size="mini" :inline="true">
            <el-form-item :label="item.label" v-for="(item,index) in data" :key="String(index)">
                <el-input v-if="item.type=='text'" v-model="item.value" style="width:180px;"></el-input>
                <el-select v-else-if="item.type=='select'" v-model="item.value" placeholder="请选择" style="width:180px;">
                    <el-option :value="option.value" v-for="(option,index) in item.option" :key="String(index)" :label="option.label">
                    </el-option>
                </el-select>
                <el-date-picker v-else-if="item.type=='date'" unlink-panels v-model="item.value" :type="item.datetype" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" style="width:240px;">
                </el-date-picker>
                <div v-else>
                    <el-input v-model="item.value[0]" placeholder="" style="width:90px;"></el-input>
                    -
                    <el-input v-model="item.value[1]" placeholder="" style="width:90px;"></el-input>
                </div>
            </el-form-item>
            <el-button style="margin-left: 15px;" type="primary" size="mini" @click="search">查询</el-button>
            <el-button style="margin-left: 15px;" size="mini" @click="resetForm">重置</el-button>
        </el-form>
    </div>
</template>
<script>
    import { copy, getTimeStr } from '@/utils'
    export default {
        data() {
            return {
                data: [],
                searchMore: false
            }
        },
        props: ['initData'],
        watch: {
            initData(val) {
                this.resetSearch()
            }
        },
        created() {
            this.resetSearch()
        },
        methods: {
            resetSearch() {
                const data = copy(this.initData)
                this.data = data
            },
            search() {
                this.$emit('search')
            },
            getFormData() {
                let formData = {}
                this.data.forEach(function (item) {
                    if (item.type == "date") {
                        formData[item.key[0]] = getTimeStr(item.value[0], item.isShort)
                        let formTimeStr = item.isShort ? +item.value[1] + 86399000 : +item.value[1];
                        formData[item.key[1]] = +item.value[1] ? getTimeStr(formTimeStr, item.isShort) : ""
                    } else if (item.type == "numberBetween") {
                        item.key.forEach((dataKey, index) => {
                            formData[dataKey] = item.value[index]
                        })
                    } else if (item.type == "select") {
                        let defaultVal = item.default == 0 ? item.default : '';
                        formData[item.key] = item.value || defaultVal;
                    } else {
                        formData[item.key] = item.value || parseInt(item.value) === 0 ? item.value : ""
                    }
                })
                return formData;
            },
            resetForm() {
                this.data.forEach((item, index) => {
                    item.value = ""
                    this.$set(this.data, index, item)
                })
                this.$emit('search')
            },
        }
    }
</script>
<style lang="scss">
    .wrapper-option {
        .el-select,
        .el-range-editor {
            width: 100%;
        }
        .simple-form {
            .el-form-item--mini.el-form-item,
            .el-form-item--small.el-form-item {
                margin-bottom: 0px;
            }
        }
    }
</style>
