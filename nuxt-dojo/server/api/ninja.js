// /api/ninjas

export default defineEventHandler(async (request) => {
  //   //handle query params from GET request
  //   const { name } = getQuery(request)
  //   //   handle post data
  //   const { age } = await readBody(request)

  //   API call with private key, use $fetch for server routes
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${process.env.API_KEY}`
  )
  return data
})
