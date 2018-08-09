<template>
    <jyc-container>
        <template slot="header">
            富文本编辑器
        </template>
        <div class="pd-20">
            <el-alert title="实现依赖vue-quill-editor"
                      type="success"
                      description='详细地址：https://github.com/surmon-china/vue-quill-editor'
                      :closable="false"
                      show-icon
                      class="mb-20">
            </el-alert>
            <quill-editor ref="myQuillEditor" :options="editorOptions">
            </quill-editor>
        </div>
    </jyc-container>
</template>
<script>
    import "quill/dist/quill.core.css";
    import "quill/dist/quill.snow.css";
    import "quill/dist/quill.bubble.css";

    import { quillEditor } from 'vue-quill-editor'
    export default {
        data() {
            return {
                content: null,
                editorOptions: {
                    placeholder: '',
                    theme: 'snow',  // 主题
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ]
                    }
                }
            }
        },
        components: {
            quillEditor
        },
    }
</script>
<style lang="scss" scoped>
    .quill-editor {
        height: 400px;
    }
</style>
