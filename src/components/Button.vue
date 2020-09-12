<template>
    <button class="button"
            @click="$emit('click', $event)">
        <slot/>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {

    }
</script>

<style lang="scss" scoped>
    .button {
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