<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tags in dataSource"
                :key="tags.id"
                :class="selectedTags.indexOf(tags)>=0 && 'selected'"
                @click="toggle(tags)"
            >{{tags.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined;
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
            if(name === ''){
                window.alert('标签名不能为空！')
            } else if(this.dataSource){
                this.$emit('update:dataSource',[...this.dataSource, name])
            }
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