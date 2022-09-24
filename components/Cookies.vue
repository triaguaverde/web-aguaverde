<template>
  <div
    v-if="showCookies"
    class="bg-white p-4 md:h-32 absolute z-10 w-full border border-t-2"
  >
    <div class="mx-2 md:mx-12 md:flex">
      <div class="text-sm md:text-lg mx-auto text-center">
        <div class="text-av-green-s font-bold">
          Los triatletas nos comemos las cookies, pero aqui tienes que
          aceptarlas
        </div>
        <div class="text-sm md:text-lg">
          Esta página web utiliza cookies para analizar de forma anónima y
          estadística el uso que haces de la web, mejorar los contenidos y tu
          experiencia de navegación
        </div>
      </div>
      <div
        @click="saveRead"
        class="
          w-28
          mx-auto
          mt-4
          md:mt-0
          my-auto
          bg-av-green-s
          px-4
          py-2
          rounded-md
          cursor-pointer
        "
      >
        ACEPTAR
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      read: false,
    }
  },
  beforeMount() {
    const alreadyRead = localStorage.getItem('av-cookies')
    if (alreadyRead) this.read = true
  },
  computed: {
    showCookies() {
      return !this.read
    },
  },
  methods: {
    saveRead() {
      localStorage.setItem('av-cookies', 'true')
      this.read = true
    },
  },
}
</script>

<style></style>
