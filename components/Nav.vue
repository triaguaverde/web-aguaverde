<template>
  <div
    class="
      flex
      bg-white
      header
      shadow-sm
      p-4
      px-4
      md:px-10
      items-center
      md:h-24
    "
  >
    <div class="md:flex md:flex-1 w-full">
      <nuxtLink to="/" class="cursor-pointer"
        ><img src="../assets/logos/logo.jpg" class="md:mr-8 mx-auto my-2"
      /></nuxtLink>
      <div class="flex">
        <div class="hidden md:block my-auto">
          <nuxtLink to="/info" class="option">Info</nuxtLink>
          <nuxtLink to="/contacto" class="option">Contacto</nuxtLink>
          <nuxtLink to="/blog" class="option">Noticias</nuxtLink>
          <nuxtLink to="/mujer" class="option">Mujer</nuxtLink>
          <nuxtLink to="/cal" class="option">Calendario</nuxtLink>
          <a href="https://foro.aguaverde.org/" target="_blank" class="option"
            >Foro</a
          >
        </div>
        <div class="block md:hidden mx-auto text-center mt-4">
          <nuxtLink to="/info" class="opt-mb">Info</nuxtLink>
          <nuxtLink to="/contacto" class="opt-mb">Contacto</nuxtLink>
          <nuxtLink to="/blog" class="opt-mb">Noticias</nuxtLink>
          <nuxtLink to="/mujer" class="opt-mb">Mujer</nuxtLink>
          <div class="mt-5">
            <nuxtLink to="/cal" class="opt-mb">Calendario</nuxtLink>
            <a href="https://foro.aguaverde.org/" target="_blank" class="opt-mb"
              >Foro</a
            >
          </div>
        </div>
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
  @apply mx-8 md:mx-3 text-sm md:text-xl text-gray-600 hover:text-gray-900 my-2 md:my-auto cursor-pointer;
}
.opt-mb {
  @apply m-2 text-sm text-gray-600 bg-av-green-s p-2 px-3 rounded-md;
}
.inline-flex {
  display: inline-flex !important;
}

.sn {
  @apply cursor-pointer mr-6;
}
</style>
