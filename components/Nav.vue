<template>
  <div
    class="flex bg-white header shadow-sm h-24 p-4 px-4 md:px-10 items-center"
  >
    <div class="flex flex-1">
      <nuxtLink to="/" class="cursor-pointer"
        ><img src="../assets/logos/logo.jpg" width="80%" class="mr-8"
      /></nuxtLink>
      <div class="flex">
        <nuxtLink to="/info" class="option">Info</nuxtLink>
        <!-- <nuxtLink to="/info" class="option">Blog</nuxtLink> -->
        <nuxtLink to="/contacto" class="option">Contacto</nuxtLink>
        <nuxtLink to="/blog" class="option">Noticias</nuxtLink>
        <a href="https://foro.aguaverde.org/" target="_blank" class="option"
          >Foro</a
        >
      </div>
    </div>
    <div class="ml-4 hidden md:inline-flex">
      <a href="https://www.instagram.com/triatlonaguaverde/" target="_blank">
        <img src="../assets/logos/instagram.svg" width="40" class="sn"
      /></a>
      <a href="https://www.facebook.com/triaguaverde/" target="_blank"
        ><img src="../assets/logos/facebook.svg" width="40" class="sn"
      /></a>
      <a href="https://twitter.com/triaguaverde" target="_blank"
        ><img src="../assets/logos/twitter.svg" width="40" class="sn"
      /></a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.option {
  @apply mx-3 text-sm md:text-xl text-gray-600 hover:text-gray-900 my-auto cursor-pointer;
}

.inline-flex {
  display: inline-flex !important;
}

.sn {
  @apply cursor-pointer mr-6;
}
</style>
