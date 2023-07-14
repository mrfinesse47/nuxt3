<template>
  <div>
    <h2>From the backend Nuxt api:</h2>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=mario') -- a GET request
const { data } = await useFetch('/api/currency/CAD')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
