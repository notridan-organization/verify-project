import { mapState } from "vuex"

const app = {
    data() {
        return {
            loading: true
        }
    },

    computed: {
        ...mapState("config", {
            $layout: "layout"
        })
    },

    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 1000)
    },
}

export default app