<template>
  <div class="fondo shadow-sm h-24 p-4 px-4 md:px-10 items-center">
    <div class="flex">
      <div class="flex-1"></div>
      <div class="hidden md:inline-flex mt-0">
        <nuxtLink to="/info" class="option">Info</nuxtLink>
        <nuxtLink to="/contacto" class="option">Contacto</nuxtLink>
        <nuxtLink to="/blog" class="option">Noticias</nuxtLink>
        <a href="https://foro.aguaverde.org/" target="_blank" class="option"
          >Foro</a
        >
        <a
          class="ml-4"
          href="https://www.instagram.com/triatlonaguaverde/"
          target="_blank"
        >
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
    <div class="mt-20 relative">
      <div class="w-full text-center h-28">
        <div
          class="cursor-pointer absolute -top-40 mx-auto"
          style="position: absolute; left: 45%"
        >
          <img src="../assets/logos/eusebia.png" width="180" class="mr-8" />
        </div>
        <div
          class="text-5xl font-bold text-white mx-auto absolute top-8"
          style="position: absolute; left: 33%"
        >
          TRIATLÓN AGUAVERDE
        </div>
      </div>
      <div class="flex">
        <Intro class="mx-auto h-20" />
      </div>
      <div class="flex">
        <div class="text-2xl font-bold text-white mx-auto mt-8">
          TU CLUB DE TRIATLÓN EN MADRID
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.fondo {
  background-image: url('assets/images/running.png');
  background-repeat: no-repeat;
  height: 700px;
  background-size: cover;
}
.opt-mb {
  @apply mx-3 text-sm md:text-xl text-white hover:text-gray-900 my-auto cursor-pointer;
}
.inline-flex {
  display: inline-flex !important;
}

.sn {
  @apply cursor-pointer mr-6;
}
</style>
