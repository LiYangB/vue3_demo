<template>
    <div class="bg-[#fafafa] ">
        <div class="flex">
            <img class="bg-[#00000044] w-50px h-50px rounded-50px" :src="data.url"/>
            <span class="w-100px h-20px  ml-20px mt-15px"> {{ data.name }}</span>
        </div>
        <hr class="mt-10px">
        <div class="flex w-full flex-wrap">
            <div class="w-full h-20px  mt-10px">作者年龄: {{ data.age }}</div>
            <div class="w-full h-20px  my-10px">作者描述: {{data.desc}}</div>
        </div>
    </div>
</template>


<script setup lang='ts'>
import { ref, reactive} from 'vue'
// import axios from 'axios'
import {axios}  from '@/tool/axios';

interface Data {

        name:string,
        age: number,
        url: string,
        desc: string

}
    
const  data  = await axios.get<Data>(`./data.json`)

//这样子不行
// function get(): any {
//     setTimeout(() => {
//         axios.get<Data>(`./data.json`).then((res) => {
//             console.log(res.data)
//             return res.data
//         })
//     }, 2000);
// }
// const data = await get()
</script>

