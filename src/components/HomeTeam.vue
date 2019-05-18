<template>
  <div class='slide'>
    <div>
      <p class='team'>{{ NameList[HomeIndex] }}</p>
      <img class='team-img' :src="ImgList[HomeIndex]">
    </div>

    <a class="prev" v-on:click="HomeLeftAction">&#10094;</a>
    <a class="next" v-on:click="HomeRightAction">&#10095;</a>
  </div>
</template>

<script>
import lamigo from "../../static/lamigo.png";
import uni_lions from "../../static/uni-lions.png";
import Guardians from "../../static/Guardians.png";
import CTB from "../../static/ChinaTrust_Brothers.png";
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      ImgList: [lamigo, uni_lions, Guardians, CTB],
      NameList: ["LAMIGO桃猿", "統一7-ELEVEn 獅", "富邦悍將", "中信兄弟"]
    };
  },
  methods: {
    ...mapActions([
      'HomeLeftAction',
      'HomeRightAction'
    ])
  },
  computed:{
    ...mapState([
      'HomeIndex'
    ])
  },
  
};
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
  background-color: rgba(255,255,255,0.4);
}
.slide {
  max-width: 800px;
  position: relative;
  margin: auto;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
  background-color: rgba(255,255,255,0.4);
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
  background-color: rgba(255,255,255,0.4);
}

.team {
  font-size: 35px;
}

</style>