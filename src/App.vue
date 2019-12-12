<template>
  <div id="app">
    <v-home />
  </div>
</template>

<script>
import home from './views/home/home'
export default {
  components:{
    'v-home':home
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="stylus">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }
</style>
