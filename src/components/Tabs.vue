<template>
    <ul class="tabs">
        <li v-for="item in dataSource" :key="item.value"
            :class="liClass(item)"
            @click="select(item)"
        >{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    type DataSourceItem = {text: string; value: string}

    @Component
    export default class Tabs extends Vue {
        @Prop({required: true, type: Array})
        dataSource!: DataSourceItem[];
        @Prop(String)
        value!: string;
        @Prop(String)
        classPrefix?: string;

        liClass(item: DataSourceItem){
            return {
                [this.classPrefix+'-tabs-item']: this.classPrefix, selected: item.value === this.value
            }
        }

        select(item: DataSourceItem) {
            this.$emit('update:value', item.value)
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{
        background: #c4c4c4;
        display: flex;
        align-items: center;
        font-size: 24px;
        > li{
            width: 50%;
            display: flex;
            justify-content: center;
            height: 64px;
            align-items: center;
            position: relative;
            &.selected::after{
                content: '';
                position: absolute;
                height: 4px;
                background: #333333;
                width: 100%;
                left: 0;
                bottom: 0;
            }
        }
    }
</style>