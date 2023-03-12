import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

interface MousePosition {
    x: Ref<number>,
    y: Ref<number>
}
function useMousePosition(): MousePosition {
    const x = ref(0)
    const y = ref(0)

    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        document.getElementById("testHooks")?.addEventListener('mousemove', updateMouse)
    })

    onUnmounted(() => {
        document.getElementById("testHooks")?.removeEventListener('mousemove', updateMouse)
    })

    return { x, y }
}
export default useMousePosition