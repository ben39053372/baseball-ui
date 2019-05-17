<template>
  <div>
    <TeamSelector/>
    <Predict/>
    <Result/>
  </div>
</template>

<script>
  import TeamSelector from './TeamSelector'
  import Predict from './predict'
  import Result from './Result'
  export default {
    components:{
      TeamSelector,Predict,Result
    }
  };
</script>

<style scoped>

  .vs {
    text-align:center;
    vertical-align: middle;
  }
</style>