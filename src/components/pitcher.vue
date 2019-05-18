<template>
  <div class='slide'>
    <Select v-model="model15" style="width:200px" placeholder="先發投手">
        <Option v-for="item in Lamigo" :value="item.player" :key="item.player">{{ item.player }}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Lamigo: [{player: '游朝惟'}, {player: '尼克斯'}, {player: '王溢正'}, {player: '李茲'}, {player: '王躍霖'}, {player: '黃子鵬'}, {player: '史博威'}, {player: '吳丞哲'}, {player: '林柏佑'}, {player: '賴智垣'}, {player: '翁瑋均'}],
      Eleven: [{player: '陳韻文'}, {player: '江辰晏'}, {player: '潘威倫'}, {player: '劉軒荅'}, {player: '瑞安'}, {player: '王玉譜'}, {player: '邱浩鈞'}, {player: '王鏡銘'}, {player: '傅于剛'}, {player: '奧斯丁'}, {player: '施子謙'}, {player: '林其緯'}],
      Fubon: [{player: '伍鐸'}, {player: '林晨樺'}, {player: '陳鴻文'}, {player: '倪福德'}, {player: '林克謙'}, {player: '羅國華'}, {player: '張竣龍'}, {player: '羅力'}, {player: '索沙'}, {player: '陳品學'}, {player: '陳仕朋'}, {player: '林羿豪'}],
      brother: [{player: '官大元'}, {player: '鄭凱文'}, {player: '江忠城'}, {player: '李振昌'}, {player: '鄭佳彥'}, {player: '蔡齊哲'}, {player: '艾迪頓'}, {player: '王奕凱'}, {player: '王鴻程'}, {player: '黃恩賜'}, {player: '謝榮豪'}, {player: '萊福力'}]
    }
  }
}
</script>

<style scoped>
.prev,.next {
  cursor: pointer;
  position: absolute;
  top:0;
  width: auto;
  padding: 16px;
  color: black;
  font-size: 25px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.slide {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}
.name{
    font-size: 35px;
}
</style>
