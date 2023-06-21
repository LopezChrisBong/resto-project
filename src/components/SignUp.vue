<template>
<h1 class="font-bold text-xl">Sign Up</h1>

<div class="">
    <form>
            <input type="text" v-model="name" placeholder="Enter Name" class="border mb-2 px-12 py-1" /><br/>
            <input type="text" v-model="email" placeholder="Enter Email" class="border mb-2 px-12 py-1"/><br/>
            <input type="password" v-model="password" placeholder="Enter Password" class="border px-12 py-1" /> <br/>
            <button class="border p-1 rounded-lg mt-3 bg-green-200 font-semibold shadow" @click="signUp">Sign Up</button>
    </form>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
     methods:{
     async signUp()
        {
           let result =await axios.post("http://localhost:3000/user",
           {
            name:this.name,
            email:this.email,
            password: this.password
           });
           console.warn(result);
           if(result.status ==201){
            
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.replace({path:'/home'})
           }
        }
    }
}
</script>

