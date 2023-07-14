<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
        <!-- you dont need to import components, Nuxt does that for us -->
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
  // the way to specify a different layout
})
// nuxt by default allows async code in setup scripts

//fetch products
const { data: products } = await useFetch('https://fakestoreapi.com/products')
// note since this code can fire on the server you may run into trouble with using things only
// available to the browser such as the window object.
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
