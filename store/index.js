import { PAGINAS } from '~/constantes/ejemplo.js'
import { SECTIONS } from '../constantes/informacion.js'
import Parser from '../parser/md_parser.js'
const fs = require('fs')
const parseMarkdown = require('front-matter-markdown')

export const state = () => ({
  features: [],
  natacion: null,
  pageContent: {},
  entrenadores: [],
  patrocinadores: [],
})

export const mutations = {
  setFeatures: (state, list) => (state.features = list),
  setNatacion: (state, natacion) => (state.natacion = natacion),
  setEntrenadores: (state, entrenadores) => (state.entrenadores = entrenadores),
  setPatrocinadores: (state, patrocinadores) =>
    (state.patrocinadores = patrocinadores),
  setPageContent: (state, pageContent) => (state.pageContent = pageContent),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const content = {}
    for (const page in SECTIONS) {
      const p = SECTIONS[page]
      content[p] = await $content('paginas', p).fetch()
    }
    const features = await $content('features').fetch()
    const entrenadores = await $content('entrenadores').fetch()
    const patrocinadores = await $content('patrocinadores').fetch()

    await commit('setFeatures', features)
    await commit('setEntrenadores', entrenadores)
    await commit('setPatrocinadores', patrocinadores)
    await commit('setPageContent', content)
  },
}
