export async function setupConfig_Store() {
    const fetch = await useFetch('/api/setup', {
        onResponse({ request, response, options }) {
            // Process the response data
            return response._data
        },
    })
    return fetch.data.value
}