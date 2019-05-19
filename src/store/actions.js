import state from './state'
//call mutations
const actions = {

    //主隊左按鈕功能
    HomeLeftAction(context) {
        context.commit('HomeLeft');
        context.commit('ClearHomePitcher');
    },

    //主隊右按鈕功能
    HomeRightAction(context) {
        context.commit('HomeRight');
        context.commit('ClearHomePitcher');
    },

    //客隊左按鈕功能
    AwayLeftAction(context) {
        context.commit('AwayLeft');
        context.commit('ClearAwayPitcher');
    },

    //客隊右按鈕功能
    AwayRightAction(context) {
        context.commit('AwayRight');
        context.commit('ClearAwayPitcher');
    },

    //更新主隊投手選擇
    HomePitcherChangeAction(context) {
        context.commit('AwayPitcherChange');
    },

    //更新客隊投手選擇
    AwayPitcherChangeAction(context) {
        context.commit('AwayPitcherChange');
    },

    //預測按鈕功能
    postData(context) {
        var url = 'http://118.163.149.163:2793/api/Predict'
        var data = {
            "teamA": state.postNameList[state.HomeIndex],
            "teamB": state.postNameList[state.AwayIndex],
            "pitcherA": state.HomePitcher,
            "pitcherB": state.AwayPitcher
        };
        var formData = new FormData();
        for (var name in data) {
            formData.append(name, data[name]);
        }

        //檢驗輸入合不合理
        if (state.HomeIndex === state.AwayIndex && state.HomePitcher === '' || state.AwayPitcher === '') {
            //不合理
            alert("請正確選擇!")
        } else {
            //合理
            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .catch(error => {
                    // eslint-disable-next-line
                    console.error("伺服器錯誤:",error)
                    alert(error)
                })
                .then(res => res.json())
                
                
                .then(res => {
                    // eslint-disable-next-line
                    console.log('succes',res)
                    return res
                })
                .then(res => {
                    context.commit('pushScoreA', res.scoreA);
                    context.commit('pushScoreB', res.scoreB);
                    alert("預測成功!");
                })
                
        }


    }

}

export default actions
