<template>
    <jyc-container betterScroll>
        <template slot="header">Header</template>
        <div class="pd-10">
            <el-switch v-model="isLong" active-text="长内容" inactive-text="短内容">
            </el-switch>
            <div :style="{height:isLong?'2000px':'200px'}"></div>
        </div>
        <!-- <template slot="footer">Footer</template> -->
    </jyc-container>
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
