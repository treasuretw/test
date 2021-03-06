const state = {
  CurrentTime: 0, // current position (in seconds) of the audio/video playback
  Duration: NaN,
  Volume: 0.2,
};

const getters = {
};

const mutations = {
  CurrentTime(state, t) {
    state.CurrentTime = t;
  },
  Duration(state, t) {
    state.Duration = t;
  },
  Volume(state, v) {
    state.Volume = v;
  },
};

const actions = {
};

export default {
  state,
  mutations,
  actions,
  getters,
};
