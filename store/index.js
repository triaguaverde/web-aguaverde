import { SECTIONS } from '../constantes/informacion.js'

export const state = () => ({
  features: [],
  pageContent: {},
  entrenadores: [],
  patrocinadores: [],
  posts: [],
  mujerposts: []
})

export const mutations = {
  setFeatures: (state, list) => (state.features = list),
  setEntrenadores: (state, entrenadores) => (state.entrenadores = entrenadores),
  setPatrocinadores: (state, patrocinadores) =>
    (state.patrocinadores = patrocinadores),
  setPageContent: (state, pageContent) => (state.pageContent = pageContent),
  setPosts: (state, posts) => (state.posts = posts),
  setMujerposts: (state, mujerposts) => (state.mujerposts = mujerposts),
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
    const posts = await $content('posts').fetch()
    const mujerposts = $content('mujerposts')? await $content('mujerposts')?.fetch() : null

    await commit('setFeatures', features)
    await commit('setEntrenadores', entrenadores)
    await commit('setPatrocinadores', patrocinadores)
    await commit('setPageContent', content)
    await commit('setPosts', posts)
    await commit('setMujerposts', mujerposts??[])
  },
}
