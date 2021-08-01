<template>
  <v-app>
      <v-main>
          <v-container>
              <h3>You have successfully login</h3> | <v-btn @click="logoutUser()">LOGOUT</v-btn>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
    methods:{
        logoutUser(){
            axios.get("http://localhost:8000/api/logout").then(()=>{
                this.$router.push('/')
            }).catch(()=>{
                alert("There is an error during logout")
            })
        }
    }
}
</script>

<style>

</style>