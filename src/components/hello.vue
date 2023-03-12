<template>
  <div>我是hello组件</div>
  <div>title: {{ title }}</div>
  <div>age: {{ age }}</div>
</template>

<script setup lang='ts'>
import { ref, reactive, onActivated, onDeactivated } from 'vue'
onActivated(()=>{
    console.log("hello组件onActivated")
})
onDeactivated(() => {
    console.log("hello组件onDeactivated")
})

//测试props
//js写法
// defineProps({
//     title:{
//         type:String,
//         default:"20"
//     },
//     age:{
//         type:Number
//     }
// })

//ts写法
const prop = defineProps<{
    title?:string,
    age?:number 
}>()
// let prop = withDefaults(defineProps < {
//     title?:string,
//     age?:number 
//   }>(),{
//     title:"lyb",
//     age:()=>19
//   })
console.log("hello组件测试props",prop.age)
</script>

<style scoped>

</style>
