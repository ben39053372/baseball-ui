<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  float:left;
  background-image: url('../static/background.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
