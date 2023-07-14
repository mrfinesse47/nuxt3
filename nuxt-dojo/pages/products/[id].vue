/products/:id

<template>
  <div>
    <p>Product Details for: {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio
      earum adipisci cumque suscipit beatae alias ea unde, eveniet nihil
      recusandae, totam delectus fuga quod? Saepe eius sunt dicta cum
      repudiandae itaque impedit repellat. Similique ab, sequi architecto maxime
      nulla dolorum quisquam eius, dolores quod vitae doloremque quis rerum
      voluptate!
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped></style>
