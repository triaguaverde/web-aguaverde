<template>
  <div class="flex flex-col bg-grad">
    <div
      class="
        bg-white
        my-auto
        box
        rounded-md
        shadow-md
        mx-auto
        px-4
        py-8
        md:max-w-4xl md:pt-20
        text-center
        fit-h
      "
    >
      <h1 class="mx-auto text-xl md:text-3xl mb-0">Contacta con nosotros</h1>
      <img width="200" src="../assets/logos/eusebia.png" />
      <div class="mx-auto text-center mt-2 md:mt-6 w-full">
        <p class="text-gray-800 text-lg md:text-2xl mt-10">Escríbenos a</p>
        <p
          class="
            gradient
            text-xl
            lg:text-4xl
            md:text-3xl
            font-bold
            cursor-pointer
            md:pb-2 md:mb-0
          "
          @click="sendMail"
        >
          triatlon@aguaverde.org
        </p>
        <p class="text-gray-800 text-lg md:text-3xl">
          o manda un WhatsApp al
        </p>
        <p class="gradient text-xl md:text-5xl font-bold">632 098 456</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMail() {
      window.open('mailto:triatlon@aguaverde.org')
    },
  },
}
</script>

<style>
.gradient {
  background: linear-gradient(180deg, #4dba87, #8fd46a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-grad {
  background: linear-gradient(
    180deg,
    #edf3ff 400px,
    #4f48ad 0,
    #4f48ad 60%,
    #2c2678
  );
  height: 100vh;
}

.box {
  height: 60%;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
}

.text-purp {
  color: #4f48ad;
}

.fit-h {
  height: fit-content;
}
</style>
