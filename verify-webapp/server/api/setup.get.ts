export default defineEventHandler(async (event) => {
    const layout = "main"
    return {
        host: event.node.req.headers.host,
        api: "127.0.0.1:8000",
        layout: layout
    }
})