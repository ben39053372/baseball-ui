import state from './state'

const mutations = {
  HomeLeft() {
    if (state.HomeIndex == 0) {
      state.HomeIndex = 3;
    } else {
      state.HomeIndex -= 1;
    }
  },
  HomeRight() {
    if (state.HomeIndex == 3) {
      state.HomeIndex = 0;
    } else {
      state.HomeIndex += 1;
    }
  },
  AwayLeft() {
    if (state.AwayIndex == 0) {
      state.AwayIndex = 3;
    } else {
      state.AwayIndex -= 1;
    }
  },
  AwayRight() {
    if (state.AwayIndex == 3) {
      state.AwayIndex = 0;
    } else {
      state.AwayIndex += 1;
    }

  },
  AwayPitcherChange(state, message){
    state.AwayPitcher = message
  },
  HomePitcherChange(state, message){
    state.HomePitcher = message
  },
  ClearAwayPitcher(state) {
    state.AwayPitcher = '';
  },
  ClearHomePitcher(state) {
    state.HomePitcher = '';
  },
  pushScoreA(state,scoreA){
    state.scoreA = scoreA
  },
  pushScoreB(state,scoreB){
    state.scoreB = scoreB
  }
}

export default mutations