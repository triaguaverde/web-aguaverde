import Parser from '../parser/md_parser.js'
const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

const PAG =
  'natacion-2021-09-27-map-layout-feature-pagina-natacion-body-¿dónde-nadáis-n-nentrenamos-la-natación-en-la-piscina-del-polideportivo-marqués-de-samaranch-en-arganzuela-n-n-img-5-jpg-n-n-n-n-escríbenos-n-nsi-te-interesa-nadar-en-aguaverde-env'
export const state = () => ({
  features: [],
  natacion: null,
})

export const mutations = {
  setFeatures: (state, list) => (state.features = list),
  setNatacion: (state, natacion) => (state.natacion = natacion),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const features = await $content('features').only(['title', 'body']).fetch()
    const natacion = await $content('paginas', 'natacion').fetch()
    console.log('----')
    console.log(natacion)
    await commit('setNatacion', natacion)
    const paginas = await $content('paginas').only().fetch()
    const clean = Parser.parseObject(features)
    await commit('setFeatures', clean)
  },
}
