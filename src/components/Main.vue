<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>主隊</h1>
        <Team/>
      </div>
      <div class="col">
        <h1 class='vs'>vs</h1>
      </div>
      <div class="col">
        <h1>客隊</h1>
        <Team/>
      </div>
    </div>
    <div class="row">
      <div class='col'>
        <p>預測結果</p>
      </div>
      <div class='col'>
        <button>預測</button>
      </div>
      <div class='col'>
        <p>預測結果</p>
      </div>
    </div>
  </div>
</template>

<script>
import Team from './Team.vue'
export default {
  components:{
    Team
  }
};
</script>

<style scoped>
  .col{
    float:left;
    width:33%;
    height: 500px;
  }
  button{
    width:100px;
    height:50px;
  }
</style>