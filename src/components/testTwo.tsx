import { defineComponent } from "vue";
export default defineComponent({
    data(){
        return {
            age:18
        }
    },
    render(){
        return (<h2>测试tsx写法二{this.age}</h2>)
    }
})