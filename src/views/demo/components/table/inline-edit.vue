<template>
    <div>
        <el-card shadow="never">
            <div class="mb-20 crud-menu">
                <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
                <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
                <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
                <el-button type="warning" size="small" icon="el-icon-download">导出表格</el-button>
            </div>
            <el-table border stripe v-loading="loading" :data="tableData" max-height="570" size="small">
                <el-table-column v-for="item in tableColumnList" :key="item.prop" :label="item.label" :min-width="item.width" v-if="item.showCloumn" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.edit">12313</span>
                        <span v-else>{{ scope.row[item.prop]}}</span>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" min-width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">查看</el-button>
                        <el-button type="text" size="small" @click="scope.row.edit = true">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <p class="pt-10" style="text-align:right" v-show="tableData.length > 0 && !loading">
                <el-pagination background :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, prev, pager, next,sizes" :total="400">
                </el-pagination>
            </p>
        </el-card>
    </div>

</template>
<script>
    import tableColumn from '../crud/mixins/table.js'
    export default {
        mixins: [tableColumn],
        data() {
            return {
                tableData: [],
                loading: false,
            }
        },
        components: {
            'search-group': () => import('@/components/SearchGroup')
        },
        computed: {
            tableColumnList() {
                return this.tableColum
            }
        },
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                this.loading = true;
                const data = await this.$api.mock();
                this.loading = false;
                if (data.success) {
                    let items = data.datas.result;
                    this.tableData = items.map(v => {
                        this.$set(v, 'edit', false)
                        return v
                    })
                }
            },
        }
    }
</script>
<style lang="scss" scoped>
    .crud-menu {
        &__right {
            .el-button {
                margin-left: 5px;
            }
        }
    }
</style>
