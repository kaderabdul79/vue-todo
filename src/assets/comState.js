import { reactive,toRefs } from "vue"

export const comState = () => {
    const state = reactive({
        toDoName:"dfdfdf"
    })
    return toRefs(state)
}