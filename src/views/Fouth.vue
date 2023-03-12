<template>
    <h1>自定义插件</h1>
    <div>
        <button @click="showLoading">展示插件loading...</button>
        <hr>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
instance?.proxy?.$loading.show()
setTimeout(() => {
    instance?.proxy?.$loading.hide()
}, 5000)

const showLoading = ()=>{
    const instance = getCurrentInstance()
    instance?.proxy?.$loading.show()
    setTimeout(() => {
        instance?.proxy?.$loading.hide()
    }, 5000)
}

</script>

<style scoped></style>
