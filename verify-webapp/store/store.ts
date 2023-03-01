import { createStore } from "vuex";
import config from "@/store/modules/config"

const store = createStore<any>({
    modules: {
        config
    },

    actions: {
        setup({ dispatch }, data: any) { dispatch('config/setConfig', data) }
    }

})

export default store