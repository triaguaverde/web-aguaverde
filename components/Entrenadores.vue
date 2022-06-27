<template>
  <div class="relative bg-av-dark-gray w-full left-0 overflow-hidden">
    <div class="absolute -left-10">
      <img
        src="../assets/images/plantas/planta1.svg"
        width="180px"
        class="mr-8"
      />
    </div>

    <div class="p-6 md:py-28 relative text-center">
      <h1 class="text-2xl md:text-4xl font-bold mb-24 text-av-bg">
        NUESTROS ENTRENADORES
      </h1>
      <div class="flex flex-wrap mt-10 content-center">
        <div class="absolute right-0 bottom-0">
          <img
            src="../assets/images/plantas/planta2.svg"
            width="180px"
            class="mr-8"
          />
        </div>
        <div
          v-for="entrenador in entrenadores"
          :key="entrenador.nombre"
          class="
            bg-av-light-gray
            rounded-xl
            relative
            text-center
            p-10
            pb-16
            md:w-2/5
            tes-card
            m-8
            shadow-xl
          "
        >
          <img :src="entrenador.thumbnail" />
          <h1 class="text-2xl md:text-4xl font-bold text-av-green-s mb-2 mt-4">
            {{ entrenador.nombre }}
          </h1>
          <p class="mt-4 text-xl md:text-2xl font-light text-white">
            {{ entrenador.descripcion }}
          </p>
        </div>
      </div>
      <div class="flex">
        <p class="max-w-xl mx-auto av-light-gray">
          En el Aguaverde únicamente contamos con entrenadores de alto prestigio
          nacional y con titulaciones requeridas por la Federación Española de
          Triatlón
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
  border: 10px solid #282a31;
  border-radius: 9999px;
  height: 12rem;
  margin: -8rem auto 0.5rem;
  width: 12rem;
}

.content-center {
  justify-content: center;
}
</style>
