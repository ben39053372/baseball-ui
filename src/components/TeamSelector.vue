<template>
  <div class="row">
    <div class="col">
      <h1>主隊</h1>
      <Team/>
    </div>
    <div class="col">
      <h2 class="vs">vs</h2>
    </div>
    <div class="col">
      <h1>客隊</h1>
      <Team/>
    </div>
  </div>
</template>

<script>
import Team from "./Team";
export default {
  components: {
    Team
  }
};
</script>


<style scoped>
.row {
  background-color: rgba(255, 255, 255, 0.7);
  height: 460px;
}

.col {
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
