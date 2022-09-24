<template>
  <div id="av-app">
    <div class="main-container">
      <div>
        <Patrocinadores />
        <Entrenadores />
        <Features />
        <Ventajas />
      </div>
      <div
        class="
          footers
          bg-av-dark-gray
          pt-10
          pb-6
          text-white text-center text-xs
          md:text-sm
        "
      >
        Hecho por
        <a href="//twitter.com/manuelregidor" class="font-bold"
          >Manuel Regidor</a
        >
        y
        <a
          class="font-bold"
          href="https://www.linkedin.com/in/daniela-quesada-a79708a7/"
          >Daniela Quesada</a
        >
      </div>
    </div>
    <Cookies class="sticky bottom-0 w-full" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
