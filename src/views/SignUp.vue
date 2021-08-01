<template>
 <v-app>
   <v-main>
     <v-container>
       <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            required
          ></v-text-field>

          <v-btn
            color="primary"
            @click="registerUser"
          >
           Sign Up
          </v-btn>

          <span class="ml-4">Do you have account? | </span> <router-link to="/login">Login</router-link>
        </v-form>
     </v-container>
   </v-main>
 </v-app>
  
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email:"",
      name:"",
      password:""
    }
  },

  methods:{

    registerUser(){

      const form = {

        email:this.email,
        name:this.name,
        password:this.password

      };

      if(this.email !== "" && this.name !=="" && this.password !== ""){

        axios.post("http://localhost:8000/api/signup",form).then((res)=>{
          console.log(res)
          this.$router.push('/success');
        }).catch(()=>{
            console.log("There is an error during signup")
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