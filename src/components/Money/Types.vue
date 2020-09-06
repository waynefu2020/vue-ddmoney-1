<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        @Prop(Number) xxx: number | undefined; // 左边的(Number)类型和右边的类型需要类似

        type = '-';
        selectType(type: string){
            if(type !== '-' && type !== '+'){
                throw new Error('type is wrong')
            }
            this.type = type
        }
    }
</script>

<style lang="scss" scoped>
    .types{
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