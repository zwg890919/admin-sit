<template>
    <div class="tags-nav">
        <scroll-pane ref='scrollPane'>
            <router-link ref='tag' class="tags-nav__item" :class="isActive(tag)?'active':''" v-for="tag in Array.from(visitedViews)" :to="tag" :key="tag.path">
                <i class="fa fa-circle"></i>
                {{tag.meta.title}}
                <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
            </router-link>
        </scroll-pane>
        <el-dropdown  class="tags-menu" @command="handleCommand" trigger="click">
            <el-button type="primary" size="mini">
                更多
                <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
                <el-dropdown-item command="closeAll">关闭全部</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import ScrollPane from '@/components/ScrollPane'
    export default {
        components: { ScrollPane },
        data() {
            return {
                top: 0,
                left: 0,
                selectedTag: {}
            }
        },
        computed: {
            visitedViews() {
                return this.$store.state.tagsView.visitedViews
            }
        },
        watch: {
            $route() {
                this.moveToCurrentTag()
            },
        },
        methods: {
            isActive(route) {
                return route.path === this.$route.path
            },
            moveToCurrentTag() {
                const tags = this.$refs.tag
                this.$nextTick(() => {
                    for (const tag of tags) {
                        if (tag.to.path === this.$route.path) {
                            this.$refs.scrollPane.moveToTarget(tag.$el)
                            break
                        }
                    }
                })
            },
            closeSelectedTag(view) {
                this.$store.dispatch('delVisitedViews', view).then((views) => {
                    if (this.isActive(view)) {
                        const latestView = views.slice(-1)[0]
                        if (latestView) {
                            this.$router.push(latestView)
                        } else {
                            this.$router.push('/')
                        }
                    }
                })
            },
            closeOthersTags() {
                this.$store.dispatch('delOthersViews', this.$route)
            },
            closeAllTags() {
                this.$store.dispatch('delAllViews')
                this.$router.push('/')
            },
            handleCommand(type){
                if(type == 'closeOther'){
                    this.closeOthersTags()
                }else if(type == 'closeAll'){
                    this.closeAllTags()
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .tags-nav {
        &__item {
            display: inline-block;
            position: relative;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            text-decoration: none;
            color: #495060;
            &.active {
                border: 1px solid #66b1ff;
                // color: #409eff;
                .fa {
                    color: #409eff;
                }
            }
            .fa-circle {
                color: #cccccc;
                font-size: 14px;
                margin-right: 7px;
            }
        }
        .tags-menu{
            position: absolute;
            top: 5px;
            right: 10px;
        }
    }
</style>
