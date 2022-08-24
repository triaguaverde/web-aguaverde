<template>
  <div
    class="shadow-sm px-0 items-center"
    :class="{ 'h-24 fondo': !hideImage }"
  >
    <div class="flex bg-av-dark-gray pt-3 md:pb-3">
      <div v-if="!hideImage" class="md:flex-1"></div>
      <div v-if="hideImage" class="hidden md:flex-1">
        <nuxtLink to="/" class=""
          ><img
            src="../assets/logos/eusebia.png"
            width="50"
            class="left-0 m-0 ml-3 mb-1"
        /></nuxtLink>
      </div>

      <div class="md:inline-flex mt-0 mb-0">
        <div class="bg-white justify-center text-center flex" v-if="hideImage">
          <img
            src="../assets/logos/logo.jpg"
            width="120"
            class="mx-auto my-2"
          />
        </div>
        <div class="hidden md:block self-center">
          <nuxtLink to="/info" class="option">Info</nuxtLink>
          <nuxtLink to="/contacto" class="option">Contacto</nuxtLink>
          <nuxtLink to="/blog" class="option">Noticias</nuxtLink>
          <nuxtLink to="/mujer" class="option">Mujer</nuxtLink>
          <nuxtLink to="/cal" class="option">Calendario</nuxtLink>
          <a href="https://foro.aguaverde.org/" target="_blank" class="option"
            >Foro</a
          >
        </div>
        <div class="md:hidden p-4">
          <div class="flex flex-wrap justify-center">
            <div class="mov-button">
              <nuxtLink to="/info" class="text-av-gray">Info</nuxtLink>
            </div>
            <div class="mov-button">
              <nuxtLink to="/contacto" class="text-av-gray">Contacto</nuxtLink>
            </div>
            <div class="mov-button">
              <nuxtLink to="/blog" class="text-av-gray">Noticias</nuxtLink>
            </div>
            <div class="mov-button">
              <nuxtLink to="/mujer" class="text-av-gray">Mujer</nuxtLink>
            </div>
            <div class="mov-button">
              <nuxtLink to="/cal" class="text-av-gray">Calendario</nuxtLink>
            </div>
          </div>
        </div>
        <div class="hidden md:flex">
          <a
            class="ml-4"
            href="https://www.instagram.com/triatlonaguaverde/"
            target="_blank"
          >
            <img src="../assets/logos/instagram.png" width="35" class="sn"
          /></a>
          <a href="https://www.facebook.com/triaguaverde/" target="_blank"
            ><img
              src="../assets/logos/facebook.png"
              width="35"
              class="sn bg-white rounded-lg"
          /></a>
          <a href="https://twitter.com/triaguaverde" target="_blank"
            ><img src="../assets/logos/twitter.svg" width="35" class="sn"
          /></a>
        </div>
      </div>
    </div>
    <div v-if="!hideImage" class="mt-6 md:mt-40 relative">
      <div class="block md:hidden">
        <img src="../assets/logos/eusebia.png" width="100" class="m-auto" />
        <div
          class="
            text-2xl
            md:text-5xl
            font-bold
            text-white
            mx-auto
            top-8
            text-center
            mb-4
          "
        >
          TRIATLÓN AGUAVERDE
        </div>
      </div>
      <div class="hidden md:block w-full text-center h-28">
        <div
          class="cursor-pointer absolute -top-40 mx-auto"
          style="position: absolute; left: 45%"
        >
          <img
            src="../assets/logos/eusebia.png"
            width="180"
            class="m-auto md:mr-8"
          />
        </div>
        <div
          class="
            text-2xl
            md:text-5xl
            font-bold
            text-white
            mx-auto
            absolute
            top-8
          "
          style="position: absolute; left: 33%"
        >
          TRIATLÓN AGUAVERDE
        </div>
      </div>
      <div class="flex">
        <Intro class="mx-auto h-20" />
      </div>
      <div class="flex">
        <div class="text-lg md:text-2xl font-bold text-white mx-auto mt-8">
          TU CLUB DE TRIATLÓN EN MADRID
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hideImage: Boolean,
  },
}
</script>

<style scoped>
.fondo {
  background-image: url('assets/images/running.png');
  background-repeat: no-repeat;
  height: 700px;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .fondo {
    height: 600px;
    background-position: center;
    background-size: auto;
  }
}

.mov-button {
  @apply p-1 px-6 bg-gray-50 rounded mx-1 mb-2;
}

.option {
  @apply text-white md:text-lg align-middle mx-6 mt-3 mb-4 font-light;
}

.opt-mb {
  @apply mx-3 text-sm md:text-xl text-white hover:text-gray-900 my-auto cursor-pointer;
}
.inline-flex {
  display: inline-flex !important;
}

.sn {
  @apply cursor-pointer mr-6  my-1;
}
</style>
