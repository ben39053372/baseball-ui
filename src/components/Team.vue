<template>
  <div class='slide'>
    <div>
      <p>{{ NameList[Index] }}</p>
      <img :src="List[Index]">
    </div>

    <a class="prev" v-on:click="left">&#10094;</a>
    <a class="next" v-on:click="right">&#10095;</a>
  </div>
</template>

<script>
import lamigo from "../../static/lamigo.png";
import uni_lions from "../../static/uni-lions.png";
import Guardians from "../../static/Guardians.png";
import CTB from "../../static/ChinaTrust_Brothers.png";

export default {
  data() {
    return {
      Index: 1,
      List: [lamigo, uni_lions, Guardians, CTB],
      NameList: ["LAMIGO桃猿", "統一7-ELEVEn 獅", "富邦悍將", "中信兄弟"]
    };
  },
  methods: {
    left() {
      if (this.Index == 0) {
        this.Index = 3;
      } else {
        this.Index -= 1;
      }
      console.log("left");
    },
    right() {
      if (this.Index == 3) {
        this.Index = 0;
      } else {
        this.Index += 1;
      }
      console.log("right");
    }
  }
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

</style>