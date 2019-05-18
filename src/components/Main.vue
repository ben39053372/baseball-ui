<template>
  <div class="all">
    <div class="row">
      <div class="col">
        <h1>主隊</h1>
        <br>
        <Team/>
        <div>
          <pitcher/>
        </div>
      </div>
      <div class="col">
        <h1 class='vs'><br><br><br>vs</h1>
      </div>
      <div class="col">
        <h1>客隊</h1>
        <br>
        <Team/>
        <div>
          <pitcher/>
        </div>
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
import pitcher from './pitcher.vue'
export default {
  components: {
    Team,
    pitcher
  }
}
</script>
<style scoped>
  .vs{
    font-size: 50px;
    font-family: fantasy;
  }
  .col{
     background: rgba(0%,10%,20%,0.6);
    background-size: 110%;
    color:wheat;
    float:left;
    width:33%;
    height: 500px;
  }
  button{
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 1px solid #a12727;
    border-radius: 8px;
    background: #ff4a4a;
    background: -webkit-gradient(linear, left top, left bottom, from(#ff4a4a), to(#992727));
    background: -moz-linear-gradient(top, #ff4a4a, #992727);
    background: linear-gradient(to bottom, #ff4a4a, #992727);
    -webkit-box-shadow: #ff5959 0px 0px 40px 0px;
    -moz-box-shadow: #ff5959 0px 0px 40px 0px;
    box-shadow: #ff5959 0px 0px 40px 0px;
    text-shadow: #591717 1px 1px 1px;
    font: normal normal bold 20px arial;
    color: #ffffff;
    width:100px;
    height:50px;
  }
</style>
