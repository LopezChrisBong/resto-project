<template>
    <SignUp />
    
</template>
<script>
import { Options, Vue } from 'vue-class-component';
import SignUp from '@/components/SignUp.vue'; 

@Options({
  components: {
    SignUp,
  },
})
export default class Sign extends Vue {
}
</script>