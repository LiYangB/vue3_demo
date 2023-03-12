<template>
    <div class="w-200px h-100px border" id="testHooks">
        <p>X: {{ x }}</p>
        <p>Y: {{ y }}</p>
    </div>
    <div>
        <button @click="open">打开取色器</button>
        <button class="bg-[#bfa] ml-10px">按钮</button>
        <p>颜色：{{ sRGBHex }}</p>
      </div>
</template>

<script lang="ts" setup>
// 引入hooks
import useMousePosition from '@/hooks/useMousePosition'
import { useEyeDropper } from '@vueuse/core'
// 使用hooks功能
const { x, y } = useMousePosition()
const { open, sRGBHex } = useEyeDropper()
</script>