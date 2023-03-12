<template>
    <!--  -->
    <h1>测试solt</h1>
    <div>
        <testSlot>
            <template v-slot:header>
                <div>solt从父来到子</div>
            </template>
            <template v-slot>
                <div>2solt从父来到子</div>
            </template>
            <template v-slot:footer>
                <div>3solt从父来到子</div>
            </template>
        </testSlot>
        <hr>
    </div>
    <h1>测试骨架屏(异步组件-suspense)</h1>
    <div>
        <Suspense>
            <template #default>
                <blockSync></blockSync>
            </template>
            <template #fallback>
                <block></block>
            </template>
        </Suspense>
        <hr>
    </div>
    <h1>测试传送组件-Teleport</h1>
    <div class="relative">
        <Teleport :disabled="changeTeleport" to="body">
            <testTeleport></testTeleport>
        </Teleport>
        <button @click="changeTeleport = !changeTeleport">改变传送</button>
        <hr>
    </div>
    <h1>测试transition组件</h1>
    <div>
        <h2>测试animate.css</h2>
        <button @click='flag = !flag'>切换</button>
        <!-- <transition name='fade'>
            <div v-if='flag' class="box"></div>
        </transition> -->
        <transition 
            appear
            appear-active-class="animate__animated animate__zoomOutUp" 
            leave-active-class="animate__animated animate__zoomOutDown"
            enter-active-class="animate__animated animate__zoomOutUp">
            <div v-if="!flag" class="box"></div>
        </transition>
        <hr>
        <h2>测试gsap</h2>
        <button @click='flags = !flags'>切换</button>
        <transition 
        @before-enter="beforeEnter" 
        @enter="enter" 
        @leave="leave">
            <div v-if="!flags" class="box"></div>
        </transition>
        <hr>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue'
//测试solt
import testSlot from "../components/testSlot.vue"
//测试骨架屏(异步组件-suspense)
import block from "../components/block.vue"
//测试传送组件-Teleport
import testTeleport from "@/components/testTeleport.vue"
//测试transition
import 'animate.css'
import gsap from 'gsap'


const blockSync = defineAsyncComponent(() => import('@/components/blockSync.vue'))

// const blockSync = defineAsyncComponent({
//     // 加载函数
//     loader: () => import('@/components/blockSync.vue'),
//     // 加载异步组件时使用的组件
//     loadingComponent: block,
//     // 展示加载组件前的延迟时间，默认为 200ms
//     delay: 5000,
//     // 如果提供了一个 timeout 时间限制，并超时了
//     // 也会显示这里配置的报错组件，默认值是：Infinity
//     timeout: 3000
// })

let changeTeleport = ref(false)

//测试transition
let flag = ref(false)
let flags = ref(true)

const beforeEnter = (el: Element) => {
    gsap.set(el, {
        width: 0,
        height: 0
    })
}
const enter = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        width: 100,
        height: 100,
        duration: 3,
        x: 300,
        onComplete: done
    })
}
const leave = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        width: 0,
        height: 0,
        duration: 3,
        x: 0,
        onComplete: done
    })
}
</script>

<style scoped>
.box {
    background: yellow;
    width: 100px;
    height: 100px;
}

/* 开始过度 */
.fade-enter-from {
    background: red;
    width: 0px;
    height: 0px;
    transform: rotate(360deg)
}

/* 开始过度了 */
.fade-enter-active {
    transition: all 2.5s linear;
}

/* 过度完成 */
.fade-enter-to {
    background: yellow;
    width: 200px;
    height: 200px;
}

/* 离开的过度 */
.fade-leave-from {
    width: 200px;
    height: 200px;
    transform: rotate(360deg)
}

/* 离开中过度 */
.fade-leave-active {
    transition: all 1s linear;
}

/* 离开完成 */
.fade-leave-to {
    width: 0px;
    height: 0px;
}
</style>
