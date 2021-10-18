<template>
  <div class="bg-grad p-6 flex">
    <div
      class="mx-auto my-auto md:grid md:grid-cols-3 md:gap-4 sm:grid-flow-row"
    >
      <div
        v-for="feature in features"
        :key="feature.titulo"
        class="
          max-w-lg
          text-center
          row-span-1
          px-2
          mt-6
          text-white
        "
      >
        <h1 class="m-auto text-2xl md:text-4xl font-bold text-white">
          {{ feature.title }}
        </h1>
        <p class="mt-2 text-xl max-w-sm m-auto text-av-green-dark">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // features: [
      //   {
      //     titulo: 'José Antonio Fanego',
      //     desc: 'Estoy muy contento y motivado de pertenecer a Aguaverde. Cada semana intento que mis compañeros amen un poco más este deporte',
      //   },
      //   {
      //     titulo: 'Pablo García Traba',
      //     desc: 'La filosofía del club encaja con mi forma de ser y así intento transmitirlo en la cancha. ¡Triatlón como filosofía de vida!',
      //   },
      //   {
      //     titulo: 'Pablo García Trdsdsdsaba',
      //     desc: 'La filosofía del club encaja con mi forma de ser y así intento transmitirlo en la cancha. ¡Triatlón como filosofía de vida!',
      //   },
      //   // {
      //   //   titulo: 'Pablo Garasacía Trdsdsdsaba',
      //   //   desc: 'La filosofía del club encaja con mi forma de ser y así intento transmitirlo en la cancha. ¡Triatlón como filosofía de vida!',
      //   // },
      // ],
    }
  },
  computed: {
    features() {
      console.log("-------------------")
      console.log(this.$store.state.features)
      return this.$store.state.features
    },
  }
}
</script>

<style scoped>
.bg-grad {
  background: linear-gradient(180deg, #4dba87, #8fd46a);
  min-height: 300px;
}
</style>
