<template>
  <div class="flex bg-white header shadow-md h-24 p-4 px-10">
    <nuxtLink to="/" class="cursor-pointer"
      ><img src="../assets/logo.jpg" width="140" class="mr-6"
    /></nuxtLink>
    <div class="flex">
      <nuxtLink to="/info" class="option">Info</nuxtLink>
      <!-- <nuxtLink to="/info" class="option">Blog</nuxtLink> -->
      <nuxtLink to="/contacto" class="option">Contacto</nuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.option {
  @apply mr-6 text-xl text-gray-600 hover:text-gray-900 my-auto cursor-pointer;
}
</style>
