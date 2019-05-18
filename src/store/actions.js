import state from './state'
//call mutations
const actions = {
    HomeLeftAction(context) {
        context.commit('HomeLeft');
        context.commit('ClearHomePitcher');
    },
    HomeRightAction(context) {
        context.commit('HomeRight');
        context.commit('ClearHomePitcher');
    },
    AwayLeftAction(context) {
        context.commit('AwayLeft');
        context.commit('ClearAwayPitcher');
    },
    AwayRightAction(context) {
        context.commit('AwayRight');
        context.commit('ClearAwayPitcher');
    },
    HomePitcherChangeAction(context) {
        context.commit('AwayPitcherChange');
    },
    AwayPitcherChangeAction(context) {
        context.commit('AwayPitcherChange');
    },
    postData(context) {
        context.commit('ClearAwayPitcher');
        context.commit('ClearHomePitcher');
        var url = '118.163.149.163:2793/api/Predict'
        var data = {
            teamA: state.NameList[state.HomeIndex],
            teamB: state.NameList[state.AwayIndex],
            pitcherA: state.HomePitcher,
            pitcherB: state.AwayPitcher
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.join())
        // eslint-disable-next-line
            .catch(error => console.error('error:',error))
            .then(res => {
                context.commit('pushScoreA', res.scoreA);
                context.commit('pushScoreB', res.scoreB);
            })
    }

}

export default actions
