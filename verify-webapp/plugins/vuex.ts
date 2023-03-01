import store from "@/store/store"
import { setupConfig_Store } from "@/src/configs/setup"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("vue:setup", () => {
        nuxtApp.vueApp.use(store)
        setupConfig_Store().then((data: any) => {
            store.dispatch("setup", data)
        })
    })
})