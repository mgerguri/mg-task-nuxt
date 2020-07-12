export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  }
}

export const actions = {
  async userLogin({commit}, payload) {
    const url = `/login`

    const res = await this.$axios.$post(url, payload)

    return res
  },
  async getUserData({commit}) {
    const url = `/users/1`

    const data = await this.$axios.$get(url)

    commit('SET_USER', data)
    return data
  }
}
