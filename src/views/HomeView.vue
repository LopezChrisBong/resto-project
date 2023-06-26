<template>
  <div class="home">
    <HomeBase />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeBase from '@/components/HomeBase.vue'; // @ is an alias to /src

@Options({
  components: {
    HomeBase,
    
  },
})
export default class HomeView extends Vue {}
</script>
