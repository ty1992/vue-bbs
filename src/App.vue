<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/MyHeader'
import myFooter from '@/components/MyFooter'
export default {
  name: 'App',
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style>
  html {
    background-color: #DDDDDD;
    user-select: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
  }
  body,div,span,a,p,ul,li {
    margin: 0;
    padding: 0;
  }
</style>
