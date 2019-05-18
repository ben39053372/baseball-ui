<template>
  <div class="row">
    <div class="col">
      <h1>主隊</h1>
      <Team/>
      <div>
        <pitcher/>
      </div>
    </div>
    <div class="col">
      <h2 class="vs">vs</h2>
    </div>
    <div class="col">
      <h1>客隊</h1>
      <Team/>
      <div>
        <pitcher/>
      </div>
    </div>
  </div>
</template>

<script>
import Team from "./Team"
import pitcher from "./pitcher"
export default {
  components: {
    Team,pitcher
  }
};
</script>


<style scoped>
.vs{
  padding-top:50% 
  font-family: fantasy;
}
.row {
  background-color: rgba(255, 255, 255, 0.7);
  height: 460px;
}

.col {
  background: rgba(0%,10%,20%,0.6);
  background-size: 110%;
  color:wheat;
  height: 500px;
  float: left;
  width: 33%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

h2 {
  font-size: 60px; 
}
</style>
