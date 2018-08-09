<template>
    <div class="jyc-container">
        <jyc-container-full v-if="type === 'full'" :betterScroll="betterScroll">
            <slot v-if="$slots.header" name="header" slot="header"></slot>
            <slot></slot>
            <slot v-if="$slots.footer" name="footer" slot="footer"></slot>
        </jyc-container-full>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            type: {
                type: String,
                default: 'full'
            },
            'betterScroll': {
                type: Boolean,
                default: false
            }
        },
        components: {
            'jyc-container-full': () => import('./components/jyc-container-full.vue')
        }
    }
</script>

<style lang="scss" scoped>
    .jyc-container {
        flex: 1;
        position: relative;
    }
</style>
