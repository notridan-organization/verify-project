const config = {

    namespaced: true,

    state: () => ({
        host: null,
        api: null,
        layout: null,
    }),

    mutations: {
        SET_HOST(state: any, payload: any) { state.host = payload },
        SET_API(state: any, payload: any) { state.api = payload },
        SET_LAYOUT(state: any, payload: any) { state.layout = payload },
    },

    actions: {
        setConfig({ commit }, data: any) {
            commit("SET_HOST", data.host)
            commit("SET_API", data.api)
            commit("SET_LAYOUT", data.layout)
        }
    }

}

export default config