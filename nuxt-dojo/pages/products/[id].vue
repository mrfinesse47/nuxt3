/products/:id

<template>
  <div>
    <p>Product Details for: {{ id }}</p>
    <p>
      {{ product.title }}
    </p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//fetch product

const { data: product } = await useFetch(uri, { key: id })
// nuxt wont grab a different prod unless we specify a key

definePageMeta({
  layout: 'products',
})
</script>

<style scoped></style>
