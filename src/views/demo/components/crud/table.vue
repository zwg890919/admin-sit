<template>
    <div>
        <el-card shadow="never">
            <search-group :init-data="conditionData" @search="getData" ref="searchForm" class="mb-20" v-show="searchShow"></search-group>
            <div class="mb-20 crud-menu">
                <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
                <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
                <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
                <el-button type="warning" size="small" icon="el-icon-download">导出表格</el-button>
                <div class="fr crud-menu__right">
                    <el-button size="small" icon="el-icon-refresh" circle @click="getData"></el-button>
                    <el-button size="small" icon="el-icon-search" circle @click="searchShow = !searchShow"></el-button>
                    <el-button type="primary" size="small" icon="el-icon-setting" circle @click="dialogFormVisible = true"></el-button>
                </div>
            </div>
            <el-table border stripe v-loading="loading" :data="tableData" max-height="570" size="small">
                <el-table-column v-for="item in tableColumnList" :key="item.prop" v-if="item.showCloumn" :prop="item.prop" :label="item.label" :min-width="item.width">
                </el-table-column>
                <el-table-column fixed="right" label="操作" min-width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <p class="pt-10" style="text-align:right" v-show="tableData.length > 0 && !loading">
                <el-pagination background :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, prev, pager, next,sizes" :total="400">
                </el-pagination>
            </p>
        </el-card>
        <el-dialog title="表格自定义表头设置" :visible.sync="dialogFormVisible" width="40%">
            <el-row>
                <el-col v-for="item in tableColumnList" :key="item.key" :span="6" class="mb-10">
                    <el-checkbox v-model="item.showCloumn" :checked="item.showCloumn">{{item.label}}</el-checkbox>
                </el-col>
            </el-row>
        </el-dialog>
    </div>

</template>
<script>
    import tableColumn from './mixins/table.js'
    import serarchMixin from '../mixins/search.js'
    export default {
        mixins: [tableColumn, serarchMixin],
        data() {
            return {
                tableLoading: false,
                dialogFormVisible: false,
                tableData: [],
                pagebar: {},
                loading: false,
                searchShow: true,
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
                const form = this.$refs.searchForm ? this.$refs.searchForm.getFormData() : {}
                const data = await this.$api.mock();
                this.loading = false;
                if (data.success) {
                    this.tableData = data.datas.result;
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
