<template>
    <h1 class="font-bold text-xl mt-14">Login</h1>
<div class="">
    <form>
            <input type="text" v-model="email" placeholder="Enter Email" class="border mb-2 px-12 py-1"/><br/>
            <input type="password" v-model="password" placeholder="Enter Password" class="border px-12 py-1" /> <br/>
            <button class="border p-1 rounded-lg mt-3 bg-green-200 font-semibold shadow" @click="login">Login</button>
    </form>
</div>
<div class="mt-4">
<router-link to="/sign" >Sign Up</router-link>
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
            if(result.status == 200 && result.data.legnth > 0)
            {
            localStorage.setItem("user-info",JSON.stringify(result.data[0]))
            this.$router.push({path:'/home'})
           }
        }
    },  
    mounted(){
        let user =localStorage.getItem('user-info');
        if(user){
            this.$router.push({path:'/home'})
        }
    }
}
</script>