<template>
  <div>
    <header class="shadow-small bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4 pr-8">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
          <li>
            <NuxtLink to="/products/65r7685" class="btn">Dead Link</NuxtLink>
            <!-- the dead link is to demonstrate error handling for bad route -->
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <!-- output the page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
