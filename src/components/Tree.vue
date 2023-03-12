<template>
  <div v-for="item in data">
    {{ item.name }}
    <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive} from 'vue'
type Tree = {
    name: string;
    icon?: string;
    children?: Tree[] | [];
}
defineProps<{
    data?: any[]
}>()
const clickItem = (item: Tree) => {
    console.log(item)
}

</script>

<style scoped>

</style>
