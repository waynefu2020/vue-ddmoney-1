<template>
    <Layout>
        <div class="tags">
            <router-link class="tag"
                         v-for="tag in tags" :key="tag.id"
                         :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">新增标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {mixins} from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';
    const tagHelper = require('@/mixins/TagHelper');

    @Component({
        computed: {
            tags() {
                return this.$store.state.tagList;
            }
        },
        mixins: [tagHelper]
    })
    export default class Labels extends mixins(TagHelper) {
        beforeCreate() {
            this.$store.commit('fetchTags');
        }

    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 44px;
            border-bottom: 1px solid #e6e6e6;

            svg {
                color: #666;
                margin-right: 16px;
                width: 18px;
                height: 18px;
            }
        }
    }

    .createTag {
        background: #484848;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        height: 40px;

        &-wrapper {
            padding: 16px;
            text-align: center;
            margin-top: 44-16px;
        }
    }
</style>