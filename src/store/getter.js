import state from './state'

//get state context
const getters = {
    getHomeIndex(){
        return state.HomeIndex
    },
    getAwayIndex(){
        return state.AwayIndex
    },
    getHomePitcherList(){
        return state.PitcherList[state.HomeIndex]
    },
    getAwayPitcherList(){
        return state.PitcherList[state.AwayIndex]
    },
    


}

export default getters