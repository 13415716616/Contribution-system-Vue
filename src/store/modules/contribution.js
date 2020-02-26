const contribution = {
  state: {
    manuscriptID: 123
  },

  mutations: {
    SET_MANUSCRIPT_ID: (state, manuscriptID) => {
      state.manuscriptID = manuscriptID
    }
  }
}

export default contribution
