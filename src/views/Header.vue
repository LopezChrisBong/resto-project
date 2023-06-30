<template>
    <div class="mb-12">
        <nav class="shadow mb-5">
    <router-link to="/home" class="hover:bg-sky-700"><button>Home</button></router-link> |
    <router-link to="/about" class="hover:bg-sky-700">About</router-link> |
    <a @click="logout" v-if="this.$store.userIsAuthorized">Logout</a>
  </nav>
   
    </div>
</template>
<script>

export default{
    name:'Header',
    methods:{
        logout(){
             localStorage.clear();
             this.$router.push({path:'/'})
        }
    }
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