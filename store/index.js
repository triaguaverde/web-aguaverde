import Parser from '../parser/md_parser.js'

export const state = () => ({
  features: [],
})

export const mutations = {
  setFeatures: (state, list) => (state.features = list),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const features = await $content('features').only(['title', 'body']).fetch()
    const clean = Parser.parseObject(features)
    await commit('setFeatures', clean)
  },
}
