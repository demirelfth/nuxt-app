export default defineEventHandler(async (event) => {

    const { currencyKey } = useRuntimeConfig()

    // handle query params
    // const { name } = getQuery(event)

    // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

    // return {
    //     message: `Hello, ${name}! Your age is ${age}`
    // }

    return data
})