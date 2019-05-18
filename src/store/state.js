import lamigo from "../../static/lamigo.png";
import uni_lions from "../../static/uni-lions.png";
import Guardians from "../../static/Guardians.png";
import CTB from "../../static/ChinaTrust_Brothers.png";

const state = {
    //PitcherList line1-4 : Lamigo, Eleven, Fubon, Brother
    PitcherList: [
        [{player: '游朝惟'}, {player: '尼克斯'}, {player: '王溢正'}, {player: '李茲'}, {player: '王躍霖'}, {player: '黃子鵬'}, {player: '史博威'}, {player: '吳丞哲'}, {player: '林柏佑'}, {player: '賴智垣'}, {player: '翁瑋均'}],
        [{player: '陳韻文'}, {player: '江辰晏'}, {player: '潘威倫'}, {player: '劉軒荅'}, {player: '瑞安'}, {player: '王玉譜'}, {player: '邱浩鈞'}, {player: '王鏡銘'}, {player: '傅于剛'}, {player: '奧斯丁'}, {player: '施子謙'}, {player: '林其緯'}],
        [{player: '伍鐸'}, {player: '林晨樺'}, {player: '陳鴻文'}, {player: '倪福德'}, {player: '林克謙'}, {player: '羅國華'}, {player: '張竣龍'}, {player: '羅力'}, {player: '索沙'}, {player: '陳品學'}, {player: '陳仕朋'}, {player: '林羿豪'}],
        [{player: '官大元'}, {player: '鄭凱文'}, {player: '江忠城'}, {player: '李振昌'}, {player: '鄭佳彥'}, {player: '蔡齊哲'}, {player: '艾迪頓'}, {player: '王奕凱'}, {player: '王鴻程'}, {player: '黃恩賜'}, {player: '謝榮豪'}, {player: '萊福力'}]
      ],
    //隊伍名稱List
    NameList: ["LAMIGO桃猿", "統一7-ELEVEn 獅", "富邦悍將", "中信兄弟"],
    //圖片連結List
    ImgList: [lamigo, uni_lions, Guardians, CTB],
    //主隊
    HomeIndex:1,
    //客隊
    AwayIndex:1,
    //主隊投手Index
    HomePitch:0,
    //客隊投手Index
    AwayPitch:0,
    HomePitcher:'',
    AwayPitcher:'',
    scoreA:0,
    scoreB:0,
    
}

export default state