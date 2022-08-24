<template>
  <div class="fondo py-6 flex justify-center box-height">
    <div class="my-auto flex flex-wrap py-4 md:py-20 md:justify-around">
      <div
        v-for="feature in features"
        :key="feature.titulo"
        class="
          text-center
          p-4
          px-6
          md:p-6 md:px-8 md:mx-4
          my-10
          w-11/12
          mx-auto
          md:my-16 md:w-1/4
          bg-white
          rounded-lg
          justify-center
          flex
          font-light
          bg-opacity-90
        "
      >
        <div class="m-auto">
          <h1 class="m-auto text-2xl md:text-4xl font-bold text-av-green-s">
            {{ feature.title }}
          </h1>
          <p class="mt-2 text-xl max-w-2xl m-auto text-av-dark-gray">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    features() {
      return this.$store.state.features
    },
  },
}
</script>

<style scoped>
.fondo {
  background-image: url('assets/images/biciEquipo.png');
  background-repeat: no-repeat;
  height: 700px;
  background-size: cover;
}
.bg-gradda {
  background: linear-gradient(180deg, #4dba87, #8fd46a);
}

.box-height {
  height: fit-content;
}
</style>
