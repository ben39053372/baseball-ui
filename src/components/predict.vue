<template>
  <div class="row">
    <div class="col">
      <p>預測結果</p>
      
    </div>
    <div class="col">
      <button>預測</button>
    </div>
    <div class="col">
      <p>預測結果</p>
    </div>
  </div>
</template>


<style scoped>
  button{
    width:100px;
    height:50px;
    border: 2px solid;
    border-color:#cca935f5;
    background-color:#000000;
    color: #cca935f5;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto ;
  }

  .row {
    background-color: rgba(255, 255, 255, 0.7);
  }

  .col {
    float: left;
    width: 33%;
  }

  .row:after{
    content: "";
    display: table;
    clear: both;
  }

  p{
    font-size: 30px;
  }
</style>

