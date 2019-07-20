<template>
  <div id="app">
    <img alt="Salty logo" src="./assets/Images/logo.jpg">
    <img alt="Salty logo" src="./assets/Images/Finn.jpg">
  </div>
</template>

<script>
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';

export default {
  name: 'app',
  components: {
    About,
    Contact,
    Home
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
