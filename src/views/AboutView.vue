<template>
    <h1>测试watch</h1>
    <div>
        <input type="text" v-model="msg" />
        <button @click="change">暂停</button>
        <hr>
    </div>
    <h1>测试组件</h1>
    <div>
        <hello></hello>
        <welcome></welcome>
        <hr>
    </div>
    <h1>测试动态加载组件</h1>
    <div>
        <button @click="currentTab.tabComp = tabData.tabComphello">
            hello
        </button>
        <button @click="currentTab.tabComp = tabData.tabCompwelcome">
            welcome
        </button>
        <KeepAlive>
            <component :is="currentTab.tabComp"></component>
        </KeepAlive>
        <hr>
    </div>
    <h1>测试prop</h1>
    <div>
        <hello :age="18"></hello>
        <hr>
    </div>
    <h1>测试自定义事件</h1>
    <div>
        <welcome @add="getEvent"></welcome>
        <hr>
    </div>
    <h1>调用子组件</h1>
    <div>
        <Button @click="handleClick">点击调用子组件方法</Button>
        <welcome ref="childs" @add="getEvent" />
        <hr>
    </div>
    <h1>递归组件</h1>
    <div>
        <TreeCom :data="data"></TreeCom>
        <hr>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { reactive, markRaw } from 'vue'

import hello from "../components/hello.vue"
import welcome from "../components/welcome.vue"
import TreeCom from "../components/Tree.vue"
//测试watch
let msg = ref("1")
const stops = watch(msg, (n) => {
    console.log(n)
})
function change() {
    stops()
    console.log("暂停", msg.value)
}
//加载动态组件
const tabData = reactive(
    {
        tabComphello: markRaw(hello),
        tabCompwelcome: markRaw(welcome)
    },
)
let currentTab = reactive({
    tabComp: markRaw(tabData.tabComphello)
})
//测试自定义事件
function getEvent(name: string) {
    console.log("在父组件中获取子组件的参,自定义事件", name)
}
//测试调用子组件方法
const childs = ref<InstanceType<typeof welcome>>()

function handleClick() {
    console.log("父组件中获取子组件值,ref直接获取", childs.value?.list)
    childs.value?.sing()
}
//递归组件
type TreeList = {
    name: string;
    children?: TreeList[] | [];
};
const data = reactive<TreeList[]>([
    {
        name: "no.1",
        children: [
            {
                name: "no.1-1",
                children: [
                    {
                        name: "no.1-1-1",
                    },
                ],
            },
        ],
    },
    {
        name: "no.2",
        children: [
            {
                name: "no.2-1",
            },
        ],
    },
    {
        name: "no.3",
    },
]);

</script>

<style scoped>

</style>

