<template>
  <div>
    <TeamSelector/>
    <Predict/>
  </div>
</template>

<script>
  import TeamSelector from './TeamSelector'
  import Predict from './Predict'
  //import Result from './Result'
  export default {
    components:{
      TeamSelector,Predict
    }
  };
</script>

<style scoped>

  .vs {
    text-align:center;
    vertical-align: middle;
  }
</style>