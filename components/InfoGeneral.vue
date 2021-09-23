<template>
  <div>
    <div class="md:text-6xl font-bold text-av-green-dark">
      {{ PAGINAS.titulo }}
    </div>
    <div
      v-for="area in PAGINAS.areas"
      :key="area.titulo"
      class="my-4"
      :class="{ 'mt-8': area.titulo }"
    >
      <p class="md:text-4xl font-bold sub">{{ area.titulo }}</p>
      <p class="text-xl mt-2 text-light text-gray-600 leading-9">
        {{ area.textoAntesFoto }}
      </p>
      <p>{{ area.img }}</p>
      <p class="text-xl mt-2 text-light text-gray-600 leading-9">
        {{ area.textoDespues }}
      </p>
    </div>
  </div>
</template>

<script>
import { PAGINAS } from '../constantes/ejemplo'
export default {
  data() {
    return {
      PAGINAS,
    }
  },
}
</script>

<style>
.sub {
  color: #7a9a8a;
}
</style>
