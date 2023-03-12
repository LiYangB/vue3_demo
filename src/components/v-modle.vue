<template>
    <div v-if='modelValue' class="dialog">
        <div class="dialog-header">
            <div>标题</div>
            <div @click="close" class="cursor-pointer">x</div>
        </div>
        <div class="dialog-content">
            内容
        </div>
        <div @click="change" class="cursor-pointer">加一:{{ flag }}</div>
    </div>
</template>
 
<script setup lang='ts'>

import { inject,  ref } from 'vue'
type Props = {
    modelValue: boolean
}

const propData = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
}
//声明接收的是一个ref类型的.赋了一个默认值ref(1),为了避免后续应用ts报错
const flag = inject('flag', ref(1))
const change = () => {
    flag.value ++
}
</script>
 
<style>
.dialog {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.dialog-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.dialog-content {
    padding: 10px;
}
</style>