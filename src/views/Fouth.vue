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
    <h1>测试h函数</h1>
    <div>
        <Btn @on-click="getNum" text="测试h函数"></Btn>
        <hr>
    </div>
</template>

<script setup lang='ts'>
import { ElButton } from 'element-plus';
import { ref, reactive, getCurrentInstance, h } from 'vue'

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
const testEventLoop = ()=>{
    async function Prom() {
        console.log("Y")
        await Promise.resolve()
        console.log("X")
    }
    const x1 = setTimeout(() => {
        console.log(1)
        Promise.resolve().then(()=>{
            console.log(2)
        })
    }, 0);
    const x2 = setTimeout(() => {
        console.log(3)
        Promise.resolve().then(()=>{
            console.log(4)
        })
    }, 0);
    Promise.resolve().then(() => {
        console.log(5)
    })
    Promise.resolve().then(() => {
        console.log(6)
    })
    Promise.resolve().then(() => {
        console.log(7)
    })
    Promise.resolve().then(() => {
        console.log(8)
    })
    Prom()
    console.log(0)
}

type Props = {
    text: string
}
const Btn = (props: Props, ctx: any) => {
    return h('div', {
        class: 'bg-[#bfa] w-100px text-center rounded-12px cursor-pointer',
        onClick: () => {
            ctx.emit('on-click', 123)
        }
    }, props.text)
}

const getNum = (num: number) => {
    console.log(num);
}
</script>

<style scoped>
/* ::v-deep .el-button {
    background: #000;
} */
:deep(.el-button){
    background: #bfa;
    color: red;
}
</style>
