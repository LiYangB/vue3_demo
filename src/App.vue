<template>
  <h1>欢迎来到vue3+ts课程</h1>
  <div class="test">测试在css中使用js(vue3新加)</div>
  <ElButton type="danger" @click="randomColor">随机生成颜色</ElButton>
  <br>
  <RouterLink class="bg-[#fafafa] border ml-20px" to="/first">
    <button>前九课</button>
  </RouterLink>
  <RouterLink  to="/second" class="bg-[#fafafa] border ml-20px">
    <button >十~二十</button>
  </RouterLink>
  <RouterLink  to="/third" class="bg-[#fafafa] border ml-20px">
    <button >二十~二十九</button>
  </RouterLink>
  <RouterLink  to="/fouth" class="bg-[#fafafa] border ml-20px">
    <button >三十~...</button>
  </RouterLink>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import type { ElButton } from 'element-plus';
import { ref } from 'vue';
let color = ref("red")
function randomColor() {//得到随机的颜色值
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  color.value = "rgb(" + r + "," + g + "," + b + ")";
}

</script>

<style>
body{
  padding: 20px;
}
h1{
  font-size: 22px!important;
  font-weight: bold!important;
}
h2{
  font-size: 20px!important;
  font-weight: bold!important;
}
button{
  border: 1px solid #000;
  margin: 3px!important;
}
.test{
  width: 100px;
  height: 100px;
  border: #000 solid 2px;
  background: v-bind(color);
}
input{
  border: #000 2px solid;
}
</style>

