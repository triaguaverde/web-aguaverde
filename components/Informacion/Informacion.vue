<template>
  <div class="md:grid md:grid-cols-5 gap-1 content" v-if="selected">
    <div class="h-full bg-av-bg dots-bg p-12 shadow-sm hidden md:block">
      <div v-for="opt in MENU_OPT" :key="opt.title">
        <p class="font-bold text-xl md:text-3xl mb-4 text-av-green-dark">
          {{ opt.title }}
        </p>
        <p
          class="
            text-xl
            my-4
            font-light
            text-gray-600
            hover:text-gray-400
            cursor-pointer
          "
          :class="{ 'text-gray-900 font-bold': selected === sect.section }"
          v-for="sect in opt.sect"
          :key="sect.label"
          @click="selected = sect.section"
        >
          <nuxtLink :to="sect.section" class="option">{{
            sect.label
          }}</nuxtLink>
        </p>
      </div>
    </div>
    <div class="col-span-4 bg-white p-4 md:px-60 md:py-12 mt-1">
      <nuxt-content :document="selectedSection"></nuxt-content>
    </div>
    <div class="md:hidden p-6 green-gd">
      <div v-for="opt in MENU_OPT" :key="opt.title">
        <p
          v-for="sect in opt.sect"
          :key="sect.label"
          :class="{ 'text-white font-bold': selected === sect.section }"
          @click="changeSection(sect.section)"
        >
          {{ sect.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { MENU_OPT, SECTIONS } from '../../constantes/informacion'
export default {
  props: {
    section: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      MENU_OPT,
      SECTIONS,
      selected: null,
    }
  },
  computed: {
    selectedSection() {
      return this.$store.state.pageContent[this.selected]
    },
  },
  created() {
    this.selected = this.section ? SECTIONS[this.section] : this.SECTIONS.info
  },
  methods: {
    changeSection(section) {
      this.selected = section
      let element = document.getElementsByTagName('h1')
      element[0].scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    },
  },
}
</script>

<style>
.content {
  height: 100vh;
}

.title {
  color: #7a9a8a;
}

.dots-bg {
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 12px;
  background-image: url('data:image/svg+xml;utf8,<svg width="13" height="224" viewBox="0 0 13 224" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="13" height="224" fill="black" fill-opacity="0"/> <g opacity="0.1"> <path d="M2.59521 179.789C1.16187 179.789 0 178.635 0 177.211C0 175.786 1.16187 174.632 2.59521 174.632C4.02856 174.632 5.19067 175.786 5.19067 177.211C5.19067 178.635 4.02856 179.789 2.59521 179.789Z" fill="url(%23paint0_linear)"/> <path d="M2.59521 194.526C1.16187 194.526 0 193.372 0 191.947C0 190.523 1.16187 189.368 2.59521 189.368C4.02856 189.368 5.19067 190.523 5.19067 191.947C5.19067 193.372 4.02856 194.526 2.59521 194.526Z" fill="url(%23paint1_linear)"/> <path d="M2.59521 209.263C1.16187 209.263 0 208.109 0 206.684C0 205.26 1.16187 204.105 2.59521 204.105C4.02856 204.105 5.19067 205.26 5.19067 206.684C5.19067 208.109 4.02856 209.263 2.59521 209.263Z" fill="url(%23paint2_linear)"/> <path d="M2.59521 224C1.16187 224 0 222.845 0 221.421C0 219.997 1.16187 218.842 2.59521 218.842C4.02856 218.842 5.19067 219.997 5.19067 221.421C5.19067 222.845 4.02856 224 2.59521 224Z" fill="url(%23paint3_linear)"/> <path d="M2.59521 122.316C1.16187 122.316 0 121.161 0 119.737C0 118.313 1.16187 117.158 2.59521 117.158C4.02856 117.158 5.19067 118.313 5.19067 119.737C5.19067 121.161 4.02856 122.316 2.59521 122.316Z" fill="url(%23paint4_linear)"/> <path d="M2.59521 137.053C1.16187 137.053 0 135.898 0 134.474C0 133.049 1.16187 131.895 2.59521 131.895C4.02856 131.895 5.19067 133.049 5.19067 134.474C5.19067 135.898 4.02856 137.053 2.59521 137.053Z" fill="url(%23paint5_linear)"/> <path d="M2.59521 151.789C1.16187 151.789 0 150.635 0 149.211C0 147.786 1.16187 146.632 2.59521 146.632C4.02856 146.632 5.19067 147.786 5.19067 149.211C5.19067 150.635 4.02856 151.789 2.59521 151.789Z" fill="url(%23paint6_linear)"/> <path d="M2.59521 166.526C1.16187 166.526 0 165.372 0 163.947C0 162.523 1.16187 161.368 2.59521 161.368C4.02856 161.368 5.19067 162.523 5.19067 163.947C5.19067 165.372 4.02856 166.526 2.59521 166.526Z" fill="url(%23paint7_linear)"/> <path d="M2.59521 62.6316C1.16187 62.6316 0 61.4769 0 60.0526C0 58.6283 1.16187 57.4737 2.59521 57.4737C4.02856 57.4737 5.19067 58.6283 5.19067 60.0526C5.19067 61.4769 4.02856 62.6316 2.59521 62.6316Z" fill="url(%23paint8_linear)"/> <path d="M2.59521 77.3684C1.16187 77.3684 0 76.2138 0 74.7895C0 73.3652 1.16187 72.2105 2.59521 72.2105C4.02856 72.2105 5.19067 73.3652 5.19067 74.7895C5.19067 76.2138 4.02856 77.3684 2.59521 77.3684Z" fill="url(%23paint9_linear)"/> <path d="M2.59521 92.1053C1.16187 92.1053 0 90.9506 0 89.5263C0 88.102 1.16187 86.9474 2.59521 86.9474C4.02856 86.9474 5.19067 88.102 5.19067 89.5263C5.19067 90.9506 4.02856 92.1053 2.59521 92.1053Z" fill="url(%23paint10_linear)"/> <path d="M2.59521 106.842C1.16187 106.842 0 105.687 0 104.263C0 102.839 1.16187 101.684 2.59521 101.684C4.02856 101.684 5.19067 102.839 5.19067 104.263C5.19067 105.687 4.02856 106.842 2.59521 106.842Z" fill="url(%23paint11_linear)"/> <path d="M2.59521 5.1579C1.16187 5.1579 0 4.00326 0 2.57895C0 1.15464 1.16187 0 2.59521 0C4.02856 0 5.19067 1.15464 5.19067 2.57895C5.19067 4.00326 4.02856 5.1579 2.59521 5.1579Z" fill="url(%23paint12_linear)"/> <path d="M2.59521 19.8947C1.16187 19.8947 0 18.7401 0 17.3158C0 15.8915 1.16187 14.7368 2.59521 14.7368C4.02856 14.7368 5.19067 15.8915 5.19067 17.3158C5.19067 18.7401 4.02856 19.8947 2.59521 19.8947Z" fill="url(%23paint13_linear)"/> <path d="M2.59521 34.6316C1.16187 34.6316 0 33.4769 0 32.0526C0 30.6283 1.16187 29.4737 2.59521 29.4737C4.02856 29.4737 5.19067 30.6283 5.19067 32.0526C5.19067 33.4769 4.02856 34.6316 2.59521 34.6316Z" fill="url(%23paint14_linear)"/> <path d="M2.59521 49.3684C1.16187 49.3684 0 48.2138 0 46.7895C0 45.3652 1.16187 44.2105 2.59521 44.2105C4.02856 44.2105 5.19067 45.3652 5.19067 46.7895C5.19067 48.2138 4.02856 49.3684 2.59521 49.3684Z" fill="url(%23paint15_linear)"/> </g> <defs> <linearGradient id="paint0_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint1_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint2_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint3_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint4_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint5_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint6_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint7_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint8_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint9_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint10_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint11_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint12_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint13_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint14_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> <linearGradient id="paint15_linear" x1="281" y1="224" x2="285" y2="-190.5" gradientUnits="userSpaceOnUse"> <stop stop-color="%2324724D"/> <stop offset="1" stop-color="white" stop-opacity="0"/> </linearGradient> </defs> </svg>');
}

.green-gd {
  background: linear-gradient(180deg, #4dba87, #8fd46a);
}
</style>
