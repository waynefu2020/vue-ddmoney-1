<template>
    <div>
        <Layout>
            <Types class-prefix="type" :value.sync="type" :data-source="typeList"/>
            <Tabs class-prefix="interval" :value.sync="interval" :data-source="intervalList"/>
            <div>
                type: {{type}}
                interval: {{interval}}
            </div>
        </Layout>
    </div>
</template>

<style lang="scss" scoped>
    ::v-deep .type-tabs-item{
        background: white;
        &.selected{
            background: #bcbcbc;
            &::after{
                display: none;
            }
        }
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import Types from '@/components/Money/Types.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components:{Tabs, Types}
    })
    export default class Statistics extends Vue{
        type = '-';
        interval = 'day';
        intervalList = [
            {text:'天', value:'day'},
            {text:'周', value:'week'},
            {text:'月', value:'month'}
        ];
        typeList = [
            {text:'支出', value:'-'},
            {text:'收入', value:'+'},
        ]
    }
</script>