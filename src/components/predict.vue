<template>
  <div>
    <div class="row">
      <div class="col">
        <p>預測分數: {{scoreA}}分</p>
      </div>
      <div class="col">
        <button @click="postData">預測</button>
      </div>
      <div class="col">
        <p>預測分數 {{scoreB}}分</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods:{
    ...mapActions(['postData'])
  },
  computed:{
    ...mapState([
      'scoreA',
      'scoreB',
    ])
  }

};
</script>



<style scoped>
button {
  margin: 6% 0;
  width: 100px;
  height: 50px;
  border: 2px solid;
  border-color: #cca935f5;
  background-color: #000000;
  color: #cca935f5;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
}

.row {
  background-color: rgba(255, 255, 255, 0.7);
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

p {
  font-size: 30px;
}
</style>

