import { PAGINAS } from '~/constantes/ejemplo.js'
import { SECTIONS } from '../constantes/informacion.js'
import Parser from '../parser/md_parser.js'
const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

const PAG =
  'natacion-2021-09-27-map-layout-feature-pagina-natacion-body-¿dónde-nadáis-n-nentrenamos-la-natación-en-la-piscina-del-polideportivo-marqués-de-samaranch-en-arganzuela-n-n-img-5-jpg-n-n-n-n-escríbenos-n-nsi-te-interesa-nadar-en-aguaverde-env'
export const state = () => ({
  features: [],
  natacion: null,
  pageContent: {},
})

export const mutations = {
  setFeatures: (state, list) => (state.features = list),
  setNatacion: (state, natacion) => (state.natacion = natacion),
  setPageContent: (state, pageContent) => (state.pageContent = pageContent),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const content = {}
    for (const page in SECTIONS) {
      const p = SECTIONS[page]
      content[p] = await $content('paginas', p).fetch()
    }
    const features =  await $content('features').fetch()
    console.log("!!!!!!")
    console.log(features)
    await commit('setPageContent', content)
  },
}
