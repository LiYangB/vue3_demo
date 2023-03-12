<template>
  <div>
    <button v-has-show="'shop:edit'">编辑</button>
    <button v-has-show="'shop:create'">创建</button>
    <button v-has-show="'shop:delete'">删除</button>
  </div>
</template>

<script setup lang='ts'>
import type { ref, Directive } from 'vue'
//mock后台返回的数据
const permission = [
    '李阳滨:shop:edit',
    // '李阳滨:shop:create',
    '李阳滨:shop:delete'
]

const userId = "李阳滨"
const vHasShow: Directive<HTMLElement, string> = (el, bingding) => {
    console.log(" el,bingding",el,bingding)
    if (!permission.includes(userId + ':' + bingding.value)) {
        el.style.display = 'none'
    }
}
</script>

<style scoped>

</style>
