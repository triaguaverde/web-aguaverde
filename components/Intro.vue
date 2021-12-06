<template>
  <div class="fondo text-center py-6 text-gray-800 flex">
    <div class="my-auto mx-auto">
      <h1 class="text-2xl md:text-4xl font-bold my-2">Triatlón Aguaverde</h1>
      <div class="h-10 md:h-20">
        <transition name="fade">
          <h1 :key="current" class="text-4xl md:text-6xl font-bold text">
            {{ current }}
          </h1>
        </transition>
      </div>
      <h1 class="text-2xl md:text-4xl font-bold mb-2">
        Tu club de triatlón en Madrid
      </h1>
      <div class="flex mt-4">
        <span class="mx-auto">
          <button class="button text">Hazte Socio</button>
          <a
            class="button text"
            href="https://foro.aguaverde.org/"
            target="_blank"
            >Foro</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: ['Entrenamientos', 'Piscina', 'Todos los niveles'],
      index: 0,
    }
  },
  mounted() {
    window.setInterval(() => {
      this.next()
    }, 2000)
  },
  computed: {
    current() {
      return this.words[this.index]
    },
    selectedSection() {
      return this.$store.state.pageContent[this.selected]
    },
  },
  methods: {
    next() {
      if (this.index === this.words.length - 1) this.index = 0
      else this.index += 1
    },
  },
}
</script>

<style scoped>
.fondo {
  background-image: url('assets/background_white.jpg');
  height: 500px;
}

.fade-enter {
  opacity: 0;
  /* transform: translateY(-20px); */
}

.fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.fade-leave-active {
  opacity: 0;
  /* transform: translateY(20px); */
  transition: all 0.1s ease-in-out;
}

.text:hover {
  background: linear-gradient(180deg, #4dba87, #8fd46a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button {
  @apply border-2 border-solid
              rounded
              p-4
              font-bold m-4 hover:border-av-green-s text-av-green-dark shadow-lg text-xl md:text-2xl;
}
</style>
