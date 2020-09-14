<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList"
                :key="tag.id"
                :class="selectedTags.indexOf(tag)>=0 && 'selected'"
                @click="toggle(tag)"
            >{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import store from '@/store/index2';

    @Component
    export default class Tags extends Vue {
        tagList = store.fetchTags();
        selectedTags: string[] = [];

        toggle(tags: string) {
            const index = this.selectedTags.indexOf(tags);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tags);
            }
            this.$emit('update:value', this.selectedTags)
        }

        create(){
            const name = window.prompt('请输入标签名');
            if(!name){return window.alert('标签名不能为空！')}
                store.createTag(name)
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        background: white;
        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                background: #d9d9d9;
                $h: 24px;
                border-radius: $h/2;
                height: $h;
                line-height: $h;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;

                &.selected {
                    background: black;
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                color: #999;
                padding: 0 3px;
            }
        }
    }
</style>