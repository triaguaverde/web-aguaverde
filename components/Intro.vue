<template>
  <div class="bg-gray-50 px-4 pt-2">
    <transition name="fade">
      <h1
        :key="current"
        class="text-4xl md:text-6xl font-bold text-av-dark-gray m-0"
      >
        {{ current }}
      </h1>
    </transition>
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
  background-image: url('assets/images/running.png');
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

.text,
.text-st:hover {
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
