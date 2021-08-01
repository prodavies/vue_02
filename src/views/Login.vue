<template>
   <v-app>
   <v-main>
     <v-container>
       <v-form
          ref="form"
          lazy-validation
        >
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
            @click="loginUser"
          >
           Login
          </v-btn>

           <span class="ml-4">Don't have account? | </span> <router-link to="/signup">sign up</router-link>
        </v-form>
     </v-container>
   </v-main>
 </v-app>
</template>

<script>
export default {
  data(){
    return {
      email:"",
      password:""
    }
  },

  methods:{
    loginUser(){
         if(this.email !== "" && this.name !==""){
        this.$router.push('/signup')
      }else{
        window.alert("all fields required");
      }
    }
  }
}
</script>

<style>

</style>