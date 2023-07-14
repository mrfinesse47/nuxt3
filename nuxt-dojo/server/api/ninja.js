// /api/ninjas

export default defineEventHandler(async (request) => {
  //   //handle query params from GET request
  //   const { name } = getQuery(request)
  //   //   handle post data
  //   const { age } = await readBody(request)

  //   API call with private key, use $fetch for server routes

  const { currencyKey } = useRuntimeConfig()
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
    // better than using process.env here, get it from runtime config
  )
  return data
})
