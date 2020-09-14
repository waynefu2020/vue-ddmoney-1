<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Types :value.sync="record.type"/>
            <div class="notes">
                <FormItem @update:value="onUpdateNotes"
                          field-name="备注" placeholder="请输入备注"/>
            </div>
            <Tags/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import Tags from '@/components/Money/Tags.vue';
    import store from '@/store/index2';

    const recordList = store.recordList;

    @Component({
        components: {Tags, FormItem, Types, NumberPad}
    })
    export default class Money extends Vue {
        tags = store.tagList;
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };
        recordList: RecordItem[] = recordList;

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        saveRecord() {
            store.createRecord(this.record)
        }

    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
    .notes{
        padding: 12px 0;
    }
</style>