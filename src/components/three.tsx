//v-bind {}
//v-model v-model={}
//v-show 支持
//v-if 不支持,使用三元表达式代替
// v-for 不支持,使用map代替
//v-on 改为onClick
//prop与emit 

interface Props {
    name?: string
}
import { defineComponent, ref } from "vue"
export default defineComponent({
    props:{
        name: String
    },
    emits:['lang'],
    setup(props:Props, {emit}) {
        let num = ref('')
        const test = function(){
            console.log("测试")
        }
        const fn = function(item:any){
            console.log("测试emit",item)
            emit("lang",item)
        }
        let arr = [1, 2, 3, 4, 5]
        return () => (
            <div>
                <h2>测试tsx写法三</h2>
                <input v-model={num.value} type="text"></input>
                <div>{num.value}</div>
                <div v-show={true}>show</div>
                {num.value ? <div>景天</div> : <div>雪见</div>}
                {
                arr.map(v => {
                    return <div onClick={()=>fn(v)}>${v}</div>
                })
                }
                <button onClick={test}>测试点击事件</button>
                <div>props:{props.name}</div>
            </div>
        )
    }
})