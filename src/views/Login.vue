<template>
    <div class="flex justify-center">
      <h1 class="font-bold text-xl mt-14">Login</h1>  
    </div>
    
<div class="flex justify-center ">
        <form>
            <input type="text" v-model="email" placeholder="Enter Email" class="border mb-2 px-12 py-1"/><br/>
            <input type="password" v-model="password" placeholder="Enter Password" class="border px-12 py-1" /> <br/>
            <div class="flex justify-between">
                <button class="border p-1 rounded-lg mt-3 bg-green-200 font-semibold shadow" @click="login">Login</button>
                <button  class="border p-1 rounded-lg mt-3 bg-green-200 font-semibold shadow"><router-link to="/sign" >Sign Up</router-link>  </button>
            </div>
            
        </form>
</div>
<div class="mt-4">

</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'login',
    data(){

        return{
            email:'',
            password:''
        }
    },
    methods:{
      async  login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            if(result.status == 200)
            {
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push({name:'home'})
           }
        }
    },  
    mounted(){
        let user =localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'home'})
        }
    }
}
</script>