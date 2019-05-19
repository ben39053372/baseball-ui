<template>
  <div class="row">
    <div class="col">
      <h1>主隊</h1>
      <HomeTeam/>

      <HomePitcher/>
    </div>
    <div class="col">
      <h2 class="vs">vs</h2>
    </div>
    <div class="col">
      <h1>客隊</h1>
      <AwayTeam/>
      <AwayPitcher/>
    </div>
  </div>
</template>

<script>
import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";

import HomePitcher from "./HomePitcher";
import AwayPitcher from "./AwayPitcher";
export default {
  components: {
    HomeTeam,
    AwayTeam,
    HomePitcher,
    AwayPitcher
  }
};
</script>


<style scoped>
.vs {
  margin: 40% 0;
  font-family: fantasy;
  color: #ece377;
  font-size: 60px;
}
.row {
  background-color: rgba(71, 71, 71, 0.7);
  height: 460px;
}

.col {
  background-size: 110%;
  height: 460px;
  float: left;
  width: 33.333%;
  color: white; 
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>
