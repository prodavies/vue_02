<template>
   <v-app>
   <v-main>
     <v-container>
       <v-form ref="form" lazy-validation>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>

          <v-text-field v-model="password" type="password" label="Password" required></v-text-field>

          <v-btn color="primary" @click="loginUser">
           Login
          </v-btn>

           <!-- <span class="ml-4">Don't have account? | </span> <router-link to="/signup">sign up</router-link> -->
        </v-form>
     </v-container>
   </v-main>
 </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      email:"",
      password:""
    }
  },

  methods:{
    loginUser(){
        const form = {

        email:this.email,
        password:this.password

      };

      if(this.email !== "" && this.password !== ""){

        axios.post("http://localhost:8000/api/login",form).then((res)=>{
          console.log(res)
          this.$router.push('/success');
        }).catch(()=>{
            console.log("There is an error during login")
       });

      }else{
        window.alert("all fields required");
      }
    }
  }
}
</script>

<style>

</style>