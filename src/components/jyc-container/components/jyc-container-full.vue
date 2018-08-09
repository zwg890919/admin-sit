<template>
    <div class="jyc-container__full">
        <div class="jyc-container__full__header pd-20" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="jyc-container__full__body" ref="container-wrapper">
            <slot></slot>
        </div>
        <div class="jyc-container__full__footer pd-20" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default {
        data() {
            return {
                scroll: null
            }
        },
        props: {
            'betterScroll': {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            if(this.betterScroll){
                this.scrollInit()
            }
        },
        beforeDestroy() {
            this.scrollDestroy()
        },
        methods: {
            scrollInit() {
                this.scroll = new Bscroll(this.$refs['container-wrapper'], {
                    mouseWheel: {
                        speed: 50,
                        invert: false,
                        easeTime: 0
                    },
                    scrollbar: {
                        fade: true,
                        interactive: false,
                    },
                    scrollY: true,
                    click: false,
                    autoBlur: true,
                })
            },
            scrollDestroy() {
                if (this.scroll) {
                    this.scroll.destroy()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .jyc-container__full {
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ffffff;
        border: solid #ccc;
        border-width: 1px 1px 0px;
        flex-direction: column;
        overflow: hidden;
        &__header {
            border-bottom: #ccc 1px solid;
            font-size: 16px;
        }
        &__body {
            position: relative;
            flex-grow: 1;
            overflow: auto;
        }
        &__footer {
            border-top: #ccc 1px solid;
            font-size: 16px;
        }
    }
</style>
