<template>
  <div class="bg-av-bg text-center items-center p-6">
    <h1 class="text-2xl md:text-4xl font-bold">Patrocinadores</h1>
    <div class="flex mt-6">
      <div class="mx-auto flex flex-col md:flex-row my-4">
        <a
          v-for="sponsor in patrocinadores"
          :key="sponsor.slug"
          :href="campaignUrl(sponsor.url)"
          target="_blank"
          rel="noopener"
          class="m-4"
          style="width: 140px"
        >
          <img :src="sponsor.thumbnail" :alt="sponsor.slug" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          name: 'Althea Fisioterapia',
          url: 'https://altheafisioterapia.com/',
          logo: require('~/assets/logos/logo_althea.png'),
        },
        {
          name: 'Neovantas',
          url: 'http://www.neovantas.com/home/',
          logo: require('~/assets/logos/logo_neovantas.png'),
        },
      ],
    }
  },
  computed: {
    patrocinadores() {
      return this.$store.state.patrocinadores
    },
  },
  methods: {
    campaignUrl(url) {
      return (
        url + '?utm_source=aguaverde.org&utm_medium=web&utm_campaign=sponsor'
      )
    },
  },
}
</script>
