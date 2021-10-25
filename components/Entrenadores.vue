<template>
  <div class="bg-grad p-6 md:p-32 relative text-center">
    <h1 class="text-2xl md:text-4xl font-bold my-2 mb-24">
      ¿Qué opinan nuestros entrenadores?
    </h1>
    <div class="flex flex-col md:flex-row mt-10">
      <div
        v-for="entrenador in entrenadores"
        :key="entrenador.nombre"
        class="
          bg-white
          rounded-lg
          mx-auto
          my-8
          md:my-auto
          relative
          text-center
          p-10
          pb-16
          md:w-1/3
          tes-card
          shadow-xl
        "
      >
        <img :src="entrenador.image" />
        <h1 class="text-2xl md:text-4xl font-bold text-av-darker-morado mb-2">
          {{ entrenador.nombre }}
        </h1>
        <p class="mt-4 text-xl md:text-2xl font-light text-gray-700">
          {{ entrenador.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entrenadores: [
        {
          nombre: 'José Antonio Fanego',
          desc: 'Estoy muy contento y motivado de pertenecer a Aguaverde. Cada semana intento que mis compañeros amen un poco más este deporte',
          image: require('../assets/entrenadores/fanego.jpg'),
        },
        {
          nombre: 'Pablo García Traba',
          desc: 'La filosofía del club encaja con mi forma de ser y así intento transmitirlo en la cancha. ¡Triatlón como filosofía de vida!',
          image: require('../assets/entrenadores/loko.jpg'),
        },
      ],
    }
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
  min-height: 800px;
  @media only screen and (max-width: 600px) {
    /* height: 800px; */
  }
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
</style>
