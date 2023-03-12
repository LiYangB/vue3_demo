<template>
<h1>测试transition-group组件</h1>
<div>
    <button @click='Push'>加一</button>
    <button @click='Pop'>减一</button>
    <div class="flex flex-wrap">
        <transition-group leave-active-class="animate__animated animate__hinge"
            enter-active-class="animate__animated animate__rotateInUpRight">
            <div style="margin: 10px;" :key="item" v-for="item in list">{{ item }}</div>
        </transition-group>
    </div>
    <hr>
</div>
<h1>测试tsx写法</h1>
<div>
    <testOne></testOne>
    <testTwo></testTwo>
    <testThree name="李阳滨" @lang="getTsxEmit"></testThree>
    <hr>
</div>
<h1>v-modle组件</h1>
<div>
    <button @click="show = !show">开关{{show}}</button>
    <Dialog v-model="show"></Dialog>
    <div>测试provide:{{ flag }}</div>
    <hr>
</div>
<h1>自定义指令(权限判断,拖元素)</h1>
<div>
    <test-directive></test-directive>
    <test-d></test-d>
    <hr>
</div>
<h1>自定义hooks与vueuse库</h1>
<div>
    <test-hooks></test-hooks>
    <hr>
</div>
<h1>自定义全局变量</h1>
<div>
    <h1>{{ $env }}</h1>
    <hr>
</div>

</template>

<script setup lang='ts'>
import { ref, reactive, provide } from 'vue'
import testOne from "@/components/testOne"
import testTwo from "@/components/testTwo"
import testThree from "@/components/three"
import Dialog from "@/components/v-modle.vue";
import testDirective from "@/components/testDirective.vue"
import testD from "@/components/testD.vue"
import testHooks from "@/components/testHooks.vue"

//测试transition-group
const list = reactive<number[]>([0, 1, 2, 4, 5, 6, 7, 8, 9])
const Push = () => {
    list.push(list.length + 1)
}
const Pop = () => {
    list.pop()
}
const getTsxEmit = (item:any) => {
    console.log("在父组件中get Emit",item)
}

const show = ref(false)
//测试provide
let flag = ref<number>(1)
provide('flag', flag)
</script>

<style scoped>

</style>
