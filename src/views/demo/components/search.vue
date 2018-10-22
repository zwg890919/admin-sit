<template>
    <el-card shadow="never">
        <search-group :init-data="conditionData" @search="searchForm" ref="searchForm"></search-group>
    </el-card>
</template>
<script>
    import serarchMixin from './mixins/search.js'
    export default {
        mixins: [serarchMixin],
        components: {
            'search-group': () => import('@/components/SearchGroup')
        },
        methods: {
            searchForm() {
                const form = this.$refs.searchForm ? this.$refs.searchForm.getFormData() : {}
                console.log(form)
            }
        }
    }
</script>

