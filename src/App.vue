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
    Main,
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body{
    margin:0px;
    background: url('../static/background.jpg') fixed no-repeat center;
    background-size: cover;
}
</style>
