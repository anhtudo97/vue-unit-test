<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button :text="text" />
    <Vuex />
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";
import Vuex from "./components/Vuex/Vuex.vue";

export default {
  name: "App",
  data() {
    return {
      text: "hihi",
    };
  },
  components: {
    Button,
    Vuex,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
