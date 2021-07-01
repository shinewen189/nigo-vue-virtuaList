import virtuaList from "./components/virtuaList"

export default {
    install(Vue) {
        Vue.component('tab', virtuaList)
    },
}

export {
    virtuaList
}
