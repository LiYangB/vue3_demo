<template>
    <div>
        <slot name="header"></slot>
        <slot></slot>

        <slot name="footer"></slot>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

