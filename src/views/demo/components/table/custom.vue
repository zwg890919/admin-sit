<template>
    <el-card shadow="never">
        <div class="mb-20">
            <el-checkbox v-for="column in tableColumn" :key="column.prop" v-model="column.showCloumn" :checked="column.showCloumn">{{column.label}}</el-checkbox>
        </div>

        <el-table :data="tableData" border style="width: 100%">
            <el-table-column v-for="column in tableColumn"  v-if="column.showCloumn" :key="column.prop" :prop="column.prop" :label="column.label" :width="column.width">
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                tableColumn: [
                    {
                        prop: 'date',
                        label: '日期',
                        width: '180',
                        showCloumn:true
                    },
                    {
                        prop: 'name',
                        label: '姓名',
                        width: '180',
                        showCloumn:true
                    },
                    {
                        prop: 'address',
                        label: '地址',
                        showCloumn:true
                    }
                ],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>
