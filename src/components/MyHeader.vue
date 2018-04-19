<template>
  <div class="my-header">
    <router-link :to="{name:'PostList'}">
      <img src="~assets/images/cnodejs_light.svg"/>
    </router-link>
    <span><a href="#">关于</a></span>
  </div>
</template>

<script>
    export default {
        name: "my-header"
    }
</script>

<style scoped lang="less">
  .my-header {
    background:#5a5555 ;
    height: 50px;
    a {
      text-decoration: none;
      color: #cbc9c9;
    }
    img {
      max-width: 120px;
      margin-left: 50px;
      margin-top: 10px;
    }
    span {
      float: right;
      margin-right: 50px;
      margin-top: 10px;
    }
  }

</style>
