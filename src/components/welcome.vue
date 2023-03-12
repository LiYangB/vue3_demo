<template>
  <div>我是welcome组件</div>
    <button @click="clickTap">welcome自定义事件</button>
</template>

<script setup lang='ts'>
import { ref, reactive, onActivated, onDeactivated } from 'vue'
onActivated(() => {
    console.log("welcome组件onActivated")
})
onDeactivated(() => {
    console.log("welcome组件onDeactivated")
})

//测试自定义事件
// const emit = defineEmits(['add'])

//如果用了ts可以这样xie
const emit = defineEmits<{
    (e: "add", name: string): void
}>()
const clickTap = () => {
    emit('add', '李阳滨')
} 

function sing() {
    console.log('我是子组件的方法');
}
const list = reactive<number[]>([4, 5, 6])

defineExpose({
    list,
    sing
})
</script>

<style scoped>

</style>
