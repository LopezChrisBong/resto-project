<template>
    <div class="mb-12">
        <nav class="shadow mb-5">
    <router-link to="/home"><button>Home</button></router-link> |
    <router-link to="/about">About</router-link>
  </nav>
   
    </div>
</template>
<script>

export default{

}
</script>
<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>