<template>
  <div class="bg-grad p-6 flex justify-center box-height">
    <div class="my-auto flex flex-wrap py-4 md:py-20">
      <div
        v-for="feature in features"
        :key="feature.titulo"
        class="text-center px-2 md:px-20 text-white my-10 md:my-16 md:w-1/3"
      >
        <h1 class="m-auto text-2xl md:text-4xl font-bold text-white">
          {{ feature.title }}
        </h1>
        <p class="mt-2 text-xl max-w-2xl m-auto text-av-green-dark">
          {{ feature.description }}
        </p>
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
.bg-grad {
  background: linear-gradient(180deg, #4dba87, #8fd46a);
  min-height: 300px;
}

.box-height {
  height: fit-content;
}
</style>
