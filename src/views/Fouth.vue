<template>
    <h1>自定义插件</h1>
    <div>
        <button @click="showLoading">展示插件loading...</button>
        <hr>
    </div>
    <h1>展示element-plug</h1>
    <div>
         <el-button type="success" round>Success</el-button>
        <hr>
    </div>
</template>

<script setup lang='ts'>
import { ElButton } from 'element-plus';
import { ref, reactive, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
instance?.proxy?.$Loading.show()
setTimeout(() => {
    instance?.proxy?.$Loading.hide()
}, 200)

const showLoading = ()=>{
    alert("有反应,但是没展示loading")
    const instance = getCurrentInstance()
    instance?.proxy?.$Loading.show()
    setTimeout(() => {
        instance?.proxy?.$Loading.hide()
    }, 5000)
}

</script>

<style scoped>
::v-deep.el-button {
    background: #000;
}
/* :deep(.el-button){
    background: #000;
} */
</style>
