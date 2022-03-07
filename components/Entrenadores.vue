<template>
  <div class="bg-grad p-6 md:p-32 relative text-center">
    <h1 class="text-2xl md:text-4xl font-bold my-2 mb-24">
      ¿Qué opinan nuestros entrenadores?
    </h1>
    <div class="flex flex-wrap mt-10 content-center">
      <div
        v-for="entrenador in entrenadores"
        :key="entrenador.nombre"
        class="
          bg-white
          rounded-lg
          relative
          text-center
          p-10
          pb-16
          md:w-1/3
          tes-card
          md:m-8
          my-8
          shadow-xl
        "
      >
        <img :src="entrenador.thumbnail" />
        <h1 class="text-2xl md:text-4xl font-bold text-av-darker-morado mb-2">
          {{ entrenador.nombre }}
        </h1>
        <p class="mt-4 text-xl md:text-2xl font-light text-gray-700">
          {{ entrenador.descripcion }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    entrenadores() {
      return this.$store.state.entrenadores
    },
  },
}
</script>

<style scoped>
.bg-grad {
  background: linear-gradient(
    180deg,
    #edf3ff 400px,
    #4f48ad 0,
    #4f48ad 60%,
    #2c2678
  );
  height: fit-content;
}

.card {
  max-height: 350px;
}

.tes-card > img {
  border: 9px solid #fff;
  border-radius: 9999px;
  height: 12rem;
  margin: -4rem auto 0.5rem;
  width: 12rem;
}

.content-center {
  justify-content: center;
}
</style>
