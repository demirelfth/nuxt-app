export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = getQuery(event)

    // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_98R2icek65qGC3wiEHGWRYZFLgax0s6dXtfCI3op')

    // return {
    //     message: `Hello, ${name}! Your age is ${age}`
    // }

    return data
})